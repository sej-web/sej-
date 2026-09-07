import React, { useState } from 'react';
import { ChevronRight, Dumbbell, Shield, Layers, Activity, Sparkles, X } from 'lucide-react';
import { EquipmentCategory, EquipmentItem } from '../types';
import { EQUIPMENT_DATA } from '../data/gymData';

interface EquipmentSectionProps {
  onOpenBooking: (type: string, details: string) => void;
}

export const EquipmentSection: React.FC<EquipmentSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<EquipmentCategory>('STRENGTH');
  const [inspectedItem, setInspectedItem] = useState<EquipmentItem | null>(null);

  const categories: { key: EquipmentCategory; label: string; count: number }[] = [
    { key: 'STRENGTH', label: '01 — STRENGTH', count: 4 },
    { key: 'FUNCTIONAL', label: '02 — FUNCTIONAL', count: 4 },
    { key: 'CONDITIONING', label: '03 — CONDITIONING', count: 3 },
  ];

  const items = EQUIPMENT_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="equipment" className="py-24 bg-[#0B0D0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#1F2321] pb-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C8FF35] uppercase">
              // ARSENAL & HARDWARE
            </span>
            <h2 className="text-4xl sm:text-6xl font-heading font-extrabold uppercase text-[#E9E5DC] mt-2">
              BUILT TO <span className="text-white">TRAIN HARD.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#87908A] max-w-md mt-4 md:mt-0">
            Commercial-grade equipment. Thoughtfully arranged. No wasted space. Custom laser-cut steel, dynamic cable kinematics, and zero plastic gimmicks.
          </p>
        </div>

        {/* Category Tabs: 01 — STRENGTH, 02 — FUNCTIONAL, 03 — CONDITIONING */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-3 rounded-full text-xs sm:text-sm font-heading font-extrabold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#C8FF35] text-[#0B0D0C] shadow-[0_0_20px_rgba(200,255,53,0.25)]'
                    : 'bg-[#151817] text-[#87908A] hover:text-[#E9E5DC] border border-[#232725]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-[#0B0D0C] text-[#C8FF35]' : 'bg-[#232725] text-[#87908A]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Equipment Visual Cards Grid (Editorial Cards with Large Numbers 01, 02...) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setInspectedItem(item)}
              className="group cursor-pointer relative rounded-xl overflow-hidden bg-[#151817] border border-[#232725] hover:border-[#C8FF35] transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              {/* Product Photography Container */}
              <div className="relative h-72 w-full overflow-hidden bg-[#0e100f]">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.2] group-hover:scale-105 group-hover:brightness-[0.85] transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151817] via-[#151817]/30 to-transparent" />
                
                {/* Large Editorial Number in Bebas Neue */}
                <div className="absolute top-4 right-5 font-numbers text-5xl sm:text-6xl text-[#E9E5DC]/20 group-hover:text-[#C8FF35]/70 transition-colors pointer-events-none">
                  {item.number}
                </div>

                {/* Muscle Group Chip */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 bg-[#0B0D0C]/85 border border-[#2B302D] text-[10px] font-mono uppercase text-[#C8FF35] rounded">
                    {item.muscleGroups[0]}
                  </span>
                </div>

                {/* Ambient Green Rim Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[inset_0_0_40px_rgba(200,255,53,0.15)]" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-[#E9E5DC] group-hover:text-white transition-colors leading-tight mb-1.5">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#C8FF35] font-semibold mb-3">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-[#87908A] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Reveal Action */}
                <div className="pt-4 mt-4 border-t border-[#232725] flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wider text-[#87908A] group-hover:text-[#C8FF35] transition-colors">
                  <span>EXPLORE SPECS</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floor Standard Banner */}
        <div className="mt-12 bg-[#151817] p-6 sm:p-8 rounded-xl border border-[#232725] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-3 bg-[#0B0D0C] rounded-lg border border-[#2B302D] text-[#C8FF35]">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold uppercase text-[#E9E5DC]">
                25mm Vulcanized Rubber Shock Flooring Throughout
              </h4>
              <p className="text-xs sm:text-sm text-[#87908A] mt-0.5">
                Every square foot acoustic-dampened for Olympic drop safety and joint compression relief.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking('facility_tour', 'Guided Equipment Floor Tour')}
            className="whitespace-nowrap px-6 py-3 rounded-full bg-[#232725] hover:bg-[#C8FF35] hover:text-[#0B0D0C] border border-[#3A403C] text-xs font-heading font-extrabold uppercase tracking-widest text-[#E9E5DC] transition-all duration-200"
          >
            BOOK A PRIVATE FLOOR TOUR
          </button>
        </div>
      </div>

      {/* Equipment Detailed Spec Inspector Modal */}
      {inspectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#151817] border border-[#333835] rounded-2xl max-w-2xl w-full overflow-hidden text-[#E9E5DC] shadow-2xl relative animate-fadeIn">
            {/* Modal Image Header */}
            <div className="relative h-64 w-full">
              <img
                src={inspectedItem.imageUrl}
                alt={inspectedItem.name}
                className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151817] via-[#151817]/40 to-transparent" />
              
              <button
                onClick={() => setInspectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#0B0D0C]/80 text-[#87908A] hover:text-white border border-[#2B302D] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-2">
                  <span className="font-numbers text-3xl text-[#C8FF35]">#{inspectedItem.number}</span>
                  <span className="text-xs font-mono text-[#87908A] uppercase">{inspectedItem.category} STATION</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-white">
                  {inspectedItem.name}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#87908A] uppercase">OVERVIEW & BIOMECHANICS</span>
                <p className="text-sm text-[#87908A] leading-relaxed mt-1">
                  {inspectedItem.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div>
                <span className="text-xs font-mono text-[#87908A] uppercase">ENGINEERING SPECIFICATIONS</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                  {inspectedItem.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 p-2.5 rounded bg-[#0B0D0C] border border-[#232725] text-xs font-mono text-[#E9E5DC]">
                      <Shield className="w-3.5 h-3.5 text-[#C8FF35] flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Muscle Groups */}
              <div>
                <span className="text-xs font-mono text-[#87908A] uppercase">PRIMARY MUSCLE ENGAGEMENT</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {inspectedItem.muscleGroups.map((muscle) => (
                    <span key={muscle} className="px-3 py-1 rounded-full bg-[#232725] border border-[#333835] text-xs text-[#E9E5DC]">
                      {muscle}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#232725] flex gap-3">
                <button
                  onClick={() => setInspectedItem(null)}
                  className="flex-1 py-3 rounded-full border border-[#333835] text-xs font-heading font-bold uppercase text-[#87908A] hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const item = inspectedItem;
                    setInspectedItem(null);
                    onOpenBooking('facility_tour', `Floor test request: ${item.name}`);
                  }}
                  className="flex-1 py-3 rounded-full bg-[#C8FF35] text-[#0B0D0C] text-xs font-heading font-extrabold uppercase hover:bg-[#b8f020]"
                >
                  Request Equipment Walkthrough
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
