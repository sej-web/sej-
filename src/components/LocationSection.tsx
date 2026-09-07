import React from 'react';
import { 
  MapPin, 
  Clock, 
  Car, 
  ShowerHead, 
  Lock, 
  Droplets, 
  Coffee, 
  Accessibility, 
  ArrowUpRight,
  Phone,
  Navigation,
  Train
} from 'lucide-react';
import { FACILITY_AMENITIES } from '../data/gymData';

export const LocationSection: React.FC = () => {
  const iconMap: Record<string, any> = {
    Car,
    ShowerHead,
    Lock,
    Droplets,
    Coffee,
    Accessibility
  };

  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Lower+Parel+Mumbai', '_blank');
  };

  return (
    <section id="location" className="py-24 bg-[#0B0D0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#1F2321] pb-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C8FF35] uppercase">
              // FLAGSHIP FACILITY & ACCESS
            </span>
            <h2 className="text-4xl sm:text-6xl font-heading font-extrabold uppercase text-[#E9E5DC] mt-2">
              COME TRAIN WITH US.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#87908A] max-w-md mt-4 md:mt-0 font-normal">
            Located in the heart of Lower Parel. 18,000 sq ft of high-ceiling industrial architecture, acoustic isolation, and premium hospitality.
          </p>
        </div>

        {/* Map & Location Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Simulated Interactive Map View (7 cols) */}
          <div className="lg:col-span-7 relative h-96 lg:h-[460px] rounded-2xl overflow-hidden border border-[#232725] bg-[#151817] shadow-2xl group">
            {/* Dark Styled Map Visual Representation */}
            <div className="absolute inset-0 bg-[#121514] bg-grid-pattern opacity-60" />
            
            {/* Visual map roads & elements */}
            <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
              <path d="M-50,120 L800,280" stroke="#333D37" strokeWidth="12" fill="none" />
              <path d="M150,-20 L350,550" stroke="#333D37" strokeWidth="16" fill="none" />
              <path d="M420,100 L750,450" stroke="#252C28" strokeWidth="8" fill="none" />
              <path d="M-10,380 L600,100" stroke="#2A322E" strokeWidth="10" fill="none" />
            </svg>

            {/* Central Pin Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-[#C8FF35]/20 animate-ping absolute -top-1 -left-1" />
                <div className="w-10 h-10 rounded-full bg-[#C8FF35] text-[#0B0D0C] flex items-center justify-center shadow-[0_0_25px_rgba(200,255,53,0.8)] relative z-10">
                  <Navigation className="w-5 h-5 fill-[#0B0D0C]" />
                </div>
              </div>
              <div className="mt-3 px-3 py-1.5 rounded-lg bg-[#0B0D0C]/90 border border-[#2B302D] text-xs font-heading font-extrabold uppercase text-white shadow-xl flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C8FF35]" />
                <span>FORGE / ATHLETIC CLUB</span>
              </div>
            </div>

            {/* Metro & Transit Overlay Badge */}
            <div className="absolute top-4 left-4 bg-[#0B0D0C]/90 backdrop-blur-md border border-[#2B302D] px-3.5 py-2 rounded-xl text-xs font-mono text-[#E9E5DC] flex items-center gap-2">
              <Train className="w-4 h-4 text-[#C8FF35]" />
              <span>3 Min from Lower Parel Metro / Monorail</span>
            </div>

            {/* Map Action Button */}
            <div className="absolute bottom-4 right-4">
              <button
                onClick={handleDirections}
                className="px-5 py-2.5 rounded-full bg-[#C8FF35] text-[#0B0D0C] text-xs font-heading font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-2 hover:bg-[#b8f020]"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Details & Hours Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#151817] rounded-2xl p-8 border border-[#232725] flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF35] mb-2 uppercase">
                <MapPin className="w-4 h-4" />
                <span>LOCATION & HOURS</span>
              </div>

              <h3 className="font-heading text-3xl font-extrabold uppercase text-[#E9E5DC]">
                MUMBAI FLAGSHIP
              </h3>

              <p className="text-sm text-[#87908A] mt-2 font-mono leading-relaxed">
                Unit 4B, The Foundry Mills, Senapati Bapat Marg, <br />
                Lower Parel, Mumbai, Maharashtra 400013
              </p>

              {/* Hours Grid */}
              <div className="mt-8 pt-6 border-t border-[#232725] space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#87908A] flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#C8FF35]" /> MONDAY — FRIDAY:
                  </span>
                  <span className="text-[#E9E5DC] font-bold">05:30 — 23:00</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#87908A] flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#C8FF35]" /> SATURDAY — SUNDAY:
                  </span>
                  <span className="text-[#E9E5DC] font-bold">06:00 — 22:00</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#1C201E]">
                  <span className="text-[#87908A]">PERFORMANCE 24/7 ACCESS:</span>
                  <span className="text-[#C8FF35] font-bold">RFID UNRESTRICTED</span>
                </div>
              </div>

              {/* Concierge Contact */}
              <div className="mt-6 p-4 rounded-xl bg-[#0B0D0C] border border-[#232725] text-xs font-mono">
                <div className="text-[#87908A] mb-1">FRONT DESK & CONCIERGE:</div>
                <a href="tel:+912248920100" className="text-sm font-bold text-[#E9E5DC] hover:text-[#C8FF35] transition-colors flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C8FF35]" /> +91 (022) 4892 0100
                </a>
              </div>
            </div>

            <button
              onClick={handleDirections}
              className="mt-8 w-full py-4 rounded-full bg-[#232725] hover:bg-[#C8FF35] text-[#E9E5DC] hover:text-[#0B0D0C] text-xs font-heading font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>GET STEP-BY-STEP DIRECTIONS</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Facility Amenities Grid (PRD: parking, showers, lockers, changing rooms, accessibility, nearby public transport) */}
        <div>
          <h4 className="font-heading text-xl font-bold uppercase text-[#E9E5DC] mb-6">
            FACILITY AMENITIES INCLUDED IN ALL PASSES
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FACILITY_AMENITIES.map((amenity) => {
              const Icon = iconMap[amenity.icon] || Lock;
              return (
                <div
                  key={amenity.name}
                  className="p-5 rounded-xl bg-[#151817] border border-[#232725] flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-[#0B0D0C] border border-[#2B302D] text-[#C8FF35] flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-heading text-sm font-bold uppercase text-[#E9E5DC]">
                      {amenity.name}
                    </h5>
                    <p className="text-xs text-[#87908A] mt-1">
                      {amenity.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
