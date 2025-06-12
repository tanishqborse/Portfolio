
import React from 'react';
import { Shield, Award, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const Certifications = () => {
  const certifications = [
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2024",
      status: "Active",
      verificationUrl: "${import.meta.env.BASE_URL}Certification/ceh.pdf",
      description: "Comprehensive ethical hacking and penetration testing certification"
    },
    {
      name: "CISSP",
      issuer: "ISC2",
      date: "2023",
      status: "In Progress",
      verificationUrl: "#",
      description: "Information Systems Security Professional certification"
    },
    {
      name: "Masters in Cybersecurity",
      issuer: "Rochester Institute of Technology",
      date: "2025",
      status: "Active",
      verificationUrl: "https://lnkd.in/e8QMKcuQ",
      description: "Foundation-level security skills and knowledge certification"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-teal-400">Certifications</span> & Credentials
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications demonstrating expertise in cybersecurity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:border-teal-500 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Shield className="h-8 w-8 text-teal-400" />
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'Active' 
                      ? 'bg-green-900 text-green-300' 
                      : 'bg-yellow-900 text-yellow-300'
                  }`}>
                    {cert.status}
                  </span>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-teal-400 transition-colors">
                  {cert.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Award className="h-4 w-4 mr-2 text-teal-400" />
                    <span className="font-medium">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-4 w-4 mr-2 text-teal-400" />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{cert.description}</p>
                  <a 
                    href={cert.verificationUrl}
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors text-sm"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Verify Certification
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
