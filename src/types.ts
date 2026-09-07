export type ClassCategory = 'ALL' | 'STRENGTH' | 'HIIT' | 'CARDIO' | 'MOBILITY' | 'YOGA' | 'FUNCTIONAL';

export type DayOfWeek = 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';

export interface ClassSession {
  id: string;
  name: string;
  category: Exclude<ClassCategory, 'ALL'>;
  day: DayOfWeek;
  time: string;
  durationMinutes: number;
  coachName: string;
  coachRole: string;
  intensity: number; // 1 to 5
  spotsLeft: number;
  totalSpots: number;
  description: string;
  room: string;
  level: 'All Levels' | 'Intermediate' | 'Advanced' | 'Beginner Friendly';
}

export type EquipmentCategory = 'STRENGTH' | 'FUNCTIONAL' | 'CONDITIONING';

export interface EquipmentItem {
  id: string;
  number: string;
  name: string;
  category: EquipmentCategory;
  tagline: string;
  description: string;
  specs: string[];
  muscleGroups: string[];
  experienceLevel: 'All Levels' | 'Intermediate' | 'Advanced';
  imageUrl: string;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  certifications: string[];
  experienceYears: number;
  bio: string;
  quote: string;
  imageUrl: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  isPopular?: boolean;
  features: string[];
  perks: string[];
  bestFor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  memberSince: string;
  transformation: string;
  imageUrl: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'membership' | 'classes' | 'facilities';
}
