import React, { useState } from 'react';
import { Check, Zap, Sparkles, HelpCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
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

                  <div className="flex items-center justify-center gap-2 mt-4 text-[11px] font-mono text-[#87908A]">
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
