
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Front-End",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React-Bootstrap", "SASS"],
    },
    {
      category: "Back-End",
      skills: ["Python"],
    },
    {
      category: "Tools & Frameworks",
      skills: ["Storybook", "Chromatic", "Next.js", "React.js", "Figma", "Photoshop"],
    },
    {
      category: "Additional Skills",
      skills: ["Windows OS", "Git Version Control", "Responsive Design"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="text-sm px-3 py-1">
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
