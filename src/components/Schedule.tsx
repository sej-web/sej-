import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Flame, 
  CheckCircle, 
  Sparkles, 
  Filter, 
  ChevronRight,
  Info
} from 'lucide-react';
import { ClassCategory, DayOfWeek, ClassSession } from '../types';
import { SCHEDULE_DATA } from '../data/gymData';

interface ScheduleProps {
  selectedCategory: ClassCategory;
  onSelectCategory: (cat: ClassCategory) => void;
  onBookClass: (session: ClassSession) => void;
}

export const Schedule: React.FC<ScheduleProps> = ({
  selectedCategory,
  onSelectCategory,
  onBookClass
}) => {
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>('MON');
  const [timeFilter, setTimeFilter] = useState<'ALL' | 'MORNING' | 'AFTERNOON' | 'EVENING'>('ALL');
  const [selectedSessionForInfo, setSelectedSessionForInfo] = useState<ClassSession | null>(null);

  const days: DayOfWeek[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const categories: ClassCategory[] = ['ALL', 'STRENGTH', 'HIIT', 'CARDIO', 'MOBILITY', 'YOGA', 'FUNCTIONAL'];

  // Filter logic
  const filteredSessions = SCHEDULE_DATA.filter((session) => {
    const matchesDay = session.day === selectedDay;
    const matchesCategory = selectedCategory === 'ALL' || session.category === selectedCategory;
    
    // Time filter
    const hour = parseInt(session.time.split(':')[0], 10);
    let matchesTime = true;
    if (timeFilter === 'MORNING') matchesTime = hour < 12;
    if (timeFilter === 'AFTERNOON') matchesTime = hour >= 12 && hour < 17;
    if (timeFilter === 'EVENING') matchesTime = hour >= 17;

    return matchesDay && matchesCategory && matchesTime;
  });

  // Render intensity dots (1 to 5)
  const renderIntensity = (level: number) => {
    return (
      <div className="flex items-center gap-1" title={`Intensity level ${level} of 5`}>
        {[1, 2, 3, 4, 5].map((dot) => (
          <span
            key={dot}
            className={`w-2 h-2 rounded-full transition-colors ${
              dot <= level ? 'bg-[#C8FF35]' : 'bg-[#2B302D]'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="schedule" className="py-24 bg-[#151817] border-y border-[#232725] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#232725] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0D0C] border border-[#2B302D] text-xs font-mono text-[#C8FF35] mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>LIVE WEEKLY TIMETABLE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-heading font-extrabold uppercase text-[#E9E5DC]">
              YOUR WEEK. <br />
              <span className="text-[#C8FF35]">YOUR WORKOUT.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#87908A] max-w-md mt-4 md:mt-0">
            Sessions strictly capped to guarantee personal floor space and active coach technique correction. Reserve your station in advance.
          </p>
        </div>

        {/* Category Filters (PRD: ALL, STRENGTH, HIIT, CARDIO, MOBILITY, YOGA, FUNCTIONAL) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          <span className="text-xs font-mono text-[#87908A] uppercase tracking-wider flex items-center gap-1 mr-2 flex-shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#C8FF35]" /> FILTER:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider rounded-full transition-all whitespace-nowrap flex-shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#C8FF35] text-[#0B0D0C] shadow-[0_0_15px_rgba(200,255,53,0.3)]'
                  : 'bg-[#0B0D0C] text-[#87908A] hover:text-[#E9E5DC] border border-[#2B302D]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Day Selector (MON - SUN) */}
        <div className="grid grid-cols-7 gap-1.5 sm:gap-2 mb-8 bg-[#0B0D0C] p-2 rounded-xl border border-[#232725]">
          {days.map((day) => {
            const isCurrent = selectedDay === day;
            const countForDay = SCHEDULE_DATA.filter((s) => s.day === day).length;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`py-3 px-1 sm:px-3 rounded-lg flex flex-col items-center justify-center transition-all ${
                  isCurrent
                    ? 'bg-[#232725] text-[#C8FF35] border border-[#3C443F] shadow-md'
                    : 'text-[#87908A] hover:text-[#E9E5DC] hover:bg-[#151817]'
                }`}
              >
                <span className="font-heading font-bold text-xs sm:text-base tracking-wider">
                  {day}
                </span>
                <span className="text-[10px] font-mono mt-0.5 text-[#87908A]">
                  {countForDay} classes
                </span>
              </button>
            );
          })}
        </div>

        {/* Secondary Time Filter */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 text-xs font-mono text-[#87908A]">
          <div className="flex items-center gap-2">
            <span>TIME OF DAY:</span>
            {(['ALL', 'MORNING', 'AFTERNOON', 'EVENING'] as const).map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeFilter(tf)}
                className={`px-3 py-1 rounded transition-colors ${
                  timeFilter === tf
                    ? 'text-[#C8FF35] bg-[#232725] font-bold'
                    : 'text-[#87908A] hover:text-[#E9E5DC]'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C8FF35]" /> Available
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" /> &lt;3 Spots
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500" /> Full Waitlist
            </span>
          </div>
        </div>

        {/* Schedule Cards Grid */}
        {filteredSessions.length === 0 ? (
          <div className="p-12 text-center rounded-xl bg-[#0B0D0C] border border-[#232725]">
            <p className="text-[#87908A] font-mono text-sm mb-4">
              No classes match this exact filter on {selectedDay}.
            </p>
            <button
              onClick={() => {
                onSelectCategory('ALL');
                setTimeFilter('ALL');
              }}
              className="px-5 py-2 rounded-full bg-[#232725] text-xs font-bold text-[#E9E5DC] hover:text-[#C8FF35]"
            >
              Reset Schedule Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSessions.map((session) => {
              const isFull = session.spotsLeft === 0;
              const isLow = session.spotsLeft > 0 && session.spotsLeft <= 3;

              return (
                <div
                  key={session.id}
                  className="group bg-[#0B0D0C] rounded-xl p-6 border border-[#232725] hover:border-[#C8FF35]/70 transition-all duration-200 flex flex-col justify-between shadow-lg"
                >
                  <div>
                    {/* Top Row: Time, Duration & Category */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-numbers text-3xl sm:text-4xl text-[#E9E5DC] tracking-wide">
                            {session.time}
                          </span>
                          <span className="text-xs font-mono text-[#87908A]">
                            ({session.durationMinutes} MIN)
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-[#87908A] flex items-center gap-1 mt-0.5">
                          {session.room}
                        </span>
                      </div>

                      <span className="px-2.5 py-1 rounded bg-[#1A1D1B] border border-[#2E3330] text-[10px] font-mono uppercase text-[#C8FF35] font-semibold">
                        {session.category}
                      </span>
                    </div>

                    {/* Class Name */}
                    <h3 className="font-heading text-xl font-bold uppercase text-[#E9E5DC] group-hover:text-white transition-colors mb-2">
                      {session.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#87908A] line-clamp-2 mb-4 leading-relaxed">
                      {session.description}
                    </p>

                    {/* Coach & Intensity */}
                    <div className="bg-[#151817] rounded-lg p-3 border border-[#232725] mb-5 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-[#E9E5DC]">
                          <User className="w-3.5 h-3.5 text-[#C8FF35]" />
                          <span className="font-medium">{session.coachName}</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#87908A]">
                          {session.level}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-2 border-t border-[#232725]">
                        <span className="text-[11px] text-[#87908A] flex items-center gap-1">
                          <Flame className="w-3.5 h-3.5 text-[#C8FF35]" /> Intensity
                        </span>
                        {renderIntensity(session.intensity)}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-2 flex items-center justify-between gap-3">
                    <div className="text-[11px] font-mono">
                      {isFull ? (
                        <span className="text-rose-400 font-bold">● Waitlist Only</span>
                      ) : isLow ? (
                        <span className="text-amber-400 font-bold">
                          ● Only {session.spotsLeft} spots left
                        </span>
                      ) : (
                        <span className="text-[#87908A]">
                          ● {session.spotsLeft} / {session.totalSpots} spots
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedSessionForInfo(session)}
                        className="p-2 text-[#87908A] hover:text-[#E9E5DC] hover:bg-[#1F2421] rounded-full transition-colors"
                        title="View workout overview"
                      >
                        <Info className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => onBookClass(session)}
                        disabled={isFull}
                        className={`px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider rounded-full transition-all ${
                          isFull
                            ? 'bg-[#232725] text-[#87908A] cursor-not-allowed'
                            : 'bg-[#C8FF35] text-[#0B0D0C] hover:bg-[#b5f022] hover:shadow-[0_0_12px_rgba(200,255,53,0.3)] active:scale-95'
                        }`}
                      >
                        {isFull ? 'JOIN WAITLIST' : 'BOOK SPOT'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Schedule Footer Action */}
        <div className="mt-12 p-6 rounded-xl bg-[#0B0D0C] border border-[#232725] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#C8FF35] flex-shrink-0" />
            <p className="text-xs sm:text-sm text-[#87908A]">
              First time at FORGE? Your introductory class reservation includes a full orientation and post-class shaker towel service.
            </p>
          </div>
          <button
            onClick={() => onBookClass(SCHEDULE_DATA[0])}
            className="whitespace-nowrap px-5 py-2.5 rounded-full border border-[#404743] hover:border-[#C8FF35] text-xs font-heading font-bold uppercase tracking-wider text-[#E9E5DC] hover:text-[#C8FF35] transition-colors"
          >
            CLAIM FIRST CLASS PASS →
          </button>
        </div>
      </div>

      {/* Class Details Quick Modal */}
      {selectedSessionForInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#151817] border border-[#333835] rounded-xl max-w-md w-full p-6 text-[#E9E5DC] shadow-2xl relative">
            <div className="flex items-start justify-between border-b border-[#262C29] pb-4 mb-4">
              <div>
                <span className="text-[11px] font-mono text-[#C8FF35] uppercase">
                  {selectedSessionForInfo.category} • {selectedSessionForInfo.day} {selectedSessionForInfo.time}
                </span>
                <h4 className="font-heading text-2xl font-bold uppercase text-white mt-1">
                  {selectedSessionForInfo.name}
                </h4>
              </div>
              <button
                onClick={() => setSelectedSessionForInfo(null)}
                className="text-[#87908A] hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-[#87908A] leading-relaxed mb-6">
              {selectedSessionForInfo.description}
            </p>

            <div className="space-y-2 text-xs font-mono text-[#87908A] mb-6 bg-[#0B0D0C] p-4 rounded-lg border border-[#232725]">
              <div className="flex justify-between">
                <span>COACH:</span>
                <span className="text-[#E9E5DC] font-bold">{selectedSessionForInfo.coachName}</span>
              </div>
              <div className="flex justify-between">
                <span>DURATION:</span>
                <span className="text-[#E9E5DC] font-bold">{selectedSessionForInfo.durationMinutes} Minutes</span>
              </div>
              <div className="flex justify-between">
                <span>ROOM / BAY:</span>
                <span className="text-[#E9E5DC] font-bold">{selectedSessionForInfo.room}</span>
              </div>
              <div className="flex justify-between">
                <span>INTENSITY LEVEL:</span>
                <span className="text-[#C8FF35] font-bold">{selectedSessionForInfo.intensity} / 5</span>
              </div>
              <div className="flex justify-between">
                <span>EXPERIENCE LEVEL:</span>
                <span className="text-[#E9E5DC] font-bold">{selectedSessionForInfo.level}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedSessionForInfo(null)}
                className="flex-1 py-2.5 rounded-full border border-[#333835] text-xs font-bold font-heading uppercase text-[#87908A] hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const s = selectedSessionForInfo;
                  setSelectedSessionForInfo(null);
                  onBookClass(s);
                }}
                className="flex-1 py-2.5 rounded-full bg-[#C8FF35] text-[#0B0D0C] text-xs font-bold font-heading uppercase hover:bg-[#b8f020]"
              >
                Reserve Spot Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
