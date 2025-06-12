import React from 'react';
import { ParticleBackground } from './ParticleBackground';
import { ArrowDown, Download, MessageCircle } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

export const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Security Engineer &{' '}
                <span className="text-teal-400">
                  <Typewriter
                    words={[
                      'AI-Driven Threat Hunter',
                      'SOC Analyst',
                      'Cloud Security Engineer',
                      'Malware Researcher',
                      'Blue Team Defender',
                      'Security Architect'
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                M.S. in Computing Security leveraging deep learning & secure architecture 
                to safeguard modern infrastructures.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href={`${import.meta.env.BASE_URL}one.pdf`} 
                download
                className="flex items-center justify-center space-x-2 bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                <Download size={20} />
                <span className="font-semibold">Download Résumé</span>
              </a>

              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center space-x-2 border border-teal-600 text-teal-400 hover:bg-teal-600 hover:text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                <MessageCircle size={20} />
                <span className="font-semibold">Let's Talk</span>
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-800 rounded-full shadow-2xl"></div>

              <div className="absolute inset-0 rounded-full overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpeg`}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-transparent rounded-full animate-pulse"></div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-teal-400" />
      </div>
    </section>
  );
};
