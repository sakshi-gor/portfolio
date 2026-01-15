import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Data Science Developer",
      company: "Loom Analytics",
      location: "Toronto, ON",
      period: "September 2023 - April 2025",
      description: "Designed and deployed compliance-driven NLP pipelines for PII detection and redaction. Automated audio preprocessing and multi-channel segmentation. Integrated GenAI APIs for data enrichment and grammar correction.",
      achievements: [
        "Improved privacy compliance accuracy and reduced manual review by 20%",
        "Cut manual data-prep time by 70% with audio automation",
        "Shortened deployment time by 25% with GenAI integration",
        "Reduced debugging time by 50% with standardized data pipelines"
      ],
      technologies: ["Python", "SpaCy", "FFmpeg", "pydub", "OpenAI", "Bedrock", "Gemini", "Claude", "SQL"]
    },
    {
      id: 2,
      title: "Researcher Intern",
      company: "Loom Analytics",
      location: "Toronto, ON",
      period: "March 2023 - August 2023",
      description: "Built an audio noise-reduction pipeline that improved speech-to-text quality and model inputs. Implemented WER (Word Error Rate) evaluations to benchmark transcript improvements and guide model tuning.",
      achievements: [
        "Improved speech-to-text quality with noise reduction pipeline",
        "Implemented WER evaluations for model benchmarking",
        "Enhanced model inputs through audio preprocessing"
      ],
      technologies: ["Python", "noisereduce", "FFmpeg", "pydub", "SpaCy", "NLTK"]
    },
    {
      id: 3,
      title: "Graphic Designer Intern",
      company: "Milestone NGO",
      location: "WFH, India",
      period: "April 2020 - July 2020",
      description: "Created campaign visuals and web content using Adobe Photoshop and Canva. Contributed to website UI updates to increase outreach.",
      achievements: [
        "Designed campaign visuals for multiple initiatives",
        "Enhanced website UI to improve user engagement",
        "Increased outreach through effective visual content"
      ],
      technologies: ["Adobe Photoshop", "Canva", "Web Design"]
    },
    {
      id: 4,
      title: "WordPress Development Intern",
      company: "GujInfotech",
      location: "Gujarat, India",
      period: "December 2018",
      description: "Developed WordPress sites using WPBakery, custom HTML/CSS, and plugin configurations for small business clients.",
      achievements: [
        "Built WordPress sites for multiple small business clients",
        "Customized themes with HTML/CSS",
        "Configured plugins to meet client requirements"
      ],
      technologies: ["WordPress", "WPBakery", "HTML", "CSS", "Plugins"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Terminal-style header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block mb-6">
            <div className="font-mono text-sm glass-card rounded-lg px-4 py-2 border border-border/50">
              <span className="text-primary">$</span> <span className="text-muted-foreground">git log --oneline career</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey through various roles and companies, 
            building expertise in data science and ML engineering.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary via-accent to-primary rounded-full"></div>

          {experiences.map((experience, index) => (
            <div 
              key={experience.id}
              className={`relative flex items-start mb-12 animate-slide-in ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-gradient-secondary rounded-full border-4 border-background z-10 mt-6"></div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className="glass-card p-6 hover-lift">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {experience.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground text-sm">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        {experience.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {experience.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {experience.period}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies - Terminal style */}
                  <div className="flex flex-wrap gap-2 font-mono">
                    {experience.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-background/80 rounded-lg text-xs text-muted-foreground border border-border/30"
                      >
                        <span className="text-primary">#</span>{tech.toLowerCase().replace(/\s+/g, '-')}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;