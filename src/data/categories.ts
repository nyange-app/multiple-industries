export interface Category {
  slug: string;
  name: string;
  short: string;
  intro: string;
  icon: string;
  products: { name: string; note: string }[];
}

// Product lists are placeholders (TODO: confirm full catalogue with client).
export const categories: Category[] = [
  {
    slug: 'water-management',
    name: 'Water Management',
    short: 'UPVC, HDPE and PP-R pipes, fittings and irrigation systems.',
    intro:
      'Plastic pipes in UPVC, HDPE and PP-R in all sizes, manufactured in Kampala under an ISO 9001:2015 Quality Management System, together with irrigation and water management systems.',
    icon: 'droplet',
    products: [
      { name: 'UPVC Pipes', note: 'Pressure and drainage pipes in all sizes.' },
      { name: 'HDPE Pipes', note: 'Flexible pipes for water supply and irrigation.' },
      { name: 'PP-R Pipes', note: 'Hot and cold water pipework for buildings.' },
      { name: 'Pipe Fittings', note: 'Elbows, tees, couplers and adaptors.' },
      { name: 'Irrigation Systems', note: 'Components for farm and garden irrigation.' },
      { name: 'Water Tanks & Accessories', note: 'Placeholder, TODO confirm range.' },
    ],
  },
  {
    slug: 'indoor-outdoor-plumbing',
    name: 'Indoor & Outdoor Plumbing',
    short: 'Indoor and outdoor plumbing, including rainwater gutters.',
    intro: 'Indoor and outdoor plumbing products for homes, commercial buildings and construction projects.',
    icon: 'wrench',
    products: [
      { name: 'Rainwater Gutters', note: 'Gutters and accessories.' },
      { name: 'Soil & Waste Pipes', note: 'Placeholder, TODO confirm range.' },
      { name: 'Valves & Taps', note: 'Placeholder, TODO confirm range.' },
      { name: 'Plumbing Accessories', note: 'Placeholder, TODO confirm range.' },
    ],
  },
  {
    slug: 'bathroom-kitchen',
    name: 'Bathroom & Kitchen Solutions',
    short: 'Fixtures and fittings for bathrooms and kitchens.',
    intro: 'Kitchen and bathroom solutions available to view at our sales office and showroom.',
    icon: 'bath',
    products: [
      { name: 'Sinks & Basins', note: 'Placeholder, TODO confirm range.' },
      { name: 'Mixers & Taps', note: 'Placeholder, TODO confirm range.' },
      { name: 'Showers', note: 'Placeholder, TODO confirm range.' },
      { name: 'Sanitaryware', note: 'Placeholder, TODO confirm range.' },
    ],
  },
  {
    slug: 'building-materials',
    name: 'Building Materials',
    short: 'Roofing, steel frame trusses and concrete products.',
    intro:
      'A diversified range of domestic and industrial building materials, from concrete products to roofing solutions and Light Gauge Steel Frame roof trusses.',
    icon: 'building',
    products: [
      { name: 'Roofing Solutions', note: 'Placeholder, TODO confirm range.' },
      { name: 'Light Gauge Steel Frame Roof Trusses', note: 'Engineered roof framing.' },
      { name: 'Concrete Products', note: 'Placeholder, TODO confirm range.' },
      { name: 'Construction Accessories', note: 'Placeholder, TODO confirm range.' },
    ],
  },
  {
    slug: 'domestic-plasticware',
    name: 'Domestic Plasticware',
    short: 'Food-grade household plastics and drinking straws.',
    intro: 'Household plastics made from food-grade raw materials, plus wrapped drinking straws.',
    icon: 'cup',
    products: [
      { name: 'Jerry Cans', note: 'Durable water and liquid containers.' },
      { name: 'Basins & Buckets', note: 'Everyday household use.' },
      { name: 'Cups, Mugs & Plates', note: 'Food-grade plasticware.' },
      { name: 'Drinking Straws', note: 'Individually wrapped.' },
      { name: 'Tiffin Boxes & Trays', note: 'Food-grade plasticware.' },
    ],
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    short: 'Brake linings and pads, truck tyres, fuel and air filters.',
    intro: 'Our automotive division, started in 2013, supplies selected spare parts from trusted international brands.',
    icon: 'car',
    products: [
      { name: 'Brake Lining & Pads', note: 'Fras-le.' },
      { name: 'Truck Tyres', note: 'Hanksugi.' },
      { name: 'Fuel & Air Filters', note: 'Hengst.' },
    ],
  },
];

export const brands = ['Wavin', 'Franke', 'Vado', 'Fras-le', 'Hanksugi', 'Hengst', 'Conmix', 'Tegra', 'Feroof', 'Smartframe'];
