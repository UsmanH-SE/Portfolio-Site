"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Linkedin, Github, ArrowUpRight, Check, Copy, ExternalLink } from "lucide-react";
import { useEmailAction } from "./EmailToast";

export default function FinalCTA() {
  const { handleEmailClick } = useEmailAction();
  const [copied, setCopied] = useState(false);

  const onCopy = (e: React.MouseEvent) => {
    handleEmailClick(e);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.email)}`;

  return (
    <section id="contact" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Let&apos;s talk
        </h2>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
          If you have a role for me, or want to talk about a project, send me an email. I usually reply within a day.
        </p>

        {/* 3 Main Action Buttons: Email, LinkedIn, GitHub */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* Email button with copy functionality */}
          <button
            onClick={onCopy}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-500 transition-colors shadow-xs"
            title="Click to copy email address"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Mail className="w-4 h-4" />}
            <span>{copied ? "Copied to clipboard!" : `Email (${siteConfig.email})`}</span>
            <Copy className="w-3.5 h-3.5 opacity-70 ml-0.5" />
          </button>

          {/* LinkedIn button */}
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-medium text-sm border border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-blue-600" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>

          {/* GitHub button */}
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-medium text-sm border border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Browser Gmail compose shortcut to avoid local app hijack */}
        <div className="mt-4">
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <span>Or open directly in Gmail (browser)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
