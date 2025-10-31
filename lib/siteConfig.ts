export const SITE_URL = 'https://www.oktaforce.com.br';
export const WHATSAPP_NUMBER = '5511999999999';
export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá, gostaria de conhecer a portaria remota da OKTAFORCE.'
);
export const WHATSAPP_LINK = `https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20a%20portaria%20remota%20da%20OKTAFORCE.`;

export const CONTACT_EMAIL = 'contato@oktaforce.com.br';
export const CONTACT_PHONE = '(11) 3274-1040';
export const CONTACT_ADDRESS = 'Av. Brigadeiro Faria Lima, 2369, cj. 1102 - Jardim Paulistano, São Paulo/SP';

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/oktaforce',
  linkedin: 'https://www.linkedin.com/company/oktaforce',
  youtube: 'https://www.youtube.com/@oktaforce'
} as const;

export const OG_IMAGE = process.env.NEXT_PUBLIC_OG_IMAGE ?? `${SITE_URL}/og.jpg`;
