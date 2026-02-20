import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const solutions = [
  {
    title: "For Sales Teams",
    description: "Empower your sales team with researched opening lines that get replies from decision-makers.",
    features: [
      "Automated company research",
      "Personalized icebreakers at scale",
      "CRM integration ready",
      "Team collaboration tools",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "For Growth Teams",
    description: "Scale your outbound without sacrificing quality. Research hundreds of prospects in minutes.",
    features: [
      "Bulk lead processing",
      "Quality scoring",
      "A/B testing support",
      "Performance analytics",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "For Founders",
    description: "Focus on closing deals, not researching prospects. Get executive-level insights automatically.",
    features: [
      "No research team needed",
      "Executive-level quality",
      "Fast setup and deployment",
      "Flexible pricing",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "For Agencies",
    description: "Deliver better results for clients with researched, personalized outreach at scale.",
    features: [
      "Multi-client management",
      "White-label options",
      "Client reporting",
      "Priority support",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const useCases = [
  {
    title: "Enterprise Sales",
    description: "Target Fortune 500 companies with researched, contextual opening lines.",
    metric: "3x higher reply rates",
  },
  {
    title: "Startup Outreach",
    description: "Reach investors and partners with personalized, timely messages.",
    metric: "10x faster research",
  },
  {
    title: "Recruitment",
    description: "Engage top talent with company-aware outreach that stands out.",
    metric: "2x response rate",
  },
  {
    title: "Partnership Development",
    description: "Build relationships with strategic partners through informed outreach.",
    metric: "5x more meetings",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <Section className="bg-gradient-to-b from-emerald-50 to-white border-b border-neutral-200">
        <Container size="large">
          <div className="max-w-4xl mx-auto text-center py-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 mb-8">
              <span className="text-sm text-emerald-700 font-medium">Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-neutral-900 leading-tight">
              Built for every team
              <br />
              <span className="gradient-text">that values quality</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
              Whether you're a founder, sales leader, or growth team, IQgent One adapts 
              to your workflow and scales with your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Request Demo
              </Button>
              <Button variant="secondary" size="lg">
                View Pricing
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Solutions Grid */}
      <Section className="bg-white border-b border-neutral-200">
        <Container size="large">
          <div className="max-w-7xl mx-auto">
            <div className="text-sm font-mono text-neutral-500 mb-6">
              BY TEAM TYPE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-neutral-900">
              Tailored for your workflow
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution) => (
                <div
                  key={solution.title}
                  className="p-8 rounded-xl border border-neutral-200 bg-white hover:shadow-lg hover:border-emerald-200 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6 text-emerald-600">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-neutral-900">
                    {solution.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-neutral-700">
                        <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Use Cases */}
      <Section className="bg-neutral-50 border-b border-neutral-200">
        <Container size="large">
          <div className="max-w-7xl mx-auto">
            <div className="text-sm font-mono text-neutral-500 mb-6">
              USE CASES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-neutral-900">
              Proven across industries
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase) => (
                <div
                  key={useCase.title}
                  className="p-6 rounded-xl border border-neutral-200 bg-white"
                >
                  <div className="text-sm font-mono text-emerald-600 mb-3">
                    {useCase.metric}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                    {useCase.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-white">
        <Container size="large">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
              Ready to get started?
            </h2>
            <p className="text-xl text-neutral-600 mb-10">
              See how IQgent One can transform your outbound process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Request Demo
              </Button>
              <Button variant="secondary" size="lg">
                Talk to Sales
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
