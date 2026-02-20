"use client";

import { useEffect, useState } from "react";

const rows = [
  { company: "Acme Corp", country: "USA", status: "Researching...", result: "" },
  { company: "TechStart Inc", country: "UK", status: "Analyzing website...", result: "" },
  { company: "Global Solutions", country: "Germany", status: "Complete", result: "Noticed your recent Series B. Your focus on enterprise automation..." },
  { company: "Innovation Labs", country: "France", status: "Generating...", result: "" },
  { company: "DataFlow Systems", country: "Canada", status: "Complete", result: "Saw your expansion into the healthcare vertical. We help similar..." },
];

export default function SpreadsheetDemo() {
  const [visibleRows, setVisibleRows] = useState<number[]>([]);

  useEffect(() => {
    rows.forEach((_, index) => {
      setTimeout(() => {
        setVisibleRows(prev => [...prev, index]);
      }, index * 300);
    });
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg">
      {/* Header */}
      <div className="grid grid-cols-12 gap-4 p-4 bg-emerald-50 border-b border-emerald-200 text-sm font-semibold text-neutral-700">
        <div className="col-span-3">Company</div>
        <div className="col-span-2">Country</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-5">Generated Opening Line</div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-neutral-100">
        {rows.map((row, index) => (
          <div
            key={index}
            className={`grid grid-cols-12 gap-4 p-4 text-sm transition-all duration-500 ${
              visibleRows.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="col-span-3 font-medium text-neutral-900">{row.company}</div>
            <div className="col-span-2 text-neutral-600">{row.country}</div>
            <div className="col-span-2">
              {row.status === "Complete" ? (
                <span className="inline-flex items-center gap-1 text-emerald-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Complete
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-neutral-500">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  {row.status}
                </span>
              )}
            </div>
            <div className="col-span-5 text-neutral-600 italic">
              {row.result || <span className="text-neutral-400">—</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Processing indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-100">
        <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 animate-[progress_3s_ease-in-out_infinite]" />
      </div>
    </div>
  );
}
