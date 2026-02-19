'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ImageWithFallback from '@/components/ImageWithFallback';
import { MenuIcon } from './icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/about', label: 'About Us' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200 py-3 shadow-sm'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 text-black text-2xl md:text-3xl font-extrabold font-nunito hover:scale-105 transition-transform">
              <ImageWithFallback 
                src="/logo-white.svg" 
                alt="Growth Leder Logo" 
                width={60} 
                height={60} 
                className="w-12 h-12 md:w-16 md:h-16" 
                hideOnError={true}
              />
              Growth Leder
            </Link>
            <button
              onClick={toggleMenu}
              className="md:hidden border-2 border-black/30 text-black p-2 rounded-md hover:border-accent hover:bg-accent/10 transition-all"
              aria-label="Toggle menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-black/80 font-bold transition-all hover:text-black ${pathname === link.href ? 'text-black' : ''
                    }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              ))}
            </nav>
            <a
              href="https://calendly.com/growthleder/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block bg-gradient-to-r from-secondary to-[#1e7e34] text-white px-8 py-2.5 rounded-full font-bold shadow-lg shadow-green-900/20 hover:shadow-green-500/30 hover:-translate-y-0.5 transition-all border border-white/10"
            >
              Book Free Call
            </a>
          </div>
        </div>
      </header >

      {/* Mobile Menu Overlay */}
      {
        isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            onClick={closeMenu}
          />
        )
      }

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 bg-primary/95 backdrop-blur-xl border-l border-white/10 z-[70] p-8 transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-end mb-8">
          <button onClick={closeMenu} className="text-white/70 hover:text-white">Close</button>
        </div>
        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className={`text-lg font-medium block py-3 border-b border-white/5 hover:text-accent hover:pl-2 transition-all ${pathname === link.href ? 'text-white font-bold border-accent/50' : 'text-white/80'
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="https://calendly.com/growthleder/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-block w-full text-center bg-gradient-to-r from-secondary to-[#1e7e34] text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
            >
              Book Free Call
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
