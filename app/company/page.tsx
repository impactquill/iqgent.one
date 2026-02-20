import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    bio: "Former VP of Sales at enterprise SaaS. Built outbound teams at scale.",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-founder",
    bio: "AI researcher with 10+ years in NLP and machine learning systems.",
  },
  {
    name: "Emily Watson",
    role: "Head of Product",
    bio: "Product leader from B2B sales tools. Obsessed with user experience.",
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    bio: "Infrastructure expert. Previously scaled systems at high-growth startups.",
  },
];

const values = [
  {
    title: "Quality over quantity",
    description: "We believe in precision outbound. Every feature we build prioritizes quality and effectiveness over volume.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Research-first",
    description: "Deep company research is at the core of everything we do. Context matters more than speed.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Respectful outbound",
    description: "We're building tools for thoughtful, respectful outreach. Not spam, not mass blasting.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Customer obsessed",
    description: "Our customers' success is our success. We listen, iterate, and build what actually helps.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const milestones = [
  { year: "2022", event: "ImpactQuill founded" },
  { year: "2023", event: "IQDmarc launched" },
  { year: "2025", event: "IQDelivery One released" },
  { year: "2026", event: "IQgent One launched" },
];

export default function CompanyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <Section className="bg-gradient-to-b from-emerald-50 to-white border-b border-neutral-200">
        <Container size="large">
          <div className="max-w-4xl mx-auto text-center py-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 mb-8">
              <span className="text-sm text-emerald-700 font-medium">Company</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-neutral-900 leading-tight">
              Building the future of
              <br />
              <span className="gradient-text">intelligent outbound</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              We're on a mission to make outbound sales more intelligent, respectful, 
              and effective through agentic research and AI.
            </p>
          </div>
        </Container>
      </Section>

      {/* Story */}
      <Section className="bg-white border-b border-neutral-200">
        <Container size="large">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-sm font-mono text-neutral-500 mb-6">
                  OUR STORY
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
                  Why we built IQgent One
                </h2>
                <div className="space-y-4 text-lg text-neutral-600 leading-relaxed">
                  <p>
                    After years of building and scaling outbound teams, we saw the same problem 
                    everywhere: sales teams were either sending generic, templated messages or 
                    spending hours manually researching each prospect.
                  </p>
                  <p>
                    Neither approach worked. Generic messages got ignored. Manual research didn't scale.
                  </p>
                  <p>
                    We knew AI could help, but existing tools were just better templates. 
                    They didn't actually research companies or understand context.
                  </p>
                  <p>
                    So we built IQgent One: an agentic research engine that actually does the homework 
                    before writing. It researches like a human, executes like a machine, and scales 
                    without sacrificing quality.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className="flex items-start gap-4 p-6 rounded-xl border border-neutral-200 bg-white"
                  >
                    <div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-emerald-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-mono text-emerald-600 mb-1">
                        {milestone.year}
                      </div>
                      <div className="text-lg font-semibold text-neutral-900">
                        {milestone.event}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-neutral-50 border-b border-neutral-200">
        <Container size="large">
          <div className="max-w-7xl mx-auto">
            <div className="text-sm font-mono text-neutral-500 mb-6">
              OUR VALUES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-neutral-900">
              What we believe
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-8 rounded-xl border border-neutral-200 bg-white"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6 text-emerald-600">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section className="bg-white border-b border-neutral-200">
        <Container size="large">
          <div className="max-w-7xl mx-auto">
            <div className="text-sm font-mono text-neutral-500 mb-6">
              THE TEAM
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-neutral-900">
              Meet the people building IQgent One
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="text-center"
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-sm text-emerald-600 font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Careers */}
      <Section className="bg-neutral-50 border-b border-neutral-200" id="careers">
        <Container size="large">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-mono text-neutral-500 mb-6">
              CAREERS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
              Join us
            </h2>
            <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
              We&apos;re building a world-class team to transform outbound sales. 
              If you&apos;re passionate about AI, sales, and building products that matter, 
              we&apos;d love to hear from you.
            </p>
            <Button variant="primary" size="lg">
              View Open Positions
            </Button>
          </div>
        </Container>
      </Section>

      {/* Contact */}
      <Section className="bg-white" id="contact">
        <Container size="large">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm font-mono text-neutral-500 mb-6 text-center">
              GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-neutral-900 text-center">
              Let&apos;s talk
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50 text-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-4 text-emerald-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">Email</h3>
                <p className="text-sm text-neutral-600">hello@impactquill.com</p>
              </div>

              <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50 text-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-4 text-emerald-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">Support</h3>
                <p className="text-sm text-neutral-600">support@impactquill.com</p>
              </div>

              <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50 text-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-4 text-emerald-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">Sales</h3>
                <p className="text-sm text-neutral-600">sales@impactquill.com</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
