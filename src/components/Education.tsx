
import { CalendarDays, GraduationCap, School } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const educationHistory = [
    {
      degree: "Full Stack Developer Certification",
      institution: "ACE WEB ACADEMY – Hyderabad",
      period: "Mar – Aug 2023",
      icon: <School className="h-8 w-8" />,
      details: [
        "Gained expertise in web development technologies such as HTML5, CSS3, JavaScript, ReactJS, SASS, and MongoDB.",
        "Developed skills in creating responsive designs, dynamic websites, and functional interfaces optimized for user experience and performance.",
      ],
    },
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Malla Reddy Institute of Technology and Science",
      period: "2022",
      grade: "CGPA: 6.28",
      icon: <GraduationCap className="h-8 w-8" />,
    },
    {
      degree: "Intermediate Education",
      institution: "Narayana Junior College, Hyderabad",
      period: "2018",
      grade: "CGPA: 77.2",
      icon: <School className="h-8 w-8" />,
    },
    {
      degree: "High School Education",
      institution: "Victory High School, Chandur",
      period: "2016",
      grade: "CGPA: 8.7",
      icon: <School className="h-8 w-8" />,
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {educationHistory.map((edu, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <div className="mt-1 rounded-full p-2 bg-muted/50">{edu.icon}</div>
                <div>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  <span>{edu.period}</span>
                  {edu.grade && (
                    <>
                      <span className="mx-2">|</span>
                      <span>{edu.grade}</span>
                    </>
                  )}
                </div>
                {edu.details && (
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mt-2">
                    {edu.details.map((detail, i) => (
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

export default Education;
