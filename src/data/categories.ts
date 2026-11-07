export interface Product { name: string; note: string }
export interface Category {
  slug: string;
  name: string;
  short: string;
  intro: string;
  products: Product[];
}

const TODO = 'Sizes and specifications: TODO from client';

export const categories: Category[] = [
  {
    slug: 'water-management',
    name: 'Water Management',
    short: 'UPVC, HDPE and PP-R pipes, plus irrigation systems.',
    intro:
      'Manufactured at our Kampala factory: UPVC, HDPE and PP-R water pipes in all sizes, alongside irrigation and water management systems for farms, estates and construction sites.',
    products: [
      { name: 'UPVC pipes', note: TODO },
      { name: 'HDPE pipes', note: TODO },
      { name: 'PP-R pipes', note: TODO },
      { name: 'Irrigation systems', note: TODO },
      { name: 'Pipe fittings', note: TODO },
    ],
  },
  {
    slug: 'indoor-outdoor-plumbing',
    name: 'Indoor & Outdoor Plumbing',
    short: 'Pipes and fittings for indoor and outdoor plumbing.',
    intro: 'Plastic pipes and fittings for indoor and outdoor plumbing, from the building to the main line.',
    products: [
      { name: 'Indoor plumbing pipes', note: TODO },
      { name: 'Outdoor plumbing pipes', note: TODO },
      { name: 'Fittings and accessories', note: TODO },
    ],
  },
  {
    slug: 'bathroom-kitchen',
    name: 'Bathroom & Kitchen Solutions',
    short: 'Complete kitchen and bathroom solutions.',
    intro: 'Kitchen and bathroom solutions for homes and developments, available to view at our showroom.',
    products: [
      { name: 'Kitchen solutions', note: TODO },
      { name: 'Bathroom solutions', note: TODO },
    ],
  },
  {
    slug: 'building-materials',
    name: 'Building Materials',
    short: 'Concrete products, gutters, steel frame trusses, roofing.',
    intro:
      'Domestic and industrial building materials, from concrete products to roofing, supplied as a single stop for building and construction.',
    products: [
      { name: 'Concrete products', note: TODO },
      { name: 'Rainwater gutters', note: TODO },
      { name: 'Light Gauge Steel Frame roof trusses', note: TODO },
      { name: 'Roofing solutions', note: TODO },
    ],
  },
  {
    slug: 'domestic-plasticware',
    name: 'Domestic Plasticware',
    short: 'Food-grade household plastics and drinking straws.',
    intro: 'Household plasticware made from food-grade raw materials, and wrapped drinking straws.',
    products: [
      { name: 'Jerry cans', note: TODO },
      { name: 'Basins and buckets', note: TODO },
      { name: 'Cups, mugs and plates', note: TODO },
      { name: 'Wrapped drinking straws', note: TODO },
      { name: 'Tiffin boxes and trays', note: TODO },
    ],
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    short: 'Brake linings, truck tyres, fuel and air filters.',
    intro: 'Our automotive division, established in 2013, supplies selected automotive spare parts.',
    products: [
      { name: 'Fras-le brake lining & pads', note: TODO },
      { name: 'Hanksugi truck tyres', note: TODO },
      { name: 'Hengst fuel and air filters', note: TODO },
    ],
  },
];
