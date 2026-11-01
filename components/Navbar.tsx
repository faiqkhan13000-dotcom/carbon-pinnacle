"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const servicesDropdown = [
  {
    label: "PPN 006 Carbon Reduction Plans",
    description: "Mandatory for UK government tenders over £5m",
    href: "/ppn-006",
    badge: "Tenders",
  },
  {
    label: "SECR Reporting Support",
    description: "Streamlined Energy & Carbon Reporting for large firms",
    href: "/secr",
    badge: "Compliance",
  },
  {
    label: "Business Carbon Footprint",
    description: "Comprehensive Scope 1, 2 & 3 baseline accounting",
    href: "/carbon-footprint",
    badge: "Scopes 1-3",
  },
  {
    label: "Carbon Reduction Consultancy",
    description: "Net zero roadmaps and science-based decarbonisation",
    href: "/consultancy",
    badge: "Strategy",
  },
  {
    label: "Ongoing Carbon Management",
    description: "Year-round retained reporting & compliance partner",
    href: "/ongoing-management",
    badge: "Retained",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services", hasDropdown: true },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faqs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll detection for elevated glass styling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isServiceActive = servicesDropdown.some((s) => pathname === s.href);

  return (
    <>
      {/* Top Trust Micro-Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-white">UK Government Procurement Compliant</span>
            <span className="text-slate-500 hidden md:inline">|</span>
            <span className="hidden md:inline text-slate-400">GHG Protocol Corporate Standard & PAS 2060</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-400">Speak to a Senior Consultant:</span>
            <a
              href="tel:+442071234567"
              className="font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              +44 (0)20 7123 4567
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/90 py-2.5"
            : "bg-white border-b border-slate-100 py-3.5"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-sm group-hover:shadow-md transition-all duration-200">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Carbon Pinnacle
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 -mt-1">
                  UK Carbon Reporting
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1.5">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key="services" className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      onMouseEnter={() => setServicesOpen(true)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
                        isServiceActive || servicesOpen
                          ? "bg-emerald-50 text-emerald-700"
                          : "text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
                      }`}
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                    >
                      <span>Services</span>
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${
                          servicesOpen ? "rotate-180 text-emerald-600" : "text-slate-400"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Rich Services Flyout Menu */}
                    {servicesOpen && (
                      <div
                        onMouseLeave={() => setServicesOpen(false)}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 rounded-2xl bg-white border border-slate-200/90 shadow-xl ring-1 ring-black/5 p-2.5 z-50"
                      >
                        <div className="px-3 py-2 border-b border-slate-100 mb-1">
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                            Specialist Compliance Solutions
                          </p>
                        </div>
                        <div className="space-y-1">
                          {servicesDropdown.map((service) => {
                            const active = pathname === service.href;
                            return (
                              <Link
                                key={service.href}
                                href={service.href}
                                className={`group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 ${
                                  active
                                    ? "bg-emerald-50 text-emerald-900"
                                    : "hover:bg-slate-50 text-slate-800"
                                }`}
                              >
                                <div
                                  className={`mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                    active
                                      ? "bg-emerald-600 text-white"
                                      : "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors"
                                  }`}
                                >
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-1">
                                    <span className="text-sm font-semibold group-hover:text-emerald-700 transition-colors">
                                      {service.label}
                                    </span>
                                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-800">
                                      {service.badge}
                                    </span>
                                  </div>
                                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                                    {service.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
                      pathname === link.href
                        ? "text-emerald-600 bg-emerald-50/70"
                        : "text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Header Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-6 py-2.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Request a Quote</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Accordion Menu */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-slate-100 pt-4 pb-6 mt-3 space-y-2">
              <Link
                href="/"
                className={`block px-4 py-2.5 rounded-lg text-base font-medium ${
                  pathname === "/" ? "bg-emerald-50 text-emerald-700 font-semibold" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50"
                >
                  <span>Services</span>
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-emerald-600" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileServicesOpen && (
                  <div className="pl-6 pr-2 py-1 space-y-1 border-l-2 border-emerald-100 ml-4 mt-1">
                    {servicesDropdown.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`block py-2 px-3 rounded-md text-sm ${
                          pathname === service.href
                            ? "bg-emerald-50 text-emerald-700 font-semibold"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/how-it-works"
                className={`block px-4 py-2.5 rounded-lg text-base font-medium ${
                  pathname === "/how-it-works" ? "bg-emerald-50 text-emerald-700 font-semibold" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                How It Works
              </Link>

              <Link
                href="/about"
                className={`block px-4 py-2.5 rounded-lg text-base font-medium ${
                  pathname === "/about" ? "bg-emerald-50 text-emerald-700 font-semibold" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                About
              </Link>

              <Link
                href="/faqs"
                className={`block px-4 py-2.5 rounded-lg text-base font-medium ${
                  pathname === "/faqs" ? "bg-emerald-50 text-emerald-700 font-semibold" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                FAQs
              </Link>

              <div className="pt-4 px-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 text-center shadow-md transition-colors"
                >
                  <span>Request a Quote</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
