// middleware.ts
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // tudo menos /api, _next, _vercel e QUALQUER coisa com ponto (arquivos)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
