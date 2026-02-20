import Button from "./ui/Button";
import Container from "./ui/Container";
import Section from "./ui/Section";

export default function FinalCTA() {
  return (
    <Section className="relative overflow-hidden bg-white">
      <Container size="large">
        <div className="max-w-5xl mx-auto">
          <div className="relative p-16 md:p-20 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98112_1px,transparent_1px),linear-gradient(to_bottom,#10b98112_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            <div className="relative z-10 text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-neutral-900">
                Ready to transform
                <br />
                <span className="gradient-text">your outbound?</span>
              </h2>
              
              <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto">
                Join leading teams using IQgent One to scale precision outbound.
                Request a demo to see it in action.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg">
                  Request Demo
                </Button>
                <Button variant="secondary" size="lg">
                  Talk to Sales
                </Button>
              </div>
              
              <p className="text-sm text-neutral-500 mt-8">
                No credit card required • Setup in minutes • Enterprise support available
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
