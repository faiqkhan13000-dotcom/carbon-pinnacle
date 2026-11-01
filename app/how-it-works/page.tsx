import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works | Carbon Pinnacle",
  description:
    "Our transparent 7-step carbon reporting process — from initial consultation to final report and ongoing support. No jargon, no surprises.",
  openGraph: {
    title: "How It Works | Carbon Pinnacle",
    description:
      "Our transparent 7-step carbon reporting process — from initial consultation to final report and ongoing support.",
  },
};

const steps = [
  {
    number: 1,
    title: "Initial Consultation",
    description:
      "We start with a free 30-minute call to understand your business, your obligations, and your goals. No jargon, no obligation — just a clear conversation about what you need.",
    icon: "💬",
  },
  {
    number: 2,
    title: "Proposal & Scope",
    description:
      "Within 24 hours of your consultation, we'll send you a clear, fixed-price proposal outlining exactly what we'll deliver, the timeline, and the data we'll need from you. No hidden fees.",
    icon: "📄",
  },
  {
    number: 3,
    title: "Onboarding",
    description:
      "Once you're ready to proceed, we'll onboard you to our secure client portal. You'll upload your data safely and securely — and we'll guide you every step of the way.",
    icon: "🔐",
  },
  {
    number: 4,
    title: "Data Analysis",
    description:
      "Our specialists carry out GHG Protocol-aligned calculations using your data. We apply recognised emissions factors and methodologies to ensure your figures are accurate and defensible.",
    icon: "📊",
  },
  {
    number: 5,
    title: "Draft Report",
    description:
      "We send you a draft report for your review. You'll have the opportunity to provide feedback, ask questions, and request any adjustments before we finalise.",
    icon: "✏️",
  },
  {
    number: 6,
    title: "Final Report",
    description:
      "After incorporating your feedback, we issue your final signed report — ready for publication on your website, submission to a contracting authority, or inclusion in your directors' report.",
    icon: "✅",
  },
  {
    number: 7,
    title: "Ongoing Support",
    description:
      "Our relationship doesn't end at delivery. We provide annual review reminders, regulatory update briefings, and are always on hand to answer questions as your business evolves.",
    icon: "🔄",
  },
];

const checklistItems = [
  { label: "Utility bills", detail: "Electricity, gas, and water — ideally 12 months" },
  { label: "Business travel data", detail: "Flights, rail, and mileage claims" },
  { label: "Fuel receipts", detail: "Company vehicles and on-site machinery" },
  { label: "Fleet data", detail: "Vehicle types, fuel types, and distances" },
  { label: "Supply chain spend", detail: "For Scope 3 analysis (if applicable)" },
];

const faqs = [
  {
    question: "How long does it take?",
    answer:
      "Most engagements are completed within 2–4 weeks from the point we receive your data. Timelines vary depending on scope and data availability — if you have a tender deadline, let us know and we'll prioritise accordingly.",
  },
  {
    question: "What if I don't have all my data?",
    answer:
      "Don't worry — many of our clients come to us with incomplete records. We can help you identify gaps, apply industry-standard estimates where necessary, and document any assumptions clearly within your report. We'll never let missing data block your progress.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-emerald-50 border-b border-emerald-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-4">
            Our Process
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            How We Work —<br className="hidden sm:block" /> Transparent From Day One
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We believe carbon reporting should be straightforward. Every step of our process is
            designed to give you clarity, confidence, and control — with no jargon, no hidden
            costs, and no surprises.
          </p>
        </div>
      </section>

      {/* 7-Step Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Seven Steps to a Compliant Carbon Report
          </h2>

          <div className="relative">
            {/* Vertical line — desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-emerald-100 -translate-x-px" />

            <div className="space-y-12">
              {steps.map((step, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={step.number} className="relative flex flex-col md:flex-row items-center gap-8">
                    {/* Left content */}
                    <div
                      className={`w-full md:w-5/12 ${
                        isLeft ? "md:text-right md:pr-10" : "md:order-3 md:pl-10"
                      }`}
                    >
                      {isLeft && (
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                          <div className="text-3xl mb-3">{step.icon}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                        </div>
                      )}
                    </div>

                    {/* Centre number badge */}
                    <div className="md:order-2 flex-shrink-0 z-10">
                      <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center text-lg font-bold shadow-md ring-4 ring-white">
                        {step.number}
                      </div>
                    </div>

                    {/* Right content */}
                    <div
                      className={`w-full md:w-5/12 ${
                        isLeft ? "md:order-3 md:pl-10 hidden md:block" : "md:text-right md:pr-10"
                      }`}
                    >
                      {!isLeft && (
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                          <div className="text-3xl mb-3">{step.icon}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                        </div>
                      )}
                    </div>

                    {/* Mobile card (shown only on mobile for left-side steps) */}
                    <div className={`w-full md:hidden ${isLeft ? "" : "hidden"}`}>
                      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                        <div className="text-3xl mb-3">{step.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Need to Provide */}
      <section className="bg-gray-50 py-20 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">What You'll Need to Provide</h2>
          <p className="text-gray-600 mb-10 text-lg">
            Don't worry — we'll guide you through exactly what to gather. Here's a general
            overview of the data we typically need:
          </p>
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <ul className="space-y-4">
              {checklistItems.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <div>
                    <span className="font-semibold text-gray-900">{item.label}</span>
                    <span className="text-gray-500 text-sm ml-2">— {item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500 border-t border-gray-100 pt-4">
              If you're missing some of these, that's okay. We work with what you have and document
              any gaps transparently.
            </p>
          </div>
        </div>
      </section>

      {/* Inline FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Common Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start gap-2">
                  <span className="text-emerald-600 text-xl leading-none mt-0.5">Q</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-6">{faq.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-500 text-sm">
            Have more questions?{" "}
            <Link href="/faqs" className="text-emerald-600 font-medium hover:underline">
              Visit our full FAQ page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Start the Process Today
          </h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-xl mx-auto">
            Book your free 30-minute consultation and we'll explain exactly how we can help — with
            no obligation and no sales pressure.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-emerald-700 font-semibold px-10 py-4 rounded-full hover:bg-emerald-50 transition-colors text-base shadow-lg"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
