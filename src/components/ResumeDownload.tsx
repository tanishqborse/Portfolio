
import React from 'react';
import { Download, FileText, Eye, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export const ResumeDownload = () => {
  const handleDownload = () => {
    // In a real implementation, this would download the actual resume file
    console.log('Downloading resume...');
    // For now, we'll just show an alert
    alert('Resume download would start here. Please add your actual resume file to the public folder.');
  };

  const handlePreview = () => {
    // In a real implementation, this would open a preview modal or new tab
    console.log('Opening resume preview...');
    alert('Resume preview would open here.');
  };

  return (
    <section id="resume" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download My <span className="text-teal-400">Resume</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get a comprehensive overview of my cybersecurity experience, skills, and achievements
          </p>
        </div>

        <Card className="bg-gray-900 border-gray-700 max-w-2xl mx-auto">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto mb-4 p-4 bg-teal-900/30 rounded-full w-fit">
              <FileText className="h-12 w-12 text-teal-400" />
            </div>
            <CardTitle className="text-2xl text-white mb-2">
              Cybersecurity Engineer Resume
            </CardTitle>
            <div className="flex items-center justify-center text-gray-400 text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              Last updated: March 2024
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">What's included:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Professional experience in cybersecurity
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Technical skills and certifications
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Education and academic achievements
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Key projects and accomplishments
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleDownload}
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
              <Button 
                onClick={handlePreview}
                variant="outline"
                className="flex-1 border-teal-600 text-teal-400 hover:bg-teal-600 hover:text-white"
              >
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              PDF format • 2 pages • Optimized for ATS systems
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
