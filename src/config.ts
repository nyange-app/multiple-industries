/** Site-wide constants. */
export const SITE_NAME = 'Multiple Industries';
export const LEGAL_NAME = 'Multiple Industries Limited';
export const SITE_URL = 'https://multipleindustries.com';
export const TAGLINE = 'Quality Building Materials You Can Trust Since 1991';
export const SITE_DESCRIPTION =
  'Multiple Industries Limited, Kampala: manufacturer of UPVC, HDPE and PP-R pipes, drinking straws and household plastics, and supplier of building materials, irrigation systems and automotive parts across East Africa since 1991.';
export const FOUNDED = '1991';

export const INTRO =
  'Multiple Industries has always tried to offer a one stop service with diversified products covering the entire range of building materials, full range of domestic household products, automotive spare parts and transport services in the East African Region.';

export const MISSION =
  'Having a competent, experienced and motivated team, and continual interactions with our customers and other interested parties, we will manufacture and sell top quality plastic products, and supply reliable building materials, selected automotive products, irrigation systems to satisfy and exceed customer requirements and increase shareholder value while maintaining a sustainable environment.';

export const VISION =
  'To be the most preferred one stop source for quality building materials, general household items, selected automotive, irrigation and water management systems.';

export const HOTLINE = { label: '+256 414 236021/2', tel: '+256414236021' };

export const OFFICES = [
  {
    id: 'head-office',
    name: 'Head Office & Factory',
    street: 'Plot 714/715, 8th Street Industrial Area',
    po: 'P.O. Box 20166',
    city: 'Kampala',
    phones: [{ label: 'Hotline +256 414 236021/2', tel: '+256414236021' }],
    emails: ['response@multipleindustries.com', 'sales@multipleindustries.com'],
  },
  {
    id: 'showroom',
    name: 'Sales Office & Showroom',
    street: 'Plot 13/23, 8th Street Industrial Area',
    po: '',
    city: 'Kampala',
    phones: [
      { label: 'Land line +256 414 236021/2', tel: '+256414236021' },
      { label: 'Hotline 0752 914 900', tel: '+256752914900' },
      { label: 'Hotline 0752 914 046', tel: '+256752914046' },
    ],
    emails: ['showroomhq@multipleindustries.com'],
  },
] as const;

export const NAV = [
  { href: '/products/', label: 'Products' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
] as const;

/** TODO: confirm the brand/partner list with Multiple Industries (taken from old asset filenames). */
export const BRANDS = [
  'Wavin',
  'Franke',
  'Vado',
  'Fras-le',
  'Conmix',
  'Tegra',
  'Feroof',
  'Smartframe',
  'Polynum',
  'Apex',
  'PEX',
  'Veer',
] as const;
