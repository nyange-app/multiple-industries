/**
 * The six product departments. Product lists are PLACEHOLDERS assembled from
 * the company profile — TODO: confirm items, sizes and brands with sales.
 */
export type Glyph = 'water' | 'plumbing' | 'bath' | 'building' | 'plastic' | 'auto';

export interface ProductRow {
  name: string;
  detail: string;
}
export interface ProductGroup {
  id: string;
  title: string;
  rows: ProductRow[];
}
export interface Category {
  slug: string;
  no: string;
  name: string;
  glyph: Glyph;
  /** One line for the index row */
  short: string;
  /** Standfirst on the category page */
  standfirst: string;
  overview: string[];
  groups: ProductGroup[];
  audiences: string[];
}

const ask = 'Sizes & stock: ask sales';

export const categories: Category[] = [
  {
    slug: 'water-management',
    no: '01',
    name: 'Water Management',
    glyph: 'water',
    short: 'UPVC, HDPE and PP-R water pipes, made in Kampala, plus irrigation systems.',
    standfirst:
      'Plastic pipes are at the core of what Multiple Industries manufactures. UPVC, HDPE and PP-R water pipes, supplied alongside the irrigation systems that carry water to the field.',
    overview: [
      'Our Quality Policy commits us to manufacture and supply quality UPVC, HDPE and PP-R pipes in all sizes, under a Quality Management System in accordance with ISO 9001:2015. Products are certified by the Uganda National Bureau of Standards (UNBS).',
      'Whether you are running a water supply line, a borehole connection or a farm irrigation layout, our sales team at the showroom can help you choose the right pipe class and fittings.',
    ],
    groups: [
      {
        id: 'upvc',
        title: 'UPVC pipes',
        rows: [
          { name: 'UPVC pressure pipes', detail: 'Water supply and distribution. ' + ask },
          { name: 'UPVC fittings', detail: 'Couplers, elbows, tees, reducers. ' + ask },
          { name: 'UPVC solvent cement', detail: 'For jointing UPVC systems. ' + ask },
        ],
      },
      {
        id: 'hdpe',
        title: 'HDPE pipes',
        rows: [
          { name: 'HDPE pressure pipes', detail: 'Coils and lengths for mains and boreholes. ' + ask },
          { name: 'HDPE compression fittings', detail: 'For HDPE connections. ' + ask },
        ],
      },
      {
        id: 'ppr',
        title: 'PP-R pipes',
        rows: [
          { name: 'PP-R hot & cold water pipes', detail: 'For in-building water systems. ' + ask },
          { name: 'PP-R fittings', detail: 'Heat-fusion fittings and adaptors. ' + ask },
        ],
      },
      {
        id: 'irrigation',
        title: 'Irrigation systems',
        rows: [
          { name: 'Irrigation pipes & laterals', detail: 'For farm and garden layouts. ' + ask },
          { name: 'Irrigation fittings & accessories', detail: 'Connectors, valves and emitters. ' + ask },
        ],
      },
    ],
    audiences: ['Contractors & plumbers', 'Farmers & irrigation projects', 'Water utilities & NGOs'],
  },
  {
    slug: 'indoor-outdoor-plumbing',
    no: '02',
    name: 'Indoor & Outdoor Plumbing',
    glyph: 'plumbing',
    short: 'Plumbing for inside the walls and outside them, including rainwater gutters.',
    standfirst:
      'Everything between the mains and the tap: indoor and outdoor plumbing systems, and rainwater gutters to carry water off the roof.',
    overview: [
      'Our plumbing range sits alongside the pipes we manufacture, so contractors can source a complete job from one counter.',
    ],
    groups: [
      {
        id: 'indoor',
        title: 'Indoor plumbing',
        rows: [
          { name: 'Waste & drainage pipes', detail: ask },
          { name: 'Valves, taps & connectors', detail: ask },
        ],
      },
      {
        id: 'outdoor',
        title: 'Outdoor plumbing & gutters',
        rows: [
          { name: 'Rainwater gutters & downpipes', detail: ask },
          { name: 'Outdoor drainage', detail: ask },
        ],
      },
    ],
    audiences: ['Plumbers', 'Contractors', 'Home builders'],
  },
  {
    slug: 'bathroom-kitchen-solutions',
    no: '03',
    name: 'Bathroom & Kitchen Solutions',
    glyph: 'bath',
    short: 'Sinks, sanitaryware and fittings for kitchens and bathrooms.',
    standfirst:
      'Kitchen and bathroom solutions for homes, hotels and offices, available to see at our Sales Office & Showroom on 8th Street.',
    overview: ['Visit the showroom at Plot 13/23, 8th Street Industrial Area to see the range.'],
    groups: [
      {
        id: 'kitchen',
        title: 'Kitchen',
        rows: [
          { name: 'Kitchen sinks', detail: ask },
          { name: 'Kitchen mixers & taps', detail: ask },
        ],
      },
      {
        id: 'bathroom',
        title: 'Bathroom',
        rows: [
          { name: 'Sanitaryware', detail: ask },
          { name: 'Showers, mixers & accessories', detail: ask },
        ],
      },
    ],
    audiences: ['Households', 'Hotels & developers', 'Interior fit-out'],
  },
  {
    slug: 'building-materials',
    no: '04',
    name: 'Building Materials',
    glyph: 'building',
    short: 'Roofing solutions, Light Gauge Steel Frame roof trusses and concrete products.',
    standfirst:
      'From the foundations to the roof: concrete products, roofing solutions and Light Gauge Steel Frame roof trusses.',
    overview: [
      'A one stop source for building and construction is the heart of our vision. Talk to sales about supply for your site.',
    ],
    groups: [
      {
        id: 'roofing',
        title: 'Roofing',
        rows: [
          { name: 'Light Gauge Steel Frame roof trusses', detail: ask },
          { name: 'Roofing solutions', detail: ask },
        ],
      },
      {
        id: 'concrete',
        title: 'Concrete products',
        rows: [{ name: 'Concrete products', detail: ask }],
      },
    ],
    audiences: ['Contractors', 'Developers', 'Self-builders'],
  },
  {
    slug: 'domestic-plasticware',
    no: '05',
    name: 'Domestic Plasticware',
    glyph: 'plastic',
    short: 'Jerry cans, basins, buckets, cups, plates and wrapped drinking straws.',
    standfirst:
      'Household plastics for every home, made from food-grade raw materials: jerry cans, basins, buckets, cups, mugs, plates, wrapped drinking straws, tiffin boxes and trays.',
    overview: ['Available for trade and wholesale buyers. Ask sales about volumes.'],
    groups: [
      {
        id: 'household',
        title: 'Household',
        rows: [
          { name: 'Jerry cans', detail: ask },
          { name: 'Basins & buckets', detail: ask },
          { name: 'Tiffin boxes & trays', detail: ask },
        ],
      },
      {
        id: 'tableware',
        title: 'Tableware & straws',
        rows: [
          { name: 'Cups, mugs & plates', detail: ask },
          { name: 'Wrapped drinking straws', detail: ask },
        ],
      },
    ],
    audiences: ['Households', 'Retailers & wholesalers', 'Hospitality'],
  },
  {
    slug: 'automotive',
    no: '06',
    name: 'Automotive',
    glyph: 'auto',
    short: 'Fras-le brake linings & pads, Hanksugi truck tyres, Hengst filters.',
    standfirst:
      'Our automotive division opened in 2013, supplying selected automotive products: Fras-le brake lining and pads, Hanksugi truck tyres and Hengst fuel and air filters.',
    overview: [
      'Since 2019, Inland Freight Services has added transport and logistics across East Africa.',
    ],
    groups: [
      {
        id: 'brakes',
        title: 'Brakes',
        rows: [{ name: 'Fras-le brake lining & pads', detail: ask }],
      },
      {
        id: 'tyres-filters',
        title: 'Tyres & filters',
        rows: [
          { name: 'Hanksugi truck tyres', detail: ask },
          { name: 'Hengst fuel & air filters', detail: ask },
        ],
      },
    ],
    audiences: ['Fleet operators', 'Transporters', 'Garages'],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
