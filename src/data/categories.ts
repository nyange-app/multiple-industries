/**
 * Product divisions. Product lists are PLACEHOLDERS assembled from the brief's
 * company description — TODO: replace with the confirmed catalogue + specs.
 */
export type IconName = 'water' | 'plumbing' | 'kitchen' | 'building' | 'plasticware' | 'automotive';

export interface Product {
  name: string;
  material: string;
  use: string;
  range: string;
}

export interface Category {
  slug: string;
  code: string;
  name: string;
  icon: IconName;
  short: string;
  intro: string;
  applications: string[];
  products: Product[];
}

const onRequest = 'Schedule on request';

export const categories: Category[] = [
  {
    slug: 'water-management',
    code: '01',
    name: 'Water Management',
    icon: 'water',
    short: 'UPVC, HDPE and PP-R water pipes, fittings and irrigation systems.',
    intro:
      'Plastic water pipes manufactured at our Kampala factory — UPVC, HDPE and PP-R in all sizes — together with fittings and irrigation systems for water supply, distribution and agriculture.',
    applications: [
      'Municipal and estate water supply',
      'Borehole and rising mains',
      'Hot and cold water in buildings',
      'Farm and garden irrigation',
    ],
    products: [
      { name: 'UPVC pressure pipes', material: 'UPVC', use: 'Water supply & distribution', range: 'All sizes · ' + onRequest },
      { name: 'UPVC fittings', material: 'UPVC', use: 'Joints, bends, tees, reducers', range: onRequest },
      { name: 'HDPE pipes', material: 'HDPE', use: 'Mains, boreholes, long runs', range: 'All sizes · ' + onRequest },
      { name: 'HDPE compression fittings', material: 'HDPE / PP', use: 'Connections for HDPE lines', range: onRequest },
      { name: 'PP-R water pipes', material: 'PP-R', use: 'Hot & cold water in buildings', range: 'All sizes · ' + onRequest },
      { name: 'PP-R fittings', material: 'PP-R', use: 'Heat-fused joints and valves', range: onRequest },
      { name: 'Irrigation systems', material: 'Mixed', use: 'Drip & sprinkler layouts', range: 'Designed per site' },
    ],
  },
  {
    slug: 'indoor-outdoor-plumbing',
    code: '02',
    name: 'Indoor & Outdoor Plumbing',
    icon: 'plumbing',
    short: 'Pipes, fittings and rainwater gutters for complete plumbing jobs.',
    intro:
      'Everything a plumber needs on site, from supply and drainage lines to rainwater gutter systems for roofs.',
    applications: ['Domestic plumbing', 'Drainage and waste', 'Rainwater collection', 'Commercial fit-outs'],
    products: [
      { name: 'Drainage & waste pipes', material: 'UPVC', use: 'Soil, waste and vent lines', range: onRequest },
      { name: 'Rainwater gutters', material: 'PVC', use: 'Roof drainage', range: onRequest },
      { name: 'Downpipes & brackets', material: 'PVC', use: 'Gutter systems', range: onRequest },
      { name: 'Valves & taps', material: 'Mixed', use: 'Control and outlets', range: onRequest },
    ],
  },
  {
    slug: 'bathroom-kitchen-solutions',
    code: '03',
    name: 'Bathroom & Kitchen Solutions',
    icon: 'kitchen',
    short: 'Sinks, mixers, sanitaryware and fittings for kitchens and bathrooms.',
    intro: 'Kitchen and bathroom solutions for homes, hotels and commercial projects.',
    applications: ['New homes', 'Renovations', 'Hotels & apartments', 'Commercial washrooms'],
    products: [
      { name: 'Kitchen sinks', material: 'Stainless steel', use: 'Domestic & commercial kitchens', range: onRequest },
      { name: 'Mixers & taps', material: 'Brass / chrome', use: 'Kitchens and bathrooms', range: onRequest },
      { name: 'Showers', material: 'Mixed', use: 'Bathrooms', range: onRequest },
      { name: 'Bathroom accessories', material: 'Mixed', use: 'Finishing', range: onRequest },
    ],
  },
  {
    slug: 'building-materials',
    code: '04',
    name: 'Building Materials',
    icon: 'building',
    short: 'Roofing, Light Gauge Steel Frame trusses and concrete products.',
    intro:
      'Building materials from plastic pipes to concrete products, including roofing solutions and Light Gauge Steel Frame roof trusses.',
    applications: ['Residential construction', 'Commercial buildings', 'Roofing projects', 'Site works'],
    products: [
      { name: 'Light Gauge Steel Frame roof trusses', material: 'Steel', use: 'Roof structures', range: 'Designed per project' },
      { name: 'Roofing solutions', material: 'Mixed', use: 'Roof covering', range: onRequest },
      { name: 'Concrete products', material: 'Concrete', use: 'Site and civil works', range: onRequest },
    ],
  },
  {
    slug: 'domestic-plasticware',
    code: '05',
    name: 'Domestic Plasticware',
    icon: 'plasticware',
    short: 'Jerry cans, basins, buckets, cups, plates, tiffins and wrapped straws.',
    intro:
      'Household plasticware made from food-grade raw materials: jerry cans, basins, buckets, cups, mugs, plates, wrapped drinking straws, tiffin boxes and trays.',
    applications: ['Homes', 'Retail & wholesale', 'Hospitality', 'Schools & institutions'],
    products: [
      { name: 'Jerry cans', material: 'Food-grade plastic', use: 'Water storage & transport', range: onRequest },
      { name: 'Basins & buckets', material: 'Food-grade plastic', use: 'Household use', range: onRequest },
      { name: 'Cups, mugs & plates', material: 'Food-grade plastic', use: 'Tableware', range: onRequest },
      { name: 'Tiffin boxes & trays', material: 'Food-grade plastic', use: 'Food storage & serving', range: onRequest },
      { name: 'Wrapped drinking straws', material: 'Food-grade plastic', use: 'Hospitality & retail', range: onRequest },
    ],
  },
  {
    slug: 'automotive',
    code: '06',
    name: 'Automotive',
    icon: 'automotive',
    short: 'Fras-le brake linings & pads, Hanksugi truck tyres, Hengst filters.',
    intro:
      'Our automotive division, established in 2013, supplies selected spare parts including Fras-le brake lining and pads, Hanksugi truck tyres and Hengst fuel and air filters.',
    applications: ['Fleet operators', 'Transporters', 'Garages & workshops', 'Spare parts dealers'],
    products: [
      { name: 'Brake lining & pads', material: 'Fras-le', use: 'Trucks and commercial vehicles', range: onRequest },
      { name: 'Truck tyres', material: 'Hanksugi', use: 'Commercial vehicles', range: onRequest },
      { name: 'Fuel filters', material: 'Hengst', use: 'Engine protection', range: onRequest },
      { name: 'Air filters', material: 'Hengst', use: 'Engine protection', range: onRequest },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

/** TODO: confirm the brand/partner list with Multiple Industries and replace tiles with approved logos. */
export const brands = [
  'Wavin', 'Franke', 'Vado', 'Fras-le', 'Conmix', 'Tegra', 'Feroof', 'Smartframe',
  'Polynum', 'Apex', 'PEX', 'Gutters', 'Batteries', 'Trailers', 'Veer',
];
