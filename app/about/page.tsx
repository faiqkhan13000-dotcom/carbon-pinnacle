import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Carbon Pinnacle",
  description:
    "Carbon Pinnacle — built by environmental specialists committed to making carbon reporting clear, accurate, and accessible for UK businesses.",
  openGraph: {
    title: "About Carbon Pinnacle",
    description:
      "Built by specialists. Guided by purpose. Learn about our team, values, and credentials.",
  },
};

const values = [
  {
    title: "Transparency",
    description:
      "Fixed pricing, plain-English reports, and no hidden scope creep. You'll always know exactly what you're getting and what it costs.",
    icon: "🔍",
  },
  {
    title: "Accuracy",
    description:
      "We apply GHG Protocol-aligned methodologies and up-to-date government emissions factors — because defensible data protects your reputation.",
    icon: "🎯",
  },
  {
    title: "Accessibility",
    description:
      "Carbon reporting shouldn't be the preserve of large corporations with in-house sustainability teams. We make it practical for growing businesses.",
    icon: "🤝",
  },
  {
    title: "Impact",
    description:
      "Compliance is the floor, not the ceiling. We help clients use their data to drive genuine emissions reductions over time.",
    icon: "🌱",
  },
];

const team = [
  {
    initials: "SM",
    name: "Sarah Mitchell",
    title: "Lead Carbon Consultant",
    bio: "Sarah brings over 10 years of experience in environmental consulting, having worked with businesses across manufacturing, professional services, and the public sector. She holds a BSc in Environmental Science and is a Certified Energy Manager (CEM). Sarah leads all carbon footprint and Carbon Reduction Plan engagements at Carbon Pinnacle.",
    credentials: ["BSc Environmental Science", "Certified Energy Manager (CEM)", "IEMA Member"],
  },
  {
    initials: "JT",
    name: "James Thornton",
    title: "SECR & Compliance Specialist",
    bio: "James joined Carbon Pinnacle after several years at a Big 4 professional services firm, where he led sustainability assurance and SECR reporting for listed companies. He specialises in Streamlined Energy and Carbon Reporting (SECR) and government procurement compliance under PPN 006, ensuring clients meet their obligations with confidence.",
    credentials: ["PPN 006 Specialist", "SECR Reporting Expert", "Former Big 4 Sustainability Lead"],
  },
];

const credentials = [
  { label: "GHG Protocol", detail: "Trained in GHG Protocol Corporate Standard" },
  { label: "ISO 14064", detail: "ISO 14064-aligned reporting methodology" },
  { label: "IEMA Members", detail: "Institute of Environmental Management & Assessment" },
  { label: "PAS 2060", detail: "Carbon neutrality claims aligned to PAS 2060" },
];

const whyUs = [
  { point: "UK-based team", detail: "We understand UK legislation, UK supply chains, and UK government procurement." },
  { point: "Fixed pricing", detail: "No hourly billing surprises — you'll know the cost before we start." },
  { point: "Fast delivery", detail: "Most reports delivered within 2–4 weeks of receiving your data." },
  { point: "Plain-English reports", detail: "Accessible to your board, your auditors, and your procurement contacts alike." },
  { point: "Dedicated account managers", detail: "A named point of contact who knows your business — not a rotating helpdesk." },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-emerald-50 border-b border-emerald-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-4">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
            About Carbon Pinnacle
          </h1>
          <p className="text-xl text-emerald-700 font-medium">
            Built by specialists. Guided by purpose.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Story
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We Built Carbon Pinnacle</h2>
          <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
            <p>
              Carbon Pinnacle was founded by environmental consultants frustrated with the
              complexity and cost of carbon reporting for SMEs and growing businesses. Time and
              again, we saw companies facing mandatory reporting obligations — SECR, PPN 006,
              investor due diligence — with no clear, affordable path to compliance.
            </p>
            <p>
              The options were too often the same: expensive generalist consultants who treated
              carbon as an afterthought, or dense software platforms that demanded sustainability
              expertise the client simply didn't have. Neither served the businesses that needed
              help most.
            </p>
            <p>
              We built a practice focused on clarity, compliance, and real-world impact. Our
              methodology is rigorous. Our pricing is transparent. And our reports are designed to
              be read and understood — not filed and forgotten.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-20 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
              What We Stand For
            </span>
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
              The People Behind Your Report
            </span>
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-emerald-600 font-medium text-sm">{member.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{member.bio}</p>
                <ul className="space-y-1">
                  {member.credentials.map((cred) => (
                    <li key={cred} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-emerald-50 border-t border-emerald-100 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
              Credentials
            </span>
            <h2 className="text-3xl font-bold text-gray-900">Accreditations & Methodology</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {credentials.map((cred) => (
              <div
                key={cred.label}
                className="bg-white border border-emerald-100 rounded-xl p-5 flex items-start gap-4"
              >
                <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  ✓
                </span>
                <div>
                  <p className="font-semibold text-gray-900">{cred.label}</p>
                  <p className="text-gray-500 text-sm">{cred.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-emerald-600 text-sm font-semibold tracking-widest uppercase mb-4 block">
            The Carbon Pinnacle Difference
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Why Work With Us</h2>
          <ul className="space-y-5">
            {whyUs.map((item) => (
              <li key={item.point} className="flex items-start gap-4">
                <span className="mt-1 w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                  ✓
                </span>
                <div>
                  <span className="font-semibold text-gray-900">{item.point} — </span>
                  <span className="text-gray-600">{item.detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Work With a Team That Gets It?
          </h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-xl mx-auto">
            Talk to our team — no obligation, no jargon. Just a clear conversation about your
            carbon reporting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-emerald-700 font-semibold px-10 py-4 rounded-full hover:bg-emerald-50 transition-colors text-base shadow-lg"
            >
              Get in Touch
            </Link>
            <Link
              href="/how-it-works"
              className="inline-block border-2 border-white text-white font-semibold px-10 py-4 rounded-full hover:bg-emerald-700 transition-colors text-base"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
