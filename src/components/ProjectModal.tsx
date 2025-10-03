import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    description: string;
    pdfUrl: string;
    downloadUrl: string;
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <DialogTitle className="text-2xl mb-2">{project.title}</DialogTitle>
                <Badge className="bg-accent text-accent-foreground mb-4">
                  {project.category}
                </Badge>
              </div>
              <Button
                onClick={() => window.open(project.downloadUrl, '_blank')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
        </DialogHeader>

        <div className="mt-6">
          <div className="relative w-full" style={{ height: '70vh' }}>
            <iframe
              src={project.pdfUrl}
              className="w-full h-full rounded-lg border-2 border-border"
              title={project.title}
              allow="autoplay"
            />
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              If the document doesn't load, please{" "}
              <a
                href={project.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-semibold"
              >
                download it directly
              </a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
