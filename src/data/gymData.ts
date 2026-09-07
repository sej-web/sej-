import { 
  ClassSession, 
  EquipmentItem, 
  Coach, 
  MembershipPlan, 
  Testimonial, 
  FaqItem 
} from '../types';

export const SCHEDULE_DATA: ClassSession[] = [
  // Monday
  {
    id: 'c-mon-1',
    name: 'STRENGTH 01: FOUNDATIONS',
    category: 'STRENGTH',
    day: 'MON',
    time: '06:30',
    durationMinutes: 45,
    coachName: 'Rahul Deshmukh',
    coachRole: 'Head Strength Coach',
    intensity: 4,
    spotsLeft: 3,
    totalSpots: 16,
    description: 'Barbell compound fundamentals focusing on squat patterns, hinge mechanics, and core stability.',
    room: 'The Iron Bay',
    level: 'All Levels'
  },
  {
    id: 'c-mon-2',
    name: 'METCON IGNITE',
    category: 'HIIT',
    day: 'MON',
    time: '08:00',
    durationMinutes: 50,
    coachName: 'Elena Rostova',
    coachRole: 'Conditioning Lead',
    intensity: 5,
    spotsLeft: 2,
    totalSpots: 20,
    description: 'High-density anaerobic intervals utilizing SkiErgs, assault runners, and kettlebells for peak output.',
    room: 'The Engine Room',
    level: 'Intermediate'
  },
  {
    id: 'c-mon-3',
    name: 'ATHLETIC MOBILITY',
    category: 'MOBILITY',
    day: 'MON',
    time: '12:15',
    durationMinutes: 40,
    coachName: 'Priya Sen',
    coachRole: 'Movement Specialist',
    intensity: 2,
    spotsLeft: 8,
    totalSpots: 18,
    description: 'Joint decompressions, thoracic rotation drills, and hip opener sequences for desk-bound professionals.',
    room: 'Studio Alpha',
    level: 'Beginner Friendly'
  },
  {
    id: 'c-mon-4',
    name: 'FORGE FUNCTIONAL HYBRID',
    category: 'FUNCTIONAL',
    day: 'MON',
    time: '18:00',
    durationMinutes: 55,
    coachName: 'Marcus Vance',
    coachRole: 'Functional Systems Coach',
    intensity: 4,
    spotsLeft: 1,
    totalSpots: 16,
    description: 'Multi-planar cable circuits, rotational landmine work, and weighted sled carries.',
    room: 'The Turf Track',
    level: 'All Levels'
  },
  {
    id: 'c-mon-5',
    name: 'HEAVY ENGINE CARDIO',
    category: 'CARDIO',
    day: 'MON',
    time: '19:30',
    durationMinutes: 45,
    coachName: 'Arjun Mehta',
    coachRole: 'Performance Director',
    intensity: 4,
    spotsLeft: 5,
    totalSpots: 20,
    description: 'Zone 4 threshold intervals on rowers and curved treadmills with monitored HR cadence.',
    room: 'The Engine Room',
    level: 'Intermediate'
  },

  // Tuesday
  {
    id: 'c-tue-1',
    name: 'POWER & HYPERTROPHY',
    category: 'STRENGTH',
    day: 'TUE',
    time: '06:45',
    durationMinutes: 50,
    coachName: 'Arjun Mehta',
    coachRole: 'Performance Director',
    intensity: 5,
    spotsLeft: 4,
    totalSpots: 14,
    description: 'Upper body pulling/pressing supersets with calibrated plates and dumbbell clusters.',
    room: 'The Iron Bay',
    level: 'Intermediate'
  },
  {
    id: 'c-tue-2',
    name: 'VINYASA RECOVERY YOGA',
    category: 'YOGA',
    day: 'TUE',
    time: '08:30',
    durationMinutes: 60,
    coachName: 'Priya Sen',
    coachRole: 'Movement Specialist',
    intensity: 2,
    spotsLeft: 6,
    totalSpots: 20,
    description: 'Dynamic breath-synced vinyasa to restore neuromuscular balance, hamstrings, and shoulders.',
    room: 'Studio Alpha',
    level: 'All Levels'
  },
  {
    id: 'c-tue-3',
    name: 'TABATA RUSH',
    category: 'HIIT',
    day: 'TUE',
    time: '17:30',
    durationMinutes: 40,
    coachName: 'Elena Rostova',
    coachRole: 'Conditioning Lead',
    intensity: 5,
    spotsLeft: 0,
    totalSpots: 18,
    description: '20 seconds maximal work, 10 seconds rest. Relentless aerobic capacity development.',
    room: 'The Engine Room',
    level: 'Advanced'
  },
  {
    id: 'c-tue-4',
    name: 'DEADLIFT CLINIC & POSTURE',
    category: 'STRENGTH',
    day: 'TUE',
    time: '19:00',
    durationMinutes: 50,
    coachName: 'Rahul Deshmukh',
    coachRole: 'Head Strength Coach',
    intensity: 3,
    spotsLeft: 4,
    totalSpots: 12,
    description: 'Technical video review, spine bracing drills, and progressive loaded conventional/trap bar pulls.',
    room: 'The Iron Bay',
    level: 'All Levels'
  },

  // Wednesday
  {
    id: 'c-wed-1',
    name: 'FORGE FUNCTIONAL 02',
    category: 'FUNCTIONAL',
    day: 'WED',
    time: '06:30',
    durationMinutes: 50,
    coachName: 'Marcus Vance',
    coachRole: 'Functional Systems Coach',
    intensity: 4,
    spotsLeft: 5,
    totalSpots: 16,
    description: 'Sandbag cleans, monkey bar transitions, and rotational core power drills.',
    room: 'The Turf Track',
    level: 'All Levels'
  },
  {
    id: 'c-wed-2',
    name: 'ZONE 2 ENGINE BUILDER',
    category: 'CARDIO',
    day: 'WED',
    time: '07:45',
    durationMinutes: 55,
    coachName: 'Arjun Mehta',
    coachRole: 'Performance Director',
    intensity: 3,
    spotsLeft: 7,
    totalSpots: 18,
    description: 'Aerobic base conditioning designed for cellular mitochondrial efficiency without burning out.',
    room: 'The Engine Room',
    level: 'All Levels'
  },
  {
    id: 'c-wed-3',
    name: 'HIP & SPINE UNLOCK',
    category: 'MOBILITY',
    day: 'WED',
    time: '13:00',
    durationMinutes: 35,
    coachName: 'Priya Sen',
    coachRole: 'Movement Specialist',
    intensity: 1,
    spotsLeft: 9,
    totalSpots: 15,
    description: 'Targeted mobility and fascial release for long-term lower back health and posture.',
    room: 'Studio Alpha',
    level: 'Beginner Friendly'
  },
  {
    id: 'c-wed-4',
    name: 'AFTER-HOURS STRENGTH LAB',
    category: 'STRENGTH',
    day: 'WED',
    time: '18:45',
    durationMinutes: 50,
    coachName: 'Rahul Deshmukh',
    coachRole: 'Head Strength Coach',
    intensity: 4,
    spotsLeft: 2,
    totalSpots: 14,
    description: 'Posterior chain focus: Bulgarian split squats, Romanian deadlifts, and heavy sled pushes.',
    room: 'The Iron Bay',
    level: 'Intermediate'
  },

  // Thursday
  {
    id: 'c-thu-1',
    name: 'INTERVAL BLITZ 360',
    category: 'HIIT',
    day: 'THU',
    time: '06:30',
    durationMinutes: 45,
    coachName: 'Elena Rostova',
    coachRole: 'Conditioning Lead',
    intensity: 5,
    spotsLeft: 3,
    totalSpots: 20,
    description: 'High cadence row sprint intervals paired with dumbbell snatch and box jumps.',
    room: 'The Engine Room',
    level: 'Intermediate'
  },
  {
    id: 'c-thu-2',
    name: 'KETTLEBELL MASTERY',
    category: 'FUNCTIONAL',
    day: 'THU',
    time: '08:00',
    durationMinutes: 45,
    coachName: 'Marcus Vance',
    coachRole: 'Functional Systems Coach',
    intensity: 3,
    spotsLeft: 4,
    totalSpots: 16,
    description: 'Turkish get-ups, clean and press, and ballistic swings with strict movement standards.',
    room: 'The Turf Track',
    level: 'All Levels'
  },
  {
    id: 'c-thu-3',
    name: 'PRANAYAMA & YIN YOGA',
    category: 'YOGA',
    day: 'THU',
    time: '18:15',
    durationMinutes: 60,
    coachName: 'Priya Sen',
    coachRole: 'Movement Specialist',
    intensity: 2,
    spotsLeft: 10,
    totalSpots: 20,
    description: 'Deep tissue hold stretching combined with conscious parasympathetic breath control.',
    room: 'Studio Alpha',
    level: 'All Levels'
  },
  {
    id: 'c-thu-4',
    name: 'UPPER BODY ARMOR',
    category: 'STRENGTH',
    day: 'THU',
    time: '19:30',
    durationMinutes: 45,
    coachName: 'Rahul Deshmukh',
    coachRole: 'Head Strength Coach',
    intensity: 4,
    spotsLeft: 1,
    totalSpots: 14,
    description: 'Overhead pressing, weighted pull-ups, and rotator cuff bulletproofing.',
    room: 'The Iron Bay',
    level: 'Intermediate'
  },

  // Friday
  {
    id: 'c-fri-1',
    name: 'FRIDAY ENGINE THROWDOWN',
    category: 'HIIT',
    day: 'FRI',
    time: '07:00',
    durationMinutes: 50,
    coachName: 'Elena Rostova',
    coachRole: 'Conditioning Lead',
    intensity: 5,
    spotsLeft: 2,
    totalSpots: 22,
    description: 'Partner station challenge. High volume, music tuned high, finish the week victorious.',
    room: 'The Turf Track',
    level: 'Intermediate'
  },
  {
    id: 'c-fri-2',
    name: 'FULL BODY ANCHOR',
    category: 'STRENGTH',
    day: 'FRI',
    time: '12:30',
    durationMinutes: 45,
    coachName: 'Arjun Mehta',
    coachRole: 'Performance Director',
    intensity: 4,
    spotsLeft: 6,
    totalSpots: 16,
    description: 'Total body density training targeting primary motor units before the weekend.',
    room: 'The Iron Bay',
    level: 'All Levels'
  },
  {
    id: 'c-fri-3',
    name: 'SUNSET MOBILITY FLOW',
    category: 'MOBILITY',
    day: 'FRI',
    time: '18:00',
    durationMinutes: 40,
    coachName: 'Priya Sen',
    coachRole: 'Movement Specialist',
    intensity: 2,
    spotsLeft: 7,
    totalSpots: 18,
    description: 'Decompress after a demanding work week with guided myofascial rolling and mobility flows.',
    room: 'Studio Alpha',
    level: 'Beginner Friendly'
  },

  // Saturday
  {
    id: 'c-sat-1',
    name: 'WEEKEND WARRIOR TEAM CUP',
    category: 'FUNCTIONAL',
    day: 'SAT',
    time: '08:30',
    durationMinutes: 60,
    coachName: 'Marcus Vance & Arjun Mehta',
    coachRole: 'Co-Hosted Special',
    intensity: 5,
    spotsLeft: 4,
    totalSpots: 24,
    description: 'Our signature community session. Team-based functional challenges, sleds, and high energy.',
    room: 'Main Arena',
    level: 'All Levels'
  },
  {
    id: 'c-sat-2',
    name: 'OLYMPIC LIFTING LAB',
    category: 'STRENGTH',
    day: 'SAT',
    time: '10:00',
    durationMinutes: 60,
    coachName: 'Rahul Deshmukh',
    coachRole: 'Head Strength Coach',
    intensity: 4,
    spotsLeft: 2,
    totalSpots: 10,
    description: 'Snatch and Clean & Jerk breakdown with slow-motion barbell path analysis.',
    room: 'The Iron Bay',
    level: 'Intermediate'
  },
  {
    id: 'c-sat-3',
    name: 'POWER VINYASA',
    category: 'YOGA',
    day: 'SAT',
    time: '11:30',
    durationMinutes: 50,
    coachName: 'Priya Sen',
    coachRole: 'Movement Specialist',
    intensity: 3,
    spotsLeft: 8,
    totalSpots: 20,
    description: 'Challenging arm balances, core integration, and active hip flexibility.',
    room: 'Studio Alpha',
    level: 'All Levels'
  },

  // Sunday
  {
    id: 'c-sun-1',
    name: 'RECOVERY LAB & CONTRAST SPA',
    category: 'MOBILITY',
    day: 'SUN',
    time: '09:00',
    durationMinutes: 55,
    coachName: 'Priya Sen',
    coachRole: 'Movement Specialist',
    intensity: 1,
    spotsLeft: 5,
    totalSpots: 14,
    description: 'Guided breathwork followed by cold plunge and infrared sauna contrast protocol.',
    room: 'Recovery Suite',
    level: 'All Levels'
  },
  {
    id: 'c-sun-2',
    name: 'SUNDAY SLOW SWEAT CARDIO',
    category: 'CARDIO',
    day: 'SUN',
    time: '10:30',
    durationMinutes: 45,
    coachName: 'Elena Rostova',
    coachRole: 'Conditioning Lead',
    intensity: 3,
    spotsLeft: 9,
    totalSpots: 18,
    description: 'Steady-state aerobic cruising on assault bikes, rowers, and incline treadmills.',
    room: 'The Engine Room',
    level: 'Beginner Friendly'
  }
];

export const EQUIPMENT_DATA: EquipmentItem[] = [
  // 01 STRENGTH
  {
    id: 'eq-1',
    number: '01',
    name: 'OLYMPIC POWER RACK SYSTEM',
    category: 'STRENGTH',
    tagline: 'Custom 3x3" 11-Gauge Structural Steel',
    description: 'Precision laser-cut uprights with Westside 1-inch hole spacing, mono-lift attachments, safety strap systems, and multi-grip pull-up bars.',
    specs: ['3x3" 11-Gauge Steel', 'Laser-Cut Westside Spacing', 'Safety Strap System', 'Mono-lift attachments'],
    muscleGroups: ['Quadriceps', 'Posterior Chain', 'Chest', 'Shoulders'],
    experienceLevel: 'All Levels',
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'eq-2',
    number: '02',
    name: '3D SMITH MULTI-VECTOR SYSTEM',
    category: 'STRENGTH',
    tagline: 'Horizontal & Vertical Free-Motion Tracking',
    description: 'Provides bar stability while permitting natural horizontal bar path deviation, eliminating unnatural joint sheer forces.',
    specs: ['Dual-Axis Bearing Guide', 'Counter-Balanced 5kg Bar', 'Lockout Safety Stops'],
    muscleGroups: ['Shoulders', 'Legs', 'Chest'],
    experienceLevel: 'All Levels',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'eq-3',
    number: '03',
    name: 'CALIBRATED CAST IRON & DUMBBELL ARSENAL',
    category: 'STRENGTH',
    tagline: '2.5kg to 60kg Solid Steel Urethane Dumbbells',
    description: 'Competition-tolerance steel disc plates and fully knurled straight urethane dumbbell pairs crafted for heavy loading.',
    specs: ['Tolerance +/- 10 grams', 'Competition Thin Plate Profile', 'Diamond Knurl Finish'],
    muscleGroups: ['Full Body', 'Grip', 'Stabilizers'],
    experienceLevel: 'All Levels',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'eq-4',
    number: '04',
    name: 'PLATE-LOADED ISO-LATERAL MACHINES',
    category: 'STRENGTH',
    tagline: 'Diverging & Converging Biomechanical Paths',
    description: 'Matches human musculoskeletal strength curves for chest press, high row, incline press, and kneeling leg curls.',
    specs: ['Independent Arm Mechanics', 'Smooth Industrial Cam Bushings', 'Olympic Horn Storage'],
    muscleGroups: ['Lats', 'Pectorals', 'Hamstrings'],
    experienceLevel: 'All Levels',
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=80'
  },

  // 02 FUNCTIONAL
  {
    id: 'eq-5',
    number: '05',
    name: 'DUAL ADJUSTABLE FUNCTIONAL TRAINER',
    category: 'FUNCTIONAL',
    tagline: '2:1 Mechanical Ratio High-Velocity Pulley Tower',
    description: 'Dual multi-position rotating swivel pulleys with 36 vertical increments. Enables full-body athletic power and rotation.',
    specs: ['Multi-Position Swivels', '2x 100kg Weight Stacks', 'Aircraft Grade Steel Cable'],
    muscleGroups: ['Rotational Core', 'Deltoids', 'Scapular Stabilizers'],
    experienceLevel: 'All Levels',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'eq-6',
    number: '06',
    name: '30M SPRINT TURF & COMPETITION SLEDS',
    category: 'FUNCTIONAL',
    tagline: 'High-Density Shock Absorbent Turf Lane',
    description: 'Heavy duty steel pushing & pulling prowlers with plate horns, thick harness attachments, and low-friction ski bases.',
    specs: ['30-Meter High-Traction Turf', 'Multi-Handle Pushing Grips', 'Harness Anchoring Points'],
    muscleGroups: ['Glutes', 'Quadriceps', 'Calves', 'Anaerobic Engine'],
    experienceLevel: 'All Levels',
    imageUrl: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'eq-7',
    number: '07',
    name: 'RUSSIAN COMPETITION KETTLEBELL RACK',
    category: 'FUNCTIONAL',
    tagline: 'Standardized Shell Dimensions 8kg to 48kg',
    description: 'Single-piece cast steel with consistent ball dimensions regardless of weight, promoting uniform motor memory.',
    specs: ['Identical 35mm Handle Diameter', 'Color Coded International Standard', 'Wide Flat Base'],
    muscleGroups: ['Posterior Chain', 'Forearms', 'Core', 'Cardiovascular'],
    experienceLevel: 'All Levels',
    imageUrl: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'eq-8',
    number: '08',
    name: 'POLY-DACRON BATTLE ROPES & SUSPENSION RIGS',
    category: 'FUNCTIONAL',
    tagline: '50-Foot 2" Thick Waves & Heavy Rings',
    description: 'Non-fraying heavyweight rope arrays anchored to custom ceiling-suspended modular training rigs.',
    specs: ['Braided Grip Sleeve', 'Heavy Anchor Flanges', 'Gymnastic Birch Rings'],
    muscleGroups: ['Shoulders', 'Grip', 'Upper Back', 'Lats'],
    experienceLevel: 'All Levels',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80'
  },

  // 03 CONDITIONING
  {
    id: 'eq-9',
    number: '09',
    name: 'WOODWAY CURVED MOTORLESS TREADMILLS',
    category: 'CONDITIONING',
    tagline: 'Zero-Motor Natural Biomechanics Slat System',
    description: 'Curved rubber slat surface propelled purely by the runner. Burns up to 30% more calories while encouraging mid-foot strike.',
    specs: ['Self-Powered Mechanical Curve', 'Low-Impact Vulcanized Rubber Slats', 'Instant Pace Modulation'],
    muscleGroups: ['Hamstrings', 'Calves', 'Cardiorespiratory'],
    experienceLevel: 'All Levels',
    imageUrl: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'eq-10',
    number: '10',
    name: 'CONCEPT2 ROWERG & SKIERG SUITE',
    category: 'CONDITIONING',
    tagline: 'PM5 Performance Monitors with Dynamic Air Damper',
    description: 'The benchmark ergometers for measuring measurable human wattage, cadence, and split times in real-time.',
    specs: ['PM5 Real-Time Telemetry', 'Precision Flywheel Damper', 'Modular Frame Storage'],
    muscleGroups: ['Lats', 'Legs', 'Triceps', 'Total Aerobic System'],
    experienceLevel: 'All Levels',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'eq-11',
    number: '11',
    name: 'AIR ASSAULT PERFORMANCE CYCLES',
    category: 'CONDITIONING',
    tagline: 'Exponential Air Resistance Fan Drive',
    description: 'The harder you pedal and push, the higher the resistance climbs. Built for explosive lactate threshold efforts.',
    specs: ['27" Steel Component Fan', 'Sealed Cartridge Bearings', 'High-Output Console'],
    muscleGroups: ['Quadriceps', 'Chest', 'Shoulders', 'Mental Fortitude'],
    experienceLevel: 'All Levels',
    imageUrl: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=80'
  }
];

export const COACHES_DATA: Coach[] = [
  {
    id: 'coach-1',
    name: 'Arjun Mehta',
    role: 'Director of Athletic Performance',
    specialties: ['Compound Strength', 'Olympic Weightlifting', 'Athletic Conditioning'],
    certifications: ['CSCS (NSCA)', 'USAW Level 2', 'Precision Nutrition L2'],
    experienceYears: 12,
    bio: 'Former national powerlifter and collegiate strength coordinator. Arjun focuses on barbell mastery, intelligent periodization, and injury-proof movement mechanics.',
    quote: 'The bar will never lie to you. Show up, respect the fundamentals, and the results will outlive your excuses.',
    imageUrl: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'coach-2',
    name: 'Priya Sen',
    role: 'Lead Movement & Mobility Specialist',
    specialties: ['Functional Range Conditioning', 'Postural Restoration', 'Vinyasa Power Flow'],
    certifications: ['FRCms Certified', 'RYT-500 Yoga Alliance', 'EXOS Performance Specialist'],
    experienceYears: 9,
    bio: 'Specializing in fixing imbalances caused by modern sedentary desk work. Priya bridges high-load lifting with deep tissue joint freedom and diaphragmatic breathing.',
    quote: 'True strength is having active, usable control over your joints through every single degree of motion.',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'coach-3',
    name: 'Rahul Deshmukh',
    role: 'Head Strength Coach',
    specialties: ['Hypertrophy Protocols', 'Powerlifting Coaching', 'Beginner Transformation'],
    certifications: ['ACSM Certified Exercise Physiologist', 'Westside Barbell Special Strengths'],
    experienceYears: 8,
    bio: 'Patient, highly analytical, and renowned for breaking down complex compound lifts into intuitive, beginner-safe cues that build immediate confidence.',
    quote: 'Nobody is born strong. You earn it one disciplined repetition at a time in an environment that backs you.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'coach-4',
    name: 'Elena Rostova',
    role: 'Lead Conditioning & MetCon Specialist',
    specialties: ['Anaerobic Threshold', 'Track & Field Ergonomics', 'High-Density Circuits'],
    certifications: ['CrossFit L3 Certified', 'IKFF Level 2 Kettlebell', 'First Aid / CPR AED'],
    experienceYears: 10,
    bio: 'Elena brings international competitive track stamina and infectious energy to every session. She programs workouts that ignite mental grit and fat oxidation.',
    quote: 'When your lungs scream and the clock ticks, that is where your mind learns who you truly are.',
    imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'coach-5',
    name: 'Marcus Vance',
    role: 'Functional Systems & Recovery Lead',
    specialties: ['Multi-Planar Movement', 'Kettlebell Sport', 'Contrast Recovery Protocols'],
    certifications: ['StrongFirst SFG II', 'Functional Movement Screen (FMS)', 'Hyperice Recovery Specialist'],
    experienceYears: 7,
    bio: 'Marcus teaches how to rotate, sprint, carry heavy loads, and recover with purpose. Creator of our popular Weekend Warrior team series.',
    quote: 'Train like an athlete outside the gym so everyday life feels effortless.',
    imageUrl: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?auto=format&fit=crop&w=800&q=80'
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    tagline: 'For individuals taking their first serious step into guided fitness.',
    monthlyPrice: 4500,
    annualMonthlyPrice: 3800,
    isPopular: false,
    features: [
      'Full floor access (05:30 — 23:00)',
      '2 Studio classes per week',
      '1-on-1 coach introductory intake & movement screen',
      'Access to digital locker rooms & rain showers',
      'FORGE companion app workout logging',
      'Invitation to monthly community benchmark events'
    ],
    perks: ['Standard locker access', 'Towels provided', 'Member app access'],
    bestFor: 'Beginners & independent lifters wanting occasional group energy'
  },
  {
    id: 'performance',
    name: 'PERFORMANCE',
    tagline: 'Our most popular tier. Unlimited access to the entire facility and class ecosystem.',
    monthlyPrice: 7500,
    annualMonthlyPrice: 6200,
    isPopular: true,
    features: [
      'Unlimited 24/7 access to all facility zones',
      'Unlimited weekly studio classes (Strength, HIIT, Yoga, Functional)',
      'Monthly body composition & DEXA benchmark scan',
      'Quarterly 1-on-1 coach progress review',
      'Sauna & Finnish Cold Plunge recovery access',
      'Priority booking window (7 days in advance)',
      '2 Guest passes per month for friends or colleagues'
    ],
    perks: ['Full class schedule access', 'Cold plunge & sauna', '7-day booking priority', 'Free valet parking'],
    bestFor: 'Serious enthusiasts, athletes & busy professionals seeking complete routine flexibility'
  },
  {
    id: 'elite',
    name: 'ELITE',
    tagline: 'The ultimate bespoke performance experience with dedicated 1-on-1 training.',
    monthlyPrice: 14000,
    annualMonthlyPrice: 11900,
    isPopular: false,
    features: [
      'Everything in PERFORMANCE included',
      '4 Monthly 1-on-1 personal training sessions with Senior Coaches',
      'Personalized nutrition & metabolic macronutrient planning',
      'Permanent dedicated private executive locker & laundry service',
      'VIP lounge access & complimentary post-workout protein shakes',
      'Unrestricted priority booking (14 days in advance)',
      'Unlimited guest privileges'
    ],
    perks: ['4x Personal training/mo', 'Dedicated permanent locker', 'Nutrition concierge', 'Free shake bar'],
    bestFor: 'Executives and high-performance individuals who want white-glove results'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: 'I walked in nervous having never touched a barbell in my life. Six months later, FORGE feels like the anchor of my week. The coaches never make you feel inadequate—they teach you step by step.',
    author: 'Priya S.',
    role: 'Product Lead, Tech Sector',
    memberSince: 'Member since 2025',
    transformation: 'Lost 12kg fat, added 45kg to deadlift',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    rating: 5
  },
  {
    id: 't-2',
    quote: 'I travel constantly for finance deals. Knowing I can walk into a facility at 06:00 that has Olympic-grade racks, immaculate showers, and zero crowds fighting over dumbbells is unmatched in Mumbai.',
    author: 'Kabir Varma',
    role: 'Managing Director, Private Equity',
    memberSince: 'Member since 2024',
    transformation: 'VO2 max improved 28% while travelling weekly',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    rating: 5
  },
  {
    id: 't-3',
    quote: 'The energy in the 07:00 MetCon session is electric. It’s not cheesy shouting; it’s genuine collective focus. You push yourself twice as hard because the person next to you is grinding just as sincerely.',
    author: 'Ananya Roy',
    role: 'Architect & Distance Runner',
    memberSince: 'Member since 2024',
    transformation: 'Shaved 18 mins off half-marathon PB',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'I have never trained with free weights or at a gym before. Will I feel overwhelmed?',
    answer: 'Absolutely not. In fact, more than 35% of our members started right where you are. Every new membership includes a private 1-on-1 movement assessment where a coach walks you through the fundamentals, explains equipment mechanics, and designs an unhurried, comfortable starting pace.',
    category: 'general'
  },
  {
    question: 'How does class booking work? Do classes fill up?',
    answer: 'Classes can be booked seamlessly via our web interface or mobile app. Performance and Elite members get priority 7- to 14-day advance booking. We strictly cap class sizes to 14–20 participants so you always have personal space, your own dedicated barbell/station, and hands-on coaching feedback.',
    category: 'classes'
  },
  {
    question: 'What are your operational hours?',
    answer: 'Our Mumbai flagship is open 05:30 to 23:00 Monday through Sunday. Performance and Elite members also enjoy keyless 24/7 RFID access to designated open training and recovery zones.',
    category: 'facilities'
  },
  {
    question: 'Can I freeze or pause my membership if I have to travel for work?',
    answer: 'Yes. We recognize our members lead demanding professional lives. You can pause your membership for up to 60 days per calendar year at zero penalty with a single click or WhatsApp message to concierge.',
    category: 'membership'
  },
  {
    question: 'What shower and locker amenities are available?',
    answer: 'Our locker rooms feature rainfall showers, premium organic grooming amenities, Dyson hair dryers, steam rooms, Finnish cold plunge tubs, and day-use digital keypad lockers. You never need to carry padlocks.',
    category: 'facilities'
  },
  {
    question: 'Do you offer corporate partnerships and group memberships?',
    answer: 'Yes! We design bespoke wellness partnerships for corporate teams ranging from 10 to 500+ employees. This includes subsidized membership tiers, dedicated private team classes, on-site ergonomic workshops, and quantifiable wellness engagement metrics.',
    category: 'membership'
  }
];

export const CORPORATE_OFFERING = {
  headline: 'A STRONGER WORKFORCE STARTS HERE.',
  subheading: 'Turn workplace fatigue into sustained physical resilience and mental acuity. Bespoke wellness frameworks engineered for modern corporate teams.',
  metrics: [
    { value: '-42%', label: 'Reduction in sedentary musculoskeletal complaints' },
    { value: '+31%', label: 'Sustained afternoon focus & mental energy' },
    { value: '88%', label: 'Consistent weekly employee attendance rate' },
    { value: '4.9/5', label: 'Employee satisfaction index score' }
  ],
  pillars: [
    {
      title: 'Subsidized Tiered Memberships',
      desc: 'Flexible company co-pay or fully subsidized packages with real-time HR portal usage tracking.'
    },
    {
      title: 'Private Team Training & Classes',
      desc: 'Exclusive morning or after-work team bonding sessions designed for all fitness levels.'
    },
    {
      title: 'Executive Biometric Diagnostics',
      desc: 'Comprehensive VO2 max, body composition, lipid profile, and posture stress scans.'
    },
    {
      title: 'Nutrition & Burnout Workshops',
      desc: 'Practical lunch & learn seminars on desk nutrition, circadian sleep optimization, and spinal health.'
    }
  ]
};

export const FACILITY_AMENITIES = [
  { icon: 'Car', name: 'Valet & Member Parking', desc: 'Secure basement parking with EV fast-chargers' },
  { icon: 'ShowerHead', name: 'Rainfall Showers & Spa', desc: 'High-pressure showers with Malin+Goetz grooming products' },
  { icon: 'Lock', name: 'Keyless Digital Lockers', desc: 'Spacious self-locking day & permanent private lockers' },
  { icon: 'Droplets', name: 'Finnish Cold Plunge & Sauna', desc: 'Contrast hydrotherapy suite maintained at 6°C & 85°C' },
  { icon: 'Coffee', name: 'Fuel Bar & Work Lounge', desc: 'Artisanal cold brews, clean protein shakes, and high-speed fiber Wi-Fi' },
  { icon: 'Accessibility', name: 'Full Step-Free Accessibility', desc: 'Elevators, wide clearance doorways, and accessible facilities' }
];
