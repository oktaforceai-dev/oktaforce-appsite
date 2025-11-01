// app/page.tsx
const ROOT_LOCALE = 'pt';

export const dynamic = 'force-static';

export default function RootPage() {
  const target = `/${ROOT_LOCALE}`;

  return (
    <html lang={ROOT_LOCALE}>
      <head>
        {/* redireciona em ambiente estático (Hostinger) */}
        <meta httpEquiv="refresh" content={`0;url=${target}`} />
        <title>Redirecionando...</title>
      </head>
      <body className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <p>
          Redirecionando para{' '}
          <a href={target} className="underline">
            {target}
          </a>
          ...
        </p>
      </body>
    </html>
  );
}
