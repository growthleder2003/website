export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[]; // "Types of Work"
  tools: string[];
  benefits: string[];
  outcomes: string[]; // Specific outcomes
  deliverables: string[]; // Clear deliverables
  timeline: string; // Timeline expectations
  idealFor: string; // "Who it’s for"
  faqs: { question: string; answer: string }[];
  sampleProject: {
    title: string;
    description: string;
    image: string;
    results: string[];
  };
  meta?: {
    title: string;
    description: string;
    keywords: string;
    openGraph: {
      title: string;
      description: string;
    };
  };
}

export const services: Service[] = [
  {
    slug: 'lead-generation',
    title: 'Lead Generation',
    shortDescription: 'We provide high-quality, targeted leads to help businesses grow faster and improve conversion rates.',
    fullDescription: 'Our lead generation services help businesses identify, attract, and convert high-quality prospects. We use advanced targeting techniques, data analysis, and proven outreach strategies to deliver qualified leads that convert.',
    icon: 'target',
    features: [ // Types of work
      'B2B Prospect Lists',
      'Cold Email Campaigns',
      'LinkedIn Outreach',
      'Lead Qualification',
      'Appointment Setting'
    ],
    tools: ['Apollo.io', 'LinkedIn Sales Navigator', 'Hunter.io', 'Lemlist'],
    benefits: [
      'Fill your pipeline with qualified prospects',
      'Reduce time spent on prospecting',
      'Increase conversion rates',
      'Scalable growth system'
    ],
    outcomes: [
      'Consistent flow of booked meetings',
      'Higher acceptance rates on LinkedIn',
      'Predicted revenue pipeline',
      'Reduced cost per acquisition'
    ],
    deliverables: [
      'Verified prospect lists (Email + Phone)',
      'Custom email sequence copy',
      'Weekly performance reports',
      'CRM integration & setup'
    ],
    timeline: 'Campaign setup: 3-5 days. Initial results: 14-21 days.',
    idealFor: 'B2B SaaS companies, Agencies, and Consultants looking to scale their sales pipeline without hiring a full sales team.',
    faqs: [
      {
        question: 'How do you ensure lead quality?',
        answer: 'We use a multi-step verification process verifying emails via SMTP and manually reviewing prospect relevance against your Ideal Customer Profile (ICP).'
      },
      {
        question: 'Do you handle the outreach or just provide the data?',
        answer: 'We handle the end-to-end process: from building the list to writing the copy, sending the emails, and following up until a meeting is booked.'
      }
    ],
    sampleProject: {
      title: 'B2B SaaS Lead Generation',
      description: 'Generated 500+ qualified leads for a SaaS company targeting mid-market businesses.',
      image: '/projects/lead-gen-techfunnel.jpg',
      results: [
        '500+ qualified leads delivered',
        '35% conversion rate to demo',
        'Automated scoring system'
      ],
    },
    meta: {
      title: 'Lead Generation Services | Qualified B2B Leads | Growth Leder',
      description: 'Generate high-quality B2B leads for UK and US markets with proven outreach systems. Growth Leder helps you fill your pipeline and increase conversions.',
      keywords: 'B2B lead generation, sales prospecting services, outbound outreach, qualified leads, appointment setting, UK lead generation, US lead generation',
      openGraph: {
        title: 'High-Quality B2B Lead Generation (UK & US)',
        description: 'Fill your sales pipeline with qualified leads using structured outreach and proven prospecting systems.',
      },
    },
  },
  {
    slug: 'accounting-bookkeeping',
    title: 'Accounting Services',
    shortDescription: 'Comprehensive financial management including bookkeeping, invoicing, and financial reporting.',
    fullDescription: 'Our accounting services ensure your financial records are accurate, organized, and compliant. We handle everything from day-to-day bookkeeping to complex financial reporting, giving you peace of mind.',
    icon: 'calculator',
    features: [
      'Bookkeeping & Reconciliation',
      'Accounts Payable/Receivable',
      'Financial Reporting (P&L, Balance Sheet)',
      'Tax Preparation Support',
      'Payroll Management'
    ],
    tools: ['QuickBooks Online', 'Xero', 'Wave', 'Appfolio'],
    benefits: [
      'Tax-ready financial records',
      'Clear view of cash flow',
      'Reduced administrative burden',
      'Avoid costly errors'
    ],
    outcomes: [
      '100% Tax compliance',
      'Real-time financial visibility',
      'Faster month-end closing',
      'Improved cash flow management'
    ],
    deliverables: [
      'Monthly P&L and Balance Sheet',
      'Reconciled bank statements',
      'Categorized expense reports',
      'Year-end tax packets'
    ],
    timeline: 'Onboarding: 1 week. Ongoing: Monthly reports delivered by the 10th.',
    idealFor: 'Small business owners, E-commerce sellers, and Startups who need professional financial management without a full-time CFO.',
    faqs: [
      {
        question: 'Which accounting software do you support?',
        answer: 'We are experts in QuickBooks Online, Xero, and Wave. We can also help migrate you to these platforms.'
      },
      {
        question: 'What do I need to provide each month?',
        answer: 'Just read-only access to your bank feeds and any specific invoices. We handle the categorization and reconciliation.'
      }
    ],
    sampleProject: {
      title: 'E-commerce Bookkeeping',
      description: 'Streamlined financial operations for a high-volume e-commerce store.',
      image: '/projects/accounting-def.jpg',
      results: [
        'Organized 12 months of backlog',
        'Monthly closing time reduced by 5 days',
        '100% tax compliance'
      ],
    },
    meta: {
      title: 'Accounting Services | Financial & Account Management Support | Growth Leder',
      description: 'Stay financially organized with professional accounting services including invoicing, reconciliation, and reporting support for UK and US businesses.',
      keywords: 'accounting services, accounts payable, accounts receivable, invoice management, financial reporting support, UK bookkeeping, US booking support',
      openGraph: {
        title: 'Structured & Reliable Accounting Services',
        description: 'Organized account management systems to improve cash flow and financial clarity for international clients.',
      },
    },
  },
  {
    slug: 'virtual-assistance',
    title: 'General Virtual Assistance',
    shortDescription: 'Flexible support for administrative tasks, research, and daily operations.',
    fullDescription: 'Our virtual assistants provide reliable support for a wide range of business needs, from scheduling and email management to research and data entry. We act as an extension of your team.',
    icon: 'briefcase',
    features: [
      'Email & Calendar Management',
      'Data Entry & Research',
      'Customer Support',
      'Travel Arrangements',
      'Document Preparation'
    ],
    tools: ['Google Workspace', 'Slack', 'Asana', 'Notion'],
    benefits: [
      'Focus on high-value tasks',
      'Flexible, scalable support',
      'Reduced overhead costs',
      'Improved operational efficiency'
    ],
    outcomes: [
      'Reclaimed 10-20 hours/week for leadership',
      'Zero missed appointments',
      'Faster response times to clients',
      'Organized digital workspace'
    ],
    deliverables: [
      'Daily/Weekly task reports',
      'Inbox zero management',
      'Scheduled calendar appointments',
      'Research spreadsheets'
    ],
    timeline: 'Onboarding: 24-48 hours. Support: Daily or as needed.',
    idealFor: 'Busy Executives, Entrepreneurs, and Small Teams who are overwhelmed by administrative tasks.',
    faqs: [
      {
        question: 'Is there a minimum hour commitment?',
        answer: 'We offer flexible packages starting from 10 hours/week. You can scale up or down based on your needs.'
      },
      {
        question: 'How do we communicate?',
        answer: 'We integrate with your preferred channels like Slack, WhatsApp, or Email. You will have a dedicated account manager.'
      }
    ],
    sampleProject: {
      title: 'Executive Support',
      description: 'Provided daily administrative support for a busy consulting firm.',
      image: '/projects/va.png',
      results: [
        'Saved 15 hours/week for CEO',
        'Managed 50+ weekly client emails',
        'Streamlined scheduling process'
      ],
    },
    meta: {
      title: 'Virtual Assistance Services | Remote Business Support | Growth Leder',
      description: 'Professional virtual assistance services to manage admin, outreach, CRM, and operations. Free up your time and focus on growing your business (Serving UK & US).',
      keywords: 'virtual assistant services, remote business support, administrative support, CRM management, UK virtual assistant, US virtual assistant',
      openGraph: {
        title: 'Professional Virtual Assistance (UK & US)',
        description: 'Reliable remote support for growing businesses. Stay organized and productive.',
      },
    },
  },
  {
    slug: 'automation',
    title: 'Automation',
    shortDescription: 'Streamline repetitive tasks and connect your apps with intelligent automated workflows.',
    fullDescription: 'We design and build custom automation workflows that connect your favorite business tools. Eliminate manual data entry and repetitive tasks to save time and reduce errors.',
    icon: 'cog',
    features: [
      'Workflow Design (Zapier/Make)',
      'CRM Automation',
      'Email Marketing Automation',
      'Data Syncing',
      'Form Integration'
    ],
    tools: ['Zapier', 'Make (Integromat)', 'HubSpot', 'Airtable'],
    benefits: [
      'Eliminate manual data entry',
      'Reduce human error',
      'Save hours of work weekly',
      'Seamless tool integration'
    ],
    outcomes: [
      'Error-free data transfer',
      'Instant lead followup',
      'Automated client onboarding',
      'Scalable processes without adding headcount'
    ],
    deliverables: [
      'Documented workflow maps',
      'Live automated scenarios (Zapier/Make)',
      'Error handling setup',
      'Video training on how to use'
    ],
    timeline: 'Audit & Design: 3 days. Implementation: 5-10 days depending on complexity.',
    idealFor: 'Businesses using multiple software tools (CRM, Email, Sheets) that don’t talk to each other.',
    faqs: [
      {
        question: 'Do I need to pay for Zapier/Make?',
        answer: 'Yes, these tools have their own subscription costs, but we optimize the workflows to keep your operations efficient and cost-effective.'
      },
      {
        question: 'What happens if an automation breaks?',
        answer: 'We build in error handlers to notify us immediately. We also offer ongoing maintenance packages to ensure 99.9% uptime.'
      }
    ],
    sampleProject: {
      title: 'Sales Process Automation',
      description: 'Automated the entire lead-to-deal process for a marketing agency.',
      image: '/projects/crm.png',
      results: [
        'Automated lead capture & follow-up',
        'Reduced response time to 5 mins',
        'Integrated CRM with Slack alerts'
      ],
    },
    meta: {
      title: 'Business Automation Services | Workflow & CRM Automation | Growth Leder',
      description: 'Automate repetitive tasks and streamline your operations with smart workflow systems. Growth Leder builds scalable automation that saves time and increases efficiency.',
      keywords: 'business automation services, CRM automation, workflow automation, Zapier automation, process automation',
      openGraph: {
        title: 'Smart Automation for Scalable Growth',
        description: 'Reduce manual work and scale faster with intelligent workflow automation systems.',
      },
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
