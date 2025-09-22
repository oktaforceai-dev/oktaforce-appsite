# Oktaforce — Coming Soon (pt-BR / EN)

Projeto Next.js 15 com App Router, alternância de idioma (PT/EN) e modo escuro/claro. Pronto para Hostinger (Node.js).

## Como rodar localmente
```bash
npm i
npm run dev
```

## Build de produção
```bash
npm run build
npm start
```

## Deploy na Hostinger (Node.js / hPanel)
1) No hPanel, adicione o domínio `oktaforce.com.br` à sua hospedagem e ative SSL gratuito.
2) Em **Sites > Gerenciar > Node.js**, crie um novo aplicativo:
   - **Diretório**: `oktaforce-coming-soon`
   - **Arquivo inicial**: `server.js`
   - **Versão do Node**: 18+
3) Envie os arquivos (via **Deploy from Git** ou **File Manager/SSH**):
   - Rode `npm ci` ou `npm i`
   - Rode `npm run build`
4) Inicie o app no hPanel. O proxy do Node mapeará o domínio para a porta do app (a variável `PORT` é fornecida pela plataforma).
5) Se usar Git, configure build automático no hPanel com o comando `npm ci && npm run build`.

> Edição rápida: textos/idiomas em `app/i18n.ts`; layout em `app/page.tsx`.