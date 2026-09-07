import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, User, Mail, Phone, Clock, Target, Building2, Sparkles } from 'lucide-react';

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingType: string; // 'trial' | 'class' | 'coach' | 'corporate' | 'beginner' | 'facility_tour' | 'membership'
  initialDetails?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  bookingType,
  initialDetails
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'Build Strength & Lean Muscle',
    preferredTime: 'Morning (06:00 — 09:00)',
    companyName: '',
    teamSize: '25-50 Employees',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your contact number';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (bookingType === 'corporate' && !formData.companyName.trim()) {
      newErrors.companyName = 'Please enter your organization name';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate immediate smooth submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const getTitle = () => {
    switch (bookingType) {
      case 'corporate':
        return 'Corporate Wellness Inquiry';
      case 'class':
        return 'Reserve Class Station';
      case 'coach':
        return '1-on-1 Coach Consultation';
      case 'beginner':
        return 'Beginner Intake Session';
      case 'facility_tour':
        return 'Private Floor Walkthrough';
      case 'membership':
        return 'Membership Activation Request';
      default:
        return 'Claim Complimentary Day Pass';
    }
  };

  const getSubtitle = () => {
    if (initialDetails) return initialDetails;
    if (bookingType === 'corporate') return 'Tell us about your organization and wellness objectives.';
    return 'Experience FORGE firsthand with full facility floor access.';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#151817] border border-[#333835] rounded-2xl shadow-2xl overflow-hidden my-8 animate-fadeIn">
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#0B0D0C] border-b border-[#232725] flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151817] border border-[#2B302D] text-[10px] font-mono text-[#C8FF35] uppercase mb-2">
              <Sparkles className="w-3 h-3" />
              <span>CONFIDENTIAL // NO SPAM GUARANTEE</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-[#E9E5DC]">
              {getTitle()}
            </h3>
            <p className="text-xs sm:text-sm text-[#87908A] mt-1 font-mono">
              {getSubtitle()}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#87908A] hover:text-white hover:bg-[#1F2421] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Form or Success */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#C8FF35]/15 border-2 border-[#C8FF35] text-[#C8FF35] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-heading text-3xl font-bold uppercase text-white">
                  Thanks — we'll be in touch shortly.
                </h4>
                <p className="text-sm text-[#87908A] max-w-md mx-auto mt-2 leading-relaxed">
                  Your reservation request for <span className="text-[#E9E5DC] font-semibold">{formData.name}</span> has been logged with our concierge desk. We have sent a confirmation to <span className="text-[#C8FF35]">{formData.email}</span>.
                </p>
              </div>

              {/* What to bring checklist */}
              <div className="bg-[#0B0D0C] p-5 rounded-xl border border-[#232725] text-left text-xs font-mono space-y-2 max-w-md mx-auto">
                <div className="text-[#C8FF35] font-bold uppercase mb-2">// WHAT TO PREPARE:</div>
                <div className="flex items-center gap-2 text-[#87908A]">
                  <span className="text-[#C8FF35]">✓</span> Clean indoor training shoes (flat soles recommended for lifting)
                </div>
                <div className="flex items-center gap-2 text-[#87908A]">
                  <span className="text-[#C8FF35]">✓</span> Comfortable athletic wear
                </div>
                <div className="flex items-center gap-2 text-[#87908A]">
                  <span className="text-[#C8FF35]">✓</span> Towel service & lockers are provided complimentary
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-8 py-3.5 bg-[#C8FF35] text-[#0B0D0C] font-heading font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-[#b8f020] transition-colors"
              >
                RETURN TO EXPLORING
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#87908A] mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#87908A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full pl-10 pr-4 py-3 bg-[#0B0D0C] border rounded-xl text-sm text-[#E9E5DC] placeholder-[#505753] focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-500' : 'border-[#2B302D] focus:border-[#C8FF35]'
                    }`}
                  />
                </div>
                {errors.name && <p className="text-xs text-rose-400 mt-1 font-mono">{errors.name}</p>}
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#87908A] mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#87908A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@example.com"
                      className={`w-full pl-10 pr-4 py-3 bg-[#0B0D0C] border rounded-xl text-sm text-[#E9E5DC] placeholder-[#505753] focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-[#2B302D] focus:border-[#C8FF35]'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-rose-400 mt-1 font-mono">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#87908A] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#87908A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98200 00000"
                      className={`w-full pl-10 pr-4 py-3 bg-[#0B0D0C] border rounded-xl text-sm text-[#E9E5DC] placeholder-[#505753] focus:outline-none transition-colors ${
                        errors.phone ? 'border-rose-500' : 'border-[#2B302D] focus:border-[#C8FF35]'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-rose-400 mt-1 font-mono">{errors.phone}</p>}
                </div>
              </div>

              {/* Corporate Specific Fields */}
              {bookingType === 'corporate' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#87908A] mb-1.5">
                      Organization / Company *
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-[#87908A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Acme Corp India"
                        className={`w-full pl-10 pr-4 py-3 bg-[#0B0D0C] border rounded-xl text-sm text-[#E9E5DC] placeholder-[#505753] focus:outline-none transition-colors ${
                          errors.companyName ? 'border-rose-500' : 'border-[#2B302D] focus:border-[#C8FF35]'
                        }`}
                      />
                    </div>
                    {errors.companyName && <p className="text-xs text-rose-400 mt-1 font-mono">{errors.companyName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#87908A] mb-1.5">
                      Estimated Team Size
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0B0D0C] border border-[#2B302D] focus:border-[#C8FF35] rounded-xl text-sm text-[#E9E5DC] focus:outline-none"
                    >
                      <option value="10-25 Employees">10 — 25 Employees</option>
                      <option value="25-50 Employees">25 — 50 Employees</option>
                      <option value="50-150 Employees">50 — 150 Employees</option>
                      <option value="150+ Enterprise">150+ Enterprise Employees</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Primary Fitness Goal & Preferred Training Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#87908A] mb-1.5">
                    Primary Objective
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0B0D0C] border border-[#2B302D] focus:border-[#C8FF35] rounded-xl text-sm text-[#E9E5DC] focus:outline-none"
                  >
                    <option value="Beginner: Learn Movement Safely">Beginner: Learn Movement Safely</option>
                    <option value="Build Strength & Lean Muscle">Build Strength & Lean Muscle</option>
                    <option value="Cardio & Fat Loss Conditioning">Cardio & Fat Loss Conditioning</option>
                    <option value="Mobility & Postural Rehabilitation">Mobility & Postural Rehabilitation</option>
                    <option value="Athletic Speed & Performance">Athletic Speed & Performance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#87908A] mb-1.5">
                    Preferred Training Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0B0D0C] border border-[#2B302D] focus:border-[#C8FF35] rounded-xl text-sm text-[#E9E5DC] focus:outline-none"
                  >
                    <option value="Early Morning (05:30 — 08:30)">Early Morning (05:30 — 08:30)</option>
                    <option value="Midday Lunch Flow (12:00 — 14:00)">Midday Lunch Flow (12:00 — 14:00)</option>
                    <option value="Evening Rush (17:30 — 20:00)">Evening Rush (17:30 — 20:00)</option>
                    <option value="Night Session (20:00 — 23:00)">Night Session (20:00 — 23:00)</option>
                    <option value="Weekends Only">Weekends Only</option>
                  </select>
                </div>
              </div>

              {/* Optional Message */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#87908A] mb-1.5">
                  Specific Requests / Injuries / Goals (Optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about any past sports, lower back issues, or questions..."
                  rows={2}
                  className="w-full px-4 py-2.5 bg-[#0B0D0C] border border-[#2B302D] focus:border-[#C8FF35] rounded-xl text-sm text-[#E9E5DC] placeholder-[#505753] focus:outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#C8FF35] text-[#0B0D0C] font-heading font-extrabold text-sm uppercase tracking-wider rounded-full hover:bg-[#b8f020] hover:shadow-[0_0_25px_rgba(200,255,53,0.35)] transition-all active:scale-95 disabled:opacity-70"
                >
                  {isSubmitting ? 'PROCESSING YOUR INTAKE...' : 'CONFIRM & RECEIVE PASS →'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
