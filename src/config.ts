/** Site-wide constants for Multiple Industries Ltd. */
export const SITE_NAME = 'Multiple Industries';
export const SITE_LEGAL_NAME = 'Multiple Industries Limited';
export const SITE_URL = 'https://multipleindustries.com';
export const SITE_TAGLINE = 'Quality Building Materials You Can Trust Since 1991';
export const SITE_DESCRIPTION =
  'Multiple Industries Ltd, Kampala: manufacturer of UPVC, HDPE and PP-R pipes, drinking straws and household plastics, and supplier of building materials, irrigation systems and automotive spare parts since 1991.';

/**
 * WhatsApp number used by every "Send by WhatsApp" action, in international
 * format without "+". TODO: confirm with the client. This is currently the
 * 0752 914 900 sales hotline and may not be a WhatsApp account.
 */
export const WHATSAPP_NUMBER = '256752914900';

export const EMAIL_SALES = 'sales@multipleindustries.com';
export const EMAIL_RESPONSE = 'response@multipleindustries.com';
export const EMAIL_SHOWROOM = 'showroomhq@multipleindustries.com';

export const PHONE_MAIN = { label: '+256 414 236021', tel: '+256414236021' };
export const PHONE_MAIN_2 = { label: '+256 414 236022', tel: '+256414236022' };
export const HOTLINES = [
  { label: '0752 914 900', tel: '+256752914900' },
  { label: '0752 914 046', tel: '+256752914046' },
];

export const OFFICES = [
  {
    id: 'head-office',
    name: 'Head Office & Factory',
    street: 'Plot 714/715, 8th Street Industrial Area',
    box: 'P.O. Box 20166',
    city: 'Kampala',
    phones: [PHONE_MAIN, PHONE_MAIN_2],
    phoneLabel: 'Hotline +256 414 236021/2',
    emails: [EMAIL_RESPONSE, EMAIL_SALES],
    map: 'https://www.google.com/maps/search/?api=1&query=Multiple+Industries+8th+Street+Industrial+Area+Kampala',
  },
  {
    id: 'showroom',
    name: 'Sales Office & Showroom',
    street: 'Plot 13/23, 8th Street Industrial Area',
    box: 'P.O. Box 20166',
    city: 'Kampala',
    phones: [PHONE_MAIN, ...HOTLINES],
    phoneLabel: 'Land line +256 414 236021/2 · Hotlines 0752 914 900, 0752 914 046',
    emails: [EMAIL_SHOWROOM],
    map: 'https://www.google.com/maps/search/?api=1&query=Multiple+Industries+Showroom+8th+Street+Industrial+Area+Kampala',
  },
] as const;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/products/', label: 'Products' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

/** Prefilled email link. */
export const mailto = (to: string, subject: string, body = '') =>
  `mailto:${to}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;

export const whatsapp = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
