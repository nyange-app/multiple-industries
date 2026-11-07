/** Site-wide constants. */
export const SITE_NAME = 'Multiple Industries';
export const SITE_LEGAL = 'Multiple Industries Limited';
export const SITE_URL = 'https://multipleindustries.com';
export const SITE_DESCRIPTION =
  'Multiple Industries Limited, Kampala: leading manufacturer of UPVC, HDPE and PP-R plastic pipes, drinking straws and household plastics. Quality building materials you can trust since 1991.';
export const TAGLINE = 'Quality Building Materials You Can Trust Since 1991';

export const CONTACT = {
  hq: {
    name: 'Head Office & Factory',
    address: 'Plot 714/715, 8th Street Industrial Area, P.O. Box 20166, Kampala, Uganda',
    phones: [{ label: '+256 414 236021/2', href: '+256414236021' }],
    emails: ['response@multipleindustries.com', 'sales@multipleindustries.com'],
  },
  showroom: {
    name: 'Sales Office & Showroom',
    address: 'Plot 13/23, 8th Street Industrial Area, Kampala, Uganda',
    phones: [
      { label: '+256 414 236021/2 (land line)', href: '+256414236021' },
      { label: '0752 914 900', href: '+256752914900' },
      { label: '0752 914 046', href: '+256752914046' },
    ],
    emails: ['showroomhq@multipleindustries.com'],
  },
  callHref: 'tel:+256414236021',
  // TODO: confirm a WhatsApp-enabled number with the client.
  whatsappHref: 'https://wa.me/256752914900',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Multiple+Industries+Plot+714+8th+Street+Industrial+Area+Kampala',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products/water-management', label: 'Products' },
  { href: '/contact', label: 'Contact' },
];
