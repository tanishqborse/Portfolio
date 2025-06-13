import React, { useState } from 'react';
import { Dialog } from "@headlessui/react";
import { ExternalLink, Github, Brain, Shield, Cloud, Lock, Network, Smartphone } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "AI-Driven Dynamic Malware Detection",
      description: "Advanced machine learning system for real-time malware identification and classification using deep neural networks.",
      icon: <Brain size={32} />,
      tags: ["Python", "TensorFlow", "Deep Learning", "Malware Analysis"],
      color: "from-purple-600 to-blue-600",
      details: {
        summary: "This project detects malware using API call sequences and self-supervised Transformers for better zero-day generalization.",
        tools: ["Python", "TensorFlow", "PyTorch", "Nebula", "BPE Tokenizer"],
        image: `${import.meta.env.BASE_URL}Projects/malware.png`
      }
    },
    {
      title: "Secure Web Shield",
      description: "Comprehensive web application security platform with automated vulnerability scanning and threat mitigation.",
      icon: <Shield size={32} />,
      tags: ["Web Security", "OWASP", "Vulnerability Assessment", "Automated Testing"],
      color: "from-green-600 to-teal-600",
      details: {
        summary: "Automated security scanner for OWASP top 10 with live reporting dashboard.",
        tools: ["OWASP ZAP", "Burp Suite", "React", "Node.js"],
        image: `${import.meta.env.BASE_URL}Projects/webshield.png`
      }
    },
    {
      title: "Enterprise Infrastructure Security Lab",
      description: "Complete cybersecurity lab environment for training and testing enterprise security solutions.",
      icon: <Network size={32} />,
      tags: ["Network Security", "Infrastructure", "Pen Testing", "Lab Environment"],
      color: "from-red-600 to-pink-600",
      details: {
        summary: "Full enterprise infrastructure simulation for vulnerability assessment, SOC runbooks and red-blue team exercises.",
        tools: ["VMware", "Active Directory", "SIEM", "Firewalls", "Kali Linux"],
        image: `${import.meta.env.BASE_URL}Projects/enterprise.png`
      }
    },
    {
      title: "AWS Cybersecurity Report",
      description: "Comprehensive analysis and implementation of cybersecurity best practices for AWS cloud environments.",
      icon: <Cloud size={32} />,
      tags: ["AWS", "Cloud Security", "Risk Assessment", "Compliance"],
      color: "from-yellow-600 to-orange-600",
      details: {
        summary: "Secured AWS cloud workloads following CIS benchmark, NIST 800-53 mappings and threat modeling of cloud-native attack paths.",
        tools: ["AWS IAM", "GuardDuty", "Inspector", "S3 Encryption", "Security Hub"],
        image: `${import.meta.env.BASE_URL}Projects/aws.png`
      }
    },
    {
      title: "Kubernetes Security Hardening",
      description: "Security framework for containerized applications with automated compliance checking and threat detection.",
      icon: <Lock size={32} />,
      tags: ["Kubernetes", "Container Security", "DevSecOps", "Automation"],
      color: "from-indigo-600 to-purple-600",
      details: {
        summary: "Automated hardening of Kubernetes clusters with runtime monitoring and continuous compliance pipelines.",
        tools: ["Kube-Bench", "Trivy", "Falco", "OPA", "GitHub Actions"],
        image: `${import.meta.env.BASE_URL}Projects/kubernetes.png`
      }
    },
    {
      title: "Next-Gen 911 Risk Research",
      description: "Research project analyzing cybersecurity risks in next-generation emergency communication systems.",
      icon: <Smartphone size={32} />,
      tags: ["Research", "Emergency Systems", "Risk Analysis", "IoT Security"],
      color: "from-cyan-600 to-blue-600",
      details: {
        summary: "Analyzed IoT and emergency communication protocols (NG911) for potential adversarial attacks against call-routing and location systems.",
        tools: ["NG911", "IoT", "Zigbee", "Adversarial Modeling", "Denial of Service"],
        image: `${import.meta.env.BASE_URL}Projects/911.png`
      }
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

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
              <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center text-white`}>
                {project.icon}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => setSelectedProject(project)} 
                    className="flex items-center space-x-2 text-teal-400 hover:text-white transition-colors">
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

        {/* Modal */}
        <Dialog open={selectedProject !== null} onClose={() => setSelectedProject(null)} className="relative z-50">
          <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-lg max-w-2xl w-full p-6 relative shadow-xl">
              {selectedProject && (
                <>
                  <img src={selectedProject.details.image} alt={selectedProject.title} className="rounded mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-gray-300 mb-4">{selectedProject.details.summary}</p>
                  <h4 className="text-lg font-semibold text-white mb-2">Tools Used:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.details.tools.map((tool, idx) => (
                      <span key={idx} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">{tool}</span>
                    ))}
                  </div>
                  <button onClick={() => setSelectedProject(null)} className="absolute top-3 right-3 text-white text-2xl">&times;</button>
                </>
              )}
            </div>
          </div>
        </Dialog>
      </div>
    </section>
  );
};
