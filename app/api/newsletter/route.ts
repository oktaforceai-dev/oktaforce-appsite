import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabaseClient';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return NextResponse.json(
      { error: 'Supabase credentials are missing. Configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.' },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  const email = body?.email as string | undefined;
  const locale = body?.locale as string | undefined;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const { error } = await supabase.from('newsletter_subscriptions').insert({ email, locale });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
