const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Content */}
        <div className="animate-slide-in text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p>
              I'm a Data Science Developer with 2+ years of experience designing and deploying 
              NLP and ML-driven automation solutions on cloud platforms (AWS, GCP, Azure). 
              I specialize in converting unstructured text and audio into scalable pipelines.
            </p>
            
            <p>
              My expertise includes integrating GenAI APIs (OpenAI, Bedrock, Gemini, Claude), 
              building compliance-driven NLP pipelines, and improving operational reliability 
              through data engineering. I'm passionate about reducing manual effort while 
              improving model quality and data integrity.
            </p>
            
            <p>
              I hold a Postgraduate degree in AI and ML Technology from Lambton College and 
              a Bachelor's in Computer Engineering. I'm persistent, detail-focused, and thrive 
              in collaborative environments where I can solve complex problems with innovative solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
            <div className="glass-card p-6 rounded-2xl hover-lift transition-smooth">
              <div className="text-3xl font-bold text-secondary">2+</div>
              <div className="text-muted-foreground text-sm mt-1">Years Experience</div>
            </div>
            <div className="glass-card p-6 rounded-2xl hover-lift transition-smooth">
              <div className="text-3xl font-bold text-accent">4</div>
              <div className="text-muted-foreground text-sm mt-1">Cloud Platforms</div>
            </div>
            <div className="glass-card p-6 rounded-2xl hover-lift transition-smooth">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground text-sm mt-1">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;