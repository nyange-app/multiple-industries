/**
 * The six product categories, each mapped to a zone of the cut-away house.
 * `hit` is an SVG path in the 800x960 house coordinate system (the clickable,
 * highlightable area); `spot` is the numbered hotspot position; `crop` is a
 * square viewBox used to zoom into the zone for the category-page vignette.
 * Product lists are indicative placeholders. TODO: confirm with Multiple Industries.
 */
export interface Product {
  name: string;
  note: string;
  made?: boolean; // manufactured in-house by Multiple Industries
}

export interface Category {
  n: number;
  slug: string;
  name: string;
  zone: string; // where it lives in the house
  short: string;
  intro: string;
  buyers: string[];
  products: Product[];
  brands?: string[];
  pairs: string[]; // related slugs
  hit: string;
  spot: [number, number];
  crop: string;
}

export const categories: Category[] = [
  {
    n: 1,
    slug: 'water-management',
    name: 'Water Management',
    zone: 'The tank & the garden',
    short: 'HDPE pipes, irrigation systems and the lines that carry water from tank to field.',
    intro:
      'Move, store and use water well. We manufacture HDPE pipes in Kampala and supply irrigation systems for gardens, farms and estates, from the tank on the stand to the drip line in the bed.',
    buyers: ['Farmers & estates', 'Contractors', 'Households'],
    products: [
      { name: 'HDPE water pipes', note: 'Coils and lengths for supply lines, boreholes and farm mains.', made: true },
      { name: 'Drip irrigation lines', note: 'Drip tape, emitters and connectors for beds and greenhouses.' },
      { name: 'Sprinklers & garden fittings', note: 'Sprinkler heads, risers, hose connectors and valves.' },
      { name: 'Tank connections', note: 'Outlets, ball valves and fittings from storage tank to supply line.' },
      { name: 'Compression fittings', note: 'Couplers, tees, elbows and end caps for HDPE pipe.' },
      { name: 'Irrigation accessories', note: 'Filters, pressure regulators, valves and joiners.' },
    ],
    pairs: ['indoor-outdoor-plumbing', 'building-materials'],
    hit: 'M596 404h176v296H596z M418 812h368v132H418z',
    spot: [684, 492],
    crop: '350 420 450 450',
  },
  {
    n: 2,
    slug: 'indoor-outdoor-plumbing',
    name: 'Indoor & Outdoor Plumbing',
    zone: 'Under the floor & in the walls',
    short: 'UPVC and PP-R pipes and fittings for supply, soil and waste lines.',
    intro:
      'The pipes nobody sees and everybody relies on. We manufacture UPVC and PP-R pipes in all common sizes, with the fittings to connect supply, hot water, soil and waste lines inside and outside the house.',
    buyers: ['Plumbers', 'Contractors', 'Hardware stores'],
    products: [
      { name: 'UPVC pressure pipes', note: 'Cold-water supply mains and service lines.', made: true },
      { name: 'UPVC soil & waste pipes', note: 'Drainage from bathroom, kitchen and roof to sewer or soak pit.', made: true },
      { name: 'PP-R hot & cold pipes', note: 'Heat-fused water pipes for indoor hot and cold supply.', made: true },
      { name: 'Pipe fittings', note: 'Elbows, tees, sockets, reducers and adaptors for every line.' },
      { name: 'Valves & stopcocks', note: 'Gate valves, ball valves and stopcocks to control the flow.' },
      { name: 'Solvent cement & tools', note: 'Jointing cement, PP-R welders and pipe cutters.' },
    ],
    brands: ['Wavin', 'Polynum', 'PEX'],
    pairs: ['bathroom-kitchen-solutions', 'water-management'],
    hit: 'M58 716h624v76H58z',
    spot: [372, 754],
    crop: '200 520 440 440',
  },
  {
    n: 3,
    slug: 'bathroom-kitchen-solutions',
    name: 'Bathroom & Kitchen Solutions',
    zone: 'Kitchen & bathroom',
    short: 'Sinks, taps, showers and fittings that finish the rooms people use most.',
    intro:
      'Where the plumbing meets daily life. Kitchen sinks, taps and mixers, showers and bathroom fittings for new builds and refits.',
    buyers: ['Households', 'Contractors', 'Hotels & institutions'],
    products: [
      { name: 'Kitchen sinks', note: 'Single and double bowl sinks with drainers.' },
      { name: 'Taps & mixers', note: 'Kitchen and basin taps, mixers and pillar taps.' },
      { name: 'Showers', note: 'Shower heads, arms, valves and complete shower sets.' },
      { name: 'Bathroom fittings', note: 'Basins, cisterns, wastes and accessories.' },
      { name: 'Traps & wastes', note: 'Bottle traps, floor drains and flexible connectors.' },
      { name: 'Kitchen & bath accessories', note: 'Towel rails, soap holders and finishing pieces.' },
    ],
    brands: ['Franke', 'Vado'],
    pairs: ['indoor-outdoor-plumbing', 'domestic-plasticware'],
    hit: 'M84 396h302v304H84z',
    spot: [232, 560],
    crop: '50 370 370 370',
  },
  {
    n: 4,
    slug: 'building-materials',
    name: 'Building Materials',
    zone: 'Roof, trusses & gutters',
    short: 'Light Gauge Steel roof trusses, roofing, gutters and concrete products.',
    intro:
      'From the foundation up to the ridge. Light Gauge Steel Frame roof trusses, roofing solutions, rainwater gutters and concrete products, supplied as a single stop for building and construction.',
    buyers: ['Contractors', 'Developers', 'Self-builders'],
    products: [
      { name: 'Light Gauge Steel Frame roof trusses', note: 'Light gauge steel trusses for pitched roofs on homes and commercial buildings.' },
      { name: 'Roofing solutions', note: 'Roofing sheets, ridges and accessories.' },
      { name: 'Rainwater gutters', note: 'Gutters, downpipes and brackets to carry rain to the tank.' },
      { name: 'Concrete products', note: 'Blocks, pavers and precast products for walls and yards.' },
      { name: 'Building chemicals', note: 'Waterproofing and admixtures for durable concrete.' },
      { name: 'Fixings & accessories', note: 'Screws, brackets and the small parts every site needs.' },
    ],
    brands: ['Smartframe', 'Feroof', 'Conmix', 'Tegra', 'Apex'],
    pairs: ['water-management', 'indoor-outdoor-plumbing'],
    hit: 'M16 410L305 176L608 410Z',
    spot: [305, 318],
    crop: '6 150 600 600',
  },
  {
    n: 5,
    slug: 'domestic-plasticware',
    name: 'Domestic Plasticware',
    zone: 'The store room',
    short: 'Jerry cans, basins, buckets, cups, plates and wrapped drinking straws.',
    intro:
      'Made in our Kampala factory from food-grade raw materials. Jerry cans, basins, buckets, cups, mugs, plates, wrapped drinking straws, tiffin boxes and trays for homes, shops and caterers.',
    buyers: ['Households', 'Shops & wholesalers', 'Caterers'],
    products: [
      { name: 'Jerry cans', note: 'For carrying and storing water and other liquids.', made: true },
      { name: 'Basins & buckets', note: 'For washing, carrying and storage, in many sizes and colours.', made: true },
      { name: 'Cups, mugs & plates', note: 'Everyday tableware in food-grade plastic.', made: true },
      { name: 'Wrapped drinking straws', note: 'Individually wrapped straws for shops, cafes and caterers.', made: true },
      { name: 'Tiffin boxes', note: 'Food carriers for school, work and travel.', made: true },
      { name: 'Trays', note: 'Serving and storage trays.', made: true },
    ],
    pairs: ['bathroom-kitchen-solutions', 'water-management'],
    hit: 'M396 396h134v304H396z',
    spot: [460, 436],
    crop: '300 388 320 320',
  },
  {
    n: 6,
    slug: 'automotive',
    name: 'Automotive',
    zone: 'The truck in the yard',
    short: 'Brake linings and pads, truck tyres, filters, and freight across East Africa.',
    intro:
      'Our automotive division, started in 2013, keeps trucks and vehicles moving with brake linings and pads, truck tyres and fuel and air filters. Since 2019 Inland Freight Services has carried goods across East Africa.',
    buyers: ['Fleet owners', 'Transporters', 'Garages'],
    products: [
      { name: 'Brake linings & pads', note: 'Fras-le brake linings and pads for trucks and vehicles.' },
      { name: 'Truck tyres', note: 'Hanksugi truck tyres.' },
      { name: 'Fuel & air filters', note: 'Hengst fuel and air filters.' },
      { name: 'Batteries', note: 'Vehicle batteries. TODO: confirm range.' },
      { name: 'Trailers', note: 'Trailers and parts. TODO: confirm range.' },
      { name: 'Inland Freight Services', note: 'Transport and logistics across East Africa, since 2019.' },
    ],
    brands: ['Fras-le', 'Hanksugi', 'Hengst', 'Veer'],
    pairs: ['building-materials', 'water-management'],
    hit: 'M28 812h352v132H28z',
    spot: [352, 832],
    crop: '0 560 400 400',
  },
];

export const bySlug = (slug: string) => categories.find((c) => c.slug === slug);
