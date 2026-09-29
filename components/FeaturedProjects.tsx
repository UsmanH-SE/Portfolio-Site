"use client";

import React, { useState } from "react";
import { projects, Project } from "@/data/projects";
import { Video, ArrowUpRight, Image as ImageIcon, ZoomIn, X, ExternalLink, Mail } from "lucide-react";
import { useEmailAction } from "./EmailToast";

function getLoomEmbedUrl(url: string): string {
  if (!url) return "";
  if (url.includes("/embed/")) return url;
  return url.replace("/share/", "/embed/");
}

function ProjectCardImage({
  src,
  alt,
  onZoom,
  hasLoom,
  onWatchLoom,
}: {
  src: string;
  alt: string;
  onZoom: (data: { src: string; alt: string }) => void;
  hasLoom?: boolean;
  onWatchLoom?: () => void;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-2 text-slate-400 dark:text-slate-500">
        <ImageIcon className="w-8 h-8 opacity-60" />
        <span className="text-xs font-medium">Workflow image</span>
      </div>
    );
  }

  return (
    <div
      onClick={() => onZoom({ src, alt })}
      className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center cursor-zoom-in group/img"
      title="Click to view full image"
    >
      {hasLoom && (
        <div className="absolute top-2.5 right-2.5 z-10 pointer-events-auto">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onWatchLoom?.();
            }}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            title="Watch Loom video walkthrough"
          >
            <Video className="w-3 h-3" />
            <span>Video Demo</span>
          </button>
        </div>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain p-2 transition-transform duration-200 group-hover/img:scale-[1.02]"
        onError={() => setError(true)}
      />

      <div className="absolute inset-0 bg-slate-950/0 group-hover/img:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover/img:opacity-100 pointer-events-none">
        <span className="text-xs font-medium text-white px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700/80 shadow-md flex items-center gap-1.5">
          <ZoomIn className="w-3.5 h-3.5" />
          <span>Click to zoom</span>
        </span>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const [zoomImage, setZoomImage] = useState<{ src: string; alt: string } | null>(null);
  const [activeLoomProject, setActiveLoomProject] = useState<Project | null>(null);
  const { handleEmailClick } = useEmailAction();

  return (
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Projects
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Real automations and workflows I have designed, built, and tested.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-12">
          {projects.map((project: Project) => {
            const hasLoom = Boolean(project.loomUrl && project.loomUrl.trim() !== "");

            return (
              <div
                key={project.id}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: 16:9 Image Area (5 cols on desktop) */}
                  <div className="lg:col-span-5 w-full">
                    <ProjectCardImage
                      src={project.image}
                      alt={`${project.title} workflow screenshot`}
                      onZoom={setZoomImage}
                      hasLoom={hasLoom}
                      onWatchLoom={() => setActiveLoomProject(project)}
                    />
                  </div>

                  {/* Right: Details (7 cols on desktop) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Project Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        {project.title}
                      </h3>

                      {/* Three Clear Parts: Problem, What I built, What it does */}
                      <div className="space-y-3.5 text-sm text-slate-700 dark:text-slate-300">
                        <div>
                          <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">
                            Problem:
                          </span>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {project.problem}
                          </p>
                        </div>

                        <div>
                          <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">
                            What I built:
                          </span>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {project.built}
                          </p>
                        </div>

                        <div>
                          <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">
                            What it does:
                          </span>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {project.result}
                          </p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Loom Video Button - enabled when loomUrl is present, disabled otherwise */}
                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      {hasLoom ? (
                        <button
                          onClick={() => setActiveLoomProject(project)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-colors shadow-xs active:scale-98 cursor-pointer"
                        >
                          <Video className="w-3.5 h-3.5" />
                          <span>Watch Loom Walkthrough</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          disabled
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-slate-400 dark:text-slate-500 font-medium text-xs cursor-not-allowed border border-slate-200/80 dark:border-slate-800 select-none"
                          title="Walkthrough video coming soon"
                        >
                          <Video className="w-3.5 h-3.5 opacity-50" />
                          <span>Walkthrough Coming Soon</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for Full View Workflow Image */}
      {zoomImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs p-4 sm:p-8 flex items-center justify-center animate-in fade-in"
          onClick={() => setZoomImage(null)}
        >
          <div
            className="relative max-w-6xl max-h-[90vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 text-white">
              <span className="text-sm font-semibold truncate pr-4">{zoomImage.alt}</span>
              <button
                onClick={() => setZoomImage(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                aria-label="Close image zoom"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={zoomImage.src}
              alt={zoomImage.alt}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-xl border border-slate-800 bg-slate-950 shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Loom Video Embed Modal */}
      {activeLoomProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs p-4 sm:p-8 flex items-center justify-center animate-in fade-in"
          onClick={() => setActiveLoomProject(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:px-6 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-indigo-500" />
                <h3 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white truncate">
                  {activeLoomProject.title} – Walkthrough
                </h3>
              </div>
              <button
                onClick={() => setActiveLoomProject(null)}
                className="p-1 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Embedded Video or Coming Soon Placeholder */}
            <div className="p-4 sm:p-6">
              {activeLoomProject.loomUrl && activeLoomProject.loomUrl.trim() !== "" ? (
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black shadow-inner">
                  <iframe
                    src={getLoomEmbedUrl(activeLoomProject.loomUrl)}
                    title={`${activeLoomProject.title} Loom Walkthrough`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              ) : (
                <div className="text-center py-12 px-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto mb-4">
                    <Video className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Loom Video Walkthrough Coming Soon
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                    I am recording a dedicated Loom walkthrough explaining how this workflow operates. If you want to see a live demo or have questions, feel free to email me.
                  </p>
                  <button
                    onClick={(e) => {
                      setActiveLoomProject(null);
                      handleEmailClick(e);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium text-xs hover:bg-indigo-500 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Me for a Live Demo</span>
                  </button>
                </div>
              )}
            </div>

            {/* Modal Footer (if link exists) */}
            {activeLoomProject.loomUrl && activeLoomProject.loomUrl.trim() !== "" && (
              <div className="px-6 py-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400">
                  Recorded walkthrough by Usman Haider
                </span>
                <a
                  href={activeLoomProject.loomUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <span>Open on Loom</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
