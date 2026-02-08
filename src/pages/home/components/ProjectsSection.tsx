
import React, { useState } from 'react';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Borrower Tracker",
      duration: "2025",
      description: "Full-stack web platform that allows users to track, manage, and receive notifications for borrowed items. Built with React, Node.js, Express, and includes email notification system.",
      image: "https://readdy.ai/api/search-image?query=Modern%20task%20management%20and%20tracking%20application%20interface%20with%20clean%20dashboard%20showing%20borrowed%20items%20list%2C%20notification%20system%2C%20and%20user%20management%20features%2C%20blue%20and%20white%20professional%20design&width=400&height=250&seq=project-004&orientation=landscape",
      technologies: ["React", "Node.js", "Express", "Vite", "JavaScript"],
      status: "Completed",
      sourceLink: "https://github.com/danishStudentNEU/Borrower-Tracker",
      demoDisabled: true,
      demoTooltip: "This project needs a server to run",
      details: "Borrower Tracker is a comprehensive full-stack web application designed to help users efficiently track, manage, and receive notifications for borrowed items. The platform features a robust backend built with Node.js and Express, implementing REST APIs for CRUD operations and user authentication. The frontend utilizes React with modular components for dynamic form rendering and validation, ensuring seamless user experience. Key features include automated email notifications using Nodemailer, scheduled reminders through cron jobs, global state management, and real-time data synchronization across all UI components."
    },
    {
      title: "Skillify - Start Your Learning Journey Now",
      duration: "Apr 2024 - Present",
      description: "Interactive learning website enabling users to express their interest in learning basic life skills like cooking and financial management. Developed user-friendly interface using Google Maps API, WhatsApp API, and YouTube API.",
      image: "https://readdy.ai/api/search-image?query=Modern%20e-learning%20platform%20interface%20with%20interactive%20course%20modules%2C%20clean%20white%20and%20blue%20design%20showing%20video%20tutorials%20and%20progress%20tracking%2C%20educational%20technology%20website%20mockup&width=400&height=250&seq=project-001&orientation=landscape",
      technologies: ["React", "Google Maps API", "WhatsApp API", "YouTube API"],
      status: "Completed",
      demoLink: "https://symphonious-taiyaki-2f5693.netlify.app/",
      sourceLink: "https://github.com/danishStudentNEU/Skillify-Project",
      details: "Skillify is an interactive learning platform designed to help users express their interest in learning essential life skills such as cooking and financial management. The platform features a user-friendly interface built with React and integrates multiple APIs including Google Maps for location services, WhatsApp API for communication, and YouTube API for educational video content. Users can browse available courses, connect with instructors, and track their learning progress through an intuitive dashboard."
    },
    {
      title: "Sweet Spot Analysis Tool",
      duration: "Mar 2024 - Apr 2024",
      description: "Robust tool helping organizations decide the best strategies to adopt for solving business problems. Built dynamic frontend using Java Swing for user input and results display.",
      image: "https://readdy.ai/api/search-image?query=Business%20analytics%20dashboard%20with%20charts%20and%20graphs%2C%20data%20visualization%20tool%20interface%20showing%20strategic%20analysis%20and%20decision%20making%20metrics%2C%20professional%20blue%20and%20white%20design&width=400&height=250&seq=project-002&orientation=landscape",
      technologies: ["Java", "Swing", "Data Analysis"],
      status: "Completed",
      demoLink: "https://symphonious-taiyaki-2f5693.netlify.app/",
      sourceLink: "https://github.com/danishStudentNEU/Sweet-Spot-Analysis",
      details: "The Sweet Spot Analysis Tool is a comprehensive business strategy application that helps organizations make data-driven decisions for solving complex business problems. Built using Java Swing, the tool features a dynamic frontend that allows users to input various business parameters and receive detailed analysis results. The application processes multiple data points to identify optimal strategies and presents findings through interactive visualizations and detailed reports."
    },
    {
      title: "Data Population Tool using Java with REST APIs",
      duration: "Aug 2019 - Mar 2020",
      description: "Automation tool solving business problems by reducing data upload time from weeks to days. Handled 2TB+ data processing with server abnormality management using REST API library.",
      image: "https://readdy.ai/api/search-image?query=Data%20processing%20and%20automation%20tool%20interface%20showing%20large%20dataset%20management%2C%20server%20monitoring%20dashboard%20with%20Java%20REST%20API%20integration%2C%20enterprise%20software%20design&width=400&height=250&seq=project-003&orientation=landscape",
      technologies: ["Java", "REST APIs", "Data Processing", "Automation"],
      status: "Completed",
      demoDisabled: true,
      demoTooltip: "Non-Demo Project",
      details: "The Data Population Tool is an enterprise-grade automation solution developed during my tenure at Synchronoss Technologies. This tool revolutionized data processing workflows by reducing upload times from weeks to just days. The application handles massive datasets exceeding 2TB and includes sophisticated server abnormality management features. Built with Java and REST API integration, the tool ensures reliable data processing, error handling, and system monitoring capabilities for large-scale enterprise operations."
    }
  ];

  const closeModal = () => setSelectedProject(null);

  const handleSourceClick = (project: any, e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.title === "Data Population Tool using Java with REST APIs") {
      // Show tooltip for proprietary project
      return;
    }
    if (project.sourceLink) {
      window.open(project.sourceLink, '_blank');
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50" data-section="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover object-top"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="text-sm text-blue-600 font-semibold mb-2">{project.duration}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto space-y-3">
                  <button 
                    onClick={() => setSelectedProject(index)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors cursor-pointer whitespace-nowrap font-semibold"
                  >
                    <i className="ri-eye-line mr-2"></i>
                    View Details
                  </button>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {project.demoLink ? (
                      <button 
                        onClick={() => window.open(project.demoLink, '_blank')}
                        className="bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-semibold"
                      >
                        <i className="ri-external-link-line mr-1"></i>
                        Demo
                      </button>
                    ) : project.demoDisabled ? (
                      <div className="relative group">
                        <button 
                          className="w-full bg-gray-400 text-gray-600 py-2 px-3 rounded-lg text-sm font-semibold cursor-not-allowed whitespace-nowrap"
                          disabled
                        >
                          <i className="ri-external-link-line mr-1"></i>
                          Demo
                        </button>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                          {project.demoTooltip}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                        </div>
                      </div>
                    ) : null}
                    
                    <div className="relative group">
                      <button 
                        onClick={(e) => handleSourceClick(project, e)}
                        className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-3 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm font-semibold"
                        title={project.title === "Data Population Tool using Java with REST APIs" ? "Property of Synchronoss Technologies Pvt Ltd" : "View Source Code"}
                      >
                        <i className="ri-code-line mr-1"></i>
                        Source
                      </button>
                      {project.title === "Data Population Tool using Java with REST APIs" && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                          Property of Synchronoss Technologies Pvt Ltd
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-xl text-blue-100 mb-6">
              Let's discuss how we can bring your ideas to life with innovative solutions.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors cursor-pointer whitespace-nowrap"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{projects[selectedProject].title}</h3>
                  <p className="text-gray-500 mb-2">{projects[selectedProject].duration}</p>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {projects[selectedProject].status}
                  </span>
                </div>
                <button 
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                >
                  <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
                </button>
              </div>
              
              <div className="mb-6">
                <img 
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-64 object-cover object-top rounded-lg mb-4"
                />
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Details</h4>
                <p className="text-gray-600 leading-relaxed">{projects[selectedProject].details}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-lg border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {projects[selectedProject].demoLink ? (
                  <button 
                    onClick={() => window.open(projects[selectedProject].demoLink, '_blank')}
                    className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-external-link-line mr-2"></i>
                    View Demo
                  </button>
                ) : projects[selectedProject].demoDisabled && (
                  <button 
                    className="bg-gray-400 text-gray-600 py-2 px-6 rounded-lg cursor-not-allowed whitespace-nowrap"
                    disabled
                    title={projects[selectedProject].demoTooltip}
                  >
                    <i className="ri-external-link-line mr-2"></i>
                    Demo
                  </button>
                )}
                <button 
                  onClick={(e) => handleSourceClick(projects[selectedProject], e)}
                  className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  title={projects[selectedProject].title === "Data Population Tool using Java with REST APIs" ? "Property of Synchronoss Technologies Pvt Ltd" : "View Source Code"}
                >
                  <i className="ri-code-line mr-2"></i>
                  Source Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
