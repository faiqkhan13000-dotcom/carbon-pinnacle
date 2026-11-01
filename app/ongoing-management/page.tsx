import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ongoing Carbon Management | Carbon Pinnacle",
  description:
    "Dedicated ongoing carbon management for UK businesses. Monthly data collection, quarterly tracking, annual SECR & CRP, regulatory alerts, and a dedicated account manager. Never miss a carbon deadline again.",
};

const packageInclusions = [
  {
    title: "Monthly Data Collection",
    description:
      "We proactively collect energy invoices, fuel records, and operational data each month — no chasing, no scrambling at year-end.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: "Quarterly Emissions Tracking",
    description:
      "Receive a quarterly emissions dashboard showing your tCO₂e by scope and source — so you can spot trends and act before year-end.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Annual SECR Report",
    description:
      "Your full Streamlined Energy and Carbon Report prepared and delivered ahead of your Directors&apos; report filing deadline — every year, without fail.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    title: "Annual CRP Refresh",
    description:
      "Your PPN 006 Carbon Reduction Plan updated each year with fresh data — keeping it current for government tender submissions.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    title: "Regulatory Change Alerts",
    description:
      "The UK carbon reporting landscape is evolving rapidly. We monitor DESNZ, BEIS, and Cabinet Office guidance and notify you of any changes that affect your obligations.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
      </svg>
    ),
  },
  {
    title: "Dedicated Account Manager",
    description:
      "A named Carbon Pinnacle consultant who knows your business inside-out — available by phone and email, with a guaranteed response within one business day.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
];

const whyMatters = [
  {
    title: "Consistent Methodology",
    description:
      "Using the same consultants, data sources, and calculation methodology year after year ensures your emissions figures are directly comparable — essential for demonstrating credible progress.",
  },
  {
    title: "Year-on-Year Comparability",
    description:
      "Regulators, investors, and procurement teams scrutinise trends, not just snapshots. Continuous management produces data that tells a coherent story of progress over time.",
  },
  {
    title: "Significant Time Savings",
    description:
      "Clients report saving 30–60 hours of internal time per year by outsourcing carbon management. That&apos;s time your finance and sustainability teams can spend on higher-value work.",
  },
  {
    title: "Regulatory Readiness",
    description:
      "With reporting requirements expanding (TCFD, CSRD, ISSB), businesses with robust ongoing data management are far better positioned to scale up disclosures when new obligations apply.",
  },
];

const tiers = [
  {
    name: "Essentials",
    price: "£2,950",
    period: "per year",
    description: "The foundation of carbon compliance for businesses with straightforward reporting needs.",
    features: [
      "Annual SECR report",
      "Annual CRP refresh",
      "Year-on-year comparison",
      "Director declaration",
      "Email support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Standard",
    price: "£4,950",
    period: "per year",
    description: "Our most popular package — everything in Essentials plus quarterly data tracking and dedicated support.",
    features: [
      "Everything in Essentials",
      "Monthly data collection",
      "Quarterly emissions dashboard",
      "Regulatory change alerts",
      "Dedicated account manager",
      "Priority phone support",
    ],
    cta: "Start Standard",
    highlight: true,
  },
  {
    name: "Premium",
    price: "£8,500",
    period: "per year",
    description: "Full strategic partnership — ongoing management plus active carbon reduction consultancy.",
    features: [
      "Everything in Standard",
      "Science Based Target support",
      "Annual reduction strategy review",
      "Supply chain engagement",
      "Board & investor reporting",
      "Staff training (1 session/year)",
    ],
    cta: "Get Premium",
    highlight: false,
  },
];

const journeySteps = [
  { step: "Onboarding", desc: "We learn your business — data sources, reporting history, and obligations.", color: "bg-emerald-600" },
  { step: "Data Collection", desc: "Monthly data flows established with your finance or operations team.", color: "bg-emerald-600" },
  { step: "Reporting", desc: "Quarterly dashboards and annual SECR/CRP delivered on schedule.", color: "bg-emerald-600" },
  { step: "Review", desc: "Annual strategy call to assess progress and set priorities for the year ahead.", color: "bg-emerald-600" },
  { step: "Renewal", desc: "Seamless contract renewal — your data, consultant, and methodology carry forward.", color: "bg-emerald-600" },
];

export default function OngoingManagementPage() {
  return (
    <main className="bg-white">
      {/* ── Hero ── */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-emerald-600/20 px-4 py-1.5 text-sm font-medium text-emerald-400 ring-1 ring-emerald-600/30 mb-6">
              Retained Partnership
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Ongoing Carbon<br />
              <span className="text-emerald-400">Management</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              We become your dedicated carbon reporting partner — so you never miss a deadline, never scramble for data, and always have an expert in your corner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-emerald-500 transition-colors"
              >
                Start Your Ongoing Partnership
              </Link>
              <Link
                href="/carbon-footprint"
                className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition-colors"
              >
                First, Get a Carbon Footprint
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Package Inclusions ── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">The Ongoing Management Package</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive retained service that covers every aspect of your carbon reporting obligations throughout the year.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packageInclusions.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white ring-1 ring-gray-100 shadow-sm p-7 hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-5">
                {item.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Ongoing Matters ── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Why Ongoing Management Matters</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              One-off carbon reports are a snapshot. Ongoing management builds the continuous carbon intelligence your business needs to thrive in a low-carbon economy.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {whyMatters.map((item) => (
              <div key={item.title} className="flex gap-5 rounded-2xl bg-white p-7 ring-1 ring-gray-100 shadow-sm">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="h-3.5 w-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Tiers ── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the package that fits your obligations and ambitions. All prices are fixed-fee — no hourly rates, no surprises.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl p-8 ${
                tier.highlight
                  ? "bg-emerald-600 text-white shadow-xl ring-0"
                  : "bg-white ring-1 ring-gray-200 shadow-sm"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-amber-400 px-4 py-1 text-xs font-bold text-amber-900 shadow">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${tier.highlight ? "text-white" : "text-gray-900"}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className={`text-4xl font-black ${tier.highlight ? "text-white" : "text-gray-900"}`}>
                    {tier.price}
                  </span>
                  <span className={`text-sm ${tier.highlight ? "text-emerald-200" : "text-gray-500"}`}>
                    {tier.period}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${tier.highlight ? "text-emerald-100" : "text-gray-600"}`}>
                  {tier.description}
                </p>
              </div>
              <ul className="flex-1 space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center ${
                        tier.highlight ? "bg-emerald-500" : "bg-emerald-100"
                      }`}
                    >
                      <svg
                        className={`h-3 w-3 ${tier.highlight ? "text-white" : "text-emerald-600"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className={tier.highlight ? "text-emerald-50" : "text-gray-700"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all ${
                  tier.highlight
                    ? "bg-white text-emerald-700 hover:bg-emerald-50 shadow-md"
                    : "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">
          All packages are annual contracts. VAT applicable. Prices based on businesses up to 500 employees — contact us for larger organisations.
        </p>
      </section>

      {/* ── Client Journey ── */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Your Client Journey</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From your first call to annual renewal — a seamless experience designed to make carbon management effortless.
            </p>
          </div>
          <div className="relative">
            {/* Desktop connector */}
            <div className="absolute top-6 left-0 right-0 hidden h-0.5 bg-emerald-800 lg:block mx-16" aria-hidden="true" />
            <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {journeySteps.map((step, i) => (
                <div key={step.step} className="flex flex-col items-center text-center">
                  <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-sm ring-4 ring-gray-900">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{step.step}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Start your ongoing carbon partnership today
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Join growing UK businesses who trust Carbon Pinnacle to manage their carbon obligations year-round. We&apos;ll have you onboarded and reporting within two weeks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5 transition-all"
          >
            Start Your Ongoing Partnership
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            href="/secr"
            className="inline-flex items-center justify-center rounded-full border border-gray-200 px-8 py-4 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Learn About SECR
          </Link>
        </div>
      </section>
    </main>
  );
}
