import { LEGAL_NAME, SITE_URL, SITE_DESCRIPTION, OFFICES, FOUNDED } from '../config';

export const abs = (path: string) => new URL(path, SITE_URL).href;

export const organizationLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': abs('/#organization'),
  name: LEGAL_NAME,
  alternateName: 'Multiple Industries',
  url: SITE_URL,
  logo: abs('/favicon.svg'),
  foundingDate: FOUNDED,
  description: SITE_DESCRIPTION,
  email: 'response@multipleindustries.com',
  telephone: '+256414236021',
  areaServed: ['Uganda', 'East Africa'],
});

export const localBusinessLd = () =>
  OFFICES.map((o) => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': abs(`/#${o.id}`),
    name: `${LEGAL_NAME}: ${o.name}`,
    parentOrganization: { '@id': abs('/#organization') },
    url: SITE_URL,
    image: abs('/og.png'),
    telephone: o.phones.map((p) => p.tel),
    email: o.emails[0],
    address: {
      '@type': 'PostalAddress',
      streetAddress: o.street,
      ...(o.po ? { postOfficeBoxNumber: o.po.replace('P.O. Box ', '') } : {}),
      addressLocality: o.city,
      addressCountry: 'UG',
    },
  }));

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});
