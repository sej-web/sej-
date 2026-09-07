import React from 'react';
import { Star, Users, Flame, Award } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const stats = [
    {
      icon: Star,
      value: '4.9 ★',
      label: 'MEMBER RATING',
      subtext: 'Across 620+ verified reviews'
    },
    {
      icon: Users,
      value: '2,000+',
      label: 'ACTIVE MEMBERS',
      subtext: 'Athletes, beginners & founders'
    },
    {
      icon: Flame,
      value: '35+',
      label: 'WEEKLY CLASSES',
      subtext: 'Strength, HIIT, mobility & yoga'
    },
    {
      icon: Award,
      value: '10+',
      label: 'EXPERT COACHES',
      subtext: 'Certified CSCS, USAW & FRCms'
    }
  ];

  return (
    <section id="trust" className="bg-[#151817] border-y border-[#232725] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#262C29]">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col justify-center ${idx > 0 ? 'pt-6 md:pt-0 md:pl-8' : ''}`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon className="w-4 h-4 text-[#C8FF35]" />
                  <span className="text-[11px] font-mono tracking-widest text-[#87908A] uppercase font-semibold">
                    {stat.label}
                  </span>
                </div>
                <div className="font-numbers text-4xl sm:text-5xl lg:text-6xl text-[#E9E5DC] tracking-wide leading-none">
                  {stat.value}
                </div>
                <p className="text-xs text-[#87908A] mt-1.5">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
