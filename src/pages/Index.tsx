
import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { Certifications } from '../components/Certifications';
import { Projects } from '../components/Projects';
import { Blog } from '../components/Blog';
import { ResumeDownload } from '../components/ResumeDownload';
import { Contact } from '../components/Contact';
import { Navigation } from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <Blog />
      <ResumeDownload />
      <Contact />
    </div>
  );
};

export default Index;
