"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

type Category = {
  title: string;
  faqs: FAQ[];
};

const categories: Category[] = [
  {
    title: "PPN 006 & Carbon Reduction Plans",
    faqs: [
      {
        question: "What is PPN 006?",
        answer:
          "Procurement Policy Note 006 (PPN 006) is a UK government policy that requires suppliers bidding for central government contracts above £5 million per annum to commit to achieving Net Zero by 2050 and to publish a Carbon Reduction Plan (CRP). Introduced in September 2021, it applies to contracts with central government departments, their executive agencies, and arm's-length bodies.",
      },
      {
        question: "Which contracts require a Carbon Reduction Plan?",
        answer:
          "Carbon Reduction Plans are required for contracts with central government departments, the NHS, the Ministry of Defence (MOD), and arm's-length bodies where the contract value exceeds £5 million per annum. Some local authorities and other public bodies are also beginning to adopt similar requirements. If you're tendering for a public sector contract, we recommend checking the tender documentation carefully.",
      },
      {
        question: "What emissions must be included in a Carbon Reduction Plan?",
        answer:
          "From September 2021, CRPs required disclosure of Scope 1 (direct) and Scope 2 (purchased energy) emissions. From April 2023, Scope 3 emissions — those from your supply chain and business travel — must also be included. The CRP must cover your UK operations and must be signed by a senior responsible owner (typically a board-level signatory).",
      },
      {
        question: "How long is a Carbon Reduction Plan valid?",
        answer:
          "There is no fixed statutory expiry date for a Carbon Reduction Plan, but an annual refresh is strongly recommended — both to reflect changes in your business activities and to demonstrate to contracting authorities that you are making measurable progress towards your Net Zero commitment. We include annual review support in all our CRP packages.",
      },
      {
        question: "Can we prepare a Carbon Reduction Plan ourselves?",
        answer:
          "Technically, yes — but the risks of errors are significant. Incorrectly calculated emissions, non-compliant methodology, or a CRP that doesn't meet the PPN 006 requirements can result in disqualification from a tender. Our specialists ensure your CRP is accurate, compliant, and presented in the format that contracting authorities expect.",
      },
    ],
  },
  {
    title: "SECR (Streamlined Energy & Carbon Reporting)",
    faqs: [
      {
        question: "Who needs to report under SECR?",
        answer:
          "SECR applies to large UK-incorporated companies that meet at least two of the following criteria: 250 or more employees; annual turnover of £36 million or more; or a balance sheet total of £18 million or more. Quoted companies (listed on a recognised stock exchange) have additional obligations. LLPs may also be subject to SECR requirements.",
      },
      {
        question: "What must SECR disclosures include?",
        answer:
          "SECR disclosures must include: total energy consumption (kWh) for UK operations; associated greenhouse gas emissions (Scope 1 and 2); an energy intensity ratio; a year-on-year comparison with the previous year's figures; and a description of energy efficiency measures taken during the year. Quoted companies must also include global emissions and Scope 3 business travel.",
      },
      {
        question: "When is SECR reporting due?",
        answer:
          "SECR disclosures are made within your company's Directors' Report, which is filed with Companies House as part of your annual accounts. The deadline is therefore tied to your financial year-end — typically within nine months for private companies or six months for public companies. We recommend beginning data collection at least 8 weeks before your filing deadline.",
      },
      {
        question: "What are the penalties for SECR non-compliance?",
        answer:
          "Failure to include required SECR disclosures in your Directors' Report can constitute a criminal offence under the Companies Act 2006, with potential fines for the company and its directors. Beyond legal risk, non-disclosure is increasingly noticed by investors, insurers, and supply chain partners who conduct ESG due diligence. We help you avoid these risks entirely.",
      },
    ],
  },
  {
    title: "Carbon Footprints",
    faqs: [
      {
        question: "What are Scope 1, 2, and 3 emissions?",
        answer:
          "The GHG Protocol categorises emissions into three scopes. Scope 1 covers direct emissions from sources your organisation owns or controls — such as company vehicles and on-site boilers. Scope 2 covers indirect emissions from purchased electricity, heat, or steam. Scope 3 covers all other indirect emissions across your value chain — including business travel, supply chain purchases, employee commuting, and product disposal. Together, these three scopes provide a complete picture of your carbon impact.",
      },
      {
        question: "How accurate are carbon footprint calculations?",
        answer:
          "Accuracy depends on data quality. Where actual consumption data is available (meter readings, fuel purchase records, flight itineraries), calculations are highly accurate. Where data is incomplete, we apply published government emissions factors and industry-standard estimates, clearly documenting any assumptions. All our calculations are aligned to the GHG Protocol Corporate Standard — the most widely recognised framework globally.",
      },
      {
        question: "What data do I need to provide?",
        answer:
          "We typically need utility bills (gas and electricity), fuel receipts for company vehicles, business travel records (flights, rail, mileage), and — for Scope 3 analysis — supply chain spend data or supplier emissions information. We'll send you a bespoke data request based on your business type and the scope of your footprint. Don't worry if you don't have everything — we can work with what you have.",
      },
      {
        question: "How long does a carbon footprint take to complete?",
        answer:
          "Most business carbon footprints are completed within 2–4 weeks from the point we receive your complete data set. If you have a deadline — for a tender, an investor request, or a reporting period — let us know upfront and we'll confirm whether we can meet it. In many cases, we can offer expedited delivery for time-sensitive requirements.",
      },
    ],
  },
  {
    title: "Working With Carbon Pinnacle",
    faqs: [
      {
        question: "How much does it cost?",
        answer:
          "We offer fixed-price proposals tailored to your specific requirements — no hourly billing, no scope creep. Pricing depends on the type of engagement (CRP, SECR, full carbon footprint), the size and complexity of your organisation, and the data available. Contact us for a no-obligation quote, typically issued within 24 hours of a brief initial call.",
      },
      {
        question: "How quickly can you deliver?",
        answer:
          "We aim to deliver draft reports within 2–4 weeks of receiving your data. If you have a tender deadline or regulatory filing date, tell us upfront — we'll build that into your project timeline and confirm delivery in our proposal. In urgent cases, expedited delivery may be available.",
      },
      {
        question: "Do you work with SMEs as well as large businesses?",
        answer:
          "Absolutely. Carbon Pinnacle was specifically built to make carbon reporting accessible to SMEs and growing businesses — not just large corporations with in-house sustainability teams. Whether you have 20 employees or 2,000, we'll tailor our approach and our pricing to suit your needs.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Yes. All client data is collected and stored securely via our encrypted client portal. We comply with UK GDPR requirements, we never share your data with third parties, and all our team members operate under strict confidentiality obligations. We take data security as seriously as we take carbon accuracy.",
      },
    ],
  },
];

function FAQAccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 text-base leading-snug">{faq.question}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-emerald-300 text-emerald-600 flex items-center justify-center text-sm font-bold transition-transform duration-200 ${
            isOpen ? "rotate-180 bg-emerald-50" : ""
          }`}
          aria-hidden="true"
        >
          ↓
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 pt-1 bg-white border-t border-gray-100">
          <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQAccordion() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const makeKey = (cat: string, q: string) => `${cat}::${q}`;

  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category.title}>
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100 flex items-center gap-3">
            <span className="w-2 h-6 rounded-full bg-emerald-500 inline-block" />
            {category.title}
          </h2>
          <div className="space-y-3">
            {category.faqs.map((faq) => {
              const key = makeKey(category.title, faq.question);
              return (
                <FAQAccordionItem
                  key={key}
                  faq={faq}
                  isOpen={openItem === key}
                  onToggle={() => setOpenItem(openItem === key ? null : key)}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
