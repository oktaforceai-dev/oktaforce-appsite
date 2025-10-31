import {CONTACT_EMAIL} from '@/lib/siteConfig';

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  condominium?: string;
  units?: string;
  message?: string;
  locale?: string;
};

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL;

function buildMessage(lead: Required<LeadPayload>, submittedAt: string) {
  const lines = [
    'Novo contato recebido pelo site OKTAFORCE:',
    '',
    `Nome: ${lead.name}`,
    `E-mail: ${lead.email}`,
    `Telefone: ${lead.phone}`,
    `Condominio: ${lead.condominium}`,
    `Numero de unidades: ${lead.units}`,
    `Idioma da interface: ${lead.locale}`,
    '',
    'Mensagem:',
    lead.message || '(sem mensagem adicional)',
    '',
    `Recebido em: ${submittedAt}`
  ];

  return lines.join('\n');
}

function sanitizeLead(payload: LeadPayload): Required<LeadPayload> {
  const normalize = (value?: string) => {
    const trimmed = value?.trim();
    return trimmed && trimmed.length > 0 ? trimmed : 'Nao informado';
  };

  return {
    name: normalize(payload.name),
    email: normalize(payload.email),
    phone: normalize(payload.phone),
    condominium: normalize(payload.condominium),
    units: normalize(payload.units),
    message: payload.message?.trim() ?? '',
    locale: payload.locale?.trim() || 'pt'
  };
}

export async function sendLeadNotificationEmail(payload: LeadPayload) {
  const lead = sanitizeLead(payload);
  const submittedAt = new Date().toISOString();

  if (!RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  if (!RESEND_FROM_EMAIL) {
    throw new Error('RESEND_FROM_EMAIL is not configured');
  }

  const text = buildMessage(lead, submittedAt);

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: RESEND_FROM_EMAIL,
      to: CONTACT_EMAIL,
      subject: 'Novo contato via site OKTAFORCE',
      reply_to: lead.email !== 'Nao informado' ? lead.email : undefined,
      text
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to send email: ${response.status} ${response.statusText} - ${errorText}`);
  }
}
