import Link from "next/link";

const services = [
  { label: "PPN 006 Carbon Reduction Plans", href: "/ppn-006" },
  { label: "SECR Reporting Support", href: "/secr" },
  { label: "Business Carbon Footprint (Scopes 1-3)", href: "/carbon-footprint" },
  { label: "Carbon Reduction Consultancy", href: "/consultancy" },
  { label: "Ongoing Carbon Management", href: "/ongoing-management" },
];

const company = [
  { label: "7-Step Process", href: "/how-it-works" },
  { label: "About Carbon Pinnacle", href: "/about" },
  { label: "Frequently Asked Questions", href: "/faqs" },
  { label: "Request a Proposal", href: "/contact" },
];

const complianceStandards = [
  "GHG Protocol Corporate Standard",
  "UK Government PPN 006/21 Compliant",
  "SECR / Companies Act 2006 Aligned",
  "ISO 14064-1 & PAS 2060 Frameworks",
  "DEFRA / DESNZ 2024 Conversion Factors",
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      {/* Pre-Footer Action Banner */}
      <div className="border-b border-slate-800 bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Fast UK Turnaround
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Facing a tender deadline or SECR year-end?
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              Our London-based carbon consultants deliver audit-ready Carbon Reduction Plans in as little as 5 business days.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm px-7 py-3.5 shadow-lg shadow-emerald-900/30 transition-all text-center"
            >
              <span>Get Your Fast Quote</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="tel:+442071234567"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-white font-medium text-sm px-6 py-3.5 transition-colors text-center"
            >
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>020 7123 4567</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Navigation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Carbon Pinnacle
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm mb-6">
              Carbon Pinnacle is the UK&apos;s specialist consultancy for business carbon reporting, SECR compliance, and PPN 006 Carbon Reduction Plans for major public tenders.
            </p>

            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>12 St James&apos;s Square, Mayfair, London, SW1Y 4RB</span>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0017.25 4.5h-10.5A2.25 2.25 0 004.5 6.75m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:info@carbonpinnacle.co.uk" className="hover:text-emerald-400 transition-colors">
                  info@carbonpinnacle.co.uk
                </a>
              </p>
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-emerald-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-emerald-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Standards & Accreditations Col */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Compliance Standards
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {complianceStandards.map((std) => (
                <li key={std} className="flex items-start gap-2">
                  <svg className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{std}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Carbon Pinnacle Ltd. Registered in England & Wales. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
