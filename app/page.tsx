import Link from 'next/link';
import Image from 'next/image';
import ServiceCarousel from '@/components/ServiceCarousel';
import Testimonials from '@/components/Testimonials';
import { allTestimonials } from '@/lib/testimonials';
import { TargetIcon, ClipboardIcon, BriefcaseIcon, MailIcon, MobileIcon, ChartIcon } from '@/components/icons';

export const metadata = {
  title: 'Growth Leder | Lead Generation, Automation & Accounting Services',
  description: 'Growth Leder helps UK and US businesses scale through lead generation, automation, virtual assistance, and structured accounting services.',
  keywords: 'lead generation services, virtual assistance agency, business automation services, accounting services, B2B growth solutions, serving UK & US businesses, international clients',
  openGraph: {
    title: 'Growth Leder | Scale Your Business with Expert Support',
    description: 'Professional lead generation, automation, and accounting services designed to increase revenue and reduce operational workload for UK and US businesses.',
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-white text-center py-32 md:py-40 relative overflow-hidden">
        <div className="stars-container">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(40, 167, 69, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto mb-10">
            <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
              We help businesses grow smarter and faster 🚀
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto opacity-90 text-slate-200 leading-relaxed">
              Our mission is simple: drive growth while we handle the backend.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-secondary text-white px-10 py-4 rounded-lg text-lg md:text-xl font-semibold hover:bg-[#218838] hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            Get a Free Strategy Call →
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black/10 backdrop-blur-sm py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent opacity-50 pointer-events-none" />
        <div className="container">
          <h2 className="text-center mb-12">Our Services</h2>
          <ServiceCarousel />
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e66a00] hover:-translate-y-1 hover:shadow-md transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center mb-12">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/laptop.png"
                alt="Professional virtual assistant support and CRM automation services for business growth"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-4">Description Overview</h2>
              <p className="mb-4 text-lg">
                We specialize in Lead Generation, delivering high-quality, targeted leads that help businesses increase sales and scale efficiently. Alongside this, we provide complete Admin Support, including Virtual Assistant (VA) services, ensuring smooth day-to-day operations.
              </p>
              <p className="mb-6">
                In addition, we offer Accounting and Bookkeeping services to keep your financial records accurate, organized, and up to date, so you can focus on making strategic business decisions with confidence.
              </p>
              <Link
                href="/about"
                className="inline-block bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#e66a00] hover:-translate-y-0.5 transition-all"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-center mb-8 text-2xl font-bold">💡 Why work with us?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {['Growth-driven lead generation strategies', 'Reliable admin & virtual assistant support', 'Professional bookkeeping & accounting services', 'Time-saving, cost-effective solutions'].map((item, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-accent/30 hover:-translate-y-1 transition-all flex items-center gap-4 backdrop-blur-sm">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <span className="text-xl font-bold">✓</span>
                  </div>
                  <p className="font-semibold text-white text-lg">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-12 text-lg text-slate-300 italic">
              A trusted partner for long-term business growth. If you are looking to scale your business without operational stress, we are here to support your growth at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black/20 backdrop-blur-md py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent pointer-events-none" />
        <div className="container">
          <h2 className="text-center mb-4">What Our Clients Say</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Don't just take our word for it. See what our clients have to say about working with Growth Leder.
          </p>
          <Testimonials testimonials={allTestimonials} autoPlay={true} showAll={false} />
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-block text-accent font-semibold hover:underline"
            >
              View More Client Success Stories →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-secondary to-[#1e7e34] text-white text-center py-24 relative overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <h2 className="text-white mb-4">Ready to Scale Your Business?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Get a free 15-min consultation – no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-secondary px-12 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            Schedule Now
          </Link>
        </div>
      </section>
    </>
  );
}
