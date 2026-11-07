export interface Product {
  name: string;
  material: string;
  note: string;
}
export interface Category {
  slug: string;
  no: string;
  title: string;
  short: string;
  lede: string;
  products: Product[];
}

const TBC = 'Sizes on request';

/** Product lists are PLACEHOLDERS drawn from the brief. TODO: replace with the real catalogue. */
export const categories: Category[] = [
  {
    slug: 'water-management',
    no: '01',
    title: 'Water Management',
    short: 'UPVC, HDPE and PP-R pipes, plus irrigation systems.',
    lede:
      'Pressure and drainage pipes manufactured at our Kampala factory under ISO 9001:2015, with irrigation systems for farms and estates.',
    products: [
      { name: 'UPVC pipes', material: 'Unplasticised PVC', note: TBC },
      { name: 'HDPE pipes', material: 'High-density polyethylene', note: TBC },
      { name: 'PP-R water pipes', material: 'Polypropylene random copolymer', note: TBC },
      { name: 'Pipe fittings', material: 'TODO confirm', note: TBC },
      { name: 'Irrigation systems', material: 'TODO confirm', note: 'Enquire' },
      { name: 'Rainwater gutters', material: 'TODO confirm', note: TBC },
    ],
  },
  {
    slug: 'indoor-outdoor-plumbing',
    no: '02',
    title: 'Indoor & Outdoor Plumbing',
    short: 'Indoor and outdoor plumbing for every build.',
    lede: 'Pipes, fittings and accessories for plumbing inside and outside the building.',
    products: [
      { name: 'Indoor plumbing pipes', material: 'TODO confirm', note: TBC },
      { name: 'Outdoor plumbing pipes', material: 'TODO confirm', note: TBC },
      { name: 'Fittings & accessories', material: 'TODO confirm', note: TBC },
    ],
  },
  {
    slug: 'bathroom-kitchen-solutions',
    no: '03',
    title: 'Bathroom & Kitchen Solutions',
    short: 'Complete kitchen and bathroom fittings.',
    lede: 'Kitchen and bathroom solutions, viewable at our sales office and showroom.',
    products: [
      { name: 'Kitchen solutions', material: 'TODO confirm', note: 'Enquire' },
      { name: 'Bathroom solutions', material: 'TODO confirm', note: 'Enquire' },
      { name: 'Taps & mixers', material: 'TODO confirm', note: 'Enquire' },
    ],
  },
  {
    slug: 'building-materials',
    no: '04',
    title: 'Building Materials',
    short: 'Concrete products, roofing and steel-frame trusses.',
    lede:
      'From concrete products to roofing solutions and Light Gauge Steel Frame roof trusses, the full range for building and construction.',
    products: [
      { name: 'Concrete products', material: 'Concrete', note: 'Enquire' },
      { name: 'Roofing solutions', material: 'TODO confirm', note: 'Enquire' },
      { name: 'Light Gauge Steel Frame roof trusses', material: 'Light gauge steel', note: 'Enquire' },
    ],
  },
  {
    slug: 'domestic-plasticware',
    no: '05',
    title: 'Domestic Plasticware',
    short: 'Household plastics from food-grade raw materials.',
    lede: 'Everyday household products made from food-grade raw materials.',
    products: [
      { name: 'Jerry cans', material: 'Plastic', note: TBC },
      { name: 'Basins', material: 'Plastic', note: TBC },
      { name: 'Buckets', material: 'Plastic', note: TBC },
      { name: 'Cups & mugs', material: 'Food-grade plastic', note: TBC },
      { name: 'Plates', material: 'Food-grade plastic', note: TBC },
      { name: 'Wrapped drinking straws', material: 'Food-grade plastic', note: 'Enquire' },
      { name: 'Tiffin boxes', material: 'Food-grade plastic', note: TBC },
      { name: 'Trays', material: 'Plastic', note: TBC },
    ],
  },
  {
    slug: 'automotive',
    no: '06',
    title: 'Automotive',
    short: 'Brake, tyre and filter brands since 2013.',
    lede: 'Selected automotive spare parts, supplied by our automotive division since 2013.',
    products: [
      { name: 'Brake lining & pads', material: 'Brand: Fras-le', note: 'Enquire' },
      { name: 'Truck tyres', material: 'Brand: Hanksugi', note: 'Enquire' },
      { name: 'Fuel & air filters', material: 'Brand: Hengst', note: 'Enquire' },
    ],
  },
];
