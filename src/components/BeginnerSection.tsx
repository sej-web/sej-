import React from 'react';
import { ShieldCheck, Sparkles, ArrowRight, HeartHandshake, Footprints, Dumbbell } from 'lucide-react';

interface BeginnerSectionProps {
  onStartWithCoach: () => void;
}

export const BeginnerSection: React.FC<BeginnerSectionProps> = ({ onStartWithCoach }) => {
  const steps = [
    {
      number: '01',
      title: 'MEET',
      subtitle: 'Meet your dedicated coach',
      description: 'An unhurried, private 30-minute sit-down. We discuss previous injuries, desk postures, schedule constraints, and personal wellness targets over a clean espresso.',
      icon: HeartHandshake,
      perk: 'Zero pressure intake'
    },
    {
      number: '02',
      title: 'MOVE',
      subtitle: 'Learn the fundamentals',
      description: 'We demystify the four key movement patterns: the squat, hinge, pull, and press. You discover proper spine bracing and joint alignment without any heavy loading.',
      icon: Footprints,
      perk: 'Biomechanical screen included'
    },
    {
      number: '03',
      title: 'BUILD',
      subtitle: 'Create your sustainable routine',
      description: 'We construct a customized weekly rhythm that fits seamlessly into your calendar. We pair you with beginner-friendly small classes where coaches know you by name.',
      icon: Dumbbell,
      perk: 'Personalized starter blueprint'
    }
  ];

  return (
    <section id="beginners" className="py-24 bg-[#0B0D0C] relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8FF35]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151817] border border-[#2B302D] text-xs font-mono text-[#C8FF35] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>THE ZERO-INTIMIDATION PLEDGE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold uppercase text-[#E9E5DC] leading-none">
            NEVER TRAINED BEFORE? <br />
            <span className="text-[#C8FF35]">PERFECT.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#87908A] mt-6 leading-relaxed">
            Walking through a fitness club door for the first time takes courage. At FORGE, you will never wander the floor feeling confused, judged, or ignored. Our structured 3-step onboarding exists so you start safely, gain confidence immediately, and build habits for life.
          </p>
        </div>

        {/* 3 Step Cards (01 MEET, 02 MOVE, 03 BUILD) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative bg-[#151817] rounded-xl p-8 border border-[#232725] hover:border-[#C8FF35]/80 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Step Number in Bebas Neue */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-numbers text-5xl text-[#C8FF35]">
                      {step.number}
                    </span>
                    <div className="p-3 rounded-lg bg-[#0B0D0C] border border-[#232725] text-[#87908A] group-hover:text-[#C8FF35] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-3xl font-extrabold uppercase text-[#E9E5DC] group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <h4 className="text-xs font-mono font-semibold uppercase text-[#C8FF35] mt-1 mb-4">
                    {step.subtitle}
                  </h4>

                  <p className="text-sm text-[#87908A] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#232725] flex items-center justify-between text-[11px] font-mono text-[#87908A]">
                  <span className="flex items-center gap-1.5 text-[#E9E5DC]">
                    <Sparkles className="w-3.5 h-3.5 text-[#C8FF35]" />
                    {step.perk}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Beginner Action Banner */}
        <div className="bg-[#151817] p-8 sm:p-10 rounded-2xl border border-[#262C29] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C8FF35]">
              STEP 01 IS COMPLETELY FREE
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-[#E9E5DC] mt-1">
              Start with a 45-Minute 1-on-1 Coach Session
            </h3>
            <p className="text-xs sm:text-sm text-[#87908A] mt-2 max-w-xl">
              No sales pitching. Just an honest evaluation of your goals, movement assessment, and a supportive tour of the club floor.
            </p>
          </div>

          <button
            onClick={onStartWithCoach}
            className="whitespace-nowrap px-8 py-4 bg-[#C8FF35] text-[#0B0D0C] font-heading font-extrabold text-sm uppercase tracking-wider rounded-full hover:bg-[#b8f020] hover:shadow-[0_0_25px_rgba(200,255,53,0.35)] transition-all duration-200 active:scale-95 flex items-center gap-2"
            id="beginner-start-coach"
          >
            <span>START WITH A COACH</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
