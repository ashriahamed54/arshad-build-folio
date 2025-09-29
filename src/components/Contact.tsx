import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+94 775 127 647",
      href: "tel:+94775127647"
    },
    {
      icon: Mail,
      label: "Email",
      value: "arshadmmashood@gmail.com",
      href: "mailto:arshadmmashood@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "147/1, Batupitiya, Kandy, Sri Lanka",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "View Profile",
      href: "https://www.linkedin.com/in/mohamed-mashood-arshad-mohamed-0555a4219"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm available for new opportunities and collaborations. 
              Feel free to reach out for quantity surveying services or construction consultations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6 animate-slide-in">
              <Card className="p-8 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-accent/20 rounded-lg">
                        <item.icon className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/70 mb-1">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href}
                            target={item.label === "LinkedIn" ? "_blank" : undefined}
                            rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                            className="font-semibold hover:text-accent transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-semibold">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-muted/50">
                <h4 className="font-bold text-foreground mb-3">Available for Hire</h4>
                <p className="text-sm text-muted-foreground">
                  Open to new opportunities in quantity surveying, construction management, 
                  and project consulting roles.
                </p>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="animate-scale-in">
              <Card className="p-8 h-full flex flex-col justify-center bg-muted/30">
                <Send className="h-16 w-16 text-accent mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Work Together?
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you need professional quantity surveying services, construction consulting, 
                  or project management expertise, I'm here to help bring your vision to life with 
                  accuracy and professionalism.
                </p>
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                    onClick={() => window.location.href = 'mailto:arshadmmashood@gmail.com'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Me an Email
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                    onClick={() => window.location.href = 'tel:+94775127647'}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
