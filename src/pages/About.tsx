
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import SkillTag from '@/components/SkillTag';

const About = () => {
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

  const skills = {
    languages: ['JavaScript', 'Java'],
    web: ['Vue.js', 'Node.js', 'MongoDB'],
    cloud: ['AWS S3', 'AWS Lambda', 'AWS Paramstore', 'AWS EC2'],
    databases: ['MongoDB', 'Microsoft Access'],
    other: ['Ethical Hacking', 'Prompt Engineering', 'Microsoft Office'],
    soft: ['Public Speaking', 'Communication', 'Customer Service', 'Project Management']
  };

  return (
    <Layout>
      <section className="bg-gradient-to-br from-portfolio-800 via-portfolio-700 to-portfolio-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-10 md:mb-0">
              <div className="aspect-square max-w-xs mx-auto bg-white rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://placehold.co/600x600/EEEEFF/1a365d?text=Jay+Patel&font=montserrat" 
                  alt="Jay Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in">About Me</h1>
              <p className="text-xl text-portfolio-100 mb-6 animate-slide-right">
                Computer Systems Technology Student at Saskatchewan Polytechnic
              </p>
              <div className="animate-slide-right" style={{ animationDelay: '200ms' }}>
                <p className="text-portfolio-50 mb-4 leading-relaxed">
                  I am a Computer Systems Technology student at Saskatchewan Polytechnic with a strong passion for building scalable web applications. My expertise lies in full-stack development using JavaScript, Vue.js, Node.js, MongoDB, and AWS.
                </p>
                <p className="text-portfolio-50 leading-relaxed">
                  I have also worked on AI-powered projects like 'Path to Career,' an AI chatbot designed to provide career insights. My goal is to leverage my technical skills to create innovative solutions that solve real-world problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0">
            <SectionHeader 
              title="My Skills" 
              subtitle="A summary of my technical and soft skills"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-on-scroll opacity-0">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-4 text-portfolio-700">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map(skill => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-4 text-portfolio-700">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.web.map(skill => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-4 text-portfolio-700">Cloud & Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.cloud.concat(skills.databases).map(skill => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-4 text-portfolio-700">Other Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.other.map(skill => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-4 text-portfolio-700">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map(skill => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0">
            <SectionHeader 
              title="Education & Experience" 
              subtitle="My academic and professional journey"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="animate-on-scroll opacity-0">
              <h3 className="text-2xl font-bold mb-6 text-portfolio-700">Education</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-lg">Diploma in Computer Systems Technology</h4>
                  <span className="bg-portfolio-100 text-portfolio-700 text-xs font-medium px-2.5 py-0.5 rounded">2023 - 2025</span>
                </div>
                <p className="text-gray-600 mb-3">Saskatchewan Polytechnic</p>
                <p className="text-gray-700">
                  Currently pursuing a diploma in Computer Systems Technology with a focus on web development
                  and cloud technologies. Expected graduation in June 2025.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-bold text-lg mb-4">Certifications</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-portfolio-100 p-1 rounded mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-600"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    </div>
                    <div>
                      <p className="font-medium">Ethical Hacking</p>
                      <p className="text-sm text-gray-600">Completed in 2024</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-portfolio-100 p-1 rounded mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div>
                      <p className="font-medium">Cloud Security Fundamentals</p>
                      <p className="text-sm text-gray-600">Completed in 2023</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <h3 className="text-2xl font-bold mb-6 text-portfolio-700">Experience</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-lg">Cook</h4>
                  <span className="bg-portfolio-100 text-portfolio-700 text-xs font-medium px-2.5 py-0.5 rounded">2022 - 2023</span>
                </div>
                <p className="text-gray-600 mb-3">Chubby's Bar & Grill</p>
                <p className="text-gray-700 mb-4">
                  Worked as a cook, developing strong customer service and teamwork skills in a fast-paced environment.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-600 mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Managed multiple tasks simultaneously in high-pressure situations</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-600 mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Collaborated effectively with a diverse team</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-600 mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Developed problem-solving skills to handle unexpected challenges</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-lg">Project Developer</h4>
                  <span className="bg-portfolio-100 text-portfolio-700 text-xs font-medium px-2.5 py-0.5 rounded">2023 - Present</span>
                </div>
                <p className="text-gray-600 mb-3">Academic & Personal Projects</p>
                <p className="text-gray-700 mb-4">
                  Developed multiple web applications and AI-powered tools as part of academic work and personal projects.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-600 mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Built an AI chatbot for career guidance using Node.js and Vue.js</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-600 mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Created a job board application with MongoDB and AWS integration</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-600 mr-2 mt-1"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Developed an AI-powered resume analyzer with secure document handling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
