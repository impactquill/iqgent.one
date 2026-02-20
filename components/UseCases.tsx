import Container from "./ui/Container";
import Section from "./ui/Section";

const useCases = [
  {
    title: "Founders & CEOs",
    description: "Research prospects at scale without hiring a research team. Focus on closing deals, not manual research.",
    stat: "10x",
    metric: "faster research",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Growth Leaders",
    description: "Enable your team to send fewer, better emails that actually get replies from decision-makers.",
    stat: "3x",
    metric: "higher reply rates",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Outbound Teams",
    description: "Turn lead lists into researched opening lines in minutes. Scale personalization without sacrificing quality.",
    stat: "95%",
    metric: "time saved",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function UseCases() {
  return (
    <Section className="bg-neutral-50 border-b border-neutral-200">
      <Container size="large">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm font-mono text-neutral-500 mb-6">
            WHO IT'S FOR
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-neutral-900 max-w-3xl">
            Built for teams that value quality over volume
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div 
                key={useCase.title}
                className="relative p-8 rounded-xl border border-neutral-200 bg-white hover:shadow-lg hover:border-emerald-200 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                  {useCase.icon}
                </div>
                
                {/* Stat */}
                <div className="mb-4">
                  <div className="text-3xl font-bold text-neutral-900">{useCase.stat}</div>
                  <div className="text-sm text-emerald-600 font-medium">{useCase.metric}</div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-neutral-900">{useCase.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
