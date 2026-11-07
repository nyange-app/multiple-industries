/**
 * The six product categories, one "enquiry form" each.
 * TODO: product lists are indicative placeholders drawn from the old site's
 * copy. The client must confirm names, sizes and ranges before launch.
 */
export type Paper = 'white' | 'canary' | 'pink';

export interface Item {
  ref: string;
  name: string;
  spec: string;
  unit: string;
}

export interface Category {
  slug: string;
  code: string;
  name: string;
  paper: Paper;
  short: string;
  intro: string;
  note: string;
  items: Item[];
}

export const categories: Category[] = [
  {
    slug: 'water-management',
    code: 'WM',
    name: 'Water Management',
    paper: 'white',
    short: 'UPVC, HDPE and PP-R water pipes, fittings and irrigation systems.',
    intro:
      'Pipes we make in Kampala for water supply, distribution and irrigation, in all sizes. They are made under our ISO 9001:2015 quality system and certified by UNBS.',
    note: 'Sizes and pressure classes to be confirmed on enquiry',
    items: [
      { ref: 'WM-01', name: 'UPVC pressure pipes', spec: 'Water supply and distribution, all sizes', unit: 'lengths' },
      { ref: 'WM-02', name: 'HDPE pipes', spec: 'Coils and lengths for mains and boreholes', unit: 'rolls' },
      { ref: 'WM-03', name: 'PP-R water pipes', spec: 'Hot and cold domestic supply', unit: 'lengths' },
      { ref: 'WM-04', name: 'PP-R fittings', spec: 'Elbows, tees, sockets, unions', unit: 'pcs' },
      { ref: 'WM-05', name: 'HDPE compression fittings', spec: 'Couplers, adaptors, end caps', unit: 'pcs' },
      { ref: 'WM-06', name: 'Irrigation systems', spec: 'Drip and sprinkler, farm and garden', unit: 'sets' },
      { ref: 'WM-07', name: 'Valves and taps', spec: 'Gate, ball and stop valves', unit: 'pcs' },
    ],
  },
  {
    slug: 'indoor-outdoor-plumbing',
    code: 'PL',
    name: 'Indoor & Outdoor Plumbing',
    paper: 'canary',
    short: 'Soil and waste pipes, fittings and rainwater gutters.',
    intro:
      'Plumbing for inside and outside the building: drainage, soil and waste lines, plus rainwater gutters and downpipes.',
    note: 'Colours and profiles to be confirmed on enquiry',
    items: [
      { ref: 'PL-01', name: 'UPVC soil and waste pipes', spec: 'Drainage for homes and buildings', unit: 'lengths' },
      { ref: 'PL-02', name: 'Drainage fittings', spec: 'Bends, junctions, traps, access plugs', unit: 'pcs' },
      { ref: 'PL-03', name: 'Rainwater gutters', spec: 'Gutters, brackets and outlets', unit: 'lengths' },
      { ref: 'PL-04', name: 'Downpipes', spec: 'With shoes and clips', unit: 'lengths' },
      { ref: 'PL-05', name: 'Solvent cement and sealants', spec: 'For UPVC and PP-R joints', unit: 'tins' },
    ],
  },
  {
    slug: 'bathroom-kitchen',
    code: 'BK',
    name: 'Bathroom & Kitchen Solutions',
    paper: 'pink',
    short: 'Sinks, taps, showers and fittings for kitchens and bathrooms.',
    intro:
      'Finishing items for kitchens and bathrooms, available to see at the 8th Street showroom.',
    note: 'Models and finishes to be confirmed at the showroom',
    items: [
      { ref: 'BK-01', name: 'Kitchen sinks', spec: 'Single and double bowl', unit: 'pcs' },
      { ref: 'BK-02', name: 'Kitchen mixers and taps', spec: 'Deck and wall mounted', unit: 'pcs' },
      { ref: 'BK-03', name: 'Showers and shower sets', spec: 'Fixed and handheld', unit: 'sets' },
      { ref: 'BK-04', name: 'Basin taps and mixers', spec: 'For washbasins', unit: 'pcs' },
      { ref: 'BK-05', name: 'Bathroom accessories', spec: 'Towel rails, holders, wastes', unit: 'pcs' },
    ],
  },
  {
    slug: 'building-materials',
    code: 'BM',
    name: 'Building Materials',
    paper: 'white',
    short: 'Roofing, LGS steel-frame roof trusses and concrete products.',
    intro:
      'Materials for the structure and roof, from concrete products to Light Gauge Steel Frame roof trusses and roofing solutions.',
    note: 'Quantities and site delivery to be confirmed on enquiry',
    items: [
      { ref: 'BM-01', name: 'Light Gauge Steel Frame roof trusses', spec: 'Designed for your roof span', unit: 'sets' },
      { ref: 'BM-02', name: 'Roofing sheets', spec: 'Profiles and colours on request', unit: 'sheets' },
      { ref: 'BM-03', name: 'Roofing accessories', spec: 'Ridges, flashings, fixings', unit: 'pcs' },
      { ref: 'BM-04', name: 'Concrete products', spec: 'Admixtures and site products', unit: 'units' },
      { ref: 'BM-05', name: 'Waterproofing', spec: 'For roofs, slabs and wet areas', unit: 'units' },
    ],
  },
  {
    slug: 'domestic-plasticware',
    code: 'DP',
    name: 'Domestic Plasticware',
    paper: 'canary',
    short: 'Jerry cans, basins, buckets, cups, plates and wrapped straws.',
    intro:
      'Everyday household plastics made from food-grade raw materials, plus wrapped drinking straws. Sold to households and in bulk to traders.',
    note: 'Colours and carton quantities to be confirmed on enquiry',
    items: [
      { ref: 'DP-01', name: 'Jerry cans', spec: 'Various capacities', unit: 'pcs' },
      { ref: 'DP-02', name: 'Basins and buckets', spec: 'With and without lids', unit: 'pcs' },
      { ref: 'DP-03', name: 'Cups and mugs', spec: 'Food-grade', unit: 'dozen' },
      { ref: 'DP-04', name: 'Plates and trays', spec: 'Food-grade', unit: 'dozen' },
      { ref: 'DP-05', name: 'Tiffin boxes', spec: 'Lunch and food storage', unit: 'pcs' },
      { ref: 'DP-06', name: 'Wrapped drinking straws', spec: 'Individually wrapped, bulk packs', unit: 'cartons' },
    ],
  },
  {
    slug: 'automotive',
    code: 'AU',
    name: 'Automotive',
    paper: 'pink',
    short: 'Brake linings and pads, truck tyres, fuel and air filters.',
    intro:
      'Since 2013 our automotive division has supplied selected spare parts for trucks and fleets: Fras-le brake linings and pads, Hanksugi truck tyres and Hengst fuel and air filters.',
    note: 'Give vehicle make and model when you enquire',
    items: [
      { ref: 'AU-01', name: 'Fras-le brake linings', spec: 'For trucks and trailers', unit: 'sets' },
      { ref: 'AU-02', name: 'Fras-le brake pads', spec: 'Commercial vehicles', unit: 'sets' },
      { ref: 'AU-03', name: 'Hanksugi truck tyres', spec: 'Sizes on request', unit: 'pcs' },
      { ref: 'AU-04', name: 'Hengst fuel filters', spec: 'Give engine model', unit: 'pcs' },
      { ref: 'AU-05', name: 'Hengst air filters', spec: 'Give engine model', unit: 'pcs' },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

/** Brands and partners seen in old-site asset filenames. TODO: confirm and supply logos. */
export const brands = [
  'Wavin', 'Franke', 'Vado', 'Fras-le', 'Conmix', 'Tegra', 'Feroof', 'Smartframe',
  'Polynum', 'Apex', 'PEX', 'Gutters', 'Batteries', 'Trailers', 'Veer',
];
