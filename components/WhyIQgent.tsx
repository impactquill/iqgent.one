import Container from "./ui/Container";
import Section from "./ui/Section";

const reasons = [
  {
    title: "Research-first approach",
    description: "Every opening line is backed by deep company analysis, not templates. We analyze websites, news, funding rounds, and public signals.",
  },
  {
    title: "Agentic intelligence",
    description: "Autonomous execution on structured data. No manual prompting or babysitting required. Set it and let it work.",
  },
  {
    title: "Built for precision",
    description: "Designed for C-suite outbound, not bulk campaigns. Quality over quantity, every time.",
  },
  {
    title: "Execution layer",
    description: "Works on your data, in your workflow. Not a standalone tool that requires changing your entire process.",
  },
];

export default function WhyIQgent() {
  return (
    <Section className="relative overflow-hidden bg-white border-b border-neutral-200">
      <Container size="large">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm font-mono text-emerald-600 mb-6">
            WHY IQGENT ONE
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-neutral-900">
                The intelligent layer
                <br />
                <span className="gradient-text">between your data and prospects</span>
              </h2>
              
              <p className="text-xl text-neutral-600 leading-relaxed">
                IQgent One sits between your lead data and your outbound campaigns, 
                enriching every row with researched, contextual opening lines that get replies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {reasons.map((reason, index) => (
                <div 
                  key={reason.title}
                  className="relative p-6 rounded-xl border border-neutral-200 bg-white hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-emerald-600">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-neutral-900">{reason.title}</h3>
                      <p className="text-neutral-600 leading-relaxed">{reason.description}</p>
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
