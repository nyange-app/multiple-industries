export type CatKey = 'water' | 'plumbing' | 'bathroom' | 'building' | 'plastic' | 'auto';

export interface Category {
  slug: string;
  key: CatKey; // drives colour + icon
  name: string;
  short: string;
  intro: string;
  products: { name: string; note: string }[];
  /** TODO: confirm real product lists with client. */
}

export const categories: Category[] = [
  {
    slug: 'water-management',
    key: 'water',
    name: 'Water Management',
    short: 'Pipes and irrigation to move water where it is needed.',
    intro:
      'UPVC, HDPE and PP-R pipes in all sizes, made at our Kampala factory, plus irrigation systems and rainwater solutions for farms, estates and homes.',
    products: [
      { name: 'UPVC pipes', note: 'Pressure and drainage pipes in all sizes.' },
      { name: 'HDPE pipes', note: 'Flexible, durable pipes for water supply.' },
      { name: 'PP-R water pipes', note: 'Hot and cold water systems for buildings.' },
      { name: 'Irrigation systems', note: 'Drip and field irrigation for growers.' },
      { name: 'Rainwater gutters', note: 'Gutters and fittings for roof drainage.' },
      { name: 'Fittings & valves', note: 'Matching fittings for every pipe type.' },
    ],
  },
  {
    slug: 'indoor-outdoor-plumbing',
    key: 'plumbing',
    name: 'Indoor & Outdoor Plumbing',
    short: 'Fittings and systems for inside and outside the building.',
    intro: 'Indoor and outdoor plumbing solutions, from supply lines to drainage, to finish a job properly.',
    products: [
      { name: 'Plumbing fittings', note: 'Elbows, tees, couplers and more.' },
      { name: 'Drainage systems', note: 'Soil and waste drainage.' },
      { name: 'Water tanks', note: 'Storage for homes and sites.' },
      { name: 'Taps & connectors', note: 'Everyday plumbing essentials.' },
    ],
  },
  {
    slug: 'bathroom-kitchen',
    key: 'bathroom',
    name: 'Bathroom & Kitchen Solutions',
    short: 'Fittings and fixtures for kitchens and bathrooms.',
    intro: 'Kitchen and bathroom solutions that look good and last, available to view at our showroom.',
    products: [
      { name: 'Sinks', note: 'Kitchen sinks and basins.' },
      { name: 'Mixers & taps', note: 'Bathroom and kitchen mixers.' },
      { name: 'Showers', note: 'Shower sets and accessories.' },
      { name: 'Sanitaryware', note: 'Toilets, basins and fittings.' },
    ],
  },
  {
    slug: 'building-materials',
    key: 'building',
    name: 'Building Materials',
    short: 'From concrete products to roofing and steel frames.',
    intro:
      'Plastic pipes to concrete products, roofing solutions and Light Gauge Steel Frame roof trusses: the range you need for building and construction.',
    products: [
      { name: 'Concrete products', note: 'Blocks and construction concrete.' },
      { name: 'Roofing solutions', note: 'Roof sheets and accessories.' },
      { name: 'Light Gauge Steel Frame trusses', note: 'Light, strong roof trusses.' },
      { name: 'Building accessories', note: 'Everything to complete the job.' },
    ],
  },
  {
    slug: 'domestic-plasticware',
    key: 'plastic',
    name: 'Domestic Plasticware',
    short: 'Everyday household items, made from food-grade materials.',
    intro:
      'Jerry cans, basins, buckets, cups, mugs, plates, wrapped drinking straws, tiffin boxes and trays, made from food-grade raw materials.',
    products: [
      { name: 'Jerry cans', note: 'Strong containers for water and more.' },
      { name: 'Basins & buckets', note: 'Household basics.' },
      { name: 'Cups, mugs & plates', note: 'Tableware for everyday use.' },
      { name: 'Wrapped drinking straws', note: 'Hygienically wrapped straws.' },
      { name: 'Tiffin boxes & trays', note: 'Food storage and serving.' },
    ],
  },
  {
    slug: 'automotive',
    key: 'auto',
    name: 'Automotive',
    short: 'Brake, tyre and filter products for trucks and vehicles.',
    intro:
      'Our automotive division, started in 2013, supplies Fras-le brake lining and pads, Hanksugi truck tyres and Hengst fuel and air filters.',
    products: [
      { name: 'Fras-le brake lining & pads', note: 'Brake products for vehicles.' },
      { name: 'Hanksugi truck tyres', note: 'Tyres for trucks.' },
      { name: 'Hengst filters', note: 'Fuel and air filters.' },
    ],
  },
];

export const brands = ['Wavin', 'Franke', 'Vado', 'Fras-le', 'Conmix', 'Tegra', 'Feroof', 'Smartframe', 'Polynum', 'Hanksugi', 'Hengst'];
