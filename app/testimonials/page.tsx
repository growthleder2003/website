import Testimonials from '@/components/Testimonials';
import { allTestimonials } from '@/lib/testimonials';
import Link from 'next/link';

export const metadata = {
  title: 'Client Testimonials | Growth Leder - What Our Clients Say',
  description: 'Read what our clients have to say about our lead generation, virtual assistance, outreach, and CRM services. Real reviews from real businesses we\'ve helped grow.',
};

export default function TestimonialsPage() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="mb-4">What Our Clients Say</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. See what businesses like yours have achieved working with Growth Leder.
          </p>
        </div>
        <Testimonials testimonials={allTestimonials} autoPlay={false} showAll={true} />
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-block bg-accent text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#e66a00] hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            Start Your Success Story →
          </Link>
        </div>
      </div>
    </section>
  );
}
