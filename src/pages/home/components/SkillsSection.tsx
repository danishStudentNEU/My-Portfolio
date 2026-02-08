
import React from 'react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "ri-code-line",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "Kotlin", "C++"]
    },
    {
      title: "Web Technologies",
      icon: "ri-global-line",
      skills: ["React", "Node.js", "HTML5", "CSS3", "REST APIs", "GraphQL"]
    },
    {
      title: "Mobile Development",
      icon: "ri-smartphone-line",
      skills: ["Android", "React Native", "Flutter", "iOS", "Mobile UI/UX"]
    },
    {
      title: "AI & Machine Learning",
      icon: "ri-robot-line",
      skills: ["TensorFlow", "PyTorch", "NLP", "Computer Vision", "Deep Learning"]
    },
    {
      title: "Cloud & DevOps",
      icon: "ri-cloud-line",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Microservices"]
    },
    {
      title: "Databases",
      icon: "ri-database-line",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Oracle", "Firebase"]
    }
  ];

  const tools = [
    "Git", "Docker", "Jenkins", "Jira", "Figma", "VS Code", "IntelliJ IDEA", "Postman"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive skill set spanning across multiple domains of software development.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <i className={`${category.icon} text-2xl text-blue-600 mr-3 w-8 h-8 flex items-center justify-center`}></i>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm hover:border-blue-3...transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-blue-50 border border-blue-200 text-blue-800 rounded-full font-semibold hover:bg-blue-100 transition-colors"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Highlight */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h3>
          <p className="text-xl text-blue-100 mb-6">
            Let's collaborate on your next project and bring innovative ideas to life.
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact-section');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors cursor-pointer whitespace-nowrap"
          >
            Let's Connect
          </button>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
