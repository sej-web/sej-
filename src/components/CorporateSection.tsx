import React from 'react';
import { Building2, ArrowRight, TrendingUp, CheckCircle, Award, Users, BarChart3 } from 'lucide-react';
import { CORPORATE_OFFERING } from '../data/gymData';

interface CorporateSectionProps {
  onOpenCorporateInquiry: () => void;
}

export const CorporateSection: React.FC<CorporateSectionProps> = ({ onOpenCorporateInquiry }) => {
  return (
    <section id="corporate" className="py-24 bg-[#E9E5DC] text-[#0B0D0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0D0C] text-[#C8FF35] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>FORGE CORPORATE WELLNESS SUITE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold uppercase tracking-tight text-[#0B0D0C] leading-none">
            A STRONGER WORKFORCE <br />
            STARTS HERE.
          </h2>

          <p className="text-base sm:text-xl text-[#3A403C] mt-6 leading-relaxed font-medium">
            {CORPORATE_OFFERING.subheading}
          </p>
        </div>

        {/* Quantifiable Corporate Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 border-y border-[#D1CCC2] py-8">
          {CORPORATE_OFFERING.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="font-numbers text-5xl sm:text-6xl text-[#0B0D0C] tracking-wide">
                {metric.value}
              </div>
              <p className="text-xs font-mono text-[#555E58] mt-1 uppercase font-semibold">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Corporate Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {CORPORATE_OFFERING.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-8 rounded-2xl bg-white border border-[#D9D4C9] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-numbers text-3xl text-[#555E58]">0{idx + 1}</span>
                  <div className="w-8 h-8 rounded-full bg-[#0B0D0C] text-[#C8FF35] flex items-center justify-center text-xs font-bold font-mono">
                    ✓
                  </div>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-[#0B0D0C] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#555E58] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Executive Action Banner */}
        <div className="bg-[#0B0D0C] text-[#E9E5DC] p-8 sm:p-12 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C8FF35]">
              HR & CORPORATE LEADERSHIP INQUIRY
            </span>
            <h3 className="font-heading text-2xl sm:text-4xl font-extrabold uppercase text-white mt-1">
              Custom Corporate Tiers for Teams of 10 to 500+
            </h3>
            <p className="text-xs sm:text-sm text-[#87908A] mt-2">
              Receive our corporate prospectus, subsidized billing structures, employee usage dashboard demo, and schedule a trial team workout.
            </p>
          </div>

          <button
            onClick={onOpenCorporateInquiry}
            className="whitespace-nowrap px-8 py-4 bg-[#C8FF35] text-[#0B0D0C] font-heading font-extrabold text-sm uppercase tracking-wider rounded-full hover:bg-[#b8f020] hover:shadow-[0_0_25px_rgba(200,255,53,0.35)] transition-all active:scale-95 flex items-center gap-2"
            id="corporate-inquiry-cta"
          >
            <span>TALK TO OUR WELLNESS TEAM</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
