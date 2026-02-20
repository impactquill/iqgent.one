"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const plansData = {
  INR: [
    {
      name: "Starter",
      price: "1,999",
      currency: "₹",
      description: "Perfect for solo founders and small agencies getting started.",
      limit: "1,000 records",
      features: [
        "1,000 records per month",
        "Company research",
        "Opening line generation",
        "CSV export",
        "Email support",
        "Basic analytics",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Growth",
      price: "3,999",
      currency: "₹",
      description: "For agencies and SDR teams that need scale.",
      limit: "5,000 records",
      features: [
        "5,000 records per month",
        "Everything in Starter",
        "Priority research queue",
        "CRM integrations",
        "Team collaboration",
        "Advanced analytics",
        "API access",
        "Priority support",
      ],
      cta: "Request Demo",
      popular: true,
    },
    {
      name: "Scale",
      price: "5,999",
      currency: "₹",
      description: "For high-volume agencies with demanding needs.",
      limit: "10,000 records",
      features: [
        "10,000 records per month",
        "Everything in Growth",
        "Custom integrations",
        "White-label options",
        "Dedicated account manager",
        "SLA guarantee",
        "Custom training",
        "24/7 support",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ],
  USD: [
    {
      name: "Starter",
      price: "30",
      currency: "$",
      description: "Perfect for solo founders and small agencies getting started.",
      limit: "1,000 records",
      features: [
        "1,000 records per month",
        "Company research",
        "Opening line generation",
        "CSV export",
        "Email support",
        "Basic analytics",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Growth",
      price: "50",
      currency: "$",
      description: "For agencies and SDR teams that need scale.",
      limit: "5,000 records",
      features: [
        "5,000 records per month",
        "Everything in Starter",
        "Priority research queue",
        "CRM integrations",
        "Team collaboration",
        "Advanced analytics",
        "API access",
        "Priority support",
      ],
      cta: "Request Demo",
      popular: true,
    },
    {
      name: "Scale",
      price: "75",
      currency: "$",
      description: "For high-volume agencies with demanding needs.",
      limit: "10,000 records",
      features: [
        "10,000 records per month",
        "Everything in Growth",
        "Custom integrations",
        "White-label options",
        "Dedicated account manager",
        "SLA guarantee",
        "Custom training",
        "24/7 support",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ],
};

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Start with a 14-day free trial on any plan. No credit card required. Process up to 100 records to see IQgent One in action.",
  },
  {
    question: "What counts as a record?",
    answer: "A record is one row in your CSV that gets researched and receives a generated opening line. Unused records roll over for up to 3 months.",
  },
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "What integrations do you support?",
    answer: "We integrate with major CRMs (Salesforce, HubSpot, Pipedrive), email tools (Outreach, SalesLoft), and offer a REST API for custom integrations.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees for any plan. All plans include complimentary onboarding and training materials.",
  },
  {
    question: "What's your refund policy?",
    answer: "We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your first month, no questions asked.",
  },
];

export default function PricingPage() {
  const [currency, setCurrency] = useState<"INR" | "USD">("USD");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Detect user location via backend API
    fetch("/api/pricing")
      .then((res) => res.json())
      .then((data) => {
        setCurrency(data.currency || "USD");
      })
      .catch(() => {
        // Fallback: detect via IP geolocation
        fetch("https://ipapi.co/json/")
          .then((res) => res.json())
          .then((data) => {
            setCurrency(data.country_code === "IN" ? "INR" : "USD");
          })
          .catch(() => {
            setCurrency("USD");
          });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const plans = plansData[currency];

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-neutral-600">Loading pricing...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <Section className="bg-gradient-to-b from-emerald-50 to-white border-b border-neutral-200">
        <Container size="large">
          <div className="max-w-4xl mx-auto text-center py-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 mb-8">
              <span className="text-sm text-emerald-700 font-medium">Pricing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-neutral-900 leading-tight">
              Simple, transparent
              <br />
              <span className="gradient-text">pricing</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
              Choose the plan that fits your team. All plans include our core research 
              and generation features. Scale as you grow.
            </p>
          </div>
        </Container>
      </Section>

      {/* Pricing Cards */}
      <Section className="bg-white border-b border-neutral-200">
        <Container size="large">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative p-8 rounded-2xl border ${
                    plan.popular
                      ? "border-emerald-500 shadow-xl shadow-emerald-100"
                      : "border-neutral-200 bg-white"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full bg-emerald-500 text-white text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-neutral-900">
                        {plan.currency}{plan.price}
                      </span>
                      <span className="text-neutral-600">/month</span>
                    </div>
                    <div className="text-sm font-medium text-emerald-600 mb-3">
                      {plan.limit}
                    </div>
                    <p className="text-neutral-600 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <Button
                    variant={plan.popular ? "primary" : "secondary"}
                    className="w-full mb-8"
                  >
                    {plan.cta}
                  </Button>

                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Enterprise features */}
            <div className="mt-16 p-8 rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Need higher volume?
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    For teams processing more than 10,000 records per month, we offer 
                    custom enterprise plans with volume discounts and dedicated support.
                  </p>
                  <Button variant="primary">
                    Talk to Sales
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-white border border-neutral-200">
                    <div className="text-2xl font-bold text-neutral-900 mb-1">Custom</div>
                    <div className="text-sm text-neutral-600">Volume pricing</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white border border-neutral-200">
                    <div className="text-2xl font-bold text-neutral-900 mb-1">24/7</div>
                    <div className="text-sm text-neutral-600">Support</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white border border-neutral-200">
                    <div className="text-2xl font-bold text-neutral-900 mb-1">SOC 2</div>
                    <div className="text-sm text-neutral-600">Compliant</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white border border-neutral-200">
                    <div className="text-2xl font-bold text-neutral-900 mb-1">Custom</div>
                    <div className="text-sm text-neutral-600">Integrations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <Section className="bg-neutral-50">
        <Container size="large">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm font-mono text-neutral-500 mb-6">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-neutral-900">
              Got questions?
            </h2>

            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="p-6 rounded-xl border border-neutral-200 bg-white"
                >
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-neutral-600 mb-4">
                Still have questions?
              </p>
              <Button variant="secondary">
                Contact Support
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
