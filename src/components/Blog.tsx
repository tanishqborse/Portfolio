
import React from 'react';
import { Calendar, Clock, ArrowRight, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const Blog = () => {
  const articles = [
    {
      title: "AI-Driven Threat Detection: The Future of Cybersecurity",
      excerpt: "Exploring how machine learning algorithms are revolutionizing threat detection and incident response in modern security operations.",
      date: "2024-03-15",
      readTime: "8 min read",
      category: "AI Security",
      link: "#"
    },
    {
      title: "Advanced Malware Analysis Techniques",
      excerpt: "Deep dive into static and dynamic analysis methods for identifying and mitigating sophisticated malware threats.",
      date: "2024-02-28",
      readTime: "12 min read",
      category: "Malware Analysis",
      link: "#"
    },
    {
      title: "Securing Cloud Infrastructure: Best Practices",
      excerpt: "Comprehensive guide to implementing security controls and monitoring in cloud environments.",
      date: "2024-02-10",
      readTime: "10 min read",
      category: "Cloud Security",
      link: "#"
    },
    {
      title: "Zero Trust Architecture Implementation",
      excerpt: "Practical approaches to implementing zero trust principles in enterprise environments.",
      date: "2024-01-22",
      readTime: "15 min read",
      category: "Architecture",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Security <span className="text-teal-400">Insights</span> & Articles
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge and research in cybersecurity, threat analysis, and secure architecture
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-teal-500 transition-all duration-300 group cursor-pointer">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-teal-900 text-teal-300 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                  <FileText className="h-5 w-5 text-teal-400" />
                </div>
                <CardTitle className="text-xl text-white group-hover:text-teal-400 transition-colors line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <div className="flex items-center text-teal-400 group-hover:text-teal-300 transition-colors">
                    <span className="mr-1">Read more</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-teal-600 text-teal-400 hover:bg-teal-600 hover:text-white rounded-lg transition-all">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
