import { Card } from "@/components/ui/card";
import { Building2, Users, TrendingUp, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Building2,
      title: "Construction Expertise",
      description: "Hands-on experience in residential and commercial projects"
    },
    {
      icon: Users,
      title: "Client Relations",
      description: "Strong communication with clients, contractors & consultants"
    },
    {
      icon: TrendingUp,
      title: "Cost Management",
      description: "Accurate estimates and effective budget control"
    },
    {
      icon: Award,
      title: "Quality Focused",
      description: "Detail-oriented with commitment to excellence"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I have a strong background in construction management with extensive hands-on 
                experience on-site. I excel at navigating complex negotiations and providing 
                accurate construction estimates.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With strong communication skills, I effectively collaborate with various clients 
                and sub-contractors. I thrive under pressure, meet deadlines consistently, and 
                bring a highly organized, detail-oriented approach to my work.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm capable of working independently on a diverse range of residential and 
                commercial projects, always ensuring the highest standards of quality and professionalism.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              {highlights.map((item, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-accent"
                >
                  <item.icon className="h-10 w-10 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">Languages</h3>
            <div className="flex justify-center gap-8 flex-wrap">
              {['English', 'Tamil', 'Sinhala'].map((lang) => (
                <div key={lang} className="px-6 py-3 bg-card border-2 border-border rounded-lg shadow-sm">
                  <span className="font-semibold text-foreground">{lang}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
