import React from 'react';
import { ArrowDown, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigateSchedule: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onNavigateSchedule }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#0B0D0C]" id="hero">
      {/* Background Image with High-Contrast Dark Gradient & Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=85"
          alt="Athletes and commercial weight racks at FORGE Athletic Club floor"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.18] scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Editorial gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C] via-[#0B0D0C]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0C] via-[#0B0D0C]/70 to-transparent" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 md:py-20">
        <div className="max-w-4xl">
          {/* Top Status Tag */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#151817]/90 border border-[#2B302D] mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#C8FF35] animate-ping" />
            <span className="text-[11px] font-mono tracking-widest text-[#E9E5DC] font-semibold uppercase">
              Flagship Athletic Club • Mumbai
            </span>
            <span className="text-[#87908A] text-xs">|</span>
            <span className="text-[11px] text-[#C8FF35] font-semibold flex items-center gap-1">
              <Zap className="w-3 h-3" /> 24/7 Access Active
            </span>
          </div>

          {/* Master Headline - PRD: Space Grotesk, 72-104px, Tight, -0.05em */}
          <h1 className="text-5xl sm:text-7xl lg:text-[96px] font-heading font-extrabold tracking-[-0.05em] leading-[0.92] text-[#E9E5DC] uppercase mb-6">
            BUILD THE BODY <br />
            <span className="text-white">THAT BUILDS </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8FF35] via-[#e2ff84] to-[#C8FF35]">
              YOUR LIFE.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#87908A] font-normal leading-relaxed max-w-2xl mb-10">
            A modern fitness centre built for stronger bodies, sharper minds and better everyday performance. No hype. Pure purpose.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onNavigateSchedule}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C8FF35] text-[#0B0D0C] font-heading font-bold text-sm tracking-wider uppercase rounded-full hover:bg-[#b8f020] hover:shadow-[0_0_30px_rgba(200,255,53,0.35)] transition-all duration-200 active:scale-95 group"
              id="hero-view-classes"
            >
              <span>VIEW CLASSES</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-[#454D48] text-[#E9E5DC] font-heading font-bold text-sm tracking-wider uppercase rounded-full hover:border-[#C8FF35] hover:text-[#C8FF35] hover:bg-[#151817]/60 transition-all duration-200"
              id="hero-start-journey"
            >
              <span>START YOUR JOURNEY</span>
            </button>
          </div>

          {/* Quick Confidence Badges */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-[#87908A]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C8FF35]" />
              <span>Complimentary 1-on-1 coach onboarding</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C8FF35]" />
              <span>No lock-in contracts & instant pauses</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Viewport Info Bar (PRD: Bottom-left: MUMBAI / OPEN 05:30 — 23:00, Bottom-right: SCROLL ↓) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 border-t border-[#1C201E] flex items-center justify-between text-xs font-mono text-[#87908A]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[#E9E5DC] font-bold">MUMBAI HQ</span>
          </div>
          <span className="hidden sm:inline text-[#404642]">|</span>
          <span className="hidden sm:inline">OPEN DAILY 05:30 — 23:00</span>
        </div>

        <a
          href="#trust"
          className="flex items-center gap-2 hover:text-[#C8FF35] transition-colors py-1 group"
        >
          <span className="tracking-widest uppercase">SCROLL</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-[#C8FF35]" />
        </a>
      </div>
    </section>
  );
};
