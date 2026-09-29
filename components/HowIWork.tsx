import React from "react";
import { siteConfig } from "@/data/siteConfig";

export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            How I work
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            A simple, predictable process from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.howIWork.map((item) => (
            <div
              key={item.step}
              className="p-5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800"
            >
              <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 block mb-2">
                Step 0{item.step}
              </span>
              <h3 className="font-semibold text-base text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
