import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import { services } from '@/lib/services';
import {
  TargetIcon,
  ClipboardIcon,
  BriefcaseIcon,
  MailIcon,
  MobileIcon,
  ChartIcon,
  CogIcon,
  CalculatorIcon,
} from '@/components/icons';

const getIcon = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    target: <TargetIcon className="w-8 h-8" />,
    clipboard: <ClipboardIcon className="w-8 h-8" />,
    briefcase: <BriefcaseIcon className="w-8 h-8" />,
    mail: <MailIcon className="w-8 h-8" />,
    mobile: <MobileIcon className="w-8 h-8" />,
    chart: <ChartIcon className="w-8 h-8" />,
    cog: <CogIcon className="w-8 h-8" />,
    calculator: <CalculatorIcon className="w-8 h-8" />,
  };
  return iconMap[iconName] || <BriefcaseIcon className="w-8 h-8" />;
};

export const metadata = {
  title: 'Services | Growth Leder - Lead Generation • Virtual Assistance • Outreach • CRM Management',
  description: 'Comprehensive business services including lead generation services, virtual assistant support, outreach services, CRM management, automation workflows, and social media management. Expert solutions for business growth.',
  keywords: 'lead generation services, virtual assistant support, CRM automation, outreach services, social media management, business automation, virtual assistance',
};

export default function Services() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="text-white text-center py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(40, 167, 69, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-white mb-6">Our Services</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Reliable support, outreach, and growth systems to help your business scale.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-12 text-white">Our Core Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service) => (
              <div
                key={service.slug}
                className="bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-lg hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 border border-white/10 group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-8">{service.shortDescription}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-auto px-6 py-2 border border-white/30 rounded-full text-white hover:bg-white hover:text-primary transition-all font-semibold"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-secondary to-[#218838] text-white text-center py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <h2 className="text-white mb-4">Want Help With Any of These?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Send your requirements and we'll share a clear plan and next steps.
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
