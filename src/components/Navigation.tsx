
import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-teal-400">
            Tanishq Borse
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('about')} className="hover:text-teal-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-teal-400 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-teal-400 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('certifications')} className="hover:text-teal-400 transition-colors">
              Certifications
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-teal-400 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('blog')} className="hover:text-teal-400 transition-colors">
              Blog
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-teal-400 transition-colors">
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('resume')}
              className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-lg transition-colors"
            >
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-sm rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-teal-400 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-left hover:text-teal-400 transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left hover:text-teal-400 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('certifications')} className="text-left hover:text-teal-400 transition-colors">
                Certifications
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-teal-400 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('blog')} className="text-left hover:text-teal-400 transition-colors">
                Blog
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-teal-400 transition-colors">
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('resume')}
                className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-lg transition-colors w-fit"
              >
                <Download size={16} />
                <span>Resume</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
