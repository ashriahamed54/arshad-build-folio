import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const responsibilities = [
    "Cost estimation and management - prepare detailed cost analysis and control project expenditures",
    "Contract management - manage variations, claims, and lead negotiations for final payments",
    "Manage contracts with subcontractors and suppliers, ensuring compliance with requirements",
    "Risk analysis and assessment - develop strategies to mitigate risk and ensure optimal outcomes",
    "Supervising and leadership - conduct site visits for accurate pricing aligned with timelines",
    "Maintain excellent working relationships with clients, contractors, and consultants",
    "Financial reporting and analysis - collaborate with project managers to assess performance",
    "Oversee procurement documents, tendering processes, and contractor selection",
    "Manage assessment, evaluation, and negotiation of project changes and variations"
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          </div>

          <Card className="p-8 md:p-10 shadow-xl border-l-4 border-accent animate-slide-in">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Senior Quantity Surveyor & Assistant Project Manager
                </h3>
                <div className="flex items-center gap-2 text-accent font-semibold mb-2">
                  <Briefcase className="h-5 w-5" />
                  <span>Kahatapaya Engineering and Consulting (Pvt) Ltd</span>
                </div>
              </div>
              <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-sm w-fit">
                <Calendar className="h-4 w-4" />
                May 2022 - August 2025
              </Badge>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Kahatapaya (Pvt) Ltd is a leading Sri Lankan construction company providing architectural, 
              interior, consulting, and construction services. I joined as Senior Quantity Surveyor and 
              later served as Assistant Project Manager, carrying out estimating, planning, cost analysis, 
              valuation, and quality checking.
            </p>

            <div className="space-y-3">
              <h4 className="font-bold text-lg text-foreground mb-4">Key Responsibilities:</h4>
              {responsibilities.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="min-w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
