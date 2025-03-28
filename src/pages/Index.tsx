
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, DownloadCloud, FileText, Mail } from 'lucide-react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';

const Index = () => {
  useEffect(() => {
    // Add animation classes to elements when they enter the viewport
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-portfolio-800 via-portfolio-700 to-portfolio-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 md:pr-8 mb-10 md:mb-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
                Welcome to my digital portfolio!
              </h1>
              <p className="text-xl text-portfolio-100 mb-8 animate-slide-right">
                I'm <span className="font-semibold">Jay Patel</span>, a Computer Systems Technology student passionate about web development and cutting-edge technologies.
              </p>
              <div className="flex flex-wrap gap-4 animate-slide-right" style={{ animationDelay: '300ms' }}>
                <Button asChild size="lg" className="bg-white text-portfolio-800 hover:bg-portfolio-100">
                  <Link to="/projects">
                    <Code className="mr-2 h-5 w-5" />
                    View Projects
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-2/5 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <div className="aspect-square max-w-xs mx-auto bg-white rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://placehold.co/600x600/EEEEFF/1a365d?text=Jay+Patel&font=montserrat" 
                  alt="Jay Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0">
            <SectionHeader 
              title="About Me" 
              subtitle="I'm a Computer Systems Technology student at Saskatchewan Polytechnic with a strong passion for building scalable web applications."
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-on-scroll opacity-0">
              <p className="text-gray-700 mb-6">
                My expertise lies in full-stack development using JavaScript, Vue.js, Node.js, MongoDB, and AWS. I have also worked on AI-powered projects like 'Path to Career,' an AI chatbot designed to provide career insights.
              </p>
              <Button asChild className="bg-portfolio-600 hover:bg-portfolio-700">
                <Link to="/about" className="flex items-center">
                  Learn more about me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 animate-on-scroll opacity-0">
              <div className="bg-portfolio-50 p-4 rounded-lg text-center">
                <Code className="h-8 w-8 text-portfolio-600 mx-auto mb-2" />
                <p className="font-medium text-portfolio-800">Web Dev</p>
              </div>
              <div className="bg-portfolio-50 p-4 rounded-lg text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-600 mx-auto mb-2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                <p className="font-medium text-portfolio-800">Security</p>
              </div>
              <div className="bg-portfolio-50 p-4 rounded-lg text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-600 mx-auto mb-2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                <p className="font-medium text-portfolio-800">Cloud</p>
              </div>
              <div className="bg-portfolio-50 p-4 rounded-lg text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-600 mx-auto mb-2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                <p className="font-medium text-portfolio-800">AI</p>
              </div>
              <div className="bg-portfolio-50 p-4 rounded-lg text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-600 mx-auto mb-2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                <p className="font-medium text-portfolio-800">Desktop</p>
              </div>
              <div className="bg-portfolio-50 p-4 rounded-lg text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-600 mx-auto mb-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <p className="font-medium text-portfolio-800">Teamwork</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0">
            <SectionHeader 
              title="Featured Projects" 
              subtitle="Here are some of my recent projects showcasing my skills and expertise."
            />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="animate-on-scroll opacity-0">
              <ProjectCard
                title="Path to Career (AI Chatbot)"
                description="An AI-powered chatbot designed to provide career advice based on user queries."
                technologies={["Node.js", "Vue.js", "MongoDB", "AWS Lambda"]}
                features={[
                  "Natural language processing (NLP) for intelligent responses",
                  "User authentication and data storage",
                  "Secure cloud-based hosting using AWS"
                ]}
                challenges="Implemented an optimized response model to improve chatbot accuracy."
                githubUrl="https://github.com/JayPatel/PathToCareer"
              />
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <ProjectCard
                title="Job Board Web Application"
                description="A web application that allows users to search and save job listings using the JSearch API."
                technologies={["Node.js", "Vue.js", "Multer", "MongoDB"]}
                features={[
                  "Job search with filtering and sorting options",
                  "Resume upload and application tracking",
                  "Secure API communication"
                ]}
                challenges="Implemented job sorting for better user experience."
                githubUrl="https://github.com/JayPatel/JobBoardApp"
              />
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <ProjectCard
                title="AI-Powered Resume Analyzer"
                description="A tool that analyzes resumes and provides suggestions for improvement based on AI models."
                technologies={["Node.js", "OpenAI API", "Vue.js"]}
                features={[
                  "AI-based resume evaluation and suggestions",
                  "User-friendly UI for quick analysis",
                  "Secure document uploads"
                ]}
                challenges="Implemented data privacy measures for secure resume storage."
                githubUrl="https://github.com/JayPatel/ResumeAnalyzer"
              />
            </div>
          </div>
          
          <div className="text-center mt-12 animate-on-scroll opacity-0">
            <Button asChild className="bg-portfolio-600 hover:bg-portfolio-700">
              <Link to="/projects" className="flex items-center">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resume & Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm animate-on-scroll opacity-0">
              <div className="flex items-start mb-6">
                <div className="bg-portfolio-100 p-3 rounded-lg mr-4">
                  <FileText className="h-6 w-6 text-portfolio-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">My Resume</h3>
                  <p className="text-gray-600">
                    View my complete education, experience and skills
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button asChild className="bg-portfolio-600 hover:bg-portfolio-700">
                  <Link to="/resume">View Resume</Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="/resume.pdf" download>
                    <DownloadCloud className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm animate-on-scroll opacity-0">
              <div className="flex items-start mb-6">
                <div className="bg-portfolio-100 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-portfolio-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Get In Touch</h3>
                  <p className="text-gray-600">
                    Have a question or want to work together?
                  </p>
                </div>
              </div>
              <Button asChild className="bg-portfolio-600 hover:bg-portfolio-700">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
