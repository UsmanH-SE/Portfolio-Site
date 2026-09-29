"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xl shadow-slate-900/20 hover:bg-indigo-600 dark:hover:bg-indigo-400 hover:text-white dark:hover:text-slate-950 transition-all duration-200 active:scale-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 animate-in fade-in zoom-in-75"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
