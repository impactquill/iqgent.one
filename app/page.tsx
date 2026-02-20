import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import SpreadsheetDemo from "@/components/SpreadsheetDemo";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import StatsSection from "@/components/StatsSection";
import UseCases from "@/components/UseCases";
import WhyIQgent from "@/components/WhyIQgent";
import Trust from "@/components/Trust";
import FinalCTA from "@/components/FinalCTA";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      
      {/* Spreadsheet Demo Section */}
      <Section className="bg-neutral-50 border-b border-neutral-200">
        <Container size="large">
          <div className="max-w-7xl mx-auto">
            <div className="text-sm font-mono text-neutral-500 mb-6">
              SEE IT IN ACTION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-900">
              Watch IQgent One work in real-time
            </h2>
            <p className="text-xl text-neutral-600 mb-12 max-w-3xl">
              Upload your lead list and watch as IQgent One researches each company 
              and generates personalized opening lines automatically.
            </p>
            <SpreadsheetDemo />
          </div>
        </Container>
      </Section>
      
      <HowItWorks />
      <Features />
      <StatsSection />
      <UseCases />
      <WhyIQgent />
      <Trust />
      <FinalCTA />
    </main>
  );
}

