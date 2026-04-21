"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionIntro from "@/components/SectionIntro";
import { projects } from "@/data/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#0ea5e9]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#fb923c]/12 blur-3xl" />
      </div>

      <div className="container px-4">
        <SectionIntro
          eyebrow="Selected Work"
          title="Case studies built around product problems, not filler cards."
          description="These are the projects that best reflect how I work: reusable frontend systems, full stack delivery, workflow tooling, and production-ready interfaces."
          align="center"
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="card-hover overflow-hidden border-white/70 bg-white/82 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <div className={`h-2 bg-gradient-to-r ${project.accent}`} />
              <CardContent className="p-7 sm:p-8">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white">
                        0{index + 1}
                      </span>
                      <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
                        {project.eyebrow}
                      </p>
                    </div>
                    <h3 className="mt-5 font-display text-3xl tracking-tight text-slate-950">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      {project.summary}
                    </p>
                    <div className="mt-6 rounded-[1.5rem] bg-slate-50 p-5">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        Outcome
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {project.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 rounded-[1.75rem] bg-slate-950 p-6 text-white lg:w-[17rem]">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                      Stack
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge
                          key={tech}
                          className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white hover:bg-white/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      asChild
                      className="mt-6 w-full rounded-full bg-white text-slate-950 hover:bg-slate-100"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        Visit Project
                        <ExternalLink />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="mt-8 grid gap-3">
                  {project.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[1.35rem] border border-slate-200/70 bg-white p-4"
                    >
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0f766e]" />
                      <p className="text-sm leading-7 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-slate-900 transition-colors hover:text-[#0f766e]"
                >
                  Open live site
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
