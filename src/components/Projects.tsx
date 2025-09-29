import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Luxury Residential Development",
      category: "Residential",
      image: project1,
      description: "High-end residential project with modern architecture and premium finishes"
    },
    {
      title: "Commercial Office Complex",
      category: "Commercial",
      image: project2,
      description: "Multi-story commercial building with state-of-the-art facilities"
    },
    {
      title: "Interior Renovation Project",
      category: "Interior",
      image: project3,
      description: "Complete interior renovation with elegant design and quality materials"
    }
  ];

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
              A showcase of recent construction and quantity surveying projects. 
              These images are placeholders - replace with your own project photos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground bg-muted/50 inline-block px-6 py-3 rounded-lg">
              💡 <strong>Note:</strong> Replace these placeholder images with your actual project photos by 
              uploading your images to <code className="bg-background px-2 py-1 rounded">src/assets/</code> 
              and updating the imports in the Projects component.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
