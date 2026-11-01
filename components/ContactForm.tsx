"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

type ServiceOption =
  | "PPN_006"
  | "SECR"
  | "CARBON_FOOTPRINT"
  | "CONSULTANCY"
  | "ONGOING_MANAGEMENT"
  | "OTHER";

interface FormData {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  industry: string;
  service: ServiceOption;
  previousReporting: "yes" | "no" | "";
  tenderDeadline: string;
  requirements: string;
}

interface FormErrors {
  businessName?: string;
  contactName?: string;
  email?: string;
  service?: string;
}

const serviceItems: { id: ServiceOption; label: string; badge: string; desc: string }[] = [
  {
    id: "PPN_006",
    label: "PPN 006 Carbon Reduction Plan",
    badge: "Government Tenders",
    desc: "For £5m+ public sector, NHS, and defence procurement",
  },
  {
    id: "SECR",
    label: "SECR Reporting Support",
    badge: "Compliance",
    desc: "Mandatory annual reporting for large UK companies & LLPs",
  },
  {
    id: "CARBON_FOOTPRINT",
    label: "Business Carbon Footprint",
    badge: "Scopes 1, 2 & 3",
    desc: "Full baseline emissions measurement & GHG accounting",
  },
  {
    id: "CONSULTANCY",
    label: "Carbon Reduction Consultancy",
    badge: "Net Zero Roadmaps",
    desc: "Actionable decarbonisation and Science-Based Targets (SBTi)",
  },
  {
    id: "ONGOING_MANAGEMENT",
    label: "Ongoing Carbon Management",
    badge: "Retained Partner",
    desc: "Continuous data tracking, annual filings, and regulatory updates",
  },
  {
    id: "OTHER",
    label: "Other / Bespoke ESG Advisory",
    badge: "Advisory",
    desc: "M&A climate due diligence or custom requirements",
  },
];

const initialFormData: FormData = {
  businessName: "",
  contactName: "",
  email: "",
  phone: "",
  industry: "",
  service: "PPN_006",
  previousReporting: "no",
  tenderDeadline: "",
  requirements: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleServiceSelect = (serviceId: ServiceOption) => {
    setFormData((prev) => ({ ...prev, service: serviceId }));
    if (errors.service) {
      setErrors((prev) => ({ ...prev, service: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.businessName.trim()) newErrors.businessName = "Business name is required.";
    if (!formData.contactName.trim()) newErrors.contactName = "Contact name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid business email address.";
    }
    if (!formData.service) newErrors.service = "Please choose a service.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setSubmitStatus("idle");
    setFeedbackMessage("");

    const payload = {
      business_name: formData.businessName,
      contact_name: formData.contactName,
      email: formData.email,
      phone: formData.phone || null,
      industry: formData.industry || null,
      service_interested: formData.service,
      previous_reporting: formData.previousReporting === "yes",
      tender_deadline: formData.tenderDeadline || null,
      specific_requirements: formData.requirements || null,
    };

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => null);

      if (res.status === 201 || (json && json.success)) {
        setSubmitStatus("success");
        setFeedbackMessage(
          json?.message || "Thank you. A senior carbon consultant will contact you within one business day."
        );
        setFormData(initialFormData);
        setErrors({});
      } else {
        setSubmitStatus("error");
        setFeedbackMessage(
          json?.error || "We could not submit your request. Please try again or email us directly."
        );
      }
    } catch {
      setSubmitStatus("error");
      setFeedbackMessage("Network error. Please check your connection or contact us by phone.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Side: Contact & Credibility Sidebar */}
        <aside className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-6 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Direct Consultant Access
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
              Get an Audit-Ready Proposal Within 24 Hours
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-8">
              Speak directly with an accredited UK carbon consultant. No automated sales queues, no pushy software demos — just a transparent fixed proposal.
            </p>

            <div className="space-y-5 text-sm border-t border-slate-800 pt-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-900/60 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase font-semibold text-slate-400">Direct Telephone</p>
                  <a href="tel:+442071234567" className="text-white font-bold hover:text-emerald-400 transition-colors">
                    +44 (0)20 7123 4567
                  </a>
                  <p className="text-xs text-slate-400">Mon–Fri, 9:00 am – 5:30 pm GMT</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-900/60 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0017.25 4.5h-10.5A2.25 2.25 0 004.5 6.75m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase font-semibold text-slate-400">Email Enquiries</p>
                  <a href="mailto:info@carbonpinnacle.co.uk" className="text-white font-bold hover:text-emerald-400 transition-colors">
                    info@carbonpinnacle.co.uk
                  </a>
                  <p className="text-xs text-slate-400">Confidential NDA protected</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-900/60 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase font-semibold text-slate-400">Consultancy Office</p>
                  <p className="text-white font-medium">12 St James&apos;s Square, Mayfair, London, SW1Y 4RB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reassurance Guarantees Card */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-3xl p-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
              Our Commitments to You
            </h4>
            <ul className="text-xs text-emerald-800 space-y-2">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>100% Compliance Guarantee:</strong> Audit-ready according to UK regulations.</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Fixed Price Quote:</strong> Absolutely zero hidden fees or SaaS lock-ins.</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Tender Fast-Track:</strong> Rapid 5-day delivery for imminent tender deadlines.</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* Right Side: Interactive Quote Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm">
            {submitStatus === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Quote Request Received</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed mb-8">
                  {feedbackMessage}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitStatus("idle")}
                  className="rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3 transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Request Your Carbon Reporting Proposal
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your project details below and we&apos;ll prepare a tailored quotation.
                  </p>
                </div>

                {/* Service Selection Tiles */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                    1. Select Service Required <span className="text-emerald-600">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {serviceItems.map((item) => {
                      const selected = formData.service === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleServiceSelect(item.id)}
                          className={`text-left p-3.5 rounded-xl border transition-all text-xs flex flex-col justify-between ${
                            selected
                              ? "border-emerald-600 bg-emerald-50/80 text-emerald-950 ring-1 ring-emerald-600 shadow-xs"
                              : "border-slate-200 hover:border-slate-300 bg-white text-slate-700"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1 w-full">
                            <span className="font-bold text-slate-900">{item.label}</span>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                              selected ? "bg-emerald-200 text-emerald-900" : "bg-slate-100 text-slate-600"
                            }`}>
                              {item.badge}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-500 mt-1 line-clamp-1">{item.desc}</span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.service && <p className="text-xs text-red-600 mt-1">{errors.service}</p>}
                </div>

                {/* Company & Contact Details */}
                <div className="pt-2 border-t border-slate-100 space-y-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    2. Company &amp; Contact Details
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="businessName" className="block text-xs font-medium text-slate-700 mb-1">
                        Business / Organisation Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="businessName"
                        name="businessName"
                        type="text"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Infrastructure Ltd"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition ${
                          errors.businessName ? "border-red-400 bg-red-50/20" : "border-slate-200"
                        }`}
                      />
                      {errors.businessName && <p className="text-xs text-red-600 mt-1">{errors.businessName}</p>}
                    </div>

                    <div>
                      <label htmlFor="contactName" className="block text-xs font-medium text-slate-700 mb-1">
                        Contact Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contactName"
                        name="contactName"
                        type="text"
                        value={formData.contactName}
                        onChange={handleChange}
                        placeholder="e.g. Rachel Foster"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition ${
                          errors.contactName ? "border-red-400 bg-red-50/20" : "border-slate-200"
                        }`}
                      />
                      {errors.contactName && <p className="text-xs text-red-600 mt-1">{errors.contactName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1">
                        Work Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rachel@apexinfratrade.co.uk"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition ${
                          errors.email ? "border-red-400 bg-red-50/20" : "border-slate-200"
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-slate-700 mb-1">
                        Telephone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 (0) 7..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="industry" className="block text-xs font-medium text-slate-700 mb-1">
                        Industry / Sector
                      </label>
                      <input
                        id="industry"
                        name="industry"
                        type="text"
                        value={formData.industry}
                        onChange={handleChange}
                        placeholder="e.g. Construction, Healthcare, Tech"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Has your business reported emissions before?
                      </label>
                      <div className="flex gap-4 pt-1.5">
                        <label className="flex items-center gap-1.5 text-xs text-slate-700 cursor-pointer">
                          <input
                            type="radio"
                            name="previousReporting"
                            value="yes"
                            checked={formData.previousReporting === "yes"}
                            onChange={handleChange}
                            className="text-emerald-600 focus:ring-emerald-500"
                          />
                          <span>Yes</span>
                        </label>
                        <label className="flex items-center gap-1.5 text-xs text-slate-700 cursor-pointer">
                          <input
                            type="radio"
                            name="previousReporting"
                            value="no"
                            checked={formData.previousReporting === "no"}
                            onChange={handleChange}
                            className="text-emerald-600 focus:ring-emerald-500"
                          />
                          <span>No (First time)</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conditional Tender Deadline for PPN 006 */}
                {formData.service === "PPN_006" && (
                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
                    <label htmlFor="tenderDeadline" className="block text-xs font-bold text-amber-900">
                      Tender Submission Deadline (If Applicable)
                    </label>
                    <input
                      id="tenderDeadline"
                      name="tenderDeadline"
                      type="date"
                      value={formData.tenderDeadline}
                      onChange={handleChange}
                      className="w-full sm:w-64 px-3.5 py-2 rounded-lg border border-amber-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <p className="text-[11px] text-amber-800">
                      Let us know if you need our 5-day express procurement turnaround.
                    </p>
                  </div>
                )}

                {/* Specific Requirements / Notes */}
                <div>
                  <label htmlFor="requirements" className="block text-xs font-medium text-slate-700 mb-1">
                    Specific Requirements or Questions
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={3}
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="Provide any details about your contract value, employee count, or reporting deadlines..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                </div>

                {/* Error Banner */}
                {submitStatus === "error" && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs">
                    {feedbackMessage}
                  </div>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold text-base py-4 shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Quote Request</span>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  🔒 We respect your confidentiality. We will never share your commercial details with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
