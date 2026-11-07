/**
 * The six product categories. Product lists are INDICATIVE PLACEHOLDERS drawn from the
 * company description. TODO: confirm every line, size range and brand with the client.
 */
export interface ProductLine {
  name: string;
  note?: string;
}

export interface ProductGroup {
  title: string;
  lines: ProductLine[];
}

export interface Category {
  slug: string;
  num: string;
  name: string;
  /** Short label for compact index rows. */
  short: string;
  /** One-line summary shown in the index. */
  summary: string;
  /** Paragraph at the top of the category page. */
  intro: string;
  /** Who usually buys from this category. */
  buyers: string[];
  groups: ProductGroup[];
}

export const categories: Category[] = [
  {
    slug: 'water-management',
    num: '01',
    name: 'Water Management',
    short: 'Water',
    summary: 'UPVC, HDPE and PP-R water pipes, fittings and irrigation systems.',
    intro:
      'Plastic water pipes manufactured at our Kampala factory, from mains supply to the farm. UPVC, HDPE and PP-R pipes in all sizes, with the fittings and irrigation systems to complete the job.',
    buyers: ['Contractors', 'Water projects', 'Farms & irrigation', 'Plumbers'],
    groups: [
      {
        title: 'Pressure pipes',
        lines: [
          { name: 'UPVC pressure pipes', note: 'All sizes. Made in Kampala.' },
          { name: 'HDPE pipes', note: 'Coils and lengths for supply lines.' },
          { name: 'PP-R water pipes', note: 'Hot and cold water systems.' },
        ],
      },
      {
        title: 'Fittings',
        lines: [
          { name: 'UPVC fittings', note: 'Elbows, tees, couplers, reducers.' },
          { name: 'HDPE compression fittings' },
          { name: 'PP-R fittings and valves' },
        ],
      },
      {
        title: 'Irrigation systems',
        lines: [
          { name: 'Drip irrigation', note: 'Placeholder. TODO confirm range.' },
          { name: 'Sprinkler systems', note: 'Placeholder. TODO confirm range.' },
          { name: 'Water storage and distribution', note: 'Placeholder. TODO confirm range.' },
        ],
      },
    ],
  },
  {
    slug: 'plumbing',
    num: '02',
    name: 'Indoor & Outdoor Plumbing',
    short: 'Plumbing',
    summary: 'Supply, waste and drainage pipework, plus rainwater gutters.',
    intro:
      'Everything between the mains and the drain: indoor supply and waste pipework, outdoor drainage, and rainwater gutter systems for homes and commercial buildings.',
    buyers: ['Plumbers', 'Contractors', 'Home builders'],
    groups: [
      {
        title: 'Indoor plumbing',
        lines: [
          { name: 'PP-R hot and cold supply pipes' },
          { name: 'UPVC soil and waste pipes' },
          { name: 'Traps and waste fittings' },
        ],
      },
      {
        title: 'Outdoor plumbing',
        lines: [
          { name: 'Drainage pipes and fittings' },
          { name: 'Inspection chambers', note: 'Placeholder. TODO confirm.' },
        ],
      },
      {
        title: 'Rainwater',
        lines: [
          { name: 'Rainwater gutters' },
          { name: 'Downpipes and brackets' },
        ],
      },
    ],
  },
  {
    slug: 'bathroom-kitchen',
    num: '03',
    name: 'Bathroom & Kitchen Solutions',
    short: 'Bath & Kitchen',
    summary: 'Sinks, taps, showers and fittings for kitchens and bathrooms.',
    intro:
      'Finished kitchen and bathroom solutions to complete a building: sinks, taps, showers and sanitary fittings, available to see at the 8th Street showroom.',
    buyers: ['Households', 'Interior fit-out', 'Contractors'],
    groups: [
      {
        title: 'Kitchen',
        lines: [
          { name: 'Kitchen sinks', note: 'Placeholder. TODO confirm brands.' },
          { name: 'Kitchen mixers and taps' },
        ],
      },
      {
        title: 'Bathroom',
        lines: [
          { name: 'Showers and shower mixers' },
          { name: 'Basin taps' },
          { name: 'Sanitary ware and accessories', note: 'Placeholder. TODO confirm.' },
        ],
      },
    ],
  },
  {
    slug: 'building-materials',
    num: '04',
    name: 'Building Materials',
    short: 'Building',
    summary: 'Roofing solutions, Light Gauge Steel Frame roof trusses and concrete products.',
    intro:
      'From foundation to roof: concrete products, roofing solutions and Light Gauge Steel Frame roof trusses, supplied as part of one order with your pipework.',
    buyers: ['Contractors', 'Developers', 'Home builders'],
    groups: [
      {
        title: 'Roofing',
        lines: [
          { name: 'Light Gauge Steel Frame roof trusses' },
          { name: 'Roofing solutions', note: 'Placeholder. TODO confirm range.' },
        ],
      },
      {
        title: 'Structure',
        lines: [
          { name: 'Concrete products', note: 'Placeholder. TODO confirm range.' },
          { name: 'General building materials', note: 'Placeholder. TODO confirm range.' },
        ],
      },
    ],
  },
  {
    slug: 'domestic-plasticware',
    num: '05',
    name: 'Domestic Plasticware',
    short: 'Plasticware',
    summary: 'Jerry cans, basins, buckets, tableware and wrapped drinking straws.',
    intro:
      'Everyday household plastics made from food-grade raw materials: jerry cans, basins and buckets, cups, mugs and plates, tiffin boxes, trays and wrapped drinking straws.',
    buyers: ['Households', 'Retailers & wholesalers', 'Hospitality'],
    groups: [
      {
        title: 'Storage & carrying',
        lines: [{ name: 'Jerry cans' }, { name: 'Basins' }, { name: 'Buckets' }],
      },
      {
        title: 'Tableware',
        lines: [
          { name: 'Cups and mugs' },
          { name: 'Plates' },
          { name: 'Tiffin boxes' },
          { name: 'Trays' },
        ],
      },
      {
        title: 'Straws',
        lines: [{ name: 'Wrapped drinking straws', note: 'Individually wrapped.' }],
      },
    ],
  },
  {
    slug: 'automotive',
    num: '06',
    name: 'Automotive',
    short: 'Automotive',
    summary: 'Brake linings and pads, truck tyres, fuel and air filters.',
    intro:
      'Our automotive division, established in 2013, supplies selected spare parts for trucks and vehicles: Fras-le brake linings and pads, Hanksugi truck tyres and Hengst fuel and air filters.',
    buyers: ['Fleet operators', 'Garages', 'Transporters'],
    groups: [
      {
        title: 'Brakes',
        lines: [{ name: 'Fras-le brake linings' }, { name: 'Fras-le brake pads' }],
      },
      {
        title: 'Tyres',
        lines: [{ name: 'Hanksugi truck tyres' }],
      },
      {
        title: 'Filters',
        lines: [{ name: 'Hengst fuel filters' }, { name: 'Hengst air filters' }],
      },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
