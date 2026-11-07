/**
 * The six product categories, presented as showroom "aisles".
 * TODO(content): product lists below are indicative placeholders built from the
 * old site's category copy. Confirm ranges, sizes and brands with the client.
 */
export type IconName =
  | 'water'
  | 'plumbing'
  | 'bath'
  | 'building'
  | 'plasticware'
  | 'automotive';

export interface Product {
  name: string;
  note: string;
}

export interface Aisle {
  slug: string;
  number: string;
  name: string;
  icon: IconName;
  short: string;
  intro: string;
  audience: string;
  products: Product[];
  brands?: string[];
}

export const aisles: Aisle[] = [
  {
    slug: 'water-management',
    number: '01',
    name: 'Water Management',
    icon: 'water',
    short: 'UPVC, HDPE and PP-R water pipes, fittings and irrigation systems.',
    intro:
      'Our factory in Kampala manufactures UPVC, HDPE and PP-R water pipes in all sizes, alongside the fittings and irrigation systems that carry water from source to tap and field.',
    audience: 'For contractors, water projects, farms and homes.',
    products: [
      { name: 'UPVC pressure pipes', note: 'Made in our Kampala factory for water supply lines.' },
      { name: 'HDPE pipes', note: 'Flexible polyethylene pipe for supply, boreholes and long runs.' },
      { name: 'PP-R water pipes', note: 'Hot and cold water pipe for indoor plumbing.' },
      { name: 'Pipe fittings', note: 'Elbows, tees, couplings and adaptors to match each pipe system.' },
      { name: 'Irrigation systems', note: 'Components for drip and sprinkler irrigation.' },
      { name: 'Water management accessories', note: 'Valves and connectors for complete installations.' },
    ],
  },
  {
    slug: 'indoor-outdoor-plumbing',
    number: '02',
    name: 'Indoor & Outdoor Plumbing',
    icon: 'plumbing',
    short: 'Pipes, drainage and rainwater gutters for inside and outside the building.',
    intro:
      'Everything a plumber needs to finish the job, from supply and drainage pipework indoors to rainwater gutters and downpipes outside.',
    audience: 'For plumbers, builders and home owners.',
    products: [
      { name: 'Soil and waste pipes', note: 'Drainage pipework and fittings.' },
      { name: 'Rainwater gutters', note: 'Gutters, downpipes and brackets.' },
      { name: 'Plumbing fittings', note: 'Connectors and adaptors for indoor runs.' },
      { name: 'Valves and taps', note: 'Isolation valves, stopcocks and garden taps.' },
      { name: 'Outdoor drainage', note: 'Pipe and fittings for site and yard drainage.' },
    ],
  },
  {
    slug: 'bathroom-kitchen',
    number: '03',
    name: 'Bathroom & Kitchen Solutions',
    icon: 'bath',
    short: 'Sinks, taps, showers and fittings for kitchens and bathrooms.',
    intro:
      'Kitchen and bathroom solutions on display at our 8th Street showroom, so you can see the finish before you buy.',
    audience: 'For households, developers and fit-out contractors.',
    products: [
      { name: 'Kitchen sinks', note: 'Sinks and accessories for home kitchens.' },
      { name: 'Taps and mixers', note: 'Kitchen and basin taps.' },
      { name: 'Showers', note: 'Shower sets and fittings.' },
      { name: 'Bathroom fittings', note: 'Accessories to complete the bathroom.' },
    ],
  },
  {
    slug: 'building-materials',
    number: '04',
    name: 'Building Materials',
    icon: 'building',
    short: 'Concrete products, roofing solutions and steel frame roof trusses.',
    intro:
      'From concrete products to roofing, including Light Gauge Steel Frame roof trusses, we supply reliable building materials for the whole structure.',
    audience: 'For contractors, developers and self-builders.',
    products: [
      { name: 'Concrete products', note: 'Building products for the structure.' },
      { name: 'Light Gauge Steel Frame roof trusses', note: 'Steel frame trusses for roofing.' },
      { name: 'Roofing solutions', note: 'Roofing sheets and accessories.' },
      { name: 'General building materials', note: 'Supplies for site and finishing work.' },
    ],
  },
  {
    slug: 'domestic-plasticware',
    number: '05',
    name: 'Domestic Plasticware',
    icon: 'plasticware',
    short: 'Jerry cans, basins, buckets, cups, plates and wrapped drinking straws.',
    intro:
      'Everyday household plastics made from food-grade raw materials: jerry cans, basins, buckets, cups, mugs, plates, wrapped drinking straws, tiffin boxes and trays.',
    audience: 'For households, retailers and wholesalers.',
    products: [
      { name: 'Jerry cans', note: 'For carrying and storing water.' },
      { name: 'Basins and buckets', note: 'Household basins and buckets.' },
      { name: 'Cups, mugs and plates', note: 'Food-grade tableware.' },
      { name: 'Wrapped drinking straws', note: 'Individually wrapped straws.' },
      { name: 'Tiffin boxes', note: 'Food containers for school and work.' },
      { name: 'Trays', note: 'Serving and storage trays.' },
    ],
  },
  {
    slug: 'automotive',
    number: '06',
    name: 'Automotive',
    icon: 'automotive',
    short: 'Brake linings and pads, truck tyres and filters, plus transport services.',
    intro:
      'Our automotive division, started in 2013, supplies selected spare parts for trucks and vehicles. Since 2019 Inland Freight Services has provided transport and logistics across East Africa.',
    audience: 'For fleet operators, garages and transporters.',
    products: [
      { name: 'Brake lining and pads', note: 'Fras-le brake lining and brake pads.' },
      { name: 'Truck tyres', note: 'Hanksugi truck tyres.' },
      { name: 'Fuel and air filters', note: 'Hengst fuel and air filters.' },
      { name: 'Batteries', note: 'Vehicle batteries.' },
      { name: 'Trailers', note: 'Trailers for haulage.' },
      { name: 'Transport and logistics', note: 'Inland Freight Services, across East Africa.' },
    ],
    brands: ['Fras-le', 'Hanksugi', 'Hengst'],
  },
];

export const getAisle = (slug: string) => aisles.find((a) => a.slug === slug);

/** Brand / partner names seen in old-site asset filenames. TODO: confirm and supply logos. */
export const brands = [
  'Wavin', 'Franke', 'Vado', 'Fras-le', 'Conmix', 'Tegra', 'Feroof', 'Smartframe',
  'Polynum', 'Apex', 'PEX', 'Gutters', 'Batteries', 'Trailers', 'Veer',
];
