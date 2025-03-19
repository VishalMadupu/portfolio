
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  const projects = [
    {
      title: "BusyBrain.ai Web Application",
      description: "A web application built with a Mono-repo architecture for efficient management and scalability.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      liveUrl: "https://busybrains.ai/",
      features: [
        "Implemented a Mono-repo architecture for efficient management and scalability of libraries and applications.",
        "Developed and maintained responsive UI components using React, SCSS, and Bootstrap 5.3, ensuring seamless functionality across devices.",
        "Built reusable components like Button, SearchBar, CustomBadge, and Text, with advanced features including icon integration and loading states.",
        "Optimized layouts for cross-device compatibility using media queries and CSS frameworks.",
        "Utilized Storybook for UI component testing and published libraries online via Chromatic, enabling effective collaboration and version control.",
        "Authored comprehensive documentation for project setup, usage, and deployment, simplifying onboarding and maintainability.",
        "Wrote detailed code documentation to improve code readability and assist other developers."
      ],
      technologies: ["React", "SCSS", "Bootstrap 5.3", "Storybook", "Chromatic"],
    },
    {
      title: "E-commerce Website",
      description: "A fully functional e-commerce platform with a strong focus on user experience and performance.",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      features: [
        "Contributed to developing a fully functional e-commerce platform with a strong focus on user experience and performance."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React"],
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-2">
                  <Card className="card-hover border-primary/10 h-full flex flex-col animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="relative aspect-video overflow-hidden rounded-t-lg">
                      <div className="absolute inset-0 bg-primary/10 z-10 transition-opacity opacity-0 hover:opacity-100"></div>
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gradient">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mb-4">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="flex items-center gap-1 text-primary cursor-pointer hover:underline">
                            <span>View more</span>
                            <ChevronRight className="h-3 w-3" />
                          </li>
                        )}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      {project.liveUrl && (
                        <Button asChild variant="default" size="sm" className="bg-gradient-to-r from-primary to-blue-600">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      <Button variant="outline" size="sm" className="ml-auto border-primary/50">
                        <Github size={16} className="mr-2" />
                        View Code
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 lg:left-4" />
            <CarouselNext className="right-2 lg:right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
