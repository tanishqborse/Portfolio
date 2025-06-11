
import React from 'react';
import { Building, Calendar, Award, Users, TrendingUp } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "Co-Founder",
      company: "CAMA Security Inc.",
      period: "May 2024 – Present",
      icon: <Award size={24} />,
      achievements: [
        "Led development of AI-driven cybersecurity solutions",
        "Secured $15K Lockheed Martin innovation award",
        "Built enterprise-grade threat detection platform",
        "Established strategic partnerships with Fortune 500 companies"
      ]
    },
    {
      title: "Teaching Assistant",
      company: "Rochester Institute of Technology",
      period: "Jan 2023 – May 2024",
      icon: <Users size={24} />,
      achievements: [
        "Guided 300+ students through cybersecurity fundamentals",
        "Designed and delivered 50+ hands-on security labs",
        "Mentored students in penetration testing and secure coding",
        "Achieved 95% student satisfaction rating"
      ]
    },
    {
      title: "Cybersecurity Engineer Co-op",
      company: "Poseidon Systems",
      period: "May 2023 – Dec 2023",
      icon: <TrendingUp size={24} />,
      achievements: [
        "Developed SIEM platform reducing security workload by 35%",
        "Implemented automated threat detection algorithms",
        "Conducted vulnerability assessments for client infrastructures",
        "Streamlined incident response procedures"
      ]
    },
    {
      title: "Application Security Engineer",
      company: "Infopercept Consulting",
      period: "Jun 2021 – Dec 2021",
      icon: <Building size={24} />,
      achievements: [
        "Performed security audits for web applications",
        "Identified and remediated critical vulnerabilities",
        "Developed secure coding guidelines",
        "Trained development teams on security best practices"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800/70 transition-all transform hover:scale-[1.02] shadow-lg">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="bg-teal-600 rounded-full p-3 text-white">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-xl text-teal-400 font-semibold">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
