import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PPN 006 Carbon Reduction Plans | Carbon Pinnacle",
  description:
    "Win government contracts over £5m with a fully compliant PPN 006 Carbon Reduction Plan. Delivered in 5–10 business days. Covers Scope 1, 2 & 3 emissions, GHG Protocol aligned, with signed Director Declaration.",
};

const deliverables = [
  {
    title: "Scope 1 & 2 Emissions",
    description:
      "Comprehensive measurement of your direct combustion emissions and purchased energy consumption, calculated using the latest DEFRA emission factors.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    title: "Scope 3 Emissions",
    description:
      "Mandatory from April 2023 for PPN 006 compliance. We quantify your upstream and downstream value chain emissions across all relevant categories.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
  },
  {
    title: "Signed Director Declaration",
    description:
      "A legally compliant declaration signed by a company director, confirming the accuracy of your Carbon Reduction Plan — a mandatory PPN 006 requirement.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
  },
  {
    title: "GHG Protocol Aligned Plan",
    description:
      "A published Carbon Reduction Plan aligned to the GHG Protocol Corporate Standard, ready to upload to your tender submission or company website.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
];

const steps = [
  { step: "01", title: "Kickoff & Data Request", description: "We send you a simple data collection template covering energy bills, fuel usage, and business travel." },
  { step: "02", title: "Emissions Calculation", description: "Our consultants calculate your Scope 1, 2, and 3 emissions using DEFRA-approved methodology." },
  { step: "03", title: "Plan Drafting & Review", description: "We draft your Carbon Reduction Plan and send it to you for review and director sign-off." },
  { step: "04", title: "Final Delivery", description: "Receive your compliant, publication-ready plan — typically within 5–10 business days of data receipt." },
];

const faqs = [
  {
    question: "What is PPN 006?",
    answer:
      "PPN 006 (Procurement Policy Note 006) is a UK government policy requiring suppliers bidding for central government contracts above £5 million per annum to publish a Carbon Reduction Plan. It was introduced to help the UK government achieve its net zero targets through its supply chain. The plan must demonstrate your commitment to achieving Net Zero by 2050 and include your current baseline emissions across Scopes 1, 2, and 3.",
  },
  {
    question: "Which contracts require a Carbon Reduction Plan?",
    answer:
      "PPN 006 applies to all new procurements by UK central government departments, their executive agencies, and non-departmental public bodies where the contract value exceeds £5 million per annum. It has applied since 30 September 2021 for Scope 1 and 2, with Scope 3 becoming mandatory for new procurements from 1 April 2023.",
  },
  {
    question: "What does a compliant Carbon Reduction Plan include?",
    answer:
      "A compliant PPN 006 Carbon Reduction Plan must include: a commitment to achieving Net Zero by 2050; your organisation's current carbon footprint (Scopes 1, 2, and 3); the emission reduction targets you have set; the measures you are implementing to reduce emissions; and a signed declaration from a director or equivalent. Carbon Pinnacle delivers all of this, formatted and ready for submission.",
  },
];

export default function PPN006Page() {
  return (
    <main className="bg-white">
      {/* ── Hero ── */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-emerald-600/20 px-4 py-1.5 text-sm font-medium text-emerald-400 ring-1 ring-emerald-600/30 mb-6">
              Government Procurement Compliance
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              PPN 006 Carbon<br />
              <span className="text-emerald-400">Reduction Plans</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              Win government contracts with a fully compliant Carbon Reduction Plan — delivered by expert consultants, aligned to GHG Protocol, ready for submission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-emerald-500 transition-colors"
              >
                Get My Carbon Reduction Plan
              </Link>
              <a
                href="tel:+442071234567"
                className="inline-flex items-center justify-center rounded-full border border-gray-600 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition-colors"
              >
                Call 020 7123 4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Urgency / Compliance Block ── */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                <svg className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-amber-900 mb-2">
                Is your business tendering for government contracts over £5m?
              </h2>
              <p className="text-amber-800 leading-relaxed">
                <strong>PPN 006 makes a Carbon Reduction Plan mandatory</strong> for all central government procurement above £5 million per annum. Without a compliant plan, your tender will be disqualified — regardless of price or capability. Scope 3 emissions have been required since April 2023. Don&apos;t risk losing a contract over a compliance gap we can close in days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Deliver ── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">What We Deliver</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every Carbon Reduction Plan from Carbon Pinnacle is comprehensive, compliant, and ready to submit with your tender.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-4">
            Fast Turnaround
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Delivered in 5–10 Business Days</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process means you can meet tender deadlines without the weeks of back-and-forth typical of larger consultancies.
          </p>
        </div>
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-emerald-100 lg:block" aria-hidden="true" />
          <div className="grid gap-8 lg:grid-cols-2">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className={`flex gap-6 rounded-2xl bg-white p-7 ring-1 ring-gray-100 shadow-sm ${i % 2 === 0 ? "lg:mr-8" : "lg:ml-8"}`}
              >
                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-sm">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Teaser ── */}
      <section className="bg-emerald-600 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Transparent Pricing from £995</h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-xl mx-auto">
            Fixed-fee pricing with no hidden extras. We&apos;ll confirm your exact cost after a brief discovery call — before any work begins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors shadow-lg"
            >
              Request a Quote
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-emerald-400 px-8 py-4 text-base font-semibold text-white hover:bg-emerald-500 transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know about PPN 006 compliance.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-2xl ring-1 ring-gray-200 bg-white overflow-hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between px-7 py-6 text-left">
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-7 pb-6">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="border-t border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to secure your government contracts?</h2>
          <p className="text-gray-600 mb-8">
            Speak to a consultant today. We&apos;ll assess your requirements and confirm exactly what&apos;s needed to achieve PPN 006 compliance.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-8 py-4 text-base font-semibold text-white hover:bg-emerald-500 transition-colors shadow-sm"
          >
            Get Started Today
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
