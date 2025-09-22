import {SITE_URL} from '@/lib/siteConfig';

export function BreadcrumbJsonLd({
  items
}: {
  items: Array<{name: string; url: string}>;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`
    }))
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />;
}
