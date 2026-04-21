import { Bot, CloudCog, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionIntro from "@/components/SectionIntro";
import { specializations } from "@/data/portfolio";

const icons = [<CloudCog className="h-5 w-5" />, <Bot className="h-5 w-5" />];

const Specializations = () => {
  return (
    <section id="systems" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-[#14b8a6]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#a855f7]/10 blur-3xl" />
      </div>

      <div className="container px-4">
        <SectionIntro
          eyebrow="Advanced Systems"
          title="Deployment discipline and AI orchestration are now part of the portfolio."
          description="Beyond frontend and product work, I also handle production deployment concerns and agent-driven workflow systems that need coordination, reliability, and clear execution logic."
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-2">
          {specializations.map((item, index) => (
            <Card
              key={item.title}
              className="card-hover overflow-hidden border-white/70 bg-white/82 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <div className={`h-2 bg-gradient-to-r ${item.accent}`} />
              <CardContent className="p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-2xl bg-slate-950 p-3 text-white">
                    {icons[index]}
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
                      {item.label}
                    </p>
                    <h3 className="font-display text-3xl tracking-tight text-slate-950">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  {item.summary}
                </p>

                <div className="mt-8 grid gap-3">
                  {item.bullets.map((bullet) => (
                    <div
                      key={bullet.title}
                      className="rounded-[1.35rem] border border-slate-200/70 bg-white p-4"
                    >
                      <div className="flex items-start gap-3">
                        <Sparkles className="mt-1 h-4 w-4 text-[#f97316]" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {bullet.title}
                          </p>
                          <p className="mt-1 text-sm leading-7 text-slate-600">
                            {bullet.description}
                          </p>
                        </div>
                      </div>
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

export default Specializations;
