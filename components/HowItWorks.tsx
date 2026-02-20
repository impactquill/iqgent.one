import Container from "./ui/Container";
import Section from "./ui/Section";

const steps = [
  {
    number: "01",
    title: "Upload your lead list",
    description: "Import CSV or structured data with company names, domains, or contact information.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Autonomous research",
    description: "IQgent analyzes company websites, news, funding rounds, and public signals to understand context.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Generate opening lines",
    description: "Creates company-aware icebreakers that feel researched and personalized, not templated.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Export and execute",
    description: "Download enriched data and integrate opening lines into your outbound workflow seamlessly.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <Section className="bg-neutral-50 border-b border-neutral-200">
      <Container size="large">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm font-mono text-neutral-500 mb-6">
            HOW IT WORKS
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-neutral-900 max-w-3xl">
            Four steps to precision outbound
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div 
                key={step.number}
                className="relative group"
              >
                <div className="p-8 rounded-xl border border-neutral-200 bg-white hover:shadow-lg transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                    {step.icon}
                  </div>
                  
                  {/* Number */}
                  <div className="text-sm font-mono text-neutral-400 mb-3">{step.number}</div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-neutral-900">{step.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
