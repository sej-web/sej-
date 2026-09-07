import React, { useState } from 'react';
import { Check, Zap, Sparkles, HelpCircle, ArrowRight, ShieldCheck, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { MembershipPlan } from '../types';
import { MEMBERSHIP_PLANS } from '../data/gymData';

interface MembershipsSectionProps {
  onSelectPlan: (plan: MembershipPlan) => void;
}

export const MembershipsSection: React.FC<MembershipsSectionProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section id="memberships" className="py-24 bg-[#151817] border-y border-[#232725] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C8FF35] uppercase">
            // TRANSPARENT INVESTMENT
          </span>
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold uppercase text-[#E9E5DC] mt-2">
            MEMBERSHIP PLANS.
          </h2>
          <p className="text-sm sm:text-base text-[#87908A] mt-4">
            No initiation fees. No hidden maintenance surcharges. No lock-in penalties. Pause or cancel with simple 30-day notice.
          </p>

          {/* Monthly / Annual Billing Switch */}
          <div className="inline-flex items-center gap-3 bg-[#0B0D0C] p-1.5 rounded-full border border-[#2B302D] mt-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 text-xs font-heading font-bold uppercase rounded-full transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#232725] text-[#E9E5DC]'
                  : 'text-[#87908A] hover:text-[#E9E5DC]'
              }`}
            >
              MONTHLY BILLING
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 text-xs font-heading font-bold uppercase rounded-full transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-[#C8FF35] text-[#0B0D0C] shadow-md font-extrabold'
                  : 'text-[#87908A] hover:text-[#E9E5DC]'
              }`}
            >
              <span>ANNUAL COMMITMENT</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#0B0D0C] text-[#C8FF35]">
                SAVE 18%
              </span>
            </button>
          </div>
        </div>

        {/* Direct Purchase & Instant Onboarding Helpline */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#0B0D0C] border-2 border-[#C8FF35]/30 hover:border-[#C8FF35] transition-colors flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-full bg-[#C8FF35]/15 border border-[#C8FF35] text-[#C8FF35] flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
              <Phone className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#151817] border border-[#2B302D] text-[10px] font-mono text-[#C8FF35] uppercase mb-1">
                <span>DIRECT MEMBERSHIP SALES</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-[#E9E5DC]">
                WANT TO BUY A MEMBERSHIP? CONTACT US DIRECTLY
              </h3>
              <p className="text-xs sm:text-sm text-[#87908A] mt-1">
                Call or WhatsApp <span className="text-[#C8FF35] font-mono font-bold">+91 99876 84057</span> for instant membership activation, payment links, and corporate discounts.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full md:w-auto justify-center">
            <a
              href="tel:+919987684057"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#C8FF35] text-[#0B0D0C] font-heading font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#b8f020] transition-colors shadow-lg active:scale-95 whitespace-nowrap"
              id="membership-direct-call-cta"
            >
              <Phone className="w-4 h-4" />
              <span>CALL 9987684057</span>
            </a>
            <a
              href="https://wa.me/919987684057?text=Hi%2C%20I%20want%20to%20buy%20a%20FORGE%20Athletic%20Club%20membership"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#1A1D1C] hover:bg-[#222724] text-[#E9E5DC] hover:text-[#C8FF35] border border-[#2B302D] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors active:scale-95 whitespace-nowrap"
              id="membership-direct-whatsapp-cta"
            >
              <MessageSquare className="w-4 h-4 text-[#C8FF35]" />
              <span>WHATSAPP US</span>
            </a>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {MEMBERSHIP_PLANS.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualMonthlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl bg-[#0B0D0C] p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl ${
                  plan.isPopular
                    ? 'border-2 border-[#C8FF35] lg:-translate-y-2 shadow-[0_0_35px_rgba(200,255,53,0.15)]'
                    : 'border border-[#232725] hover:border-[#38403C]'
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C8FF35] text-[#0B0D0C] text-[11px] font-mono font-extrabold uppercase tracking-widest shadow-md">
                    MOST POPULAR ATHLETE TIER
                  </div>
                )}

                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-[#E9E5DC]">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#87908A] min-h-[36px] mb-6">
                    {plan.tagline}
                  </p>

                  {/* Pricing Display */}
                  <div className="mb-6 pb-6 border-b border-[#1C201E]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-mono text-[#87908A]">₹</span>
                      <span className="font-numbers text-5xl sm:text-6xl text-[#E9E5DC] tracking-tight">
                        {price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-mono text-[#87908A]">/ month</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#87908A] block mt-1">
                      {billingCycle === 'annual' ? 'Billed annually (₹' + (price * 12).toLocaleString('en-IN') + '/yr)' : 'Billed month-to-month, pause anytime'}
                    </span>
                  </div>

                  {/* Best For Tag */}
                  <div className="text-[11px] font-mono text-[#C8FF35] mb-6 bg-[#151817] p-2.5 rounded-lg border border-[#232725]">
                    BEST FOR: <span className="text-[#E9E5DC] font-medium">{plan.bestFor}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs text-[#E9E5DC]/90 leading-relaxed">
                        <Check className="w-4 h-4 text-[#C8FF35] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-4 rounded-full text-xs font-heading font-extrabold uppercase tracking-wider transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 ${
                      plan.isPopular
                        ? 'bg-[#C8FF35] text-[#0B0D0C] hover:bg-[#b8f020] hover:shadow-[0_0_20px_rgba(200,255,53,0.35)]'
                        : 'bg-[#232725] text-[#E9E5DC] hover:bg-[#C8FF35] hover:text-[#0B0D0C]'
                    }`}
                  >
                    <span>SELECT {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="mt-3 pt-3 border-t border-[#1C201E] flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#87908A]">Instant Buy Hotline:</span>
                    <a
                      href="tel:+919987684057"
                      className="text-[#C8FF35] hover:underline font-bold flex items-center gap-1"
                      title="Call to buy this plan"
                    >
                      <Phone className="w-3 h-3" />
                      <span>+91 99876 84057</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-center gap-2 mt-3 text-[11px] font-mono text-[#87908A]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C8FF35]" />
                    <span>Includes 7-day money-back guarantee</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Trigger */}
        <div className="text-center">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#333835] hover:border-[#C8FF35] text-xs font-heading font-bold uppercase tracking-widest text-[#E9E5DC] hover:text-[#C8FF35] transition-colors"
          >
            <span>{showComparison ? 'HIDE COMPARISON TABLE' : 'COMPARE FULL FEATURE MATRIX'}</span>
          </button>
        </div>

        {/* Comparison Table Expandable */}
        {showComparison && (
          <div className="mt-10 overflow-x-auto bg-[#0B0D0C] rounded-2xl border border-[#232725] p-6 sm:p-8 animate-fadeIn">
            <table className="w-full text-left text-xs text-[#87908A]">
              <thead>
                <tr className="border-b border-[#232725] text-[#E9E5DC] font-heading font-bold text-sm uppercase">
                  <th className="pb-4">Facility & Coaching Privileges</th>
                  <th className="pb-4 text-center">STARTER</th>
                  <th className="pb-4 text-center text-[#C8FF35]">PERFORMANCE</th>
                  <th className="pb-4 text-center">ELITE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1C201E] font-mono">
                <tr>
                  <td className="py-3 text-[#E9E5DC]">Facility Floor Hours</td>
                  <td className="py-3 text-center">05:30 — 23:00</td>
                  <td className="py-3 text-center text-[#C8FF35]">24/7 Keyless Access</td>
                  <td className="py-3 text-center">24/7 Keyless Access</td>
                </tr>
                <tr>
                  <td className="py-3 text-[#E9E5DC]">Studio Group Classes</td>
                  <td className="py-3 text-center">2 Classes / Wk</td>
                  <td className="py-3 text-center text-[#C8FF35]">Unlimited</td>
                  <td className="py-3 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3 text-[#E9E5DC]">1-on-1 Personal Training</td>
                  <td className="py-3 text-center">Initial Intake only</td>
                  <td className="py-3 text-center text-[#C8FF35]">Quarterly Review</td>
                  <td className="py-3 text-center">4 Sessions / Month</td>
                </tr>
                <tr>
                  <td className="py-3 text-[#E9E5DC]">Sauna & Finnish Cold Plunge</td>
                  <td className="py-3 text-center">—</td>
                  <td className="py-3 text-center text-[#C8FF35]">Included</td>
                  <td className="py-3 text-center">Included + VIP Suite</td>
                </tr>
                <tr>
                  <td className="py-3 text-[#E9E5DC]">Booking Advance Window</td>
                  <td className="py-3 text-center">48 Hours</td>
                  <td className="py-3 text-center text-[#C8FF35]">7 Days</td>
                  <td className="py-3 text-center">14 Days Priority</td>
                </tr>
                <tr>
                  <td className="py-3 text-[#E9E5DC]">Dedicated Locker & Laundry</td>
                  <td className="py-3 text-center">Day Lockers</td>
                  <td className="py-3 text-center text-[#C8FF35]">Day Lockers</td>
                  <td className="py-3 text-center">Permanent Private Locker</td>
                </tr>
                <tr>
                  <td className="py-3 text-[#E9E5DC]">Complimentary Guest Passes</td>
                  <td className="py-3 text-center">—</td>
                  <td className="py-3 text-center text-[#C8FF35]">2 / Month</td>
                  <td className="py-3 text-center">Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
