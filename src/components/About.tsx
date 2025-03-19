
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-accent/20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-xl p-8 shadow-md border transition-all hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Objective</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              As a passionate Web Developer, I specialize in front-end and back-end technologies with a focus on 
              building scalable, user-friendly, and responsive web applications. My expertise lies in creating dynamic and 
              visually appealing interfaces, optimizing web performance, and contributing to innovative, forward-thinking 
              projects.
            </p>
            <div className="flex justify-center">
              <Button variant="outline" className="gap-2 shadow-sm hover:shadow-md transition-all">
                <FileText size={16} />
                <span>Download Resume</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
