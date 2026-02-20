"use client";

import Container from "./ui/Container";
import Section from "./ui/Section";
import AnimatedCounter from "./ui/AnimatedCounter";
import StatsChart from "./ui/StatsChart";

const chartData = [
  { label: "Reply Rate Improvement", value: 85, color: "bg-emerald-500" },
  { label: "Time Saved on Research", value: 95, color: "bg-emerald-600" },
  { label: "Lead Quality Score", value: 92, color: "bg-emerald-400" },
  { label: "Team Productivity Gain", value: 78, color: "bg-emerald-500" },
];

export default function StatsSection() {
  return (
    <Section className="bg-white border-b border-neutral-200">
      <Container size="large">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm font-mono text-neutral-500 mb-6">
            THE IMPACT
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-neutral-900">
                Results that speak
                <br />
                <span className="gradient-text">for themselves</span>
              </h2>

              <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
                Teams using IQgent One see dramatic improvements in reply rates, 
                time savings, and overall outbound effectiveness.
              </p>

              {/* Key metrics */}
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50">
                  <div className="text-4xl font-bold text-neutral-900 mb-2">
                    <AnimatedCounter end={10} suffix="x" />
                  </div>
                  <div className="text-sm text-neutral-600">Faster than manual research</div>
                </div>

                <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50">
                  <div className="text-4xl font-bold text-neutral-900 mb-2">
                    <AnimatedCounter end={95} suffix="%" />
                  </div>
                  <div className="text-sm text-neutral-600">Time saved per lead</div>
                </div>

                <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50">
                  <div className="text-4xl font-bold text-neutral-900 mb-2">
                    <AnimatedCounter end={3} suffix="x" />
                  </div>
                  <div className="text-sm text-neutral-600">Higher reply rates</div>
                </div>

                <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50">
                  <div className="text-4xl font-bold text-neutral-900 mb-2">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <div className="text-sm text-neutral-600">Leads processed daily</div>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="p-8 rounded-xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50">
              <h3 className="text-lg font-semibold text-neutral-900 mb-6">
                Performance Metrics
              </h3>
              <StatsChart data={chartData} />

              <div className="mt-8 pt-6 border-t border-neutral-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-600">Average across all customers</span>
                  <span className="text-emerald-600 font-semibold">Q4 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
