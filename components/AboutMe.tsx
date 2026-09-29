import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Photo card on the left / top */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative aspect-square w-64 max-w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-md">
              <Image
                src="/avatar.jpg"
                alt="Usman Haider"
                fill
                unoptimized
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Bio text on the right */}
          <div className="md:col-span-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              About me
            </h2>
            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>{siteConfig.about}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
