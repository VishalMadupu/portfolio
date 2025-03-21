
import { ArrowDown, Code, Cpu, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import me from "../../public/images/ME.png"

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-sm animate-pulse-slow"></div>
              <Avatar className="h-32 w-32 border-4 border-background shadow-lg mb-6 animate-float">
                <AvatarImage src={me} alt="Vishal Madupu" />
                <AvatarFallback className="bg-primary/10 text-primary font-bold text-xl">VM</AvatarFallback>
              </Avatar>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-gradient">Vishal Madupu</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mt-4">
              Web Developer
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specializing in building responsive, user-friendly web applications
            with modern front-end and back-end technologies.
          </p>
          
          {/* Tech icons */}
          <div className="flex justify-center gap-8 py-4">
            <Layout className="w-6 h-6 text-primary animate-float" />
            <Code className="w-6 h-6 text-primary animate-float" style={{ animationDelay: "0.5s" }} />
            <Cpu className="w-6 h-6 text-primary animate-float" style={{ animationDelay: "1s" }} />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-primary to-blue-600">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-all border-primary/50">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="pt-16 animate-bounce">
            <a href="#about" aria-label="Scroll down" className="inline-block p-2 rounded-full hover:bg-accent transition-colors">
              <ArrowDown className="mx-auto text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
