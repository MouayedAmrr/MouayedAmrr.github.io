
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    window.open('https://drive.google.com/file/d/1kkodVkcWR4WSBzElZXv6qcusKQ_qwaAm/view?usp=drive_link', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <img 
                src="/mouayed_avatar.jpg"
                alt="Mouayed Amr - Flutter Developer" 
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Mouayed Amr</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Flutter Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I create beautiful, cross-platform mobile applications using Flutter and Dart. 
            Passionate about clean code, great user experiences, and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg"
              onClick={downloadCV}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
            >
              Download CV
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              onClick={() => scrollToSection("contact")}
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-8 bg-transparent"
            >
              Contact Me
            </Button>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </button>
      </div>
    </section>
  );
};
