import { cache } from 'react';
import { getSupabaseClient } from './supabaseClient';
import { getTranslations } from 'next-intl/server';

export type BlogPostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  thumbnail?: string | null;
  tags: string[];
  publishedAt: string;
};

export type BlogPost = BlogPostSummary & {
  content?: string;
};

interface ListOptions {
  limit?: number;
  category?: string;
  search?: string;
}

export const listBlogPosts = cache(async (locale: string, { limit = 9, category, search }: ListOptions = {}): Promise<BlogPostSummary[]> => {
  const supabase = getSupabaseClient();

  if (!supabase) {
    const fallback = await getFallbackPosts(locale);
    return filterFallback(fallback, { category, search }).slice(0, limit);
  }

  let query = supabase
    .from('posts')
    .select('slug,title,excerpt,thumbnail_url,tags,published_at,locale,published')
    .eq('published', true)
    .eq('locale', locale)
    .order('published_at', { ascending: false })
    .limit(limit);

  if (search) {
    query = query.or(`title.ilike.%${search}%,excerpt.ilike.%${search}%`);
  }

  if (category) {
    query = query.contains('tags', [category]);
  }

  const { data, error } = await query;

  if (error || !data) {
    const fallback = await getFallbackPosts(locale);
    return filterFallback(fallback, { category, search }).slice(0, limit);
  }

  return data.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    thumbnail: post.thumbnail_url,
    tags: post.tags ?? [],
    publishedAt: post.published_at
  }));
});

export const getBlogPostBySlug = cache(async (locale: string, slug: string): Promise<BlogPost | null> => {
  const supabase = getSupabaseClient();

  if (!supabase) {
    const fallback = await getFallbackPosts(locale);
    const post = fallback.find((item) => item.slug === slug);
    if (!post) return null;
    return { ...post, content: buildFallbackContent(locale, post) };
  }

  const { data, error } = await supabase
    .from('posts')
    .select('slug,title,excerpt,content,thumbnail_url,tags,published_at,locale,published')
    .eq('slug', slug)
    .eq('locale', locale)
    .eq('published', true)
    .single();

  if (error || !data) {
    const fallback = await getFallbackPosts(locale);
    const post = fallback.find((item) => item.slug === slug);
    if (!post) return null;
    return { ...post, content: buildFallbackContent(locale, post) };
  }

  return {
    slug: data.slug,
    title: data.title,
    excerpt: data.excerpt,
    content: data.content ?? '',
    thumbnail: data.thumbnail_url,
    tags: data.tags ?? [],
    publishedAt: data.published_at
  };
});

async function getFallbackPosts(locale: string): Promise<BlogPostSummary[]> {
  const t = await getTranslations({ locale, namespace: 'blog' });
  const posts = t.raw('fallbackPosts') as Array<{
    slug: string;
    title: string;
    excerpt: string;
    thumbnail: string;
    tags: string[];
    publishedAt: string;
  }>;
  return posts;
}

function filterFallback(posts: BlogPostSummary[], { category, search }: ListOptions) {
  return posts.filter((post) => {
    const matchesCategory = category ? post.tags.includes(category) : true;
    const matchesSearch = search
      ? [post.title, post.excerpt].some((field) => field.toLowerCase().includes(search.toLowerCase()))
      : true;
    return matchesCategory && matchesSearch;
  });
}

function buildFallbackContent(locale: string, post: BlogPostSummary) {
  const intro = locale === 'pt'
    ? 'Este conteúdo faz parte do nosso acervo exclusivo. Entre em contato para receber o material completo e o plano de implantação recomendado.'
    : 'This article is part of our exclusive knowledge base. Contact our team to receive the full content and recommended rollout plan.';
  return `${post.excerpt}\n\n${intro}`;
}
