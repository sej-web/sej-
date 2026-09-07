import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (type?: string, details?: string) => void;
  onNavigateSchedule: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onNavigateSchedule }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'TRAIN', href: '#train' },
    { label: 'CLASSES', href: '#schedule' },
    { label: 'EQUIPMENT', href: '#equipment' },
    { label: 'COACHES', href: '#coaches' },
    { label: 'BEGINNERS', href: '#beginners' },
    { label: 'MEMBERSHIPS', href: '#memberships' },
    { label: 'CORPORATE', href: '#corporate' },
    { label: 'LOCATION', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0D0C]/95 backdrop-blur-md border-b border-[#232725] py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#0B0D0C]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-baseline gap-2 text-white font-extrabold tracking-tighter"
            id="nav-logo"
          >
            <span className="font-heading text-2xl sm:text-3xl tracking-tight text-white group-hover:text-[#C8FF35] transition-colors">
              FORGE
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#87908A] group-hover:text-white transition-colors">
              / ATHLETIC CLUB
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-xs font-bold tracking-widest text-[#E9E5DC]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#C8FF35] transition-colors duration-150 py-1"
                id={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919987684057"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#E9E5DC] hover:text-[#C8FF35] border border-transparent hover:border-[#2B302D] rounded-full transition-colors"
              title="Call to buy membership or passes"
              id="nav-direct-call"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8FF35]" />
              <span>BUY / INQUIRE: <strong>9987684057</strong></span>
            </a>
            <button
              onClick={onNavigateSchedule}
              className="px-4 py-2 text-xs font-bold tracking-widest text-[#E9E5DC] border border-[#333835] hover:border-[#C8FF35] hover:text-[#C8FF35] rounded-full transition-all duration-150"
              id="nav-cta-schedule"
            >
              VIEW SCHEDULE
            </button>
            <button
              onClick={() => onOpenBooking('trial', 'First Session Free Pass')}
              className="px-5 py-2 text-xs font-extrabold tracking-widest bg-[#C8FF35] text-[#0B0D0C] hover:bg-[#b8f020] hover:shadow-[0_0_20px_rgba(200,255,53,0.35)] rounded-full transition-all duration-150 active:scale-95"
              id="nav-cta-join"
            >
              START FREE TRIAL
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#E9E5DC] hover:text-[#C8FF35] focus:outline-none"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0D0C]/98 backdrop-blur-xl xl:hidden pt-20 px-6 pb-28 flex flex-col justify-between overflow-y-auto animate-fadeIn">
          <div className="space-y-4 pt-4">
            <div className="border-b border-[#232725] pb-3 mb-4">
              <span className="text-xs font-mono tracking-widest text-[#87908A]">NAVIGATION</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-lg font-heading font-bold text-[#E9E5DC] hover:text-[#C8FF35] py-2 border-b border-[#1A1D1C] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#87908A]" />
              </a>
            ))}
          </div>

          <div className="mt-8 space-y-4 pt-6 border-t border-[#232725]">
            {/* Direct Buy Hotline Card */}
            <a
              href="tel:+919987684057"
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#151817] border border-[#2B302D] active:border-[#C8FF35] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C8FF35]/15 text-[#C8FF35] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#87908A] block">WANT TO BUY? CALL DIRECT:</span>
                  <span className="text-sm font-bold text-[#E9E5DC] font-mono">+91 99876 84057</span>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold text-[#0B0D0C] bg-[#C8FF35] px-2.5 py-1 rounded-full">
                CALL
              </span>
            </a>

            <div className="flex items-center gap-2 text-xs text-[#87908A]">
              <Clock className="w-4 h-4 text-[#C8FF35]" />
              <span>Open 05:30 — 23:00 Everyday</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#87908A]">
              <MapPin className="w-4 h-4 text-[#C8FF35]" />
              <span>Lower Parel, Mumbai</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('trial', 'Mobile Trial Pass');
              }}
              className="w-full py-3.5 bg-[#C8FF35] text-[#0B0D0C] font-extrabold text-sm tracking-wider rounded-full shadow-lg"
            >
              CLAIM 1-DAY PASS
            </button>
          </div>
        </div>
      )}

      {/* Sticky Bottom CTA for Mobile (VIEW CLASSES | CALL TO BUY | JOIN NOW) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#151817]/95 backdrop-blur-md border-t border-[#2a2f2c] px-3 py-2.5 flex items-center gap-2 shadow-2xl">
        <button
          onClick={onNavigateSchedule}
          className="flex-1 py-3 text-[11px] font-bold tracking-wider text-center text-[#E9E5DC] bg-[#232725] rounded-full border border-[#373d39] active:scale-98 whitespace-nowrap"
          id="mobile-sticky-schedule"
        >
          CLASSES
        </button>
        <a
          href="tel:+919987684057"
          className="px-3.5 py-3 text-[11px] font-bold font-mono text-[#E9E5DC] bg-[#0B0D0C] rounded-full border border-[#373d39] active:scale-98 flex items-center gap-1.5 whitespace-nowrap"
          title="Call 9987684057 to buy"
          id="mobile-sticky-call"
        >
          <Phone className="w-3.5 h-3.5 text-[#C8FF35]" />
          <span>BUY: 9987684057</span>
        </a>
        <button
          onClick={() => onOpenBooking('trial', 'Mobile Sticky Pass')}
          className="flex-1 py-3 text-[11px] font-extrabold tracking-wider text-center text-[#0B0D0C] bg-[#C8FF35] rounded-full shadow-[0_0_15px_rgba(200,255,53,0.3)] active:scale-98 whitespace-nowrap"
          id="mobile-sticky-join"
        >
          JOIN
        </button>
      </div>
    </>
  );
};
