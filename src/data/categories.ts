/**
 * Product categories ("exhibits"). Product lists are PLACEHOLDERS (TODO: confirm with
 * Multiple Industries). Descriptions only restate facts from the existing site.
 */
export type ObjectKind = 'tap' | 'elbow' | 'basin' | 'truss' | 'bucket' | 'tyre';

export interface Product {
  name: string;
  note: string;
}

export interface Category {
  slug: string;
  no: string;
  name: string;
  object: ObjectKind;
  short: string;
  intro: string;
  products: Product[];
  uses: string[];
}

export const categories: Category[] = [
  {
    slug: 'water-management',
    no: '01',
    name: 'Water Management',
    object: 'tap',
    short: 'UPVC, HDPE and PP-R water pipes, made in Kampala, plus irrigation systems.',
    intro:
      'Plastic water pipes are where Multiple Industries began. We manufacture UPVC, HDPE and PP-R pipes in all sizes and supply irrigation and water management systems for homes, farms and projects across the East African region.',
    products: [
      { name: 'UPVC pressure pipes', note: 'Water supply and distribution lines' },
      { name: 'HDPE pipes', note: 'Flexible lines for supply and irrigation' },
      { name: 'PP-R water pipes', note: 'Hot and cold domestic plumbing' },
      { name: 'Pipe fittings', note: 'Couplers, elbows, tees and adaptors' },
      { name: 'Irrigation systems', note: 'Supply and distribution for farms and gardens' },
      { name: 'Water management accessories', note: 'Valves, connectors and more' },
    ],
    uses: ['Municipal & estate supply', 'Domestic plumbing', 'Farm irrigation', 'Contractor projects'],
  },
  {
    slug: 'indoor-outdoor-plumbing',
    no: '02',
    name: 'Indoor & Outdoor Plumbing',
    object: 'elbow',
    short: 'Pipes, fittings and rainwater gutters for inside and around the building.',
    intro:
      'Everything a plumber needs inside and around the building, from supply and drainage lines to rainwater gutters.',
    products: [
      { name: 'Drainage pipes', note: 'Soil, waste and vent lines' },
      { name: 'Plumbing fittings', note: 'Joints, bends and connectors' },
      { name: 'Rainwater gutters', note: 'Gutters, downpipes and brackets' },
      { name: 'Taps and valves', note: 'Indoor and outdoor points' },
    ],
    uses: ['New builds', 'Renovation', 'Rainwater harvesting'],
  },
  {
    slug: 'bathroom-kitchen',
    no: '03',
    name: 'Bathroom & Kitchen Solutions',
    object: 'basin',
    short: 'Sinks, taps and fittings for finished kitchens and bathrooms.',
    intro:
      'Kitchen and bathroom solutions for homes and projects. See them in person at our showroom on 8th Street.',
    products: [
      { name: 'Kitchen sinks', note: 'Single and double bowl' },
      { name: 'Mixers and taps', note: 'Kitchen and bathroom' },
      { name: 'Showers', note: 'Heads, sets and controls' },
      { name: 'Bathroom accessories', note: 'Finishing fittings' },
    ],
    uses: ['Homes', 'Hotels & apartments', 'Fit-out contractors'],
  },
  {
    slug: 'building-materials',
    no: '04',
    name: 'Building Materials',
    object: 'truss',
    short: 'Roofing solutions, Light Gauge Steel Frame roof trusses and concrete products.',
    intro:
      'From concrete products to roofing solutions and Light Gauge Steel Frame roof trusses: supply for the main build.',
    products: [
      { name: 'Light Gauge Steel Frame roof trusses', note: 'Engineered roof framing' },
      { name: 'Roofing solutions', note: 'Sheets and accessories' },
      { name: 'Concrete products', note: 'For structural and site work' },
      { name: 'General building materials', note: 'Ask the sales office' },
    ],
    uses: ['Roofing', 'Structure', 'Site supply'],
  },
  {
    slug: 'domestic-plasticware',
    no: '05',
    name: 'Domestic Plasticware',
    object: 'bucket',
    short: 'Jerry cans, basins, buckets, cups, plates and wrapped straws made from food-grade materials.',
    intro:
      'Household plasticware made from food-grade raw materials: jerry cans, basins, buckets, cups, mugs, plates, wrapped drinking straws, tiffin boxes and trays.',
    products: [
      { name: 'Jerry cans', note: 'Water and storage' },
      { name: 'Basins and buckets', note: 'Everyday household use' },
      { name: 'Cups, mugs and plates', note: 'Food-grade tableware' },
      { name: 'Wrapped drinking straws', note: 'Individually wrapped' },
      { name: 'Tiffin boxes and trays', note: 'Food storage and serving' },
    ],
    uses: ['Households', 'Retail & wholesale', 'Catering'],
  },
  {
    slug: 'automotive',
    no: '06',
    name: 'Automotive',
    object: 'tyre',
    short: 'Fras-le brake linings and pads, Hanksugi truck tyres and Hengst filters.',
    intro:
      'Our automotive division, started in 2013, supplies selected spare parts: Fras-le brake linings and pads, Hanksugi truck tyres and Hengst fuel and air filters.',
    products: [
      { name: 'Fras-le brake linings & pads', note: 'Commercial and passenger' },
      { name: 'Hanksugi truck tyres', note: 'For trucks and trailers' },
      { name: 'Hengst fuel & air filters', note: 'Filtration' },
    ],
    uses: ['Fleets & transporters', 'Garages', 'Truck owners'],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
