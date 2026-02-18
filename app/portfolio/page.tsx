import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Case Studies | Proven Client Results | Growth Leder',
  description: 'Explore real case studies showcasing measurable growth results through lead generation, automation, and account services.',
  keywords: 'growth case studies, lead generation results, automation case study, client success stories',
  openGraph: {
    title: 'Real Growth. Real Results.',
    description: 'See how Growth Leder delivers measurable business outcomes for clients.',
  },
};

export default function Portfolio() {
  const portfolioItems = [
    {
      client: 'Lumina Home Decor',
      type: 'Lead Generation',
      title: 'High-Converting Lead Gen System',
      description: 'Lumina Home Decor struggled to find qualified B2B buyers. We launched a multi-channel cold email and LinkedIn outreach campaign targeting interior designers.',
      problem: 'Struggled to find qualified B2B buyers for premium lighting fixtures.',
      solution: 'Multi-channel cold email and LinkedIn outreach campaign targeting interior designers.',
      results: [
        'Generated 150+ qualified leads in 90 days',
        'Achieved a 30% increase in B2B sales',
        'Reduced Customer Acquisition Cost (CAC) by 25%'
      ],
      image: '/projects/lead-gen.png',
    },
    {
      client: 'NextGen Logistics',
      type: 'Outreach Services',
      title: 'Campaign Setup & Optimization',
      description: 'Designed a 3-step email sequence with personalized video audits of prospect supply chains, supported by automated LinkedIn follow-ups.',
      problem: 'Low response rate to cold calls; needed scalable enterprise reach.',
      solution: '3-step email sequence with personalized video audits and LinkedIn follow-ups.',
      results: [
        '45% open rate on cold emails',
        'Booked 28 discovery calls in month 1',
        'Closed 3 major enterprise contracts ($50k+ each)'
      ],
      image: '/projects/outreach.png',
    },
    {
      client: 'Apex Growth Partners',
      type: 'CRM Management',
      title: 'Pipeline & Automation',
      description: 'Migrated all data to HubSpot CRM, set up automated deal stages, and created a dashboard for real-time sales tracking.',
      problem: 'Leads lost in spreadsheets; missed follow-ups.',
      solution: ' HubSpot CRM migration, automated deal stages, real-time dashboard.',
      results: [
        '100% data visibility for management',
        '20% increase in deal velocity',
        'Saved 10 hours/week via automated tasks'
      ],
      image: '/projects/crm.png',
    },
    {
      client: 'MedCore Solutions',
      type: 'Admin Support',
      title: 'Operations & Documentation',
      description: 'Provided a dedicated Virtual Assistant to handle inbox management, calendar scheduling, and patient documentation.',
      problem: 'CEO overwhelmed with admin; spending 3 hours/day on scheduling.',
      solution: 'Dedicated Virtual Assistant for inbox, calendar, and documentation.',
      results: [
        'Saved the CEO 15 hours per week',
        'Reduced appointment no-shows by 40%',
        'Maintained 24h response time'
      ],
      image: '/projects/admin.png',
    },
    {
      client: 'Summit Estate Group',
      type: 'Social Media + Ads',
      title: 'Content & Campaigns',
      description: 'Developed a content strategy focusing on luxury property tours and targeted Meta Ads ("Just Listed" campaigns).',
      problem: 'Low brand awareness; no leads from social media.',
      solution: 'Luxury content strategy and targeted "Just Listed" Meta Ads.',
      results: [
        '300% increase in Instagram engagement',
        'Generated 42 buyer leads at $12/lead',
        'Sold 2 listings directly via social'
      ],
      image: '/projects/social.png',
    },
    {
      client: 'TrustGuard Tech',
      type: 'Virtual Assistance',
      title: 'Research & Task Management',
      description: 'Assigned a team of 2 VAs to handle data scraping, report formatting, and competitor analysis.',
      problem: 'Research team bogged down by manual data entry.',
      solution: 'Dedicated VA team for data scraping and report formatting.',
      results: [
        'Processed 5,000+ data points weekly',
        'Reduced report delivery time by 60%',
        'Enabled analysts to focus on strategy'
      ],
      image: '/projects/va.png',
    },
  ];

  const clients = [
    { name: 'Lumina Home Decor', contact: 'Sarah Henderson' },
    { name: 'NextGen Logistics', contact: 'Gary Gilman' },
    { name: 'Apex Growth Partners', contact: 'Victor Hart' },
    { name: 'MedCore Solutions', contact: 'Kevin Howard' },
    { name: 'Summit Estate Group', contact: 'Deborah Wright' },
    { name: 'TrustGuard Tech', contact: 'Simon Miller' },
    { name: 'Stratton Consulting', contact: 'Philip Stratton' },
    { name: 'AutoTech Dynamics', contact: 'Claire McKinsey' },
    { name: 'AutoTech Dynamics', contact: 'James Brighton' },
  ];

  return (
    <>
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="text-white text-center py-24 md:py-32 relative overflow-hidden">
        <div className="stars-container">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(40, 167, 69, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <h1 className="text-white mb-6">Portfolio</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Recent clients and completed projects — focused on execution, outcomes, and growth.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-black/10 backdrop-blur-sm py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent opacity-50 pointer-events-none" />
        <div className="container relative z-10">
          <h2 className="text-center mb-4 text-white">Recent Clients & Completed Projects</h2>
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
            Showcasing our impact across various industries and business functions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all duration-500 backdrop-blur-sm group"
              >
                <div className="h-56 relative bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  ) : (
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-accent font-bold text-sm block mb-1 uppercase tracking-wider">{item.client}</span>
                  <span className="text-slate-400 text-sm block mb-3 font-medium">{item.type}</span>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">{item.title}</h3>

                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-white/60 text-xs uppercase font-bold tracking-wide">Problem:</span>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.problem}</p>
                    </div>
                    <div>
                      <span className="text-white/60 text-xs uppercase font-bold tracking-wide">Solution:</span>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.solution}</p>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                    <span className="text-accent text-xs uppercase font-bold tracking-wide block mb-2">Key Results:</span>
                    <ul className="space-y-1">
                      {item.results.map((result, idx) => (
                        <li key={idx} className="text-slate-200 text-sm flex items-start gap-2">
                          <span className="text-accent mt-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          </span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container relative z-10">
          <h2 className="text-center mb-4 text-white">Our Clients</h2>
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
            We are proud to partner with businesses focused on growth and efficiency.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-accent/30 hover:scale-105 transition-all text-center backdrop-blur-sm"
              >
                <div className="font-bold text-white text-lg mb-2">{client.name}</div>
                <div className="text-sm text-slate-400 font-semibold">{client.contact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-secondary to-[#1e7e34] text-white text-center py-24 relative overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <h2 className="text-white mb-4">Want Similar Results?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Tell us what you need and we'll suggest the best approach.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-secondary px-10 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
