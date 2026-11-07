/** Site-wide constants. */
export const SITE_NAME = 'Multiple Industries Limited';
export const SITE_SHORT = 'Multiple Industries';
export const SITE_URL = 'https://multipleindustries.com';
export const SITE_TAGLINE = 'Quality Building Materials You Can Trust Since 1991';
export const SITE_DESCRIPTION =
  'Multiple Industries Limited, Kampala: manufacturer of UPVC, HDPE and PP-R pipes, drinking straws and domestic plasticware, and supplier of building materials, irrigation systems and automotive spare parts across East Africa since 1991.';
export const FOUNDED = 1991;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/products/', label: 'Products' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
] as const;

export const OFFICES = [
  {
    id: 'head-office',
    name: 'Head Office & Factory',
    street: 'Plot 714/715, 8th Street Industrial Area',
    postal: 'P.O. Box 20166',
    city: 'Kampala',
    phones: [
      { label: 'Hotline', display: '+256 414 236021', tel: '+256414236021' },
      { label: 'Hotline', display: '+256 414 236022', tel: '+256414236022' },
    ],
    emails: ['response@multipleindustries.com', 'sales@multipleindustries.com'],
  },
  {
    id: 'showroom',
    name: 'Sales Office & Showroom',
    street: 'Plot 13/23, 8th Street Industrial Area',
    postal: '',
    city: 'Kampala',
    phones: [
      { label: 'Land line', display: '+256 414 236021/2', tel: '+256414236021' },
      { label: 'Hotline', display: '0752 914 900', tel: '+256752914900' },
      { label: 'Hotline', display: '0752 914 046', tel: '+256752914046' },
    ],
    emails: ['showroomhq@multipleindustries.com'],
  },
] as const;

export const PRIMARY_TEL = { display: '+256 414 236021', tel: '+256414236021' };
export const SALES_EMAIL = 'sales@multipleindustries.com';

/** TODO: confirm with client — names taken from old-site asset filenames. */
export const BRANDS = [
  'Wavin', 'Franke', 'Vado', 'Fras-le', 'Conmix', 'Tegra', 'Feroof', 'Smartframe',
  'Polynum', 'Apex', 'PEX', 'Hanksugi', 'Hengst', 'Veer',
];
