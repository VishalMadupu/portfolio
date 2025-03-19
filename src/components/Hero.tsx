
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-20"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="flex flex-col items-center justify-center">
          <Avatar className="h-32 w-32 border-4 border-background shadow-lg mb-6">
            <AvatarImage src="/placeholder.svg" alt="Vishal Madupu" />
            <AvatarFallback>VM</AvatarFallback>
          </Avatar>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Vishal Madupu</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mt-4">
            Web Developer
          </h2>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Specializing in building responsive, user-friendly web applications
          with modern front-end and back-end technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-all">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-all">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
        
        <div className="pt-16 animate-bounce">
          <a href="#about" aria-label="Scroll down" className="inline-block p-2 rounded-full hover:bg-accent transition-colors">
            <ArrowDown className="mx-auto" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
