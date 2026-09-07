import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/gymData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#151817] border-y border-[#232725] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0D0C] border border-[#2B302D] text-xs font-mono text-[#C8FF35] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>CLARITY & DETAILS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold uppercase text-[#E9E5DC]">
            FREQUENTLY ASKED QUESTIONS.
          </h2>
          <p className="text-sm sm:text-base text-[#87908A] mt-3">
            Everything you need to know about our standards, membership options, and onboarding process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'bg-[#0B0D0C] border-[#C8FF35]/60 shadow-lg' : 'bg-[#0B0D0C]/60 border-[#232725] hover:border-[#38403C]'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-bold uppercase text-[#E9E5DC]">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full border transition-colors flex-shrink-0 ${
                    isOpen ? 'border-[#C8FF35] text-[#C8FF35] bg-[#151817]' : 'border-[#2B302D] text-[#87908A]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#87908A] leading-relaxed border-t border-[#1C201E] animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
