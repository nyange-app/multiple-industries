/** Site-wide constants and verbatim company facts. */
export const SITE_NAME = 'Multiple Industries';
export const LEGAL_NAME = 'Multiple Industries Limited';
export const SITE_URL = 'https://multipleindustries.com';
export const TAGLINE = 'Quality Building Materials You Can Trust Since 1991';
export const SITE_DESCRIPTION =
  'Multiple Industries Ltd, Kampala: Uganda manufacturer of UPVC, HDPE and PP-R water pipes, drinking straws and household plastics, and a one stop supplier of building materials, irrigation systems and automotive spare parts since 1991.';

export const INTRO =
  'Multiple Industries has always tried to offer a one stop service with diversified products covering the entire range of building materials, full range of domestic household products, automotive spare parts and transport services in the East African Region.';

export const MISSION =
  'Having a competent, experienced and motivated team, and continual interactions with our customers and other interested parties, we will manufacture and sell top quality plastic products, and supply reliable building materials, selected automotive products, irrigation systems to satisfy and exceed customer requirements and increase shareholder value while maintaining a sustainable environment.';

export const VISION =
  'To be the most preferred one stop source for quality building materials, general household items, selected automotive, irrigation and water management systems.';

export const QUALITY_POLICY =
  'We manufacture and supply quality UPVC, HDPE and PP-R pipes in all sizes, drinking straws, domestic plastics and quality irrigation systems and building materials as a single stop for building and construction, and aim to be the market leader in Uganda and the East African Community through a Quality Management System in accordance with ISO 9001:2015.';

export const OFFICES = [
  {
    id: 'head-office',
    name: 'Head Office & Factory',
    street: 'Plot 714/715, 8th Street Industrial Area',
    pobox: 'P.O. Box 20166',
    city: 'Kampala',
    phones: [
      { label: 'Hotline', display: '+256 414 236021', tel: '+256414236021' },
      { label: 'Hotline', display: '+256 414 236022', tel: '+256414236022' },
    ],
    emails: ['response@multipleindustries.com', 'sales@multipleindustries.com'],
    // TODO: confirm exact map pin.
    map: 'https://www.google.com/maps/search/?api=1&query=Multiple+Industries+8th+Street+Industrial+Area+Kampala',
  },
  {
    id: 'showroom',
    name: 'Sales Office & Showroom',
    street: 'Plot 13/23, 8th Street Industrial Area',
    pobox: 'P.O. Box 20166',
    city: 'Kampala',
    phones: [
      { label: 'Land line', display: '+256 414 236021', tel: '+256414236021' },
      { label: 'Hotline', display: '0752 914 900', tel: '+256752914900' },
      { label: 'Hotline', display: '0752 914 046', tel: '+256752914046' },
    ],
    emails: ['showroomhq@multipleindustries.com'],
    map: 'https://www.google.com/maps/search/?api=1&query=Multiple+Industries+Showroom+8th+Street+Industrial+Area+Kampala',
  },
] as const;

export const PRIMARY_PHONE = { display: '+256 414 236021', tel: '+256414236021' };
export const SALES_EMAIL = 'sales@multipleindustries.com';

export const NAV = [
  { href: '/products/', label: 'Products' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
] as const;

// TODO: confirm brand / partner list with the client and supply logo files.
export const BRANDS = [
  'Wavin', 'Franke', 'Vado', 'Fras-le', 'Conmix', 'Tegra', 'Feroof', 'Smartframe',
  'Polynum', 'Apex', 'PEX', 'Veer',
];
