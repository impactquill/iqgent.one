import Container from "./ui/Container";
import Section from "./ui/Section";

export default function Trust() {
  return (
    <Section className="bg-neutral-50 border-b border-neutral-200">
      <Container size="large">
        <div className="max-w-5xl mx-auto">
          <div className="p-12 md:p-16 rounded-2xl border border-neutral-200 bg-white text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-neutral-50 mb-8">
              <span className="text-sm text-neutral-600 font-medium">Built by</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
              ImpactQuill
            </h2>
            
            <p className="text-xl text-neutral-700 mb-6 leading-relaxed max-w-2xl mx-auto">
              We build intelligent systems for modern outbound teams.
              IQgent One is our first agentic research engine.
            </p>
            
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8">
              We believe outbound should be precise, researched, and respectful. 
              IQgent One is built on that principle.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-neutral-200">
              <div>
                <div className="text-2xl font-bold text-neutral-900">Enterprise</div>
                <div className="text-sm text-neutral-600">Grade security</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-neutral-900">SOC 2</div>
                <div className="text-sm text-neutral-600">Compliant</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-neutral-900">99.9%</div>
                <div className="text-sm text-neutral-600">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
