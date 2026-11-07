/** Site-wide constants. Company facts are taken verbatim from the brief. */
export const SITE_NAME = 'Multiple Industries';
export const LEGAL_NAME = 'Multiple Industries Limited';
export const SITE_URL = 'https://multipleindustries.com';
export const TAGLINE = 'Quality Building Materials You Can Trust Since 1991';
export const SITE_DESCRIPTION =
  'Multiple Industries Ltd, Kampala: manufacturer of UPVC, HDPE and PP-R water pipes, drinking straws and household plastics, and supplier of building materials, irrigation systems and automotive spare parts in Uganda and East Africa since 1991.';
export const FOUNDED = 1991;

export const INTRO =
  'Multiple Industries has always tried to offer a one stop service with diversified products covering the entire range of building materials, full range of domestic household products, automotive spare parts and transport services in the East African Region.';

export const MISSION =
  'Having a competent, experienced and motivated team, and continual interactions with our customers and other interested parties, we will manufacture and sell top quality plastic products, and supply reliable building materials, selected automotive products, irrigation systems to satisfy and exceed customer requirements and increase shareholder value while maintaining a sustainable environment.';

export const VISION =
  'To be the most preferred one stop source for quality building materials, general household items, selected automotive, irrigation and water management systems.';

export const QUALITY_POLICY =
  'We manufacture and supply quality UPVC, HDPE and PP-R pipes in all sizes, drinking straws, domestic plastics and quality irrigation systems and building materials as a single stop for building and construction, positioning ourselves as market leader in Uganda and the East African Community through a Quality Management System in accordance with ISO 9001:2015.';

export interface Phone {
  label: string;
  display: string;
  tel: string;
}

export const HEAD_OFFICE = {
  name: 'Head Office & Factory',
  street: 'Plot 714/715, 8th Street Industrial Area',
  box: 'P.O. Box 20166',
  city: 'Kampala',
  country: 'Uganda',
  phones: [{ label: 'Hotline', display: '+256 414 236021/2', tel: '+256414236021' }] as Phone[],
  emails: ['response@multipleindustries.com', 'sales@multipleindustries.com'],
  // TODO: confirm exact map pin.
  map: 'https://www.google.com/maps/search/?api=1&query=Plot+714+8th+Street+Industrial+Area+Kampala',
};

export const SHOWROOM = {
  name: 'Sales Office & Showroom',
  street: 'Plot 13/23, 8th Street Industrial Area',
  box: '',
  city: 'Kampala',
  country: 'Uganda',
  phones: [
    { label: 'Land line', display: '+256 414 236021/2', tel: '+256414236021' },
    { label: 'Hotline', display: '0752 914 900', tel: '+256752914900' },
    { label: 'Hotline', display: '0752 914 046', tel: '+256752914046' },
  ] as Phone[],
  emails: ['showroomhq@multipleindustries.com'],
  // TODO: confirm exact map pin.
  map: 'https://www.google.com/maps/search/?api=1&query=Plot+13+8th+Street+Industrial+Area+Kampala',
};

export const PRIMARY_PHONE = HEAD_OFFICE.phones[0];
export const SALES_HOTLINE = SHOWROOM.phones[1];
export const SALES_EMAIL = 'sales@multipleindustries.com';

/**
 * Brand / partner names seen in old asset filenames. TODO: confirm with client and replace with logos.
 * ("Gutters", "Batteries" and "Trailers" also appeared in filenames but read as product lines, not brands.)
 */
export const BRANDS = [
  'Wavin', 'Franke', 'Vado', 'Fras-le', 'Conmix', 'Tegra',
  'Feroof', 'Smartframe', 'Polynum', 'Apex', 'PEX', 'Veer',
];

export const NAV = [
  { href: '/products/', label: 'Products' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];
