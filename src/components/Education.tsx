import { Card } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const qualifications = [
    {
      degree: "B.Sc. (Hons) in Quantity Surveying",
      institution: "Horizon Campus Sri Lanka",
      certification: "Birmingham City University Certified",
      studentNumber: "22212949",
      icon: GraduationCap
    },
    {
      degree: "BTEC Level 5 HND in Quantity Surveying & Construction Economics",
      institution: "Pearson SRF",
      grade: "Distinction",
      registrationNumber: "LE11538",
      icon: Award
    },
    {
      degree: "Computer Aided Drafting - CAD",
      institution: "Professional Certification",
      icon: BookOpen
    }
  ];

  const additionalQualifications = [
    "Association of Accounting Technician (AAT) - Quantity Methods for Business (Foundation Level)",
    "Association of Accounting Technician (AAT) - Business Law and Ethics (Intermediate Level)"
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Education & Qualifications
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          </div>

          <div className="space-y-6 mb-12">
            {qualifications.map((qual, index) => (
              <Card 
                key={index}
                className="p-6 md:p-8 hover:shadow-xl transition-all border-l-4 border-accent animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <qual.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {qual.degree}
                    </h3>
                    <p className="text-muted-foreground mb-1">{qual.institution}</p>
                    {qual.certification && (
                      <p className="text-sm text-accent font-semibold">{qual.certification}</p>
                    )}
                    {qual.grade && (
                      <p className="text-sm text-accent font-semibold">Grade: {qual.grade}</p>
                    )}
                    {qual.studentNumber && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Student Number: {qual.studentNumber}
                      </p>
                    )}
                    {qual.registrationNumber && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Registration: {qual.registrationNumber}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 md:p-8 bg-card animate-scale-in">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <div className="w-1 h-8 bg-accent"></div>
              Additional Qualifications
            </h3>
            <ul className="space-y-3">
              {additionalQualifications.map((qual, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="min-w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-muted-foreground">{qual}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
