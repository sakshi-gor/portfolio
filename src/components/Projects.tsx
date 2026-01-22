import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { Button } from '@/components/ui/button';

import portfolioImg from "@/assets/portfolio-preview.png";
import webgetImg from "@/assets/webget-preview.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Site",
      description: "A personal portfolio site showcasing my projects and skills. Built with React, Tailwind CSS, and Framer Motion.",
      image: portfolioImg,
      tech: ["React", "Tailwind CSS", "PostgreSQL", "Stripe", "AWS"],
      github: "https://github.com/sakshi-gor/portfolio",
      demo: "https://sakshi-gor.github.io/portfolio/",
      stars: 0,
      forks: 0
    },
    {
      id: 2,
      title: "Product Review Analysis",
      description: "Sentiment analysis tool for product reviews using NLP techniques. Built with Streamlit, Plotly, and Matplotlib.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=entropy&auto=format",
      tech: ["Python", "Streamlit", "Matplotlib", "Plotly", "SQL"],
      github: "https://github.com/AnythingIsFineLambton/Product_Review",
      demo: "https://anythingisfinelambton-product-review-home-2t3rw0.streamlit.app/",
      stars: 0,
      forks: 0
    },
    {
      id: 3,
      title: "Personal Blog WordPress",
      description: "Modern personal blog built with WordPress, featuring a clean design, responsive layout, and easy content management. (No GitHub)",
      image: webgetImg,
      tech: ["WordPress", "PHP", "JavaScript", "CSS", "HTML"],
      // github: "https://github.com",
      demo: "https://sakshigor.wordpress.com/",
      stars: 0,
      forks: 0
    },
    // {
    //   id: 4,
    //   title: "Weather Analytics API",
    //   description: "RESTful API for weather data analytics with machine learning predictions. Includes comprehensive documentation and rate limiting.",
    //   image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=entropy&auto=format",
    //   tech: ["Python", "FastAPI", "TensorFlow", "Docker", "Redis"],
    //   github: "https://github.com",
    //   demo: "https://demo.com",
    //   stars: 156,
    //   forks: 43
    // },
    // {
    //   id: 5,
    //   title: "Mobile Fitness App",
    //   description: "Cross-platform fitness tracking app with workout plans, progress tracking, and social features.",
    //   image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=entropy&auto=format",
    //   tech: ["React Native", "Expo", "Firebase", "Redux", "Styled Components"],
    //   github: "https://github.com",
    //   demo: "https://demo.com",
    //   stars: 98,
    //   forks: 28
    // },
    // {
    //   id: 6,
    //   title: "Blockchain Voting System",
    //   description: "Decentralized voting platform built on Ethereum with smart contracts for transparent and secure elections.",
    //   image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=entropy&auto=format",
    //   tech: ["Solidity", "React", "Web3.js", "Ethereum", "IPFS"],
    //   github: "https://github.com",
    //   demo: "https://demo.com",
    //   stars: 203,
    //   forks: 67
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in full-stack development, 
            AI integration, and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="glass-card hover-lift animate-fade-up group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-secondary transition-smooth">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                    <Star className="h-4 w-4" />
                    <span>{project.stars}</span>
                    <GitFork className="h-4 w-4 ml-2" />
                    <span>{project.forks}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-background/50 rounded-lg text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 hover:bg-secondary hover:text-white transition-smooth"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-smooth"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 animate-fade-in">
          <Button 
            size="lg"
            className="px-8 py-3 rounded-2xl bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-smooth hover-lift"
            asChild
          >
            <a href="https://github.com/sakshi-gor" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;