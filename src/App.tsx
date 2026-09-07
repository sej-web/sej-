import React, { useState } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { TrainingPaths } from './components/TrainingPaths';
import { Schedule } from './components/Schedule';
import { EquipmentSection } from './components/EquipmentSection';
import { CoachesSection } from './components/CoachesSection';
import { BeginnerSection } from './components/BeginnerSection';
import { CommunitySection } from './components/CommunitySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { MembershipsSection } from './components/MembershipsSection';
import { CorporateSection } from './components/CorporateSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ClassCategory, ClassSession, Coach, MembershipPlan } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<ClassCategory>('ALL');
  
  // Booking modal state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState<string>('trial');
  const [bookingDetails, setBookingDetails] = useState<string>('');

  const openBooking = (type: string = 'trial', details: string = '') => {
    setBookingType(type);
    setBookingDetails(details);
    setIsBookingOpen(true);
  };

  const handleNavigateSchedule = () => {
    const scheduleElem = document.getElementById('schedule');
    if (scheduleElem) {
      scheduleElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClass = (session: ClassSession) => {
    openBooking('class', `${session.name} • ${session.day} at ${session.time} with ${session.coachName}`);
  };

  const handleBookCoach = (coach: Coach) => {
    openBooking('coach', `1-on-1 Consultation with ${coach.name} (${coach.role})`);
  };

  const handleSelectPlan = (plan: MembershipPlan) => {
    openBooking('membership', `${plan.name} Membership Plan Selection`);
  };

  return (
    <div className="min-h-screen bg-[#0B0D0C] text-[#E9E5DC] font-sans antialiased selection:bg-[#C8FF35] selection:text-[#0B0D0C]">
      {/* Top Header */}
      <Navbar
        onOpenBooking={openBooking}
        onNavigateSchedule={handleNavigateSchedule}
      />

      {/* Hero Section */}
      <Hero
        onOpenBooking={() => openBooking('trial', '1-Day All-Access Pass')}
        onNavigateSchedule={handleNavigateSchedule}
      />

      {/* Trust Strip */}
      <TrustBar />

      {/* Find Your Training */}
      <TrainingPaths
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onOpenBooking={openBooking}
      />

      {/* Live Weekly Class Schedule */}
      <Schedule
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onBookClass={handleBookClass}
      />

      {/* Equipment Arsenal */}
      <EquipmentSection
        onOpenBooking={openBooking}
      />

      {/* Certified Coaches Faculty */}
      <CoachesSection
        onBookCoach={handleBookCoach}
      />

      {/* Beginner Guidance Section */}
      <BeginnerSection
        onStartWithCoach={() => openBooking('beginner', 'Complimentary 45-Min Beginner Coach Intake')}
      />

      {/* Community Culture & Photography */}
      <CommunitySection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Membership Tiers & Comparison */}
      <MembershipsSection
        onSelectPlan={handleSelectPlan}
      />

      {/* Corporate Wellness */}
      <CorporateSection
        onOpenCorporateInquiry={() => openBooking('corporate', 'Corporate Wellness Partnership Inquiry')}
      />

      {/* Facility Location, Hours & Amenities */}
      <LocationSection />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* Brand Footer */}
      <Footer />

      {/* Floating Quick Buy Contact Pill (Desktop / Tablet) */}
      <aside aria-label="Sales Hotline" className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 bg-[#151817]/95 backdrop-blur-md p-2 pl-4 rounded-full border border-[#2B302D] shadow-2xl hover:border-[#C8FF35] transition-all duration-200">
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-[#C8FF35] animate-pulse" />
          <span className="text-[#87908A]">Want to buy?</span>
          <span className="text-[#E9E5DC] font-bold">+91 99876 84057</span>
        </div>
        <a
          href="tel:+919987684057"
          className="p-2.5 bg-[#C8FF35] text-[#0B0D0C] rounded-full hover:bg-[#b8f020] transition-colors flex items-center justify-center shadow-md active:scale-95"
          title="Call 9987684057 to buy"
          id="floating-call-btn"
        >
          <Phone className="w-4 h-4" />
        </a>
        <a
          href="https://wa.me/919987684057?text=Hi%2C%20I%20want%20to%20buy%20a%20FORGE%20membership"
          target="_blank"
          rel="noreferrer"
          className="p-2.5 bg-[#232725] text-[#C8FF35] hover:text-white hover:bg-[#25D366] rounded-full transition-colors flex items-center justify-center border border-[#2B302D] active:scale-95"
          title="WhatsApp 9987684057 to buy"
          id="floating-whatsapp-btn"
        >
          <MessageSquare className="w-4 h-4" />
        </a>
      </aside>

      {/* Interactive Reservation / Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        bookingType={bookingType}
        initialDetails={bookingDetails}
      />
    </div>
  );
}
