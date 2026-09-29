"use client";

import React, { createContext, useContext, useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Check, Mail, ExternalLink, X } from "lucide-react";

interface EmailToastContextType {
  handleEmailClick: (e: React.MouseEvent) => void;
}

const EmailToastContext = createContext<EmailToastContextType>({
  handleEmailClick: () => {},
});

export function EmailToastProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    // Prevent the browser from launching the OS default handler (which triggers Canva on systems where mailto is misconfigured)
    e.preventDefault();

    // Copy email to clipboard
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(siteConfig.email);
    }

    setVisible(true);

    // Auto dismiss after 5 seconds
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.email)}`;

  return (
    <EmailToastContext.Provider value={{ handleEmailClick }}>
      {children}

      {/* Floating Notification */}
      {visible && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-md w-[90%] sm:w-auto animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex flex-col sm:flex-row items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-2xl border border-slate-700 dark:border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 dark:text-emerald-600 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-medium">
                Copied <strong className="font-semibold">{siteConfig.email}</strong> to clipboard!
              </span>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
              >
                <span>Open Gmail</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={() => setVisible(false)}
                className="p-1 rounded text-slate-400 hover:text-white dark:hover:text-slate-900 transition-colors"
                aria-label="Close notification"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </EmailToastContext.Provider>
  );
}

export function useEmailAction() {
  return useContext(EmailToastContext);
}
