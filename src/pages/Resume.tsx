
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import { Download } from 'lucide-react';

const Resume = () => {
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

  return (
    <Layout>
      <section className="bg-gradient-to-br from-portfolio-800 via-portfolio-700 to-portfolio-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in">Resume</h1>
              <p className="text-xl text-portfolio-100 mb-6 animate-slide-right">
                A summary of my education, work experience, and skills
              </p>
            </div>
            <div className="animate-slide-right" style={{ animationDelay: '200ms' }}>
              <Button className="bg-white text-portfolio-800 hover:bg-portfolio-100" size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll opacity-0">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="p-8 bg-portfolio-50">
              <h2 className="text-3xl font-bold mb-2">Jay Patel</h2>
              <p className="text-lg text-gray-600 mb-4">Computer Systems Technology Student</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-600 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    jay.patel@email.com
                  </p>
                  <p className="text-gray-700 flex items-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-600 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Saskatchewan, Canada
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-600 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    linkedin.com/in/jaypatel
                  </p>
                  <p className="text-gray-700 flex items-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-600 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    github.com/JayPatel
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-portfolio-700">Summary</h3>
              <p className="text-gray-700 mb-0">
                Computer Systems Technology student at Saskatchewan Polytechnic with expertise in full-stack development
                using JavaScript, Vue.js, Node.js, MongoDB, and AWS. Passionate about building scalable web applications
                and AI-driven solutions. Strong problem-solving skills and ability to work effectively in team environments.
              </p>
            </div>
            
            <div className="p-8 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-portfolio-700">Education</h3>
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold">Diploma in Computer Systems Technology</h4>
                    <p className="text-gray-600">Saskatchewan Polytechnic</p>
                  </div>
                  <span className="text-gray-500">2023 - 2025 (Expected)</span>
                </div>
                <p className="text-gray-700 mt-2">
                  Coursework focused on programming, web development, cloud computing, and database management.
                </p>
              </div>
            </div>
            
            <div className="p-8 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-portfolio-700">Work Experience</h3>
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold">Cook</h4>
                    <p className="text-gray-600">Chubby's Bar & Grill</p>
                  </div>
                  <span className="text-gray-500">2022 - 2023</span>
                </div>
                <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
                  <li>Developed strong customer service and teamwork skills in a fast-paced environment</li>
                  <li>Managed multiple tasks simultaneously in high-pressure situations</li>
                  <li>Collaborated effectively with a diverse team</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold">Project Developer</h4>
                    <p className="text-gray-600">Academic & Personal Projects</p>
                  </div>
                  <span className="text-gray-500">2023 - Present</span>
                </div>
                <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
                  <li>Built an AI chatbot for career guidance using Node.js and Vue.js</li>
                  <li>Created a job board application with MongoDB and AWS integration</li>
                  <li>Developed an AI-powered resume analyzer with secure document handling</li>
                </ul>
              </div>
            </div>
            
            <div className="p-8 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-portfolio-700">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Technical Skills</h4>
                  <ul className="text-gray-700 list-disc pl-5 space-y-1">
                    <li><span className="font-medium">Programming Languages:</span> JavaScript, Java</li>
                    <li><span className="font-medium">Web Development:</span> Vue.js, Node.js, MongoDB</li>
                    <li><span className="font-medium">Cloud & Databases:</span> AWS (S3, Lambda, Paramstore, EC2), Microsoft Access</li>
                    <li><span className="font-medium">Other Technologies:</span> Ethical Hacking, Prompt Engineering, Microsoft Office</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Soft Skills</h4>
                  <ul className="text-gray-700 list-disc pl-5 space-y-1">
                    <li>Public Speaking</li>
                    <li>Communication</li>
                    <li>Customer Service</li>
                    <li>Project Management</li>
                    <li>Problem Solving</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="p-8 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-portfolio-700">Certifications</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-2">
                <li><span className="font-medium">Ethical Hacking</span> - Completed in 2024</li>
                <li><span className="font-medium">Cloud Security Fundamentals</span> - Completed in 2023</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
