export interface Category {
  slug: string;
  name: string;
  short: string;
  intro: string;
  icon: string; // inline svg inner markup, 24x24 stroke icon
  products: { name: string; note: string }[];
  /** bento span classes on the home grid */
  span: string;
}

// TODO: product lists are placeholders derived from the old site copy; confirm ranges and sizes with the client.
export const categories: Category[] = [
  {
    slug: 'water-management',
    name: 'Water Management',
    short: 'UPVC, HDPE and PP-R pipes in all sizes, manufactured in Kampala.',
    intro:
      'Multiple Industries manufactures UPVC, HDPE and PP-R water pipes in all sizes at our Kampala factory, under a Quality Management System in accordance with ISO 9001:2015.',
    icon: '<path d="M12 3s6 6.2 6 10.5A6 6 0 0 1 6 13.5C6 9.2 12 3 12 3Z"/><path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5"/>',
    span: 'md:col-span-2 md:row-span-2',
    products: [
      { name: 'UPVC pressure pipes', note: 'TODO: sizes and pressure classes' },
      { name: 'HDPE pipes', note: 'TODO: sizes and pressure classes' },
      { name: 'PP-R hot and cold water pipes', note: 'TODO: sizes' },
      { name: 'Fittings and accessories', note: 'TODO: range' },
      { name: 'Water tanks', note: 'TODO: confirm availability' },
      { name: 'Rainwater gutters', note: 'TODO: profiles and colours' },
    ],
  },
  {
    slug: 'indoor-outdoor-plumbing',
    name: 'Indoor & Outdoor Plumbing',
    short: 'Pipes, fittings and gutters for indoor and outdoor plumbing.',
    intro: 'Indoor and outdoor plumbing systems, from soil and waste lines to rainwater gutters.',
    icon: '<path d="M4 8h8a4 4 0 0 1 4 4v8"/><path d="M2 6v4M16 20h4M12 6V4h4"/>',
    span: 'md:col-span-2',
    products: [
      { name: 'Soil and waste pipes', note: 'TODO: sizes' },
      { name: 'Rainwater gutters', note: 'TODO: profiles' },
      { name: 'Valves and fittings', note: 'TODO: range' },
    ],
  },
  {
    slug: 'bathroom-kitchen-solutions',
    name: 'Bathroom & Kitchen Solutions',
    short: 'Kitchen and bathroom fixtures, with partner brands.',
    intro: 'Kitchen and bathroom solutions from our showroom, featuring partner brands.',
    icon: '<path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z"/><path d="M6 12V6a2 2 0 0 1 4 0M7 19l-1 2M17 19l1 2"/>',
    span: '',
    products: [
      { name: 'Sinks and taps', note: 'TODO: brands and range' },
      { name: 'Bathroom fittings', note: 'TODO: brands and range' },
    ],
  },
  {
    slug: 'building-materials',
    name: 'Building Materials',
    short: 'Roofing, steel frame trusses and concrete products.',
    intro:
      'Roofing solutions, Light Gauge Steel Frame roof trusses and concrete products for domestic and industrial building.',
    icon: '<path d="M3 20h18M5 20V9l7-5 7 5v11"/><path d="M9 20v-6h6v6"/>',
    span: '',
    products: [
      { name: 'Roofing solutions', note: 'TODO: range' },
      { name: 'Light Gauge Steel Frame roof trusses', note: 'TODO: spans' },
      { name: 'Concrete products', note: 'TODO: range' },
    ],
  },
  {
    slug: 'domestic-plasticware',
    name: 'Domestic Plasticware',
    short: 'Jerry cans, basins, buckets, cups, plates, drinking straws and more.',
    intro:
      'Jerry cans, basins, buckets, cups, mugs, plates, wrapped drinking straws, tiffin boxes and trays, made from food-grade raw materials.',
    icon: '<path d="M5 8h14l-1.5 12h-11L5 8Z"/><path d="M8 8a4 4 0 0 1 8 0"/>',
    span: 'md:col-span-2',
    products: [
      { name: 'Jerry cans', note: 'TODO: sizes' },
      { name: 'Basins and buckets', note: 'TODO: sizes' },
      { name: 'Cups, mugs and plates', note: 'TODO: range' },
      { name: 'Wrapped drinking straws', note: 'TODO: pack sizes' },
      { name: 'Tiffin boxes and trays', note: 'TODO: range' },
    ],
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    short: 'Fras-le brake linings and pads, Hanksugi truck tyres, Hengst filters.',
    intro:
      'Our automotive division, started in 2013, supplies Fras-le brake lining and pads, Hanksugi truck tyres, and Hengst fuel and air filters.',
    icon: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.5"/><path d="M12 4v5.5M12 14.5V20M4.5 9l5 2M14.5 13l5 2"/>',
    span: 'md:col-span-2',
    products: [
      { name: 'Fras-le brake lining and pads', note: 'TODO: applications' },
      { name: 'Hanksugi truck tyres', note: 'TODO: sizes' },
      { name: 'Hengst fuel and air filters', note: 'TODO: applications' },
    ],
  },
];
