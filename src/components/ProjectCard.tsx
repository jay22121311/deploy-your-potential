
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  challenges: string;
  githubUrl: string;
  demoUrl?: string;
  animationDelay?: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  features, 
  challenges, 
  githubUrl,
  demoUrl,
  animationDelay = 0
}: ProjectCardProps) => {
  return (
    <Card className="card-hover overflow-hidden opacity-0" 
      style={{ 
        animationDelay: `${animationDelay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      <CardHeader className="bg-gradient-to-r from-portfolio-700 to-portfolio-500 text-white">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-portfolio-100">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-portfolio-100 text-portfolio-700">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Key Features</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Challenges & Solutions</h4>
          <p className="text-sm text-gray-700">{challenges}</p>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </Button>
        {demoUrl && (
          <Button variant="default" size="sm" className="bg-portfolio-600 hover:bg-portfolio-700" asChild>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <span>Live Demo</span>
              <ExternalLink size={16} />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
