import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function FoundersPage() {
  return (
    <main className="min-h-screen">
      <Section className="bg-gradient-to-b from-emerald-50 to-white border-b border-neutral-200">
        <Container size="large">
          <div className="max-w-5xl mx-auto text-center py-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 mb-8">
              <span className="text-sm text-emerald-700 font-medium">For Founders</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-neutral-900 leading-tight">
              Focus on closing deals,
              <br />
              <span className="gradient-text">not researching prospects</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              As a founder, your time is precious. Let IQgent One handle prospect research 
              so you can focus on what matters: building relationships and closing deals.
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

      <Section className="bg-white">
        <Container size="large">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
              No research team needed
            </h2>
            <p className="text-xl text-neutral-600 mb-10">
              Get executive-level research quality without hiring a team.
            </p>
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
