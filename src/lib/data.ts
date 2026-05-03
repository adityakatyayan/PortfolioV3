import { assets } from './assets';

export const profile = {
  name: 'Aditya Katyayan',
  title: 'Customer Support Officer',
  tagline:
    'Technical support professional with ~4 years supporting POS systems, enterprise applications, and identity & access management. Azure AZ-900 certified, focused on uptime, clean resolutions, and great client experience.',
  email: 'aditya.katyayan.9@gmail.com',
  phone: '+91 7464050526',
  linkedin: 'https://www.linkedin.com/in/adityakatyayan/',
  location: 'India',
};

export const skills = [
  'H&L POS',
  'ImPOS',
  'Microsoft 365 Dynamics CRM',
  'ServiceNow',
  'Active Directory',
  'SailPoint IdentityIQ',
  'OneAccess',
  'Power Apps',
  'Microsoft Azure (AZ-900)',
  'Windows Troubleshooting',
  'Networking Fundamentals',
  'Office 365',
  'Outlook / .pst / .ost',
  'Auto-Pilot Provisioning',
  'Jira',
  'Confluence',
  'Slack',
  'SWIFT / SEPA / ACH',
  'Incident Management',
  'Knowledge Base Authoring',
];

export type Experience = {
  role: string;
  company: string;
  client?: string;
  logo: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Customer Support Officer',
    company: 'SherpaIT',
    client: 'H&L POS',
    logo: assets.logos.sherpaIT_HL,
    start: 'Jul 2025',
    end: 'Present',
    bullets: [
      'First-line technical support for HLPOS point-of-sale systems across hospitality clients.',
      'Monitor systems, handle incidents, and maintain maximum uptime for live restaurant environments.',
      'Resolve tickets within SLA via CRM/ticketing tooling; perform remote diagnostics and service restarts.',
      'Coordinate with vendors and internal teams on escalations; author KB articles to lift team efficiency.',
    ],
  },
  {
    role: 'Customer Support Specialist',
    company: 'SherpaIT',
    client: 'ImPOS',
    logo: assets.logos.sherpaIT_ImPOS,
    start: 'Feb 2025',
    end: 'Jun 2025',
    bullets: [
      'Frontline support for ImPOS systems — software, hardware, and network issue resolution.',
      'Managed helpdesk via Microsoft 365 Dynamics CRM with accurate tracking and timely closure.',
      'Delivered training to clients and internal teams on POS workflows and integrations.',
    ],
  },
  {
    role: 'Engineer — Cloud & Infra Management',
    company: 'LTIMindtree',
    client: 'EY',
    logo: assets.logos.ltiMindtree,
    start: 'Jan 2024',
    end: 'Jan 2025',
    bullets: [
      'L1 access support across Microsoft 365 Dynamics CRM and Power Apps.',
      'Identity & access management via OneAccess and SailPoint IdentityIQ.',
      'Built and maintained ServiceNow dashboards for service-metric reporting.',
      'Authored KB content and drove process improvements across the support team.',
    ],
  },
  {
    role: 'Support Specialist',
    company: 'Revolut Operations India',
    logo: assets.logos.revolut,
    start: 'Aug 2023',
    end: 'Nov 2023',
    bullets: [
      'Frontline support for Revolut\u2019s global users via in-app chat.',
      'Worked across SWIFT, SEPA, ACH, and Faster Payments to resolve transaction issues.',
      'Cross-checked MT103 messages; resolved card payments, direct debits, and transfers.',
      'Stack: Jira, Confluence, Slack, Google Suite.',
    ],
  },
  {
    role: 'Service Desk Engineer',
    company: 'Trigent Software',
    client: 'Wipro',
    logo: assets.logos.trigent,
    start: 'Apr 2022',
    end: 'Aug 2023',
    bullets: [
      'Resolved 20+ tickets/day with 99% CSAT via ServiceNow.',
      'Domain-Joined and Auto-Pilot laptop provisioning; Windows + O365 troubleshooting.',
      'Outlook fixes — .pst/.ost backup and restore, EMS errors, mail-flow issues.',
    ],
  },
];

export const education = [
  {
    degree: 'B.Tech, Marine Engineering',
    school: 'Indian Maritime University',
    period: '2015 – 2019',
    score: '72%',
    logo: assets.logos.imu,
  },
  {
    degree: 'Intermediate (12th)',
    school: 'HSHRSS Naya Nagar Pithahi, Bihar',
    period: '2013 – 2015',
    score: '64.2%',
  },
  {
    degree: 'Matriculation (10th)',
    school: 'Gurukul Kisangarh Ghasera, Haryana',
    period: '2012',
    score: '94.6%',
  },
];

export const certificates = Object.values(assets.certificates);
