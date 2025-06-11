
import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, CheckCircle, ExternalLink } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { sanitizeInput, isValidEmail } from '@/lib/security';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('tb7223@rit.edu');
      setCopied(true);
      toast({
        title: "Email copied!",
        description: "Email address has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // For now, just show success message
      // In production, you would integrate with a secure form service
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss cybersecurity challenges or explore collaboration opportunities? 
            I'm always open to connecting with fellow security professionals and potential employers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                <div className="bg-teal-600 rounded-full p-3 text-white">
                  <Mail size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">tb7223@rit.edu</p>
                </div>
                <button
                  onClick={copyEmail}
                  className="text-teal-400 hover:text-white transition-colors"
                  aria-label="Copy email address"
                >
                  {copied ? <CheckCircle size={20} /> : <Copy size={20} />}
                </button>
              </div>

              <a 
                href="https://linkedin.com/in/tanishqborse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group"
              >
                <div className="bg-blue-600 rounded-full p-3 text-white">
                  <ExternalLink size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <p className="text-white font-medium group-hover:text-teal-400 transition-colors">
                    linkedin.com/in/tanishqborse
                  </p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg">
                <div className="bg-green-600 rounded-full p-3 text-white">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">New York, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Secure Contact Form */}
          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-gray-400 text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  maxLength={100}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  maxLength={254}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                  autoComplete="email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  maxLength={1000}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2025 Tanishq Borse. Built with React, Three.js, and a passion for cybersecurity.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            <a href="/.well-known/security.txt" className="hover:text-teal-400 transition-colors">
              Security Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
