import localFont from 'next/font/local';

export const montserrat = localFont({
  src: [
    { path: './fonts/files/Montserrat-VariableFont_wght.woff2', style: 'normal', weight: '100 900' },
    { path: './fonts/files/Montserrat-Italic-VariableFont_wght.woff2', style: 'italic', weight: '100 900' }
  ],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true
});

export const roboto = localFont({
  src: [
    { path: './fonts/files/Roboto-VariableFont_wdth,wght.woff2', style: 'normal', weight: '100 900' },
    { path: './fonts/files/Roboto-Italic-VariableFont_wdth,wght.woff2', style: 'italic', weight: '100 900' }
  ],
  variable: '--font-roboto',
  display: 'swap',
  preload: true
});