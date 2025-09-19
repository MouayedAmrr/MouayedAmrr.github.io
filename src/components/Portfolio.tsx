
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Portfolio = () => {
  const projects = [
    {
      title: "Programing Quiz App",
      description: "A program that contains exams in subjects such as languages, mathematics, drawing, and programming like HTML and JavaScript, with a cache for the results.",
      image: "/exam_preview.png",
      github: "https://github.com/ahmedragaae0120/online_exam_app/tree/main",
      apkUrl: "https://github.com/ahmedragaae0120/online_exam_app/releases/download/v1.0.0/OnlineExamApp-v1.apk",
      technologies: ["Flutter", "Sqlite", "Clean architecture", "REST API", "MVVM","Localization"]
    },
    {
      title: "Flora Mart",
      description: "Application for selling flowers and various types of chocolates,Features include payment integration, order tracking, and full API integration.",
      image: "/flora_preview.png",
      github: "https://github.com/ahmedragaae0120/flora_mart",
      apkUrl: "https://github.com/ahmedragaae0120/flora_mart/releases/download/v1.0.0/FloraMartApp-v1.apk",
      technologies: ["Flutter", "MVI","Firabase","Clean architecture", "REST API","Google Maps","Localization","Push Notifications"]
    },
    {
      title: "Tracking App",
      description: "Stay updated every step of the way with Flora Mart is real-time order tracking. Know exactly when your flowers and chocolates will arrive with live location, delivery updates, and estimated arrival time — all in one place.",
      image: "/tracking_preview.png",
      github: "https://github.com/ahmedragaae0120/Tracking-App",
      apkUrl: "https://github.com/ahmedragaae0120/Tracking-App/releases/download/v1.0.0/TrackingApp-v1.apk",
      technologies: ["Flutter", "MVI","Firabase","Clean architecture", "REST API","Google Maps","Localization"]
    },
    {
      title: "Pulse Fit",
      description: "PulseFit is a modern fitness and nutrition app that helps users achieve their health goals through personalized workout plans, smart food recommendations, and an AI-powered virtual coach. With a clean and intuitive interface, users can explore daily exercises, tailored meal suggestions, and chat directly with their smart coach for guidance. Designed for all fitness levels, FitZone brings a complete wellness experience into one sleek mobile app.",
      image: "/pulse_fit.png",
      github: "https://github.com/ahmedragaae0120/PluseFit/tree/development",
      apkUrl: "https://github.com/ahmedragaae0120/PluseFit/releases/download/v1.0.0/PulseFitApp-v1.apk",
      technologies: ["Flutter", "hive", "Gemini", "Firebase","REST API","MVI","Widget Testing","Clean architecture","Localization"]
    },

  ];

  const handleViewCode = (githubUrl: string) => {
    if (githubUrl !== "#") {
      window.open(githubUrl, '_blank');
    }
  };

  const handleDownloadApk = (apkUrl: string, appName: string) => {
    if (apkUrl !== "#") {
      // Create a temporary link element to trigger download
      const link = document.createElement('a');
      link.href = apkUrl;
      link.download = `${appName.replace(/\s+/g, '_')}.apk`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // If no APK URL is provided, show a message
      alert('APK file is not available for download yet.');
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent Flutter projects that showcase my skills and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gray-800">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-300 text-sm rounded-full font-medium border border-blue-700/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-blue-500/50 text-blue-400 hover:bg-blue-600/20 hover:text-blue-300 bg-transparent hover:border-blue-400"
                    onClick={() => handleViewCode(project.github)}
                  >
                    View Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
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
    </section>
  );
};
