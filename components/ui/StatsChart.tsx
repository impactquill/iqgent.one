"use client";

import { useEffect, useRef, useState } from "react";

interface StatsChartProps {
  data: { label: string; value: number; color: string }[];
}

export default function StatsChart({ data }: StatsChartProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div ref={ref} className="space-y-4">
      {data.map((item, index) => (
        <div key={item.label} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-neutral-700 font-medium">{item.label}</span>
            <span className="text-neutral-900 font-semibold">{item.value}%</span>
          </div>
          <div className="h-3 bg-neutral-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ease-out ${item.color}`}
              style={{
                width: isVisible ? `${(item.value / maxValue) * 100}%` : "0%",
                transitionDelay: `${index * 100}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
