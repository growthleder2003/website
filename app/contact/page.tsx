
import ContactContent from '@/components/ContactContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Growth Leder | Start Growing Today',
  description: 'Get in touch with Growth Leder to streamline your operations, generate more leads, and scale efficiently.',
  keywords: 'contact growth agency, business automation consultation, lead generation consultation',
  openGraph: {
    title: 'Let’s Grow Your Business',
    description: 'Book a consultation and start building scalable growth systems.',
  },
};

export default function Contact() {
  return <ContactContent />;
}
