import { ArrowDown, Download, Github, Linkedin, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Content */}
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text">Sakshi Gor</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-6">
            Data Science Developer
          </h2>

          {/* Terminal-style code accent */}
          <div className="max-w-lg mx-auto mb-8 font-mono text-sm">
            <div className="glass-card rounded-lg p-4 text-left border border-border/50">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/30">
                <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                <div className="w-3 h-3 rounded-full bg-muted-foreground/40"></div>
                <div className="w-3 h-3 rounded-full bg-primary/60"></div>
                <span className="ml-2 text-xs text-muted-foreground">~/sakshi-gor</span>
              </div>
              <div className="space-y-1 text-muted-foreground text-xs">
                <p><span className="text-primary">$</span> cat expertise.json</p>
                <p className="text-foreground/80">{"{"} "nlp": true, "ml_pipelines": true, "cloud": ["AWS", "GCP"] {"}"}</p>
                <p><span className="text-primary">$</span> echo $EXPERIENCE</p>
                <p className="text-foreground/80">2+ years @ Loom Analytics</p>
              </div>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Data Science Developer with 2+ years of experience designing and deploying NLP and ML-driven automation solutions on cloud platforms. 
            Skilled at converting unstructured text and audio into scalable pipelines, integrating GenAI APIs, and improving operational reliability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth px-8 py-3 rounded-2xl hover-lift"
              asChild
            >
              <a href="/Sakshi_Gor_Resume.docx" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-smooth px-8 py-3 rounded-2xl hover-lift"
              asChild
            >
              <a href="https://github.com/sakshi-gor" target="_blank" rel="noopener noreferrer">
                View My Work
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/sakshi-gor" 
              className="p-3 glass-card hover-glow transition-smooth text-muted-foreground hover:text-foreground"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sakshi-gor/" 
              className="p-3 glass-card hover-glow transition-smooth text-muted-foreground hover:text-foreground"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://sakshigor.wordpress.com/" 
              className="p-3 glass-card hover-glow transition-smooth text-muted-foreground hover:text-foreground"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Globe className="h-6 w-6" />
            </a>
            <a 
              href="mailto:sakshi.gor.249@outlook.com" 
              className="p-3 glass-card hover-glow transition-smooth text-muted-foreground hover:text-foreground"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-bounce p-2 text-muted-foreground hover:text-secondary transition-smooth"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;