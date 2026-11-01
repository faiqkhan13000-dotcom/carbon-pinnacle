import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Carbon Footprint | Carbon Pinnacle",
  description:
    "Comprehensive Scope 1, 2 & 3 carbon footprint measurement for UK businesses. GHG Protocol aligned, DEFRA emission factors, ISO 14064 compliant. Includes full report, data dashboard, and reduction recommendations.",
};

const scope3Categories = [
  "Purchased goods and services",
  "Capital goods",
  "Fuel and energy-related activities",
  "Upstream transportation and distribution",
  "Waste generated in operations",
  "Business travel",
  "Employee commuting",
  "Downstream transportation and distribution",
  "End-of-life treatment of sold products",
  "Investments (where applicable)",
];

const methodologies = [
  {
    name: "GHG Protocol",
    description: "The global gold standard for corporate carbon accounting. Our approach fully adheres to the GHG Protocol Corporate Accounting and Reporting Standard.",
    logo: "GHG",
  },
  {
    name: "DEFRA Emission Factors",
    description: "We use the latest UK government (DEFRA/BEIS) conversion factors, updated annually, ensuring your calculations reflect current science.",
    logo: "DEFRA",
  },
  {
    name: "ISO 14064",
    description: "Our methodology is consistent with ISO 14064 Part 1, the international standard for quantifying and reporting greenhouse gas emissions at the organisational level.",
    logo: "ISO",
  },
];

const deliverables = [
  {
    title: "Carbon Footprint Report",
    description: "A comprehensive, branded PDF report detailing your emissions across all three scopes, with data tables, charts, and expert commentary.",
    icon: "📄",
  },
  {
    title: "Data Dashboard",
    description: "An interactive emissions breakdown showing your footprint by source, scope, and business unit — making it easy to identify hotspots.",
    icon: "📊",
  },
  {
    title: "Reduction Recommendations",
    description: "Practical, prioritised recommendations for reducing your carbon footprint, tailored to your industry, size, and operational context.",
    icon: "🎯",
  },
  {
    title: "Annual Benchmarking",
    description: "Year-on-year comparison to track your emissions trajectory, demonstrate progress to stakeholders, and support regulatory reporting.",
    icon: "📈",
  },
];

const industries = [
  { name: "Construction", icon: "🏗️" },
  { name: "Professional Services", icon: "💼" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "Retail", icon: "🛍️" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Public Sector", icon: "🏛️" },
];

export default function CarbonFootprintPage() {
  return (
    <main className="bg-white">
      {/* ── Hero ── */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-emerald-600/20 px-4 py-1.5 text-sm font-medium text-emerald-400 ring-1 ring-emerald-600/30 mb-6">
              Carbon Measurement
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Measure Your Full<br />
              <span className="text-emerald-400">Carbon Footprint</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              Scope 1, 2 &amp; 3 emissions analysis for UK businesses. Understand exactly where your carbon comes from — and build a credible roadmap to reduce it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-emerald-500 transition-colors"
              >
                Get Your Carbon Footprint
              </Link>
              <Link
                href="/consultancy"
                className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition-colors"
              >
                View Consultancy Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Three Scopes ── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Understanding the Three Scopes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The GHG Protocol categorises emissions into three scopes to ensure a complete and consistent picture of your carbon footprint.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Scope 1 */}
          <div className="rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-emerald-600 px-7 py-5">
              <span className="text-sm font-semibold text-emerald-200 uppercase tracking-widest">Scope 1</span>
              <h3 className="text-xl font-bold text-white mt-1">Direct Emissions</h3>
            </div>
            <div className="p-7">
              <p className="text-gray-600 leading-relaxed mb-5">
                Emissions from sources your organisation owns or controls directly. These are often the easiest to measure and the first to address.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {["Natural gas combustion", "Company vehicle fuel", "Refrigerant leaks (F-gases)", "On-site industrial processes"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scope 2 */}
          <div className="rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-emerald-700 px-7 py-5">
              <span className="text-sm font-semibold text-emerald-200 uppercase tracking-widest">Scope 2</span>
              <h3 className="text-xl font-bold text-white mt-1">Purchased Energy</h3>
            </div>
            <div className="p-7">
              <p className="text-gray-600 leading-relaxed mb-5">
                Indirect emissions from the generation of purchased electricity, heat, steam, or cooling consumed by your organisation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {["Purchased electricity (grid)", "District heating", "Purchased steam or cooling", "Renewable energy certificates (REGOs)"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scope 3 */}
          <div className="rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-gray-800 px-7 py-5">
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Scope 3</span>
              <h3 className="text-xl font-bold text-white mt-1">Value Chain Emissions</h3>
            </div>
            <div className="p-7">
              <p className="text-gray-600 leading-relaxed mb-4">
                All other indirect emissions across your upstream and downstream value chain. Typically represents 70–90% of a business&apos;s total footprint.
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Relevant categories include:</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {scope3Categories.slice(0, 6).map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
                <li className="text-xs text-gray-400 pt-1">+ {scope3Categories.length - 6} more categories assessed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Methodology ── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Methodology</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow internationally recognised standards and government-approved emission factors to ensure your data is accurate, defensible, and credible with stakeholders.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {methodologies.map((m) => (
              <div key={m.name} className="flex flex-col items-start rounded-2xl bg-white p-8 ring-1 ring-gray-100 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-600 text-white font-black text-sm mb-6">
                  {m.logo}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{m.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">What You Receive</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every carbon footprint engagement delivers a clear, actionable set of outputs your business can use immediately.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {deliverables.map((d) => (
            <div key={d.title} className="flex gap-5 rounded-2xl bg-white p-7 ring-1 ring-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl flex-shrink-0">{d.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{d.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{d.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our consultants have sector-specific experience across the UK economy, ensuring emission factors and recommendations are relevant to your operations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="flex flex-col items-center justify-center rounded-2xl bg-white p-6 text-center ring-1 ring-gray-100 shadow-sm hover:ring-emerald-200 hover:shadow-md transition-all"
              >
                <span className="text-3xl mb-3">{ind.icon}</span>
                <span className="text-sm font-medium text-gray-700">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-emerald-600 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Know your carbon — then reduce it</h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-xl mx-auto">
            Begin with a comprehensive carbon footprint assessment. Our team will guide you through the data collection process and have your results ready within weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors shadow-lg"
            >
              Start Your Carbon Footprint
            </Link>
            <Link
              href="/consultancy"
              className="inline-flex items-center justify-center rounded-full border border-emerald-400 px-8 py-4 text-base font-semibold text-white hover:bg-emerald-500 transition-colors"
            >
              Explore Reduction Consultancy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
