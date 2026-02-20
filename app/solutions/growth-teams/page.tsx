import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const features = [
  {
    title: "Bulk Lead Processing",
    description: "Process thousands of leads simultaneously. IQgent One scales with your growth without compromising quality.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Quality Scoring",
    description: "Every generated opening line comes with a quality score. Focus your team's efforts on the highest-potential prospects.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "A/B Testing Support",
    description: "Test different messaging approaches and see what resonates. Data-driven optimization for your outbound campaigns.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Performance Analytics",
    description: "Track reply rates, conversion metrics, and ROI. Understand what's working and optimize continuously.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const benefits = [
  { metric: "5,000+", label: "Leads processed per month" },
  { metric: "85%", label: "Improvement in reply rates" },
  { metric: "10x", label: "Faster campaign execution" },
  { metric: "ROI+", label: "Positive ROI in first month" },
];

export default function GrowthTeamsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <Section className="bg-gradient-to-b from-emerald-50 to-white border-b border-neutral-200">
        <Container size="large">
          <div className="max-w-5xl mx-auto text-center py-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 mb-8">
              <span className="text-sm text-emerald-700 font-medium">For Growth Teams</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-neutral-900 leading-tight">
              Scale outbound without
              <br />
              <span className="gradient-text">sacrificing quality</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Growth teams need speed and scale. IQgent One delivers both while maintaining 
              the personalization that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Request Demo
              </Button>
              <Button variant="secondary" size="lg">
                See Pricing
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="bg-white border-b border-neutral-200">
        <Container size="large">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.label} className="text-center">
                  <div className="text-5xl font-bold text-emerald-600 mb-3">{benefit.metric}</div>
                  <div className="text-neutral-600">{benefit.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section className="bg-neutral-50 border-b border-neutral-200">
        <Container size="large">
          <div className="max-w-7xl mx-auto">
            <div className="text-sm font-mono text-neutral-500 mb-6">
              BUILT FOR SCALE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-neutral-900">
              Grow faster with intelligent automation
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-8 rounded-xl border border-neutral-200 bg-white hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6 text-emerald-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-neutral-900">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-emerald-50 to-white">
        <Container size="large">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
              Ready to accelerate growth?
            </h2>
            <p className="text-xl text-neutral-600 mb-10">
              Join growth teams using IQgent One to scale outbound efficiently.
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
