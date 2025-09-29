import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, ArrowDown } from "lucide-react";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--accent)) 35px, hsl(var(--accent)) 36px)`
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 inline-block">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent shadow-2xl animate-scale-in">
              <img 
                src={profilePlaceholder} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Mohamed Mashood<br />Arshad Mohamed
          </h1>
          <div className="inline-block bg-accent px-6 py-3 rounded-full mb-6">
            <p className="text-xl md:text-2xl font-semibold text-white">
              Quantity Surveyor
            </p>
          </div>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            B.Sc. (Hons) in QS | HND QS & Construction | Construction Management Specialist
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 shadow-xl transition-all hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 transition-all hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-wrap gap-6 justify-center text-white/80 text-sm">
            <a href="tel:+94775127647" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              +94 775 127 647
            </a>
            <a href="mailto:arshadmmashood@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              arshadmmashood@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/mohamed-mashood-arshad-mohamed-0555a4219" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn Profile
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-8 w-8 text-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
