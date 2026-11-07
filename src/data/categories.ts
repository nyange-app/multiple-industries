/**
 * The six product categories. Product lists are INDICATIVE PLACEHOLDERS drawn
 * from the old site's About text and asset names.
 * TODO: confirm every list, size range and brand with Multiple Industries.
 */

/** Material keys map to pipe swatch colours and, for plastics, a resin code. */
export type Material = 'hdpe' | 'pvc' | 'ppr' | 'pp' | 'steel' | 'mixed';

export interface Product {
  name: string;
  note: string;
  material?: Material;
}

export interface Category {
  slug: string;
  name: string;
  short: string;
  icon: 'drop' | 'tap' | 'sink' | 'truss' | 'bucket' | 'tyre';
  lead: string;
  body: string;
  products: Product[];
  forWho: string[];
}

export const MATERIALS: Record<Material, { label: string; resin?: { code: number; abbr: string } }> = {
  hdpe: { label: 'HDPE', resin: { code: 2, abbr: 'HDPE' } },
  pvc: { label: 'uPVC', resin: { code: 3, abbr: 'PVC' } },
  ppr: { label: 'PP-R', resin: { code: 5, abbr: 'PP' } },
  pp: { label: 'Food-grade plastic' },
  steel: { label: 'Steel' },
  mixed: { label: 'Supplied range' },
};

export const CATEGORIES: Category[] = [
  {
    slug: 'water-management',
    name: 'Water Management',
    short: 'HDPE, UPVC and PP-R water pipes, fittings and irrigation systems.',
    icon: 'drop',
    lead: 'Pipes we make here in Kampala, in all sizes, plus the irrigation systems that carry water from source to field.',
    body: 'We manufacture UPVC, HDPE and PP-R water pipes and supply irrigation systems as one stop for water supply, boreholes, farms and estates across Uganda and the East African Community. Our pipes are made under an ISO 9001:2015 Quality Management System, and our products are certified by the Uganda National Bureau of Standards (UNBS).',
    products: [
      { name: 'HDPE water pipes', note: 'Coils and lengths for mains, boreholes and farm supply.', material: 'hdpe' },
      { name: 'UPVC pressure pipes', note: 'Rigid pipes for water supply lines.', material: 'pvc' },
      { name: 'PP-R water pipes', note: 'Pipes for hot and cold water distribution.', material: 'ppr' },
      { name: 'Pipe fittings', note: 'Couplers, elbows, tees and adaptors to match.', material: 'mixed' },
      { name: 'Irrigation systems', note: 'Drip and sprinkler systems for farms and gardens.', material: 'mixed' },
      { name: 'Rainwater gutters', note: 'Gutters and downpipes for rainwater harvesting.', material: 'pvc' },
    ],
    forWho: ['Contractors and plumbers', 'Farms and irrigation schemes', 'Estates and water projects'],
  },
  {
    slug: 'indoor-outdoor-plumbing',
    name: 'Indoor & Outdoor Plumbing',
    short: 'Pipes, fittings and gutters for inside the house and out.',
    icon: 'tap',
    lead: 'Everything between the water meter and the tap, and from the roof down to the drain.',
    body: 'Supply and waste pipework, fittings and rainwater gutters for homes, schools, offices and commercial sites.',
    products: [
      { name: 'UPVC soil and waste pipes', note: 'Drainage pipework and fittings.', material: 'pvc' },
      { name: 'PP-R hot and cold pipes', note: 'Pipes and fittings for indoor plumbing.', material: 'ppr' },
      { name: 'PEX pipes and fittings', note: 'Flexible pipework systems.', material: 'mixed' },
      { name: 'Rainwater gutters', note: 'Gutters, downpipes and brackets.', material: 'pvc' },
      { name: 'Valves and taps', note: 'Stop valves and outdoor taps.', material: 'mixed' },
    ],
    forWho: ['Plumbers and fundis', 'Home builders', 'Facility managers'],
  },
  {
    slug: 'bathroom-kitchen',
    name: 'Bathroom & Kitchen Solutions',
    short: 'Sinks, taps, showers and fittings for kitchens and bathrooms.',
    icon: 'sink',
    lead: 'Finished fittings for the rooms people use most, available in our 8th Street showroom.',
    body: 'Kitchen and bathroom fittings from established brands, selected to work with the pipes and plumbing we supply.',
    products: [
      { name: 'Kitchen sinks', note: 'Stainless steel sinks and accessories.', material: 'steel' },
      { name: 'Taps and mixers', note: 'Kitchen and basin taps and mixers.', material: 'mixed' },
      { name: 'Showers', note: 'Shower sets and fittings.', material: 'mixed' },
      { name: 'Bathroom accessories', note: 'Wastes, traps and fittings.', material: 'mixed' },
    ],
    forWho: ['Households', 'Interior fit-out contractors', 'Hotels and offices'],
  },
  {
    slug: 'building-materials',
    name: 'Building Materials',
    short: 'Roofing, Light Gauge Steel Frame roof trusses and concrete products.',
    icon: 'truss',
    lead: 'From foundations to roof: the materials that go into a building, from one supplier.',
    body: 'We supply building materials including Light Gauge Steel Frame roof trusses, roofing solutions, concrete products and rainwater gutters.',
    products: [
      { name: 'Light Gauge Steel Frame roof trusses', note: 'Pre-engineered steel roof structures.', material: 'steel' },
      { name: 'Roofing solutions', note: 'Roofing sheets and accessories.', material: 'steel' },
      { name: 'Concrete products', note: 'Concrete products for construction sites.', material: 'mixed' },
      { name: 'Rainwater gutters', note: 'Complete gutter systems.', material: 'pvc' },
    ],
    forWho: ['Contractors', 'Developers', 'Self-builders'],
  },
  {
    slug: 'domestic-plasticware',
    name: 'Domestic Plasticware',
    short: 'Jerry cans, basins, buckets, cups, plates, tiffin boxes and drinking straws.',
    icon: 'bucket',
    lead: 'Everyday household plastics, made in our own factory from food-grade raw materials.',
    body: 'We manufacture domestic plasticware and wrapped drinking straws using food-grade raw materials, for households, shops, schools and caterers.',
    products: [
      { name: 'Jerry cans', note: 'For water collection and storage.', material: 'pp' },
      { name: 'Basins and buckets', note: 'Everyday household sizes.', material: 'pp' },
      { name: 'Cups and mugs', note: 'For home, school and catering use.', material: 'pp' },
      { name: 'Plates and trays', note: 'Durable tableware.', material: 'pp' },
      { name: 'Tiffin boxes', note: 'Food carriers.', material: 'pp' },
      { name: 'Wrapped drinking straws', note: 'Individually wrapped straws.', material: 'pp' },
    ],
    forWho: ['Households', 'Shops and wholesalers', 'Schools and caterers'],
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    short: 'Brake linings and pads, truck tyres and filters.',
    icon: 'tyre',
    lead: 'Selected spare parts for trucks and vehicles, supplied since our automotive division opened in 2013.',
    body: 'Our automotive division started in 2013 and supplies Fras-le brake linings and pads, Hanksugi truck tyres and Hengst fuel and air filters.',
    products: [
      { name: 'Fras-le brake linings and pads', note: 'For trucks and commercial vehicles.', material: 'mixed' },
      { name: 'Hanksugi truck tyres', note: 'Tyres for trucks and trailers.', material: 'mixed' },
      { name: 'Hengst fuel and air filters', note: 'Filters for engines.', material: 'mixed' },
      { name: 'Batteries', note: 'TODO: confirm range.', material: 'mixed' },
    ],
    forWho: ['Fleet operators', 'Garages', 'Transporters'],
  },
];

export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
