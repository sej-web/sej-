import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ClassCategory } from '../types';

interface TrainingPathsProps {
  onSelectCategory: (category: ClassCategory) => void;
  onOpenBooking: (type: string, details: string) => void;
}

export const TrainingPaths: React.FC<TrainingPathsProps> = ({ onSelectCategory, onOpenBooking }) => {
  const paths = [
    {
      id: 'begin',
      tag: '01 / FOR BEGINNERS',
      title: 'BEGIN',
      targetCategory: 'MOBILITY' as ClassCategory,
      summary: 'Build confidence. Learn the fundamentals. Find your rhythm.',
      description: 'Zero judgment. Dedicated 1-on-1 coach assessment, safe movement progressions, and small group environments designed so you never feel out of depth.',
      highlights: ['Posture & form breakdown', 'Beginner-safe dumbbells & cables', 'Direct coach feedback'],
      imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80',
      actionLabel: 'EXPLORE BEGINNER PATH'
    },
    {
      id: 'build',
      tag: '02 / FOR STRENGTH',
      title: 'BUILD',
      targetCategory: 'STRENGTH' as ClassCategory,
      summary: 'Progressive strength training with serious equipment and coaching.',
      description: 'Heavy compound barbell protocols, calibrated competition steel, plate-loaded isolations, and structured hypertrophy block periodization.',
      highlights: ['Olympic racks & platforms', 'Video bar-path review', 'Periodized lifting cycles'],
      imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80',
      actionLabel: 'VIEW STRENGTH LABS'
    },
    {
      id: 'move',
      tag: '03 / FOR CLASSES',
      title: 'MOVE',
      targetCategory: 'HIIT' as ClassCategory,
      summary: 'HIIT, mobility, conditioning, yoga and functional training.',
      description: 'Dynamic group energy designed around high-cadence intervals, athletic kettlebell complexes, joint decompression, and athletic conditioning.',
      highlights: ['Curved treadmills & SkiErgs', 'Breathwork & mobility flows', 'Heart-rate telemetry'],
      imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80',
      actionLabel: 'EXPLORE STUDIO CLASSES'
    },
    {
      id: 'perform',
      tag: '04 / FOR ATHLETES',
      title: 'PERFORM',
      targetCategory: 'FUNCTIONAL' as ClassCategory,
      summary: 'Train for performance, endurance and measurable results.',
      description: 'Engineered for competitive sport, multi-planar sprint mechanics, rotational power, VO2 max capacity, and post-session contrast recovery.',
      highlights: ['30m sled sprint turf', 'Plyometric power testing', 'Finnish cold plunge recovery'],
      imageUrl: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1000&q=80',
      actionLabel: 'VIEW PERFORMANCE SYSTEM'
    }
  ];

  return (
    <section id="train" className="py-24 bg-[#0B0D0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#1F2321] pb-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C8FF35] uppercase">
              // TRAINING METHODOLOGY
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold uppercase text-[#E9E5DC] mt-2">
              FIND YOUR TRAINING.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#87908A] max-w-md mt-4 md:mt-0 font-normal">
            Whether taking your first step or breaking your 10-year personal record, we provide the architectural space, coaching, and tools to elevate your standards.
          </p>
        </div>

        {/* Four Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {paths.map((path) => (
            <div
              key={path.id}
              className="group relative rounded-xl overflow-hidden bg-[#151817] border border-[#232725] hover:border-[#C8FF35]/70 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              {/* Card Image with Ambient Light Overlay */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={path.imageUrl}
                  alt={path.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.65] contrast-[1.15] group-hover:scale-105 group-hover:brightness-[0.75] transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151817] via-[#151817]/40 to-transparent" />
                
                {/* Number & Tag Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#0B0D0C]/85 backdrop-blur-md border border-[#2B302D] text-[11px] font-mono tracking-widest text-[#E9E5DC] rounded-full">
                    {path.tag}
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#E9E5DC] uppercase">
                    {path.title}
                  </h3>
                  <p className="text-[#C8FF35] font-semibold text-sm mt-1">
                    {path.summary}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <p className="text-sm text-[#87908A] leading-relaxed mb-6 font-normal">
                  {path.description}
                </p>

                {/* Checklist */}
                <div className="space-y-2 mb-8">
                  {path.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2.5 text-xs text-[#E9E5DC]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#C8FF35] flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#232725] flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (path.id === 'begin') {
                        onOpenBooking('beginner', 'Beginner Foundations Onboarding');
                      } else {
                        onSelectCategory(path.targetCategory);
                        const scheduleElem = document.getElementById('schedule');
                        if (scheduleElem) scheduleElem.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold font-heading tracking-widest text-[#E9E5DC] group-hover:text-[#C8FF35] transition-colors"
                  >
                    <span>{path.actionLabel}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#87908A] group-hover:text-[#C8FF35] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </button>

                  <button
                    onClick={() => onOpenBooking('trial', `Pass for ${path.title} Pillar`)}
                    className="text-[11px] font-mono font-medium px-3 py-1 rounded border border-[#333835] text-[#87908A] hover:text-white hover:border-[#87908A] transition-colors"
                  >
                    Book Intro Pass
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
