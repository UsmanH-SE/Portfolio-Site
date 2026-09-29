import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Check } from "lucide-react";

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          What I do
        </h2>
      </div>

      {/* Two Clean Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {siteConfig.services.map((service) => (
          <div
            key={service.title}
            className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5">
              {service.title}
            </h3>

            <ul className="space-y-3">
              {service.points.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span className="mt-1 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Check className="w-4 h-4" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
