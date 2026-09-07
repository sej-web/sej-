import React from 'react';
import { Users, Sparkles, Heart } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  const moments = [
    {
      url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      caption: 'Saturday Team Endurance Series',
      tag: '08:30 AM',
      span: 'md:col-span-2 md:row-span-2 h-96 md:h-full'
    },
    {
      url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80',
      caption: 'Coach technique cueing at the Iron Bay',
      tag: 'FORM CLINIC',
      span: 'h-64'
    },
    {
      url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
      caption: 'Vinyasa Mobility recharge flow',
      tag: 'STUDIO ALPHA',
      span: 'h-64'
    },
    {
      url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80',
      caption: 'Dumbbell cluster density training',
      tag: 'HYPERTROPHY',
      span: 'h-64'
    },
    {
      url: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=600&q=80',
      caption: 'Post-MetCon espresso and high-fives',
      tag: 'COMMUNITY LOUNGE',
      span: 'h-64'
    }
  ];

  return (
    <section className="py-24 bg-[#151817] border-y border-[#232725] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B0D0C] border border-[#2B302D] text-xs font-mono text-[#C8FF35] mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>THE FORGE CULTURE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold uppercase text-[#E9E5DC] leading-tight">
            THIS ISN'T JUST WHERE <br />
            <span className="text-[#C8FF35]">YOU WORK OUT.</span>
          </h2>

          <div className="text-base sm:text-xl text-[#87908A] font-medium mt-6 space-y-1">
            <p>It's where you show up.</p>
            <p>Where people know your name.</p>
            <p className="text-[#E9E5DC] font-semibold">Where progress becomes part of your routine.</p>
          </div>
        </div>

        {/* Asymmetric Photography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {moments.map((moment, idx) => (
            <div
              key={idx}
              className={`group relative rounded-xl overflow-hidden bg-[#0B0D0C] border border-[#232725] hover:border-[#C8FF35]/70 transition-all duration-300 shadow-xl ${moment.span}`}
            >
              <img
                src={moment.url}
                alt={moment.caption}
                className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.15] group-hover:scale-105 group-hover:brightness-[0.85] transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag Chip */}
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 bg-[#0B0D0C]/85 backdrop-blur-md border border-[#2B302D] text-[10px] font-mono uppercase text-[#C8FF35] rounded">
                  {moment.tag}
                </span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-heading font-bold uppercase text-[#E9E5DC] group-hover:text-white transition-colors">
                  {moment.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Pillars Strip */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-xl bg-[#0B0D0C] border border-[#232725]">
            <h4 className="font-heading text-lg font-bold uppercase text-[#E9E5DC]">1. Respect the Room</h4>
            <p className="text-xs text-[#87908A] mt-2">
              Every weight is re-racked. Every station wiped. We build an environment of mutual pride.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-[#0B0D0C] border border-[#232725]">
            <h4 className="font-heading text-lg font-bold uppercase text-[#C8FF35]">2. High Effort, Zero Ego</h4>
            <p className="text-xs text-[#87908A] mt-2">
              It doesn't matter if you lift 20kg or 220kg; the intensity of personal dedication is what earns respect.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-[#0B0D0C] border border-[#232725]">
            <h4 className="font-heading text-lg font-bold uppercase text-[#E9E5DC]">3. Better Everyday</h4>
            <p className="text-xs text-[#87908A] mt-2">
              Consistency outlasts motivation. We build the physical resilience that makes life outside easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
