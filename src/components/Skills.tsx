import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionIntro from "@/components/SectionIntro";
import { skillGroups } from "@/data/portfolio";

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="container px-4">
        <SectionIntro
          eyebrow="Capabilities"
          title="A stack shaped by frontend quality and delivery speed."
          description="I’m strongest where product UX and implementation detail meet. These are the tools and working patterns I use most often."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <Card
              key={group.title}
              className="card-hover border-white/70 bg-white/80 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-base font-semibold text-white">
                    {group.title.charAt(0)}
                  </div>
                  <div>
                    <CardTitle className="font-display text-2xl tracking-tight text-slate-950">
                      {group.title}
                    </CardTitle>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {group.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="rounded-full border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                    >
                      {skill}
                    </Badge>
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

export default Skills;
