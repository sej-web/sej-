import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = TESTIMONIALS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-24 bg-[#0B0D0C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#1F2321] pb-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C8FF35] uppercase">
              // MEMBER PROOF
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold uppercase text-[#E9E5DC] mt-2">
              REAL TRANSFORMATIONS.
            </h2>
          </div>

          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-[#2B302D] hover:border-[#C8FF35] text-[#87908A] hover:text-[#C8FF35] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-[#2B302D] hover:border-[#C8FF35] text-[#87908A] hover:text-[#C8FF35] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Large Quotation Card */}
        <div className="bg-[#151817] rounded-2xl p-8 sm:p-12 lg:p-16 border border-[#232725] relative shadow-2xl">
          <Quote className="w-16 h-16 sm:w-20 sm:h-20 text-[#C8FF35]/15 absolute top-8 right-8 pointer-events-none" />

          {/* Stars */}
          <div className="flex items-center gap-1.5 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#C8FF35] text-[#C8FF35]" />
            ))}
            <span className="text-xs font-mono text-[#87908A] ml-2">VERIFIED MEMBER REVIEW</span>
          </div>

          {/* Quotation text */}
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#E9E5DC] leading-snug tracking-tight mb-10 max-w-4xl">
            “{current.quote}”
          </blockquote>

          {/* Author info & Transformation badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#232725]">
            <div className="flex items-center gap-4">
              <img
                src={current.imageUrl}
                alt={current.author}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#C8FF35]"
              />
              <div>
                <h4 className="font-heading text-lg font-bold uppercase text-white">
                  {current.author}
                </h4>
                <p className="text-xs text-[#87908A]">
                  {current.role} • <span className="text-[#C8FF35]">{current.memberSince}</span>
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0B0D0C] border border-[#2B302D] text-xs font-mono text-[#E9E5DC]">
              <CheckCircle className="w-4 h-4 text-[#C8FF35]" />
              <span>Result: {current.transformation}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
