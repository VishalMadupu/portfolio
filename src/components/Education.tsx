import { CalendarDays, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionIntro from "@/components/SectionIntro";
import { education } from "@/data/portfolio";

const Education = () => {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="container px-4">
        <SectionIntro
          eyebrow="Education"
          title="Formal training backed by practical, project-driven learning."
          description="My foundation comes from computer science education, sharpened by a dedicated full stack program and real product work after it."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {education.map((item) => (
            <Card
              key={item.title}
              className="card-hover border-white/70 bg-white/82 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <CardHeader className="flex flex-row items-start gap-4 pb-3">
                <div className="mt-1 rounded-2xl bg-slate-950 p-3 text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="font-display text-2xl tracking-tight text-slate-950">
                    {item.title}
                  </CardTitle>
                  <p className="mt-2 text-sm text-slate-600">{item.institution}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center text-sm text-slate-500">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  <span>{item.period}</span>
                </div>
                <p className="text-sm leading-7 text-slate-600">{item.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
