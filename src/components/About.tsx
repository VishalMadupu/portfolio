
import { FileText, Briefcase, Award, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const qualities = [
    { 
      icon: <Briefcase className="h-8 w-8 text-primary" />, 
      title: "Professional",
      description: "Dedicated to delivering high-quality work that exceeds expectations" 
    },
    { 
      icon: <Lightbulb className="h-8 w-8 text-primary" />, 
      title: "Creative",
      description: "Innovative approach to problem-solving and design challenges" 
    },
    { 
      icon: <Award className="h-8 w-8 text-primary" />, 
      title: "Skilled",
      description: "Proficient in modern web development technologies and best practices" 
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {qualities.map((quality, index) => (
              <Card key={index} className="card-hover border-none bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    {quality.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{quality.title}</h3>
                  <p className="text-muted-foreground text-sm">{quality.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-card rounded-xl p-8 shadow-md border transition-all hover:shadow-lg hero-gradient animate-fade-up">
            <h3 className="text-xl font-semibold mb-4">Objective</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              As a passionate Web Developer, I specialize in front-end and back-end technologies with a focus on 
              building scalable, user-friendly, and responsive web applications. My expertise lies in creating dynamic and 
              visually appealing interfaces, optimizing web performance, and contributing to innovative, forward-thinking 
              projects.
            </p>
            <div className="flex justify-center">
              <Button variant="outline" className="gap-2 shadow-sm hover:shadow-md transition-all border-primary/50">
                {/* <FileText size={16} /> */}
                <a href="https://drive.google.com/file/d/1vOnD9_et_sVPQFDf44whVWTeraZ_XODG/view?usp=sharing" target="blank"><span>Download Resume</span></a>
               
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
