import { CalendarDays, Briefcase, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "ISCS Technologies Private Limited",
      period: "Apr 2025 – Present",
      icon: <Building2 className="h-8 w-8" />,
      details: [
        "Developing and maintaining scalable web applications using modern technologies.",
        "Collaborating with cross-functional teams to design and implement software solutions.",
        "Contributing to code reviews, architecture decisions, and continuous improvement initiatives.",
      ],
    },
    {
      role: "Associate Developer",
      company: "Busybrains",
      period: "Oct 2024 – Apr 2025",
      icon: <Briefcase className="h-8 w-8" />,
      details: [
        "Built and maintained web applications as part of a collaborative development team.",
        "Worked on front-end and back-end features to deliver end-to-end solutions.",
        "Participated in agile development processes including sprint planning and daily standups.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-l-4 border-l-primary/60 hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <div className="mt-1 rounded-full p-2 bg-primary/10 text-primary">
                  {exp.icon}
                </div>
                <div>
                  <CardTitle className="text-xl">{exp.role}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1 font-medium">
                    {exp.company}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
                {exp.details && (
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mt-2">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
