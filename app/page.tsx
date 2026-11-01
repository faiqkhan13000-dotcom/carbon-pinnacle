import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carbon Pinnacle | UK Carbon Reporting & Compliance Consultancy",
  description:
    "Specialist UK carbon reporting consultancy. We prepare audit-ready PPN 006 Carbon Reduction Plans, SECR compliance reports, Scope 1-3 carbon footprints, and net zero roadmaps.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    tag: "Tenders & Procurement",
    title: "PPN 006 Carbon Reduction Plans",
    description:
      "Mandatory for bidding on UK central government, NHS, and defence contracts over £5m. We deliver fully compliant plans with signed director declarations.",
    href: "/ppn-006",
    turnaround: "5–10 Days",
    highlight: "100% Tender Pass Rate",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
  {
    tag: "Mandatory Compliance",
    title: "SECR Reporting Support",
    description:
      "End-to-end Streamlined Energy & Carbon Reporting for large UK companies and LLPs under the Companies Act 2006. Complete with audit trail for Companies House.",
    href: "/secr",
    turnaround: "Financial Year-End Ready",
    highlight: "Audit-Proof Methodology",
    badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
  },
  {
    tag: "Scopes 1, 2 & 3",
    title: "Business Carbon Footprint",
    description:
      "Rigorous greenhouse gas accounting aligned to the GHG Protocol. We map your direct operations, purchased utilities, and complex supply chain emissions.",
    href: "/carbon-footprint",
    turnaround: "Full Baseline Report",
    highlight: "DEFRA 2024 Factors",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
  {
    tag: "Decarbonisation Strategy",
    title: "Carbon Reduction Consultancy",
    description:
      "Practical Net Zero roadmaps and Science-Based Targets (SBTi) tailored to your operational realities — not generic templates, but actionable commercial reductions.",
    href: "/consultancy",
    turnaround: "Strategic Roadmap",
    highlight: "Measurable ROI",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
  },
  {
    tag: "Retained Partnership",
    title: "Ongoing Carbon Management",
    description:
      "Your outsourced sustainability office. We continuously monitor emissions data, update annual filings, and insulate your business from changing UK legislation.",
    href: "/ongoing-management",
    turnaround: "Quarterly & Annual Reviews",
    highlight: "Dedicated Lead Consultant",
    badgeColor: "bg-purple-50 text-purple-800 border-purple-200",
  },
  {
    tag: "Bespoke Advisory",
    title: "Custom Carbon & ESG Advisory",
    description:
      "Due diligence for private equity and M&A, customer ESG questionnaire completion, supply chain engagement, and board-level climate governance advisory.",
    href: "/contact",
    turnaround: "Bespoke Scoping",
    highlight: "Tailored to Your Scope",
    badgeColor: "bg-slate-50 text-slate-800 border-slate-200",
  },
];

const stats = [
  { value: "500+", label: "Compliant Reports Delivered", sub: "For UK businesses & contractors" },
  { value: "100%", label: "Tender Compliance Rate", sub: "Zero PPN 006 bid disqualifications" },
  { value: "5–10", label: "Business Day Turnaround", sub: "Express service available for tenders" },
  { value: "£0", label: "Hidden Platform Fees", sub: "Clear, fixed transparent consultancy pricing" },
];

const pillars = [
  {
    title: "Human-Led, Not Black-Box Software",
    desc: "Automated software tools leave you guessing and frequently fail procurement audits. At Carbon Pinnacle, a senior UK environmental consultant manages your account from data intake to director sign-off.",
    icon: "user",
  },
  {
    title: "Procurement & Commercial Focus",
    desc: "We understand that compliance is a commercial enabler. Our Carbon Reduction Plans are written to satisfy Crown Commercial Service and NHS procurement scoring matrices.",
    icon: "shield",
  },
  {
    title: "Zero Jargon, Full Transparency",
    desc: "Carbon accounting can feel like a maze of acronyms. We explain every calculation in plain English, provide defensible audit trails, and ensure your team understands the figures.",
    icon: "document",
  },
  {
    title: "Fixed Fees & Fast Turnaround",
    desc: "No expensive recurring SaaS subscriptions you don't need. You get an upfront fixed quote, predictable timelines, and guaranteed delivery ahead of your deadline.",
    icon: "lightning",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Scope",
    desc: "A brief 20-minute call to identify your exact compliance requirements, tender deadlines, and available data.",
  },
  {
    step: "02",
    title: "Guided Data Intake",
    desc: "We supply our streamlined UK utility, fleet, and expense intake template — helping you gather records with zero stress.",
  },
  {
    step: "03",
    title: "GHG Protocol Calculations",
    desc: "Our specialists compute your Scope 1, 2, and 3 emissions using official DEFRA/DESNZ 2024 emission factors.",
  },
  {
    step: "04",
    title: "Director-Ready Sign-off",
    desc: "Receive an executive-ready Carbon Reduction Plan or SECR report, formatted and verified for immediate submission.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col bg-white">
      {/* ── 1. Hero Section ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white border-b border-slate-100">
        {/* Subtle radial ambient glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-emerald-100/40 via-teal-50/30 to-transparent blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Compliance Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-emerald-200/80 shadow-sm text-xs font-semibold text-emerald-800 mb-8 hover:border-emerald-300 transition-colors">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span>UK Carbon Reporting &amp; Procurement Compliance</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-medium">PPN 006 &amp; SECR Specialists</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.12]">
            Audit-Ready Carbon Reporting for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
              UK Commercial Success
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Win high-value government tenders with compliant PPN 006 Carbon Reduction Plans and satisfy SECR obligations — delivered by senior UK carbon consultants in 5–10 business days.
          </p>

          {/* Call-to-actions */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base px-8 py-4 shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Request a Fixed-Price Quote</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <Link
              href="/ppn-006"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base px-8 py-4 border border-slate-200 shadow-sm transition-colors"
            >
              <span>Explore PPN 006 Plans</span>
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>

          {/* Reassurance Micro-Points */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-700 font-medium">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Fixed upfront pricing
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              5–10 day typical delivery
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Director-signed compliance
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Zero software lock-in
            </span>
          </div>
        </div>
      </section>

      {/* ── 2. Trust & Credibility Metrics Bar ────────────────────────────── */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center pt-6 lg:pt-0 lg:px-6">
                <p className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                  <span className="text-emerald-600">{stat.value}</span>
                </p>
                <p className="text-sm font-bold text-slate-800 mt-1">{stat.label}</p>
                <p className="text-xs text-slate-600 mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Six Services Grid ─────────────────────────────────────────── */}
      <section id="services" className="py-24 bg-slate-50 border-b border-slate-100 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
              Expertise &amp; Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
              Comprehensive Carbon Reporting &amp; Reduction Services
            </h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Whether you need to win a multi-million-pound public sector tender or satisfy annual Companies House disclosures, our solutions deliver bulletproof compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm card-hover hover:border-emerald-500/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${service.badgeColor}`}>
                      {service.tag}
                    </span>
                    <span className="text-xs font-semibold text-slate-600">
                      {service.turnaround}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    <Link href={service.href} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {service.title}
                    </Link>
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {service.highlight}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View service details &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Human-Led Approach vs. Software ───────────────────────────── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col - Narrative */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
                The Carbon Pinnacle Standard
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4 leading-tight">
                Why UK Leaders Choose a Consultant-Led Approach
              </h2>
              <p className="text-base text-slate-600 mt-5 leading-relaxed">
                Many companies buy expensive carbon accounting software only to find that procurement officers reject automated generic outputs. Public contracts and audits demand human verification, verifiable emission factors, and signed director declarations.
              </p>

              <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-bold text-slate-900">
                  &ldquo;Carbon Pinnacle delivered our PPN 006 plan in 6 days flat, allowing us to successfully submit our £8.4m NHS framework tender on time without a hitch.&rdquo;
                </p>
                <p className="text-xs text-slate-600 mt-2 font-medium">
                  — Commercial Director, Tier 1 Facilities Management Provider
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
                >
                  <span>Learn more about our methodology and team</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Col - 4 Pillars */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 card-hover"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Simple 4-Step Process ─────────────────────────────────────── */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
              Clear &amp; Simple
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
              How We Deliver Your Carbon Report
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Transparent, accountable, and designed to minimize demands on your internal operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative"
              >
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                  Step {step.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-4">{step.title}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            >
              <span>View our complete 7-step transparent process</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. Conversion CTA Banner ────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white relative overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-6 border border-emerald-500/30">
            <span>Guaranteed Compliance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Ready to secure compliance and win your next tender?
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Contact our London carbon consulting team today for a transparent, fixed-price proposal within 24 hours.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base px-9 py-4 shadow-xl shadow-emerald-950 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Request a Quote Now</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <a
              href="tel:+442071234567"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 hover:border-slate-500 hover:bg-white/5 text-white font-medium text-base px-8 py-4 transition-colors"
            >
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>Call 020 7123 4567</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
