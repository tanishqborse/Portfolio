
import React from 'react';
import { Code, Shield, Brain, Users } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Code size={24} />,
      skills: [
        "Python", "Deep Learning", "Malware Analysis", "Penetration Testing",
        "Vulnerability Analysis", "Threat Modelling", "Secure Code Review", "Data Analysis"
      ]
    },
    {
      title: "Security Expertise",
      icon: <Shield size={24} />,
      skills: [
        "SIEM Platforms", "Network Security", "IoT Security", "Cloud Security",
        "Incident Response", "Risk Assessment", "Compliance (NIST, ISO 27001)", "Forensics"
      ]
    },
    {
      title: "AI & Analytics",
      icon: <Brain size={24} />,
      skills: [
        "Machine Learning", "Neural Networks", "Anomaly Detection", "Behavioral Analysis",
        "TensorFlow", "PyTorch", "Scikit-learn", "Statistical Analysis"
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users size={24} />,
      skills: [
        "Communication", "Leadership", "Entrepreneurial Spirit", "Confidence",
        "Project Management", "Team Collaboration", "Problem Solving", "Innovation"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.02]">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-teal-600 rounded-full p-3 text-white">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-600 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
