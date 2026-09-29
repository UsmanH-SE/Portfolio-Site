"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Linkedin, Github } from "lucide-react";
import { useEmailAction } from "./EmailToast";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { handleEmailClick } = useEmailAction();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Name */}
          <div className="text-center sm:text-left">
            <span className="font-semibold text-base text-slate-900 dark:text-white">
              {siteConfig.name}
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Software Engineer
            </p>
          </div>

          {/* Quick links to sections */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-600 dark:text-slate-400">
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Projects
            </a>
            <a href="#what-i-do" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              What I do
            </a>
            <a href="#how-i-work" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              How I work
            </a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Skills
            </a>
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Social icons: Email, LinkedIn, GitHub */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleEmailClick}
              aria-label="Copy Email / Contact"
              title="Click to copy email"
              className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors p-1"
            >
              <Mail className="w-4 h-4" />
            </button>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors p-1"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors p-1"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 text-center text-xs text-slate-500 dark:text-slate-400">
          © {currentYear} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
