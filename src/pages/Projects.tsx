
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, { threshold: 0.1 });

    const animElements = document.querySelectorAll('.animate-on-scroll');
    animElements.forEach(el => observer.observe(el));

    return () => {
      animElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Path to Career (AI Chatbot)",
      description: "An AI-powered chatbot designed to provide career advice based on user queries.",
      technologies: ["Node.js", "Vue.js", "MongoDB", "AWS Lambda"],
      features: [
        "Natural language processing (NLP) for intelligent responses",
        "User authentication and data storage",
        "Secure cloud-based hosting using AWS"
      ],
      challenges: "Implemented an optimized response model to improve chatbot accuracy.",
      githubUrl: "https://github.com/JayPatel/PathToCareer",
      demoUrl: "https://pathtocareerchatbot.demo",
      image: "https://placehold.co/800x450/EEE/1a365d?text=Path+to+Career"
    },
    {
      id: 2,
      title: "Job Board Web Application",
      description: "A web application that allows users to search and save job listings using the JSearch API.",
      technologies: ["Node.js", "Vue.js", "Multer", "MongoDB"],
      features: [
        "Job search with filtering and sorting options",
        "Resume upload and application tracking",
        "Secure API communication"
      ],
      challenges: "Implemented job sorting for better user experience.",
      githubUrl: "https://github.com/JayPatel/JobBoardApp",
      image: "https://placehold.co/800x450/EEE/1a365d?text=Job+Board+App"
    },
    {
      id: 3,
      title: "AI-Powered Resume Analyzer",
      description: "A tool that analyzes resumes and provides suggestions for improvement based on AI models.",
      technologies: ["Node.js", "OpenAI API", "Vue.js"],
      features: [
        "AI-based resume evaluation and suggestions",
        "User-friendly UI for quick analysis",
        "Secure document uploads"
      ],
      challenges: "Implemented data privacy measures for secure resume storage.",
      githubUrl: "https://github.com/JayPatel/ResumeAnalyzer",
      demoUrl: "https://resume-analyzer-demo.app",
      image: "https://placehold.co/800x450/EEE/1a365d?text=Resume+Analyzer"
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-br from-portfolio-800 via-portfolio-700 to-portfolio-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">My Projects</h1>
          <p className="text-xl text-portfolio-100 max-w-3xl animate-slide-right">
            These projects showcase my skills in web development, AI integration, and cloud technologies.
            Each project demonstrates my problem-solving abilities and technical expertise.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0">
            <SectionHeader 
              title="Featured Projects" 
              subtitle="A collection of my most significant work showcasing different technologies and solutions"
            />
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="animate-on-scroll opacity-0">
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  features={project.features}
                  challenges={project.challenges}
                  githubUrl={project.githubUrl}
                  demoUrl={project.demoUrl}
                  animationDelay={index * 100}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0">
            <SectionHeader 
              title="Development Process" 
              subtitle="How I approach project development from concept to deployment"
            />
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="animate-on-scroll opacity-0">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-portfolio-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-portfolio-700">1</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Planning & Research</h3>
                <p className="text-gray-600">Requirements gathering and solution planning</p>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-portfolio-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-portfolio-700">2</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Design</h3>
                <p className="text-gray-600">Creating architecture and user interface designs</p>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-portfolio-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-portfolio-700">3</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Development</h3>
                <p className="text-gray-600">Writing code and implementing features</p>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-portfolio-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-portfolio-700">4</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Testing & Deployment</h3>
                <p className="text-gray-600">Testing, optimizing, and deploying to production</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
