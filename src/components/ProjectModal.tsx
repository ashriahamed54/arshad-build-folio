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
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl mb-2">{project.title}</DialogTitle>
              <Badge className="bg-accent text-accent-foreground mb-4">
                {project.category}
              </Badge>
              <p className="text-muted-foreground mb-4">{project.description}</p>
            </div>
            <Button
              onClick={() => window.open(project.downloadUrl, '_blank')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </DialogHeader>

        <div className="mt-6">
          <div className="bg-muted/30 rounded-lg p-4 mb-4 flex items-center gap-3">
            <FileText className="h-5 w-5 text-accent" />
            <div>
              <p className="font-semibold text-foreground">Project Documentation</p>
              <p className="text-sm text-muted-foreground">
                View the complete project documentation including BOQ, cost analysis, and specifications
              </p>
            </div>
          </div>

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
