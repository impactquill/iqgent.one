import Container from "./ui/Container";
import Section from "./ui/Section";

export default function Problem() {
  const problems = [
    {
      title: "Templated messages",
      description: "Generic emails that executives ignore instantly",
      impact: "0% reply rate"
    },
    {
      title: "No context",
      description: "Missing company signals and recent changes",
      impact: "Lost opportunities"
    },
    {
      title: "Manual research",
      description: "Hours wasted per prospect with inconsistent results",
      impact: "Doesn't scale"
    },
    {
      title: "Automated feel",
      description: "Opening lines that scream 'mass email'",
      impact: "Brand damage"
    }
  ];

  return (
    <Section className="relative bg-neutral-50 border-b border-neutral-200">
      <Container size="large">
        <div className="max-w-7xl mx-auto">
          {/* Section label */}
          <div className="text-sm font-mono text-neutral-500 mb-6">
            THE PROBLEM
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-neutral-900">
                Generic outbound
                <br />
                <span className="text-neutral-400">doesn't work</span>
              </h2>
              
              <p className="text-xl text-neutral-600 leading-relaxed">
                Most outbound tools generate templated messages that lack context and feel automated. 
                Sales teams waste hours on manual research, only to write opening lines that still miss the mark.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl border border-neutral-200 bg-white hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">{problem.title}</h3>
                      <p className="text-sm text-neutral-600 mb-2">{problem.description}</p>
                      <span className="text-xs font-mono text-red-600">{problem.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
