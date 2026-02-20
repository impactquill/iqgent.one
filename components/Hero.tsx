"use client";

import Button from "./ui/Button";
import Container from "./ui/Container";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white border-b border-neutral-200">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 via-white to-white" />
      
      <Container size="large" className="relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-10 py-20">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50/80 backdrop-blur-sm transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm text-emerald-700 font-medium">Agentic Research Engine</span>
          </div>
          
          {/* Main headline */}
          <h1 
            className={`text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-neutral-900 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Research-first outreach
            <br />
            <span className="gradient-text">at enterprise scale</span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className={`text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Transform lead lists into company-aware, executive-level opening lines.
            <br className="hidden md:block" />
            Built for precision outbound teams that value quality over volume.
          </p>
          
          {/* CTA buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center pt-6 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button variant="primary" size="lg">
              Request Demo
            </Button>
            <Button variant="secondary" size="lg">
              See How It Works
            </Button>
          </div>
          
          {/* Stats */}
          <div 
            className={`grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-neutral-200 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div>
              <div className="text-3xl font-bold text-neutral-900">10x</div>
              <div className="text-sm text-neutral-600 mt-1">Faster research</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neutral-900">95%</div>
              <div className="text-sm text-neutral-600 mt-1">Time saved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neutral-900">C-suite</div>
              <div className="text-sm text-neutral-600 mt-1">Quality output</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
