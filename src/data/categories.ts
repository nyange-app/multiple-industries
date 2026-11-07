/**
 * Product categories. Product lists are PLACEHOLDERS assembled from the
 * old site's About copy — TODO: confirm ranges, sizes and specs with the client.
 */
export type Origin = 'Manufactured' | 'Supplied';

export interface Product {
  name: string;
  origin: Origin;
  use: string;
}

export interface Category {
  slug: string;
  code: string;
  name: string;
  short: string;
  intro: string;
  icon: 'water' | 'plumbing' | 'bath' | 'build' | 'plastic' | 'auto';
  products: Product[];
}

export const categories: Category[] = [
  {
    slug: 'water-management',
    code: '01',
    name: 'Water Management',
    short: 'UPVC, HDPE and PP-R pipes and irrigation systems for supply, distribution and farms.',
    intro:
      'Plastic pressure and distribution pipes made in our Kampala factory, plus irrigation systems for farms and landscapes. Manufactured and supplied under a Quality Management System in accordance with ISO 9001:2015.',
    icon: 'water',
    products: [
      { name: 'UPVC pressure pipes', origin: 'Manufactured', use: 'Water supply & distribution' },
      { name: 'HDPE pipes', origin: 'Manufactured', use: 'Mains, boreholes & long runs' },
      { name: 'PP-R water pipes', origin: 'Manufactured', use: 'Hot & cold water lines' },
      { name: 'Pipe fittings', origin: 'Supplied', use: 'Joints, bends & adaptors' },
      { name: 'Irrigation systems', origin: 'Supplied', use: 'Farms, gardens & landscapes' },
      { name: 'Water tanks & storage', origin: 'Supplied', use: 'Domestic & commercial storage' },
    ],
  },
  {
    slug: 'indoor-outdoor-plumbing',
    code: '02',
    name: 'Indoor & Outdoor Plumbing',
    short: 'Pipes, fittings and rainwater gutters for homes, sites and commercial buildings.',
    intro:
      'Everything a plumber needs on site, from in-wall water lines to drainage and rainwater gutters.',
    icon: 'plumbing',
    products: [
      { name: 'Plumbing pipes', origin: 'Manufactured', use: 'Indoor water lines' },
      { name: 'Drainage & waste pipes', origin: 'Manufactured', use: 'Soil, waste & vent' },
      { name: 'Rainwater gutters', origin: 'Supplied', use: 'Roof drainage' },
      { name: 'Valves & taps', origin: 'Supplied', use: 'Flow control' },
      { name: 'PEX systems', origin: 'Supplied', use: 'Flexible water lines' },
    ],
  },
  {
    slug: 'bathroom-kitchen',
    code: '03',
    name: 'Bathroom & Kitchen Solutions',
    short: 'Sinks, sanitary ware, mixers and fittings for kitchens and bathrooms.',
    intro: 'Kitchen and bathroom solutions from trusted brands, on display at our showroom.',
    icon: 'bath',
    products: [
      { name: 'Kitchen sinks', origin: 'Supplied', use: 'Domestic & commercial kitchens' },
      { name: 'Taps & mixers', origin: 'Supplied', use: 'Kitchens & bathrooms' },
      { name: 'Showers', origin: 'Supplied', use: 'Bathrooms' },
      { name: 'Sanitary ware', origin: 'Supplied', use: 'Bathrooms & washrooms' },
      { name: 'Bathroom accessories', origin: 'Supplied', use: 'Finishing' },
    ],
  },
  {
    slug: 'building-materials',
    code: '04',
    name: 'Building Materials',
    short: 'Roofing, Light Gauge Steel Frame roof trusses and concrete products.',
    intro:
      'From concrete products to roofing solutions and Light Gauge Steel Frame roof trusses — one stop for building and construction.',
    icon: 'build',
    products: [
      { name: 'Light Gauge Steel Frame roof trusses', origin: 'Supplied', use: 'Roof structures' },
      { name: 'Roofing solutions', origin: 'Supplied', use: 'Roof covering' },
      { name: 'Concrete products', origin: 'Supplied', use: 'Construction' },
      { name: 'Construction chemicals', origin: 'Supplied', use: 'Waterproofing & admixtures' },
    ],
  },
  {
    slug: 'domestic-plasticware',
    code: '05',
    name: 'Domestic Plasticware',
    short: 'Jerry cans, basins, buckets, cups, plates and wrapped drinking straws.',
    intro:
      'Everyday household plasticware made from food-grade raw materials, including wrapped drinking straws.',
    icon: 'plastic',
    products: [
      { name: 'Jerry cans', origin: 'Manufactured', use: 'Water & liquid storage' },
      { name: 'Basins & buckets', origin: 'Manufactured', use: 'Household use' },
      { name: 'Cups, mugs & plates', origin: 'Manufactured', use: 'Food-grade tableware' },
      { name: 'Wrapped drinking straws', origin: 'Manufactured', use: 'Food service' },
      { name: 'Tiffin boxes & trays', origin: 'Manufactured', use: 'Food storage & serving' },
    ],
  },
  {
    slug: 'automotive',
    code: '06',
    name: 'Automotive',
    short: 'Brake linings and pads, truck tyres, fuel and air filters.',
    intro:
      'Our automotive division, started in 2013, supplies Fras-le brake lining and pads, Hanksugi truck tyres and Hengst fuel and air filters.',
    icon: 'auto',
    products: [
      { name: 'Fras-le brake lining & pads', origin: 'Supplied', use: 'Trucks & commercial vehicles' },
      { name: 'Hanksugi truck tyres', origin: 'Supplied', use: 'Trucks' },
      { name: 'Hengst fuel filters', origin: 'Supplied', use: 'Engine protection' },
      { name: 'Hengst air filters', origin: 'Supplied', use: 'Engine protection' },
      { name: 'Batteries', origin: 'Supplied', use: 'Vehicles' },
    ],
  },
];
