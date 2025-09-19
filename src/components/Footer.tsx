
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Mouayed Amr
          </div>
          <p className="text-gray-400 mb-8">
            Flutter Developer • Creating Beautiful Mobile Experiences
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/MouayedAmrr" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/mouayedamr/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:mouayed.amr@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Mouayed Amr. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
