import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Brain, 
  Settings,
  Palette,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Data",
      icon: Code2,
      skills: ["Python", "SQL", "Bash", "pandas", "NumPy", "scikit-learn"],
      color: "text-secondary"
    },
    {
      title: "ML & NLP",
      icon: Brain,
      skills: ["PyTorch", "TensorFlow", "SpaCy", "NLTK", "RAG", "Prompt Engineering"],
      color: "text-accent"
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["AWS (S3, Lambda, Bedrock)", "GCP (Vertex AI, Gemini)", "Azure ML Studio", "Docker"],
      color: "text-primary"
    },
    {
      title: "GenAI & APIs",
      icon: Brain,
      skills: ["OpenAI", "Bedrock", "Gemini", "Claude", "API Integration", "ETL Pipelines"],
      color: "text-secondary"
    },
    {
      title: "Data Tools",
      icon: Database,
      skills: ["Oracle", "MySQL", "MSSQL", "DynamoDB", "JSON/CSV Processing", "Data Validation"],
      color: "text-accent"
    },
    {
      title: "Visualization & Tools",
      icon: Settings,
      skills: ["Tableau", "Power BI", "Git", "CI/CD", "JIRA", "Streamlit"],
      color: "text-primary"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Terminal-style header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block mb-6">
            <div className="font-mono text-sm glass-card rounded-lg px-4 py-2 border border-border/50">
              <span className="text-primary">$</span> <span className="text-muted-foreground">cat skills.json</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks 
            I use to build exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card p-6 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-2xl bg-background/50 ${category.color} mr-4`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2 font-mono text-sm">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="px-3 py-2 bg-background/50 rounded-xl text-muted-foreground hover:text-foreground transition-smooth flex items-center gap-2"
                  >
                    <span className="text-primary">→</span> {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "FFmpeg", "pydub", "noisereduce", "matplotlib", "Tkinter", "WER Evaluation",
              "WordPress", "HTML/CSS", "Adobe Photoshop", "Canva", "Linux", "PII Detection"
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 glass-card text-sm font-medium text-muted-foreground hover:text-secondary transition-smooth hover-lift"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;