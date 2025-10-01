import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { FileText } from "lucide-react";
import ProjectModal from "./ProjectModal";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "M.M.R. Mohamed Residential Project",
      category: "Residential",
      image: project1,
      description: "Complete residential construction project with detailed quantity surveying and cost management.",
      pdfUrl: "https://drive.google.com/file/d/19S8QBc8GeSfPpU5ZTs2-zQ-0WdSuQOeF/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=19S8QBc8GeSfPpU5ZTs2-zQ-0WdSuQOeF"
    },
    {
      title: "M.M. Siraj Ahamed Commercial Project",
      category: "Commercial",
      image: project2,
      description: "Large-scale commercial development with comprehensive cost estimation and project management.",
      pdfUrl: "https://drive.google.com/file/d/19YoCGqg_ED3ZLUli-FNGokryWdosgehp/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=19YoCGqg_ED3ZLUli-FNGokryWdosgehp"
    },
    {
      title: "M.M.R. Mohamed Commercial Project",
      category: "Commercial",
      image: project3,
      description: "Commercial construction project featuring detailed BOQ and cost analysis.",
      pdfUrl: "https://drive.google.com/file/d/19b4GjTqrp23pA7HTwPwpJDg-g36bYTRL/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=19b4GjTqrp23pA7HTwPwpJDg-g36bYTRL"
    },
    {
      title: "M.M.R. Mohamed Interior Project",
      category: "Interior",
      image: project1,
      description: "Interior design and construction project with complete cost management and quality control.",
      pdfUrl: "https://drive.google.com/file/d/19ZkdBsc2lj5m6-YxbhVYfrR_uocxnWYB/preview",
      downloadUrl: "https://drive.google.com/uc?export=download&id=19ZkdBsc2lj5m6-YxbhVYfrR_uocxnWYB"
    }
  ];

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore detailed project documentation including BOQ, cost analysis, and project specifications.
              Click on any project to view the complete documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex items-center gap-2 text-accent">
                      <FileText className="h-6 w-6" />
                      <span className="font-semibold">View Documentation</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-accent text-accent-foreground">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <ProjectModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            project={selectedProject}
          />

        </div>
      </div>
    </section>
  );
};

export default Projects;
