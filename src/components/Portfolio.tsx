
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Portfolio = () => {
  // Trigger animation earlier with rootMargin
  const { ref, isVisible } = useScrollAnimation(0.05, '200px');
  const projects = [
    {
      title: "Programing Quiz App",
      description: "A program that contains exams in subjects such as languages, mathematics, drawing, and programming like HTML and JavaScript, with a cache for the results.",
      image: "/exam_preview.png",
      github: "https://github.com/moyasser20/online_exam_app_elevate",
      apkUrl: "/ExamApp.apk",
      demoUrl: "https://streamable.com/zkhp02",
      technologies: ["Flutter", "Sqlite", "Clean architecture", "REST API", "MVVM","Localization"]
    },
    {
      title: "Flora Mart",
      description: "Application for selling flowers and various types of chocolates,Features include payment integration, order tracking, and full API integration.",
      image: "/flora_preview.png",
      github: "https://github.com/AhmedNasser1999/flower_app",
      apkUrl: "/FloraMart.apk",
      demoUrl: "https://streamable.com/rfmqnu",
      technologies: ["Flutter", "MVI","Firabase","Clean architecture", "REST API","Google Maps","Localization","Push Notifications"]
    },
    {
      title: "Tracking App",
      description: "Stay updated every step of the way with Flora Mart is real-time order tracking. Know exactly when your flowers and chocolates will arrive with live location, delivery updates, and estimated arrival time — all in one place.",
      image: "/tracking_preview.png",
      github: "https://github.com/moyasser20/tarcking_app",
      apkUrl: "/TrackingApp.apk",
      demoUrl: "https://streamable.com/rfmqnu",
      technologies: ["Flutter", "MVI","Firabase","Clean architecture", "REST API","Google Maps","Localization"]
    },
    {
      title: "Pulse Fit",
      description: "PulseFit is a modern fitness and nutrition app that helps users achieve their health goals through personalized workout plans, smart food recommendations, and an AI-powered virtual coach. With a clean and intuitive interface, users can explore daily exercises, tailored meal suggestions, and chat directly with their smart coach for guidance. Designed for all fitness levels, FitZone brings a complete wellness experience into one sleek mobile app.",
      image: "/pulse_fit.png",
      github: "https://github.com/ahmedragaae0120/PluseFit/tree/development",
      apkUrl: "/SuperFittnessApp.apk",
      demoUrl: "#",
      technologies: ["Flutter", "hive", "Gemini", "Firebase","REST API","MVI","Widget Testing","Clean architecture","Localization"]
    },
    {
      title: "Movies App",
      description: "A comprehensive movie application that allows users to discover, browse, and explore a vast collection of movies. Features include detailed movie information, ratings, trailers, and personalized recommendations with a sleek and intuitive user interface.",
      image: "/movies_preview.png",
      github: "https://github.com/MouayedAmrr/MoviesApp_Route",
      apkUrl: "/MoviesApp.apk",
      demoUrl: "https://streamable.com/7fmto5",
      technologies: ["Flutter", "Clean architecture", "Localization", "MVVM", "REST API"]
    },
    {
      title: "Clot E-Commerce App",
      description: "A modern e-commerce application developed during my internship at Link Development. This full-featured shopping app provides a seamless online retail experience with secure authentication, real-time data synchronization, multi-language support, and customizable themes for enhanced user experience.",
      image: "/clot_preview.png",
      github: "https://github.com/YoussefGhonem1/ecommerce_linkdevelpment",
      apkUrl: "/ClotApp.apk",
      demoUrl: "https://streamable.com/gpevbg",
      technologies: ["Flutter", "Firebase Auth", "Firestore", "Localization", "Theming", "Clean Architecture"]
    },

  ];

  const handleViewCode = (githubUrl: string) => {
    if (githubUrl !== "#") {
      window.open(githubUrl, '_blank');
    }
  };

  const handleViewDemo = (demoUrl: string) => {
    if (demoUrl !== "#") {
      window.open(demoUrl, '_blank');
    }
  };


  const handleDownloadApk = (apkUrl: string, appName: string) => {
    if (apkUrl !== "#") {
      // Create a temporary link element to trigger download
      const link = document.createElement('a');
      link.href = apkUrl;
      link.download = `${appName.replace(/\s+/g, '_')}.apk`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      // Force download by setting download attribute
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section 
      ref={ref}
      id="portfolio" 
      className={`py-20 bg-gray-900 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            My Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent Flutter projects that showcase my skills and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col overflow-hidden ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              <div className="overflow-hidden rounded-t-lg relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Flutter
                  </div>
                </div>
              </div>
              <CardHeader className="flex-grow">
                <CardTitle className="text-xl md:text-2xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-300 text-sm rounded-full font-medium border border-blue-700/30 hover:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-800/70 hover:to-purple-800/70 transition-all duration-300 hover:scale-105 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-blue-500/50 text-blue-400 hover:bg-blue-600/20 hover:text-blue-300 bg-transparent hover:border-blue-400 hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-blue-500/20"
                    onClick={() => handleViewCode(project.github)}
                  >
                    View Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-purple-500/50 text-purple-400 hover:bg-purple-600/20 hover:text-purple-300 bg-transparent hover:border-purple-400 hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-purple-500/20"
                    onClick={() => handleViewDemo(project.demoUrl)}
                  >
                    View Demo
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl hover:shadow-purple-500/30"
                    onClick={() => handleDownloadApk(project.apkUrl, project.title)}
                  >
                    Download Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};
