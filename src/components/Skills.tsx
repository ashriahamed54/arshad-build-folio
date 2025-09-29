import { Card } from "@/components/ui/card";
import { 
  FileSpreadsheet, 
  AlertTriangle, 
  Pencil, 
  FileText, 
  Users, 
  Clock,
  Lightbulb,
  Target,
  MessageSquare,
  Shield,
  Cog,
  Zap
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "MS Excel", icon: FileSpreadsheet },
    { name: "Risk Analysis", icon: AlertTriangle },
    { name: "AutoCAD", icon: Pencil },
    { name: "Microsoft Office", icon: FileText }
  ];

  const professionalSkills = [
    { name: "Team Management", icon: Users },
    { name: "Time Management", icon: Clock },
    { name: "Problem Solving", icon: Lightbulb },
    { name: "Project Handling", icon: Target },
    { name: "Communication", icon: MessageSquare },
    { name: "Leadership", icon: Shield },
    { name: "Supervising", icon: Cog },
    { name: "Critical Thinking", icon: Zap }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          </div>

          {/* Technical Skills */}
          <div className="mb-12 animate-slide-in">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <div className="w-1 h-8 bg-accent"></div>
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technicalSkills.map((skill, index) => (
                <Card 
                  key={skill.name}
                  className="p-6 hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-accent group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <skill.icon className="h-8 w-8 text-accent" />
                    </div>
                    <p className="font-semibold text-foreground">{skill.name}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <div className="w-1 h-8 bg-accent"></div>
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {professionalSkills.map((skill, index) => (
                <Card 
                  key={skill.name}
                  className="p-6 hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-accent group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <skill.icon className="h-8 w-8 text-accent" />
                    </div>
                    <p className="font-semibold text-foreground">{skill.name}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
