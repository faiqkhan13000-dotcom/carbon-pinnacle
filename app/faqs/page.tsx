import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "./FAQAccordion";

export const metadata: Metadata = {
  title: "FAQs | Carbon Pinnacle",
  description:
    "Answers to your questions about PPN 006 Carbon Reduction Plans, SECR reporting, business carbon footprints, and working with Carbon Pinnacle.",
  openGraph: {
    title: "Frequently Asked Questions | Carbon Pinnacle",
    description:
      "Answers to your questions about PPN 006 Carbon Reduction Plans, SECR reporting, and business carbon footprints.",
  },
};

export default function FAQsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-emerald-50 border-b border-emerald-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-4">
            FAQs
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about PPN 006 compliance, SECR reporting, carbon
            footprints, and working with our team. Can't find your answer?{" "}
            <Link href="/contact" className="text-emerald-600 font-medium hover:underline">
              Just ask us directly.
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-emerald-600 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-xl mx-auto">
            Our team is happy to answer any questions that aren't covered here. Get in touch — we
            respond to all enquiries within one business day.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-emerald-700 font-semibold px-10 py-4 rounded-full hover:bg-emerald-50 transition-colors text-base shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
