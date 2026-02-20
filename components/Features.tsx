import Container from "./ui/Container";
import Section from "./ui/Section";

const features = [
  {
    title: "Company-aware research",
    description: "Analyzes websites, news, funding, and public data to understand each prospect's context and recent developments.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Executive-level quality",
    description: "Generates opening lines that sound researched and personalized, designed for C-suite engagement.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Spreadsheet workflow",
    description: "Works row-by-row on CSVs and lead lists. No complex setup or learning curve required.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Precision targeting",
    description: "Built for targeted outbound to decision-makers, not mass email campaigns or bulk blasting.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    title: "Icebreakers, not emails",
    description: "Creates opening lines you can customize and integrate into your existing outbound workflow.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Agentic execution",
    description: "Autonomous research and generation. Set it and let it work while you focus on closing deals.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <Section className="relative overflow-hidden bg-white border-b border-neutral-200">
      <Container size="large">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm font-mono text-neutral-500 mb-6">
            KEY FEATURES
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 leading-tight">
              Enterprise-grade research automation
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed lg:pt-4">
              IQgent One combines deep company research with intelligent writing to deliver 
              opening lines that get replies from executives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="p-8 rounded-xl border border-neutral-200 bg-white hover:shadow-lg hover:border-emerald-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-neutral-900">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
