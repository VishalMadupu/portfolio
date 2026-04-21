import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionIntro from "@/components/SectionIntro";
import { experiences } from "@/data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="container px-4">
        <SectionIntro
          eyebrow="Experience"
          title="Hands-on work across product teams and production systems."
          description="My recent experience is centered on building and improving real applications, with a strong mix of implementation detail, team collaboration, and practical problem-solving."
        />

        <div className="mt-14 space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={exp.role}
              className="relative overflow-hidden border-white/70 bg-white/82 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#f97316] via-[#fb923c] to-[#0ea5e9]" />
              <CardHeader className="gap-5 pb-0 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
                    Role 0{index + 1}
                  </p>
                  <CardTitle className="mt-3 font-display text-3xl tracking-tight text-slate-950">
                    {exp.role}
                  </CardTitle>
                  <p className="mt-2 text-base font-medium text-slate-700">{exp.company}</p>
                </div>
                <div className="flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="max-w-3xl text-base leading-8 text-slate-600">
                  {exp.summary}
                </p>
                <div className="mt-7 grid gap-3">
                  {exp.achievements.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-start gap-3 rounded-[1.35rem] border border-slate-200/70 bg-white p-4"
                    >
                      <ArrowUpRight className="mt-1 h-4 w-4 text-[#0f766e]" />
                      <p className="text-sm leading-7 text-slate-600">{detail}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
