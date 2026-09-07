import React, { useState } from 'react';
import { Award, CheckCircle, ArrowUpRight, Quote, MessageSquare } from 'lucide-react';
import { Coach } from '../types';
import { COACHES_DATA } from '../data/gymData';

interface CoachesSectionProps {
  onBookCoach: (coach: Coach) => void;
}

export const CoachesSection: React.FC<CoachesSectionProps> = ({ onBookCoach }) => {
  const [activeCoachIndex, setActiveCoachIndex] = useState(0);
  const featuredCoach = COACHES_DATA[activeCoachIndex];

  return (
    <section id="coaches" className="py-24 bg-[#151817] border-y border-[#232725] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#232725] pb-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C8FF35] uppercase">
              // PERFORMANCE FACULTY
            </span>
            <h2 className="text-4xl sm:text-6xl font-heading font-extrabold uppercase text-[#E9E5DC] mt-2">
              PEOPLE WHO KNOW <br />
              <span className="text-[#C8FF35]">HOW TO GET YOU THERE.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#87908A] max-w-md mt-4 md:mt-0 font-normal">
            Certified exercise physiologists, Olympic lifters, and mobility specialists. No pseudo-science; rigorous biomechanics paired with relentless encouragement.
          </p>
        </div>

        {/* Coaches Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {COACHES_DATA.map((coach, idx) => (
            <div
              key={coach.id}
              className={`group bg-[#0B0D0C] rounded-xl overflow-hidden border transition-all duration-300 flex flex-col justify-between shadow-xl ${
                idx === activeCoachIndex ? 'border-[#C8FF35]' : 'border-[#232725] hover:border-[#38403C]'
              }`}
            >
              {/* Coach Portrait */}
              <div className="relative h-80 w-full overflow-hidden bg-[#181B1A]">
                <img
                  src={coach.imageUrl}
                  alt={coach.name}
                  className="w-full h-full object-cover object-top filter brightness-[0.78] contrast-[1.1] group-hover:scale-105 group-hover:brightness-[0.9] transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C] via-[#0B0D0C]/30 to-transparent" />
                
                {/* Experience Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#0B0D0C]/85 backdrop-blur-md border border-[#2B302D] text-[10px] font-mono text-[#E9E5DC] rounded-full">
                    {coach.experienceYears}+ YEARS EXPERIENCE
                  </span>
                </div>

                {/* Name & Role overlay */}
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="font-heading text-2xl font-extrabold uppercase text-[#E9E5DC] group-hover:text-[#C8FF35] transition-colors">
                    {coach.name}
                  </h3>
                  <p className="text-xs font-mono text-[#87908A] uppercase tracking-wider mt-0.5">
                    {coach.role}
                  </p>
                </div>
              </div>

              {/* Coach Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {coach.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="px-2.5 py-0.5 rounded-full bg-[#1A1D1C] border border-[#2B302D] text-[10px] font-mono text-[#E9E5DC]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-[#87908A] leading-relaxed mb-4">
                    {coach.bio}
                  </p>

                  {/* Certifications Checklist */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-[#1C201E]">
                    {coach.certifications.map((cert) => (
                      <div key={cert} className="flex items-center gap-2 text-[11px] font-mono text-[#87908A]">
                        <Award className="w-3.5 h-3.5 text-[#C8FF35] flex-shrink-0" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action */}
                <button
                  onClick={() => onBookCoach(coach)}
                  className="w-full py-3 bg-[#1A1D1C] hover:bg-[#C8FF35] text-[#E9E5DC] hover:text-[#0B0D0C] border border-[#2B302D] hover:border-[#C8FF35] rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-2 active:scale-98"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>CONSULT WITH {coach.name.split(' ')[0].toUpperCase()}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coach Credibility Quote Banner */}
        <div className="bg-[#0B0D0C] p-8 rounded-xl border border-[#232725] flex flex-col md:flex-row items-center gap-6">
          <Quote className="w-10 h-10 text-[#C8FF35] flex-shrink-0 opacity-80" />
          <div className="flex-1">
            <p className="text-base sm:text-lg text-[#E9E5DC] font-medium italic leading-relaxed">
              "{featuredCoach.quote}"
            </p>
            <span className="text-xs font-mono text-[#87908A] uppercase tracking-widest mt-2 block">
              — {featuredCoach.name}, {featuredCoach.role}
            </span>
          </div>
          <button
            onClick={() => onBookCoach(featuredCoach)}
            className="whitespace-nowrap px-6 py-3 rounded-full bg-[#C8FF35] text-[#0B0D0C] font-heading font-extrabold text-xs uppercase tracking-widest hover:bg-[#b8f020]"
          >
            MEET THE COACHES
          </button>
        </div>
      </div>
    </section>
  );
};
