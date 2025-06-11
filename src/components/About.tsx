
import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              As a cybersecurity engineer with a passion for AI-driven threat detection, I specialize in 
              building secure, scalable systems that protect modern digital infrastructures. My expertise 
              spans from malware analysis to secure architecture design, always staying ahead of emerging threats.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Currently pursuing my M.S. in Computing Security at RIT, I combine deep technical knowledge 
              with entrepreneurial spirit, having co-founded CAMA Security Inc. and led numerous successful 
              cybersecurity initiatives.
            </p>
            <div className="flex items-center text-teal-400 mb-2">
              <MapPin size={20} className="mr-2" />
              <span>New York, USA</span>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-600 rounded-full p-2 mt-1">
                  <GraduationCap size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">M.S. Computing Security</h4>
                  <p className="text-teal-400 font-medium">Rochester Institute of Technology</p>
                  <div className="flex items-center text-gray-400 mt-1">
                    <Calendar size={16} className="mr-2" />
                    <span>Expected May 2025</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-600 rounded-full p-2 mt-1">
                  <GraduationCap size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">B.Tech Computer Science & Technology</h4>
                  <p className="text-teal-400 font-medium">MIT WPU</p>
                  <div className="flex items-center text-gray-400 mt-1">
                    <Calendar size={16} className="mr-2" />
                    <span>June 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
