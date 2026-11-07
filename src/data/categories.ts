/**
 * The six product divisions. Product rows are PLACEHOLDERS drawn only from the
 * product types named on the old site — TODO: replace with the confirmed
 * catalogue (names, sizes, pressure classes, brands) from Multiple Industries.
 */
export type IconKey = 'water' | 'plumbing' | 'bath' | 'building' | 'plastic' | 'auto';

export interface ProductRow {
  name: string;
  material: string;
  use: string;
}

export interface Category {
  slug: string;
  no: string;
  name: string;
  icon: IconKey;
  short: string;
  intro: string;
  products: ProductRow[];
  applications: string[];
  brands: string[];
}

export const categories: Category[] = [
  {
    slug: 'water-management',
    no: '01',
    name: 'Water Management',
    icon: 'water',
    short: 'UPVC, HDPE and PP-R water pipes, fittings and irrigation systems.',
    intro:
      'Plastic water pipes manufactured at our Kampala factory — UPVC, HDPE and PP-R — together with the fittings and irrigation systems needed to move water from source to tap and field.',
    products: [
      { name: 'UPVC water pipes', material: 'UPVC', use: 'Water supply & distribution' },
      { name: 'HDPE water pipes', material: 'HDPE', use: 'Mains, boreholes & long runs' },
      { name: 'PP-R water pipes', material: 'PP-R', use: 'Hot & cold indoor water' },
      { name: 'Pipe fittings', material: 'UPVC / HDPE / PP-R', use: 'Joints, bends, tees & reducers' },
      { name: 'Irrigation systems', material: 'Various', use: 'Farms, gardens & estates' },
      { name: 'Water management accessories', material: 'Various', use: 'Valves, connectors & more' },
    ],
    applications: ['Domestic water supply', 'Estates & commercial buildings', 'Agriculture & irrigation', 'Municipal & institutional projects'],
    brands: ['Wavin', 'Polynum', 'PEX'],
  },
  {
    slug: 'indoor-outdoor-plumbing',
    no: '02',
    name: 'Indoor & Outdoor Plumbing',
    icon: 'plumbing',
    short: 'Pipes, fittings and rainwater gutters for inside and outside the building.',
    intro:
      'Everything a plumber needs on site — from indoor supply and waste lines to outdoor drainage and rainwater gutters.',
    products: [
      { name: 'Plumbing pipes', material: 'UPVC / PP-R', use: 'Supply & waste lines' },
      { name: 'Plumbing fittings', material: 'Various', use: 'Connections & adaptors' },
      { name: 'Rainwater gutters', material: 'Various', use: 'Roof drainage' },
      { name: 'Outdoor drainage', material: 'Various', use: 'Site & yard drainage' },
    ],
    applications: ['Homes', 'Commercial buildings', 'Contractor projects'],
    brands: ['Gutters', 'Wavin'],
  },
  {
    slug: 'bathroom-kitchen',
    no: '03',
    name: 'Bathroom & Kitchen Solutions',
    icon: 'bath',
    short: 'Sinks, taps and fittings for complete kitchens and bathrooms.',
    intro:
      'Kitchen and bathroom solutions for new builds and renovations, available to view at our 8th Street showroom.',
    products: [
      { name: 'Kitchen sinks', material: 'Various', use: 'Kitchens' },
      { name: 'Taps & mixers', material: 'Various', use: 'Kitchens & bathrooms' },
      { name: 'Bathroom fittings', material: 'Various', use: 'Bathrooms' },
      { name: 'Showers', material: 'Various', use: 'Bathrooms' },
    ],
    applications: ['Homes', 'Hotels & apartments', 'Renovations'],
    brands: ['Franke', 'Vado'],
  },
  {
    slug: 'building-materials',
    no: '04',
    name: 'Building Materials',
    icon: 'building',
    short: 'Concrete products, roofing solutions and Light Gauge Steel Frame roof trusses.',
    intro:
      'From concrete products to roofing solutions and Light Gauge Steel Frame roof trusses — a single source for the structure of the building.',
    products: [
      { name: 'Concrete products', material: 'Concrete', use: 'Structure & paving' },
      { name: 'Light Gauge Steel Frame roof trusses', material: 'Steel', use: 'Roof structures' },
      { name: 'Roofing solutions', material: 'Various', use: 'Roof covering' },
    ],
    applications: ['Residential construction', 'Commercial construction', 'Roofing projects'],
    brands: ['Conmix', 'Tegra', 'Feroof', 'Smartframe', 'Apex'],
  },
  {
    slug: 'domestic-plasticware',
    no: '05',
    name: 'Domestic Plasticware',
    icon: 'plastic',
    short: 'Jerry cans, basins, buckets, cups, plates and wrapped drinking straws.',
    intro:
      'Household plasticware made from food-grade raw materials: jerry cans, basins, buckets, cups, mugs, plates, wrapped drinking straws, tiffin boxes and trays.',
    products: [
      { name: 'Jerry cans', material: 'Food-grade plastic', use: 'Water & liquids storage' },
      { name: 'Basins & buckets', material: 'Food-grade plastic', use: 'Household use' },
      { name: 'Cups, mugs & plates', material: 'Food-grade plastic', use: 'Tableware' },
      { name: 'Wrapped drinking straws', material: 'Food-grade plastic', use: 'Hospitality & retail' },
      { name: 'Tiffin boxes & trays', material: 'Food-grade plastic', use: 'Food storage & serving' },
    ],
    applications: ['Households', 'Retail & wholesale', 'Hotels & restaurants'],
    brands: [],
  },
  {
    slug: 'automotive',
    no: '06',
    name: 'Automotive',
    icon: 'auto',
    short: 'Fras-le brake linings & pads, Hanksugi truck tyres, Hengst filters.',
    intro:
      'Our automotive division, started in 2013, supplies selected products: Fras-le brake lining and pads, Hanksugi truck tyres and Hengst fuel and air filters.',
    products: [
      { name: 'Brake lining & pads', material: 'Fras-le', use: 'Trucks & vehicles' },
      { name: 'Truck tyres', material: 'Hanksugi', use: 'Trucks' },
      { name: 'Fuel & air filters', material: 'Hengst', use: 'Engines' },
      { name: 'Batteries', material: 'Various', use: 'Vehicles' },
    ],
    applications: ['Fleet operators', 'Transporters', 'Workshops'],
    brands: ['Fras-le', 'Batteries', 'Trailers'],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

/** Brand / partner names seen in old-site asset filenames. TODO: confirm list & supply logos. */
export const brands = [
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
];
