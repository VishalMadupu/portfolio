import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import me from "../images/ME.png";
import { heroStats, siteConfig } from "@/data/portfolio";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-8 sm:pb-24 sm:pt-12">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-12rem] top-[-6rem] h-[24rem] w-[24rem] rounded-full bg-[#f97316]/18 blur-3xl" />
        <div className="absolute right-[-8rem] top-[6rem] h-[22rem] w-[22rem] rounded-full bg-[#0ea5e9]/16 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[20rem] w-[20rem] rounded-full bg-[#fde68a]/30 blur-3xl" />
      </div>

      <div className="container px-4">
        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_16px_50px_rgba(15,23,42,0.08)] backdrop-blur">
              {/* <Sparkles className="h-4 w-4 text-[#f97316]" /> */}
              <span>{siteConfig.availability}</span>
            </div>

            <div className="mt-8 max-w-4xl">
              <p className="font-display text-sm uppercase tracking-[0.3em] text-slate-500">
                Full stack developer
              </p>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Building interfaces that feel sharp and systems that hold up.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                I&apos;m {siteConfig.name}, a {siteConfig.role} based in {siteConfig.location}.{" "}
                {siteConfig.shortBio}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-slate-950 px-7 text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] hover:bg-slate-800"
              >
                <a href="#projects">
                  Explore Projects
                  <ArrowUpRight />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-slate-300 bg-white/70 px-7 text-slate-900 hover:bg-white"
              >
                <a href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
                  View Resume
                </a>
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.75rem] border border-white/70 bg-white/70 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur"
                >
                  <p className="font-display text-3xl font-semibold text-slate-950">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-slate-600">
              <MapPin className="h-4 w-4 text-[#0f766e]" />
              <span>Available for product engineering, UI systems, and web platform work.</span>
            </div>
          </div>

          <div className="relative animate-fade-left">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.14)] backdrop-blur sm:p-8">
              <div className="absolute inset-x-8 top-0 h-24 rounded-b-[2rem] bg-gradient-to-b from-[#f97316]/20 to-transparent" />
              <div className="relative mx-auto max-w-sm">
                <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white">
                  <Code2 className="h-3.5 w-3.5" />
                  React + Next.js + Python
                </div>

                <Avatar className="mx-auto h-64 w-64 rounded-[2rem] border border-white/80 shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:h-72 sm:w-72">
                  <AvatarImage src={me} alt={siteConfig.name} className="object-cover" />
                  <AvatarFallback className="bg-slate-100 font-display text-5xl text-slate-700">
                    VM
                  </AvatarFallback>
                </Avatar>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-[1.5rem] bg-[#fff7ed] p-4 text-slate-800">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fb923c] text-white">
                        <BriefcaseBusiness className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm text-slate-500">Current role</p>
                        <p className="font-medium">Software Engineer at ISCS Technologies</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] bg-slate-950 p-4 text-white">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Strength</p>
                      <p className="mt-2 text-sm leading-6">
                        Reusable frontend systems with production-focused execution.
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] bg-[#ecfeff] p-4 text-slate-900">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Focus</p>
                      <p className="mt-2 text-sm leading-6">
                        SaaS interfaces, internal tools, and workflow-driven products.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#about"
              aria-label="Scroll down"
              className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur transition-transform hover:-translate-y-0.5"
            >
              <ArrowDown className="h-4 w-4" />
              Scroll for details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
