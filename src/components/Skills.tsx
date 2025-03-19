
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Front-End",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React-Bootstrap", "SASS"],
      iconClass: "bg-blue-500/10"
    },
    {
      category: "Back-End",
      skills: ["Python"],
      iconClass: "bg-green-500/10"
    },
    {
      category: "Tools & Frameworks",
      skills: ["Storybook", "Chromatic", "Next.js", "React.js", "Figma", "Photoshop"],
      iconClass: "bg-purple-500/10"
    },
    {
      category: "Additional Skills",
      skills: ["Windows OS", "Git Version Control", "Responsive Design"],
      iconClass: "bg-orange-500/10"
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">Technical Skills</h2>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover border-primary/10 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${category.iconClass}`}>
                    <span className="text-lg font-bold">{category.category.charAt(0)}</span>
                  </div>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="text-sm px-3 py-1 hover:bg-primary/10 transition-colors border-primary/30 hover:border-primary"
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
