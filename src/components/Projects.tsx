
import { ExternalLink, Github } from "lucide-react";
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
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mb-4">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.liveUrl && (
                  <Button asChild variant="default" size="sm">
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
                <Button variant="outline" size="sm" className="ml-auto">
                  <Github size={16} className="mr-2" />
                  View Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
