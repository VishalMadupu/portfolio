"use client"
import React, { useState } from "react";
import { ExternalLink, Github, ChevronRight, RotateCcw, Eye, EyeOff } from "lucide-react";
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
import Autoplay from "embla-carousel-autoplay";

const Projects = () => {
  const [expanded, setExpanded] = useState({});
  const [loadedIframes, setLoadedIframes] = useState({});

  const toggleExpanded = (idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleIframeLoad = (index) => {
    setLoadedIframes(prev => ({ ...prev, [index]: true }));
  };

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
      ],
      technologies: ["React", "SCSS", "Bootstrap 5.3", "Storybook", "Chromatic"],
    },

    {
      title: "G-Nayana",
      description: "AI Chatbot & Workflow Automation Platform with medical image analysis.",
      // use landing preview instead of static image
      imageUrl: null,
      liveUrl: "https://g-nayana.in/",
      repoUrl: null,
      previewLanding: true,
      features: [
        "Real-time chatbot UI with WebSocket-driven interactions and animated UX.",
        "Workflow automation platform integrating chatbot flows with backend automation.",
        "File conversion system with schema validation and dynamic form processing using AI recognition.",
        "Medical image analysis module (diabetic retinopathy detection) using OpenCV + ML pipelines.",
        "End-to-end automation with focus on user-centric interfaces for complex workflows.",
      ],
      technologies: ["React", "Python", "FastAPI", "WebSockets", "OpenCV", "Docker", "AI/ML"],
    },

    {
      title: "LMS (Learning Management System)",
      description:
        "Learning Management System inside a monorepo; `lms` provides SSR/dynamic features while `web` is the marketing/portal app.",
      imageUrl: null,
      liveUrl: "https://alphagroups.co.in",
      repoUrl: null,
      previewLanding: true,
      features: [
        "Monorepo architecture with `apps/lms` (SSR/dynamic) and `web` (static/portal) for a single-domain login flow.",
        "Implemented SSR/CSR parts using Next.js and ensured seamless proxying so `web` could call `lms` for auth.",
        "Worked on deployment and CI/CD (Azure `az webapp up`) and resolved environment & Docker networking issues during development.",
        "Handled environment variable patterns, docker compose workflows, and port troubleshooting (e.g., VM-to-DB connections).",
      ],
      technologies: ["Next.js", "Yarn", "Azure", "Docker"],
      tags: ["Private/Internal"],
    },

    {
      title: "Mi-Ware",
      description: "TIBCO-like visual workflow orchestration tool with drag-and-drop canvas.",
      imageUrl: null,
      liveUrl: "https://mi-ware.in/",
      repoUrl: null,
      previewLanding: true,
      features: [
        "Custom drag-and-drop canvas that mirrors middleware orchestration UIs (like TIBCO).",
        "Supported nodes: DB, File, Converter, Filter with node-level validations and dynamic connections.",
        "Real-time minimap, runtime indicators, hover controls and UX affordances for clearer orchestration visibility.",
        "DAG-based execution model with backend APIs to execute workflows and return runtime status.",
      ],
      technologies: ["React (custom canvas)", "DAG execution", "REST APIs"],
    },

  
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Here are some of my recent projects, showcasing my skills and expertise.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Carousel 
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            opts={{ 
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => {
                const isExpanded = !!expanded[index];
                const visibleFeatures = isExpanded ? project.features : project.features.slice(0, 3);
                const iframeLoaded = loadedIframes[index];

                return (
                  <CarouselItem 
                    key={index} 
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/2"
                  >
                    <Card
                      className="card-hover border-primary/10 h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up"
                      style={{ animationDelay: `${index * 0.06}s` }}
                    >
                      <div className="relative aspect-video overflow-hidden bg-slate-50">
                        {/* If previewLanding is true and we have a liveUrl, show an iframe preview */}
                        {project.previewLanding && project.liveUrl ? (
                          <>
                            {!iframeLoaded && (
                              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                                <div className="text-center">
                                  <RotateCcw className="h-8 w-8 text-primary animate-spin mx-auto mb-2" />
                                  <p className="text-sm text-muted-foreground">Loading preview...</p>
                                </div>
                              </div>
                            )}
                            <iframe
                              title={`${project.title} landing preview`}
                              src={project.liveUrl}
                              className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-300 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                              sandbox="allow-scripts allow-forms allow-popups allow-same-origin allow-top-navigation-by-user-activation"
                              onLoad={() => handleIframeLoad(index)}
                              referrerPolicy="no-referrer"
                            />
                            {/* Improved overlay with more controls */}
                            <div className="absolute top-3 left-3 z-20 flex gap-2">
                              <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                                <Eye className="h-4 w-4 text-white mr-1" />
                                <span className="text-xs text-white">Live Preview</span>
                              </div>
                            </div>
                            <div className="absolute top-3 right-3 z-20">
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow hover:bg-white transition-colors"
                                aria-label={`Open ${project.title} in new tab`}
                              >
                                <ExternalLink size={14} />
                                <span className="text-xs">Visit Site</span>
                              </a>
                            </div>
                          </>
                        ) : project.imageUrl ? (
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full text-sm text-muted-foreground bg-gradient-to-br from-gray-50 to-gray-100">
                            <div className="text-center p-4">
                              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-3" />
                              <p>No preview available</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <CardHeader className="pb-3">
                        <CardTitle className="text-gradient text-xl">{project.title}</CardTitle>
                        <CardDescription className="text-base">{project.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="flex-grow pb-3">
                        <div className="mb-4">
                          <ul className="space-y-2">
                            {visibleFeatures.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-primary mr-2 mt-1">•</span>
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </li>
                            ))}

                            {project.features.length > 3 && (
                              <li>
                                <button
                                  onClick={() => toggleExpanded(index)}
                                  className="inline-flex items-center gap-1 text-primary hover:underline mt-2 text-sm font-medium"
                                  aria-expanded={isExpanded}
                                >
                                  <span>{isExpanded ? "Show less" : "View more"}</span>
                                  <ChevronRight
                                    className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-90" : ""}`}
                                  />
                                </button>
                              </li>
                            )}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-2">
                          {(project.technologies || []).map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1"
                            >
                              {tech}
                            </Badge>
                          ))}

                          {project.tags &&
                            project.tags.map((t, i) => (
                              <Badge 
                                key={`tag-${i}`} 
                                variant="outline" 
                                className="border-red-500 text-red-500 px-3 py-1"
                              >
                                {t}
                              </Badge>
                            ))}
                        </div>
                      </CardContent>

                      <CardFooter className="flex gap-3 pt-3 border-t border-gray-100">
                        {project.liveUrl ? (
                          <Button 
                            asChild 
                            variant="default" 
                            size="sm" 
                            className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 flex items-center gap-2 flex-1"
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={16} />
                              Live Demo
                            </a>
                          </Button>
                        ) : (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="opacity-60 cursor-not-allowed flex-1" 
                            disabled
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </Button>
                        )}

                        {project.repoUrl ? (
                          <Button 
                            asChild 
                            variant="outline" 
                            size="sm" 
                            className="flex items-center gap-2"
                          >
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                              <Github size={16} />
                              Code
                            </a>
                          </Button>
                        ) : (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="opacity-70 cursor-not-allowed" 
                            disabled
                          >
                            <Github size={16} />
                            Private
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselPrevious className="left-2 lg:left-4 bg-white/80 backdrop-blur hover:bg-white shadow-md" />
            <CarouselNext className="right-2 lg:right-4 bg-white/80 backdrop-blur hover:bg-white shadow-md" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
