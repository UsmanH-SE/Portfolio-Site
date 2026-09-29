"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { ArrowDown, Mail } from "lucide-react";
import { useEmailAction } from "./EmailToast";

export default function Hero() {
  const { handleEmailClick } = useEmailAction();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Small Tag */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-6">
          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
            {siteConfig.tagline}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
          {siteConfig.headline}
        </h1>

        {/* Sub-text */}
        <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {siteConfig.subheadline}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => scrollTo("projects")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-500 transition-colors shadow-xs"
          >
            <span>See My Projects</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            onClick={handleEmailClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-medium text-sm border border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <Mail className="w-4 h-4 text-indigo-500" />
            <span>Email Me</span>
          </button>
        </div>

        {/* Tech Stack Row */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
            Tools I work with:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {siteConfig.techTags.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
