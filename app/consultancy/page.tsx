import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carbon Reduction Consultancy | Carbon Pinnacle",
  description:
    "Strategic carbon reduction consultancy for UK businesses. Science Based Targets, Net Zero roadmaps, supply chain engagement, and board-level reporting. We help you actually reduce emissions — not just report them.",
};

const services = [
  {
    title: "Science Based Targets (SBTi)",
    description:
      "We guide you through the SBTi commitment and validation process, helping you set emissions reduction targets aligned with 1.5°C or well-below-2°C climate pathways.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.769 0-5.452-.23-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Net Zero Roadmaps",
    description:
      "A clear, costed pathway from your current baseline to Net Zero — with interim milestones, investment requirements, and decision points mapped by year.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
    ),
  },
  {
    title: "Supply Chain Engagement",
    description:
      "Scope 3 emissions reduction starts with your suppliers. We help you develop supplier questionnaires, engagement programmes, and procurement criteria to decarbonise your value chain.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
  },
  {
    title: "Carbon Reduction Strategy",
    description:
      "A prioritised action plan identifying the highest-impact, most cost-effective interventions for your business — from energy efficiency to fleet electrification and renewable procurement.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Staff Training & Engagement",
    description:
      "Build internal carbon literacy through tailored workshops and eLearning programmes — from board-level awareness sessions to operational sustainability teams.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Board & Investor Reporting",
    description:
      "We prepare board-ready climate reports aligned to TCFD, CSRD, and investor ESG frameworks — giving decision-makers the insight they need to govern climate risk effectively.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
];

const workflowSteps = [
  {
    number: "1",
    title: "Discovery",
    description: "We meet with key stakeholders to understand your business model, operations, supply chain, and existing sustainability commitments.",
  },
  {
    number: "2",
    title: "Baseline",
    description: "We measure your full Scope 1, 2, and 3 carbon footprint to establish an accurate starting point for target-setting.",
  },
  {
    number: "3",
    title: "Strategy",
    description: "We develop a prioritised, costed reduction strategy aligned to your sector, budget, and growth plans.",
  },
  {
    number: "4",
    title: "Implementation",
    description: "We support you through delivery — from supplier engagement to energy procurement and operational changes.",
  },
  {
    number: "5",
    title: "Review",
    description: "Annual reviews track progress, update your baseline, and adapt your strategy as your business evolves.",
  },
];

export default function ConsultancyPage() {
  return (
    <main className="bg-white">
      {/* ── Hero ── */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-emerald-600/20 px-4 py-1.5 text-sm font-medium text-emerald-400 ring-1 ring-emerald-600/30 mb-6">
              Strategic Consultancy
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Strategic Carbon<br />
              <span className="text-emerald-400">Reduction Consultancy</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              Beyond reporting — we help you actually reduce emissions. Practical, expert-led consultancy that turns carbon data into commercial advantage and measurable climate action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-emerald-500 transition-colors"
              >
                Book a Consultancy Call
              </Link>
              <Link
                href="/carbon-footprint"
                className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition-colors"
              >
                Start with a Carbon Footprint
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600 mb-4 block">The Challenge</span>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Reporting isn&apos;t the same as reducing.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Many UK businesses invest in carbon reports to satisfy regulatory or procurement requirements — only to file them and move on. The emissions keep rising, the targets remain aspirational, and the gap between commitment and action widens.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Carbon Pinnacle bridges that gap. We combine rigorous measurement with hands-on strategic support, ensuring your carbon data drives real decisions — not just compliance tick-boxes.
            </p>
          </div>
          <div className="rounded-2xl bg-gray-50 ring-1 ring-gray-200 p-8 lg:p-10">
            <div className="space-y-5">
              {[
                { stat: "72%", label: "of UK businesses with carbon targets have no formal reduction plan", color: "text-red-500" },
                { stat: "34%", label: "average Scope 1 & 2 reduction achieved by our consultancy clients within 18 months", color: "text-emerald-600" },
                { stat: "£0", label: "additional cost to your operations when reduction measures are properly prioritised", color: "text-emerald-600" },
              ].map((s) => (
                <div key={s.label} className="flex gap-5 items-start">
                  <div className={`text-3xl font-black ${s.color} flex-shrink-0 w-20`}>{s.stat}</div>
                  <p className="text-sm text-gray-600 leading-relaxed pt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Consultancy Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From science-based target setting to supply chain transformation — we provide the full spectrum of carbon reduction support.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white p-7 ring-1 ring-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-5">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study ── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl bg-emerald-600 p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-3 items-center">
            <div className="lg:col-span-2">
              <span className="text-sm font-semibold uppercase tracking-widest text-emerald-200 block mb-4">Client Success Story</span>
              <h2 className="text-3xl font-bold text-white mb-5">
                34% reduction in Scope 1 &amp; 2 emissions in 18 months
              </h2>
              <p className="text-emerald-100 leading-relaxed mb-5">
                A 200-person professional services firm engaged Carbon Pinnacle following their first SECR submission. Their baseline revealed that business travel and office energy were responsible for over 80% of their Scope 1 &amp; 2 footprint.
              </p>
              <p className="text-emerald-100 leading-relaxed">
                We developed a targeted reduction strategy combining a hybrid working policy, office LED retrofit, green energy tariff transition, and rail-first travel guidance. Within 18 months, Scope 1 &amp; 2 emissions fell by 34% against baseline — with a net cost saving of £47,000 per year from energy and travel efficiencies.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "34%", label: "Scope 1 & 2 reduction" },
                { value: "18mo", label: "to achieve results" },
                { value: "£47k", label: "annual cost savings" },
                { value: "200", label: "employees engaged" },
              ].map((m) => (
                <div key={m.label} className="rounded-xl bg-emerald-700 p-5 text-center">
                  <div className="text-2xl font-black text-white">{m.value}</div>
                  <div className="text-xs text-emerald-300 mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven five-stage process takes you from initial discovery to sustained emissions reduction — with a clear review cycle that keeps momentum going year after year.
            </p>
          </div>
          <div className="relative flex flex-col gap-0">
            {workflowSteps.map((step, i) => (
              <div key={step.number} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-lg z-10">
                    {step.number}
                  </div>
                  {i < workflowSteps.length - 1 && (
                    <div className="w-px flex-1 bg-emerald-200 my-2" aria-hidden="true" />
                  )}
                </div>
                <div className={`pb-10 ${i === workflowSteps.length - 1 ? "" : ""}`}>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 pt-2.5">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed max-w-xl">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to turn your carbon data into action?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Book a complimentary discovery call with one of our consultants. We&apos;ll discuss your current position and explore where the biggest reduction opportunities lie.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5 transition-all"
          >
            Book Your Discovery Call
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
