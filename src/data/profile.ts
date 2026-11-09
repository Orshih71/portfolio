// Everything here comes from the public resume. Nothing internal to eBay
// (service names, unpublished metrics, ticket details) belongs on this site.

import ebayLogo from '../assets/logos/ebay.svg';
import tdbLogo from '../assets/logos/tdb.png';
import miuLogo from '../assets/logos/miu.svg';
import numLogo from '../assets/logos/num.png';

export const profile = {
  name: 'Bat-Orshikh Baatar',
  shortName: 'Bat',
  title: 'Senior Software Engineer',
  focus: 'Java and distributed systems',
  tagline:
    'I build backend services for high-traffic e-commerce, including eBay category pages averaging over 100 million hits a day.',
  availability: 'Open to senior software engineer, full-stack and AI platform roles',
  location: 'San Jose, California',
  email: 'bat.orshikh.baatar@gmail.com',
  resume: '/Bat-Orshikh-Baatar-Resume.pdf',
  links: {
    github: 'https://github.com/Orshih71',
    linkedin: 'https://www.linkedin.com/in/batbaatar71',
  },
};

export const impact = [
  { value: '100M+', label: 'category-page hits a day' },
  { value: '+18.07%', label: 'GMB from one filter change' },
  { value: '−40%', label: 'CPU, GraphQL vs REST' },
  { value: '$2.2M', label: 'a year, annualized from an ads test' },
];

export type Work = {
  title: string;
  problem: string;
  built: string;
  result: string;
  tags: string[];
};

export const work: Work[] = [
  {
    title: 'SEO landing pages at scale',
    problem:
      'Every one of eBay’s hundreds of millions of search-engine landing pages depends on URL rules that backend services generate and publish to production.',
    built:
      'Designed, built and launched the microservices behind those pages, redesigned the URL library’s caching, and restored the publishing pipeline after a network change blocked every SEO, search and item-page team.',
    result: 'Category pages alone average over 100M hits a day.',
    tags: ['Java', 'Spring Boot', 'Microservices'],
  },
  {
    title: 'Sticky filter chips',
    problem: 'On mobile web, the filter chips scrolled out of view as soon as shoppers reached the results.',
    built:
      'Took the spike and the A/B test for chips that stay pinned while scrolling, then owned the launch to all mobile-web traffic and the code cleanup.',
    result: 'GMB up 18.07% and transactions up about 15% in the top four markets.',
    tags: ['A/B testing', 'Java', 'MarkoJS'],
  },
  {
    title: 'Product pages on GraphQL',
    problem:
      'The team needed evidence that GraphQL could match the existing REST backend before moving product pages over.',
    built:
      'Developed a GraphQL product-page backend on Spring Boot and Netflix DGS in about six weeks, then load tested it against REST.',
    result: 'Same p95 latency as REST with 40% less CPU.',
    tags: ['GraphQL', 'Netflix DGS', 'JMeter'],
  },
  {
    title: 'Cost-per-click ads test',
    problem:
      'Cost-per-click ads were blocked on category pages, and the ads team wanted to test them there.',
    built:
      'Led the backend, writing the design, building click tracking, and finding and fixing a missing experiment header before the test ran.',
    result:
      'Ads revenue up about 5%, five times the forecast, roughly $2.2M a year annualized. Launch is on hold for a retest.',
    tags: ['Experimentation', 'Java', 'REST'],
  },
  {
    title: 'An agentic AI pipeline for shipping code',
    problem:
      'Every feature request turned into a spike document, then tickets, then code, then reviews.',
    built:
      'Built a pipeline on Claude Code and a Jira MCP server that turns spike documents into tickets and takes each ticket to a pull request, with CLAUDE.md context files for each backend service.',
    result: 'Every pull request of my final year at eBay shipped through it.',
    tags: ['Claude Code', 'MCP', 'Automation'],
  },
];

// A logo is either an imported image or, when no official logo exists, a monogram letter.
// `dark` puts a light-colored logo on a dark tile.
export type Logo = { src: ImageMetadata; dark?: boolean } | { monogram: string };

export type Role = {
  dates: string;
  title: string;
  summary: string;
  tags: string[];
};

export type Company = {
  company: string;
  place: string;
  dates: string;
  logo: Logo;
  roles: Role[];
};

export const experience: Company[] = [
  {
    company: 'eBay',
    place: 'San Jose, CA',
    dates: '2020 — 2026',
    logo: { src: ebayLogo },
    roles: [
      {
        dates: '2025 — 2026',
        title: 'Member of Technical Staff 1',
        summary:
          'Migrated the category-page listings grid to a GraphQL page platform across 10+ sites, built embedding-similarity retrieval for review highlights at a 99.75% SLO, and designed price ranges for trading-card variants that lifted conversion about 16%.',
        tags: ['Java', 'Spring Boot', 'GraphQL', 'Kubernetes', 'Claude Code'],
      },
      {
        dates: '2023 — 2025',
        title: 'Software Engineer 3',
        summary:
          'Led the backend for an ads test that raised ads revenue about 5%, moved a monolithic category-page backend onto a shared listings microservice, and delivered EU Digital Services Act compliance on time.',
        tags: ['Java', 'Netflix DGS', 'GraphQL', 'JMeter'],
      },
      {
        dates: '2020 — 2023',
        title: 'Software Engineer 2',
        summary:
          'Launched sticky filter chips (+18.07% GMB), more than doubled filter usage on eBay Motors, and owned about 20 biweekly backend releases end to end.',
        tags: ['Java', 'Spring Boot', 'Python', 'MarkoJS'],
      },
    ],
  },
  {
    company: 'Trade and Development Bank',
    place: 'Ulaanbaatar, Mongolia',
    dates: '2019',
    logo: { src: tdbLogo },
    roles: [
      {
        dates: '2019',
        title: 'Software Engineer',
        summary:
          'Built backend and frontend features for internal banking systems and a credit-scoring system.',
        tags: ['Spring Boot', 'AngularJS', 'PHP'],
      },
    ],
  },
  {
    company: 'Asterisk Technologies',
    place: 'Ulaanbaatar, Mongolia',
    dates: '2017 — 2019',
    logo: { monogram: 'A' },
    roles: [
      {
        dates: '2017 — 2019',
        title: 'Full Stack Developer',
        summary: 'Built and supported web applications and ERP projects for clients.',
        tags: ['Python', 'JavaScript'],
      },
    ],
  },
];

export const education: { degree: string; school: string; dates: string; logo: Logo }[] = [
  {
    degree: "Master's, Computer Science",
    school: 'Maharishi University of Management, Iowa',
    dates: '2019 — 2021',
    logo: { src: miuLogo, dark: true },
  },
  {
    degree: "Bachelor's, Software Engineering",
    school: 'National University of Mongolia',
    dates: '2014 — 2018',
    logo: { src: numLogo },
  },
];
