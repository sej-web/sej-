import React, { useState } from 'react';
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
