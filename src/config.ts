/** Site-wide constants (facts from the redesign brief — do not embellish). */
export const SITE_NAME = 'Multiple Industries';
export const LEGAL_NAME = 'Multiple Industries Limited';
export const SITE_URL = 'https://multipleindustries.com';
export const TAGLINE = 'Quality Building Materials You Can Trust Since 1991';
export const SITE_DESCRIPTION =
  'Multiple Industries Limited, Kampala: manufacturer of UPVC, HDPE and PP-R water pipes, drinking straws and household plastics, and supplier of building materials, automotive spare parts and irrigation systems across East Africa since 1991.';

export const INTRO =
  'Multiple Industries has always tried to offer a one stop service with diversified products covering the entire range of building materials, full range of domestic household products, automotive spare parts and transport services in the East African Region.';

export const MISSION =
  'Having a competent, experienced and motivated team, and continual interactions with our customers and other interested parties, we will manufacture and sell top quality plastic products, and supply reliable building materials, selected automotive products, irrigation systems to satisfy and exceed customer requirements and increase shareholder value while maintaining a sustainable environment.';

export const VISION =
  'To be the most preferred one stop source for quality building materials, general household items, selected automotive, irrigation and water management systems.';

export const QUALITY_POLICY =
  'We manufacture and supply quality UPVC, HDPE and PP-R pipes in all sizes, drinking straws, domestic plastics and quality irrigation systems and building materials as a single stop for building and construction — positioning ourselves as market leader in Uganda and the East African Community through a Quality Management System in accordance with ISO 9001:2015.';

export const OFFICES = {
  head: {
    label: 'Head Office & Factory',
    street: 'Plot 714/715, 8th Street Industrial Area',
    pobox: 'P.O. Box 20166',
    city: 'Kampala',
    country: 'Uganda',
    phones: [{ label: 'Hotline', display: '+256 414 236021/2', tel: '+256414236021' }],
    emails: ['response@multipleindustries.com', 'sales@multipleindustries.com'],
  },
  showroom: {
    label: 'Sales Office & Showroom',
    street: 'Plot 13/23, 8th Street Industrial Area',
    pobox: '',
    city: 'Kampala',
    country: 'Uganda',
    phones: [
      { label: 'Land line', display: '+256 414 236021/2', tel: '+256414236021' },
      { label: 'Hotline', display: '0752 914 900', tel: '+256752914900' },
      { label: 'Hotline', display: '0752 914 046', tel: '+256752914046' },
    ],
    emails: ['showroomhq@multipleindustries.com'],
  },
} as const;

export const PRIMARY_TEL = '+256414236021';
export const PRIMARY_TEL_DISPLAY = '+256 414 236021';
export const SALES_EMAIL = 'sales@multipleindustries.com';

export const NAV = [
  { href: '/products/', label: 'Products' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];
