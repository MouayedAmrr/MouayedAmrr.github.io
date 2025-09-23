
export const About = () => {
  const technologies = [
  "Flutter",
  "APIs",
  "MVVM",
  "MVI",
  "BLoC",
  "Provider",
  "Clean architecture",
  "Localization",
  "Cloud Firebase",
  "Responsive applications",
  "Problem Solving",
  "Git and GitHub",
  "Agile (Jira)",
  "Unit Testing",
  "Widget Testing",
  "Postman",
  "GitHub Actions",
  "Flavors"
];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Passionate Flutter developer with expertise in creating cross-platform mobile applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">My Journey</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a dedicated Flutter developer with a passion for creating beautiful, functional mobile applications. 
              My journey in mobile development began with native Android development, but I quickly fell in love with 
              Flutter's ability to create stunning cross-platform apps with a single codebase.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I specialize in building scalable, maintainable applications using clean architecture principles. 
              My experience spans from simple utility apps to complex enterprise solutions, always focusing on 
              user experience and performance optimization.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, 
              and staying up-to-date with the latest Flutter developments.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Technologies & Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-gray-700 to-gray-600 border border-gray-600 rounded-lg p-3 text-center hover:shadow-md transition-shadow"
                >
                  <span className="text-gray-200 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
