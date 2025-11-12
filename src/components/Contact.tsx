
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github } from 'lucide-react';
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section 
      ref={ref}
      id="contact" 
      className={`py-20 bg-gray-800 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white text-center">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed text-center">
              I'm always open to discussing new opportunities, interesting projects, or just having a 
              conversation about Flutter development. Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white text-lg">Email</p>
                  <a 
                    href="mailto:mouayed.amr@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
                  >
                    mouayed.amr@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Linkedin size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white text-lg">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/mouayedamr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
                  >
                    Mouayed Amr
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Github size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white text-lg">GitHub</p>
                  <a 
                    href="https://github.com/MouayedAmrr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
                  >
                    MouayedAmrr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
