import React, { useState } from 'react';
import { Dialog } from "@headlessui/react";
import { ExternalLink, Github, Brain, Shield, Cloud, Lock, Network, Smartphone } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  icon: JSX.Element;
  tags: string[];
  image: string;
  summary: string;
  tools: string[];
  architecture: string;
}

const projects: Project[] = [
  {
    title: "AI-Driven Dynamic Malware Detection",
    description: "Advanced machine learning system for real-time malware identification and classification using deep neural networks.",
    icon: <Brain size={32} />,
    tags: ["Python", "TensorFlow", "Deep Learning", "Malware Analysis"],
    image: `${import.meta.env.BASE_URL}projects/malware.png`,
    summary: "This project detects malware using API call sequences and self-supervised Transformers for better zero-day generalization.",
    tools: ["Python", "TensorFlow", "PyTorch", "Nebula", "BPE Tokenizer"],
    architecture: `${import.meta.env.BASE_URL}projects/malware_arch.png`
  },
  {
    title: "Secure Web Shield",
    description: "Comprehensive web application security platform with automated vulnerability scanning and threat mitigation.",
    icon: <Shield size={32} />,
    tags: ["Web Security", "OWASP", "Vulnerability Assessment", "Automated Testing"],
    image: `${import.meta.env.BASE_URL}projects/webshield.png`,
    summary: "Automated security scanner for OWASP top 10 with live reporting dashboard.",
    tools: ["OWASP ZAP", "Burp Suite", "React", "Node.js"],
    architecture: `${import.meta.env.BASE_URL}projects/webshield_arch.png`
  },
  // ... (Add the rest as before)
];

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-900 rounded-xl p-6 w-full max-w-3xl relative overflow-y-auto max-h-[90vh]">
        <button onClick={onClose} className="absolute top-3 right-3 text-white font-bold text-lg">×</button>
        <div className="mb-4">
          <img src={project.image} alt={project.title} className="rounded-lg w-full object-cover" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
        <p className="text-gray-400 mb-4">{project.summary}</p>
        <h3 className="text-lg font-semibold text-white mb-2">Tools Used:</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.map((tool, i) => (
            <span key={i} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">{tool}</span>
          ))}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Architecture:</h3>
        <div className="mb-4">
          <img src={project.architecture} alt="Architecture" className="rounded-lg w-full object-contain" />
        </div>
      </div>
    </Dialog>
  );
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.02]">
              <div className="h-48 bg-gray-800 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
                />
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  {project.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button onClick={() => setSelectedProject(project)} className="flex items-center space-x-2 text-teal-400 hover:text-white transition-colors">
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">View Details</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject} />
    </section>
  );
};
