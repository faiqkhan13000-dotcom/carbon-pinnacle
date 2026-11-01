import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SECR Reporting Support | Carbon Pinnacle",
  description:
    "Expert Streamlined Energy and Carbon Reporting (SECR) support for large UK businesses. We handle your annual Directors' report submission — fully compliant, accurately calculated, on time.",
};

const inclusions = [
  {
    title: "Energy Consumption Data",
    description: "Collection and verification of all energy data across gas, electricity, and transport fuel — covering UK and global operations as required.",
  },
  {
    title: "tCO2e Calculations",
    description: "Precise greenhouse gas calculations in tonnes of CO₂ equivalent using current DEFRA/BEIS conversion factors and the GHG Protocol methodology.",
  },
  {
    title: "Mandatory Intensity Ratio",
    description: "We calculate and disclose your energy intensity ratio (e.g., kWh per £ revenue or per employee) as required under SECR regulations.",
  },
  {
    title: "Directors' Report Inclusion",
    description: "Properly formatted SECR disclosures ready for inclusion in your annual Directors' report, in line with the Companies Act 2006 requirements.",
  },
  {
    title: "Year-on-Year Comparison",
    description: "We present your emissions alongside prior-year data and document any significant changes — a SECR requirement for all reporting periods after year one.",
  },
];

const benefits = [
  {
    title: "Reduce Regulatory Risk",
    description: "SECR errors in statutory filings can attract scrutiny from Companies House and reputational risk. Our expert review eliminates common compliance gaps.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "Save Internal Resource",
    description: "Carbon reporting is time-intensive. Outsourcing to Carbon Pinnacle frees your finance and operations teams to focus on core business activities.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "Build Investor Confidence",
    description: "Accurate, well-presented carbon disclosures strengthen ESG narratives for investors, lenders, and insurers who increasingly scrutinise climate data.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Platform for Reduction",
    description: "SECR data forms the foundation of any meaningful carbon reduction strategy. We help you use your baseline to set credible targets and track progress.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
  },
];

const timelineMonths = [
  { month: "Month 1–2", label: "Data Collection", desc: "We gather energy invoices, transport records, and operational data from your team." },
  { month: "Month 2–3", label: "Calculation & Drafting", desc: "Emissions are calculated, intensity ratios computed, and disclosures drafted." },
  { month: "Month 3–4", label: "Review & Approval", desc: "Draft is shared with your finance director for review and approval before filing." },
  { month: "Month 4", label: "Final Filing", desc: "Completed SECR section submitted for inclusion in your statutory annual report." },
];

export default function SECRPage() {
  return (
    <main className="bg-white">
      {/* ── Hero ── */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-emerald-600/20 px-4 py-1.5 text-sm font-medium text-emerald-400 ring-1 ring-emerald-600/30 mb-6">
              Statutory Compliance
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              SECR Reporting<br />
              <span className="text-emerald-400">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              Streamlined Energy and Carbon Reporting for large UK businesses — accurate, compliant, and stress-free. We handle the complexity so you don&apos;t have to.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-emerald-500 transition-colors"
              >
                Start Your SECR Report
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who Needs SECR ── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Who Needs to Report Under SECR?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              SECR (Streamlined Energy and Carbon Reporting) has applied since April 2019 and affects a wide range of UK organisations. If your business meets any of the thresholds below, you have a legal obligation to report.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Failure to comply can result in Companies House filings being rejected and reputational consequences. Carbon Pinnacle ensures your disclosures are accurate, complete, and submitted on time every year.
            </p>
          </div>
          <div className="rounded-2xl bg-gray-50 ring-1 ring-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">SECR Applies To</h3>
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-emerald-600 flex items-center justify-center">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
                <span className="text-gray-700"><strong>Quoted companies</strong> (all UK-incorporated, listed on a recognised investment exchange)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-emerald-600 flex items-center justify-center">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
                <span className="text-gray-700"><strong>Large unquoted companies & LLPs</strong> meeting at least two of the following thresholds:</span>
              </li>
            </ul>
            <div className="mt-4 ml-8 grid grid-cols-3 gap-3">
              {[
                { label: "Employees", value: "250+" },
                { label: "Annual Turnover", value: "£36m+" },
                { label: "Balance Sheet", value: "£18m+" },
              ].map((t) => (
                <div key={t.label} className="rounded-xl bg-white p-4 text-center ring-1 ring-gray-200 shadow-sm">
                  <div className="text-xl font-bold text-emerald-600">{t.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{t.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Include ── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">What Your SECR Report Includes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We prepare every element required under the Companies (Directors&apos; Report) and Limited Liability Partnerships (Energy and Carbon Report) Regulations 2018.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {inclusions.map((item, i) => (
              <div key={i} className="rounded-2xl bg-white p-7 ring-1 ring-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 mb-5">
                  <span className="text-lg font-bold text-emerald-600">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Benefits of Expert SECR Support</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Working with Carbon Pinnacle goes beyond compliance — it builds the carbon intelligence your business needs to thrive.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.title} className="flex gap-5 rounded-2xl p-7 ring-1 ring-gray-100 bg-white shadow-sm">
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                {b.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Annual Reporting Timeline ── */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Annual Reporting Timeline</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our structured process ensures your SECR obligations are met well ahead of your statutory filing deadline.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {timelineMonths.map((t, i) => (
              <div key={i} className="relative rounded-2xl bg-gray-800 p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">{t.month}</div>
                <h3 className="font-bold text-white mb-2">{t.label}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{t.desc}</p>
                {i < timelineMonths.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Ready to simplify your SECR reporting?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Contact Carbon Pinnacle today to discuss your SECR requirements. We&apos;ll scope your project and provide a fixed-fee proposal within 48 hours.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5 transition-all"
        >
          Start Your SECR Report
          <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </section>
    </main>
  );
}
