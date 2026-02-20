import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const features = [
  {
    title: "Automated Company Research",
    description: "IQgent One analyzes company websites, news, funding rounds, and public signals automatically. Your team gets deep insights without manual research.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Personalized at Scale",
    description: "Generate company-aware opening lines for hundreds of prospects in minutes. Each message feels researched and personalized.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "CRM Integration",
    description: "Works seamlessly with Salesforce, HubSpot, and Pipedrive. Enrich your existing workflows without changing your process.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    title: "Team Collaboration",
    description: "Share research, templates, and best practices across your sales team. Everyone benefits from collective intelligence.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const benefits = [
  { metric: "3x", label: "Higher reply rates from decision-makers" },
  { metric: "10x", label: "Faster than manual research" },
  { metric: "95%", label: "Time saved on prospect research" },
  { metric: "500+", label: "Leads processed per day" },
];

export default function SalesTeamsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <Section className="bg-gradient-to-b from-emerald-50 to-white border-b border-neutral-200">
        <Container size="large">
          <div className="max-w-5xl mx-auto text-center py-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 mb-8">
              <span className="text-sm text-emerald-700 font-medium">For Sales Teams</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-neutral-900 leading-tight">
              Empower your sales team with
              <br />
              <span className="gradient-text">AI-powered research</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Stop wasting hours on manual research. Give your sales team the tools to send 
              personalized, researched messages at scale.
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
              KEY FEATURES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-neutral-900">
              Everything your sales team needs
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

      {/* Use Case */}
      <Section className="bg-white border-b border-neutral-200">
        <Container size="large">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-sm font-mono text-emerald-600 mb-6">
                  HOW IT WORKS
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
                  From lead list to personalized outreach
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">Upload your lead list</h3>
                      <p className="text-neutral-600">Import from your CRM or upload a CSV with company names and domains.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">IQgent researches each company</h3>
                      <p className="text-neutral-600">Analyzes websites, news, funding, and signals to understand context.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">Get personalized opening lines</h3>
                      <p className="text-neutral-600">Receive company-aware icebreakers ready for your outreach campaigns.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600 font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">Send and track</h3>
                      <p className="text-neutral-600">Use in your email tool or CRM and watch reply rates improve.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-white border border-neutral-200">
                    <div className="text-xs font-mono text-neutral-500 mb-2">Input</div>
                    <div className="text-sm text-neutral-900">Acme Corp - acme.com</div>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                    <div className="text-xs font-mono text-emerald-700 mb-2">Generated Opening Line</div>
                    <p className="text-sm text-neutral-900 italic">
                      "Noticed your recent Series B announcement and expansion into healthcare. 
                      Your focus on enterprise automation aligns perfectly with what we're solving..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-emerald-50 to-white">
        <Container size="large">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
              Ready to transform your sales process?
            </h2>
            <p className="text-xl text-neutral-600 mb-10">
              Join sales teams using IQgent One to close more deals with less effort.
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
