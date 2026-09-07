import React, { useState } from 'react';
import { ArrowUpRight, Instagram, Youtube, Linkedin, Check, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#0B0D0C] border-t border-[#1C201E] pt-20 pb-28 md:pb-16 text-[#87908A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Massive Branding & Tagline */}
        <div className="border-b border-[#1C201E] pb-16 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <div className="font-heading text-6xl sm:text-8xl lg:text-[110px] font-extrabold tracking-tighter text-[#E9E5DC] leading-none uppercase">
                FORGE<span className="text-[#C8FF35]">.</span>
              </div>
              <p className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#E9E5DC] mt-4">
                TRAIN WITH PURPOSE.
              </p>
            </div>

            {/* Newsletter form */}
            <div className="max-w-md w-full">
              <span className="text-xs font-mono uppercase text-[#E9E5DC] tracking-widest block mb-2 font-bold">
                THE FORGE DISPATCH
              </span>
              <p className="text-xs text-[#87908A] mb-4">
                Weekly biomechanics research, mobility breakdowns, and member benchmarks. Zero promotional fluff.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF35] bg-[#151817] p-3 rounded-full border border-[#2B302D]">
                  <Check className="w-4 h-4" />
                  <span>You are on the dispatch list. First drop lands Monday.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work or personal email"
                    className="flex-1 px-4 py-3 bg-[#151817] border border-[#2B302D] focus:border-[#C8FF35] rounded-full text-xs text-[#E9E5DC] placeholder-[#505753] focus:outline-none font-mono"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#C8FF35] text-[#0B0D0C] font-heading font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-[#b8f020] transition-colors"
                  >
                    JOIN
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16 text-xs font-mono">
          {/* Navigation */}
          <div>
            <span className="text-[#E9E5DC] font-bold uppercase tracking-widest block mb-4">
              CLUB
            </span>
            <ul className="space-y-2.5">
              <li><a href="#train" className="hover:text-[#C8FF35] transition-colors">TRAIN</a></li>
              <li><a href="#schedule" className="hover:text-[#C8FF35] transition-colors">CLASSES</a></li>
              <li><a href="#coaches" className="hover:text-[#C8FF35] transition-colors">COACHES</a></li>
              <li><a href="#equipment" className="hover:text-[#C8FF35] transition-colors">FACILITY ARSENAL</a></li>
              <li><a href="#beginners" className="hover:text-[#C8FF35] transition-colors">BEGINNER INTAKE</a></li>
              <li><a href="#memberships" className="hover:text-[#C8FF35] transition-colors">MEMBERSHIP TIERS</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <span className="text-[#E9E5DC] font-bold uppercase tracking-widest block mb-4">
              PROGRAMS
            </span>
            <ul className="space-y-2.5">
              <li><a href="#train" className="hover:text-[#C8FF35] transition-colors">Barbell Foundations</a></li>
              <li><a href="#schedule" className="hover:text-[#C8FF35] transition-colors">MetCon Intervals</a></li>
              <li><a href="#schedule" className="hover:text-[#C8FF35] transition-colors">Athletic Mobility</a></li>
              <li><a href="#corporate" className="hover:text-[#C8FF35] transition-colors">CORPORATE WELLNESS</a></li>
              <li><a href="#location" className="hover:text-[#C8FF35] transition-colors">Contrast Plunge & Sauna</a></li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <span className="text-[#E9E5DC] font-bold uppercase tracking-widest block mb-4">
              MUMBAI CLUB FLOOR
            </span>
            <p className="text-[#87908A] leading-relaxed mb-4">
              Unit 4B, The Foundry Mills, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013
            </p>
            <p className="text-[#E9E5DC]">
              Monday — Sunday: <span className="text-[#C8FF35]">05:30 — 23:00</span>
            </p>
            <p className="text-[#87908A] mt-1">
              Performance Members: 24/7 RFID Turnstile Ingress
            </p>
            <div className="mt-4 pt-4 border-t border-[#1C201E]">
              <span className="text-[#87908A] block text-[11px] mb-1 uppercase font-bold">Direct Membership & Purchase Sales:</span>
              <a
                href="tel:+919987684057"
                className="text-[#C8FF35] hover:underline font-bold text-sm flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 99876 84057</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <span className="text-[#E9E5DC] font-bold uppercase tracking-widest block mb-4">
              COMMUNITY
            </span>
            <div className="space-y-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#C8FF35] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>INSTAGRAM</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#C8FF35] transition-colors"
              >
                <Youtube className="w-4 h-4" />
                <span>YOUTUBE</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#C8FF35] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-[#1C201E] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#58615B] gap-4">
          <p>© {new Date().getFullYear()} FORGE ATHLETIC CLUB. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#87908A]">Privacy Policy</a>
            <a href="#" className="hover:text-[#87908A]">Terms of Membership</a>
            <a href="#" className="hover:text-[#87908A]">Safety & Anti-Harassment Standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
