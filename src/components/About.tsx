import { ArrowUpRight, Layers3, Rocket, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionIntro from "@/components/SectionIntro";
import { focusAreas, highlights, siteConfig } from "@/data/portfolio";

const About = () => {
  const icons = [
    <Rocket className="h-5 w-5" />,
    <Layers3 className="h-5 w-5" />,
    <Workflow className="h-5 w-5" />,
  ];

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container px-4">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-8">
            <SectionIntro
              eyebrow="About"
              title="I build modern web experiences with product discipline."
              description="My work sits between polished frontend implementation and practical full stack delivery. I care about components, responsiveness, performance, and the details that make a product feel finished."
            />

            <div className="rounded-[2rem] border border-white/70 bg-white/70 p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                What I&apos;m aiming for
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                As a developer, I want to keep building systems that are clean to
                maintain and clear to use. That means thoughtful component design,
                reliable integrations, and interfaces that help users move faster.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <Button
                asChild
                className="mt-8 rounded-full bg-slate-950 px-6 text-white hover:bg-slate-800"
              >
                <a href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
                  Open Resume
                  <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item, index) => (
              <Card
                key={item.title}
                className={`card-hover border-white/70 bg-white/80 shadow-[0_22px_60px_rgba(15,23,42,0.08)] backdrop-blur ${
                  index === 0 ? "md:col-span-2 xl:col-span-1" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="mb-5 inline-flex rounded-2xl bg-slate-950 p-3 text-white">
                    {icons[index]}
                  </div>
                  <h3 className="font-display text-xl tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
