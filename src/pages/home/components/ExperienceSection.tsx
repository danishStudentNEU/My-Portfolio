
import React, { useState } from 'react';

const ExperienceSection: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  const experiences = [
    {
      company: "VoiceBotics AI",
      position: "Web Developer Intern",
      duration: "Current",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQE1Z1Nn7-_ALQ/company-logo_100_100/company-logo_100_100/0/1719256380187?e=2147483647&v=beta&t=9F4Q4ceXa6_0kAarCCaBguftnAkwKELJ363Ymu_ws_Y",
      description: "Working on cutting-edge AI voice technologies and conversational AI systems.",
      skills: ["AI/ML", "Voice Technology", "Python", "React"],
      details: "As a Web Developer Intern at VoiceBotics AI, I am working on developing and maintaining web applications that integrate with cutting-edge AI voice technologies. My responsibilities include building responsive user interfaces, implementing conversational AI features, and collaborating with the AI team to create seamless user experiences. I work with modern web technologies including React, Python, and various AI/ML frameworks to deliver high-quality solutions for voice-enabled applications."
    },
    {
      company: "Synchronoss Technologies",
      position: "Software Engineer",
      duration: "2019 - 2024",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQGUTkmayJaP7w/company-logo_100_100/company-logo_100_100/0/1631332579309?e=2147483647&v=beta&t=wOVzbAoNe0qceWH3Ntb8v6iNXMeMBru08Jmr47iE0xQ",
      description: "Developed enterprise-level cloud solutions and led multiple innovation projects.",
      skills: ["Java", "Cloud Computing", "REST APIs", "Microservices"],
      details: "During my 5-year tenure at Synchronoss Technologies, I worked as a Software Engineer focusing on enterprise-level cloud solutions. I was responsible for developing and maintaining large-scale applications, implementing REST APIs, and working with microservices architecture. I led multiple innovation projects, collaborated with cross-functional teams, and contributed to reducing data processing time from weeks to days through automation tools. My work involved handling massive datasets (2TB+) and ensuring system reliability and performance in enterprise environments."
    }
  ];

  const education = [
    {
      institution: "Northeastern University",
      degree: "Master of Science in Computer Engineering",
      duration: "2024 - 2026",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGwTPCvlTQlvw/company-logo_100_100/company-logo_100_100/0/1630531267482/northeastern_university_logo?e=2147483647&v=beta&t=2vuZ3jVY0yz7yz_nx1j79eNQLi8AK0XBsO4Jvdsz1bc",
      description: "Pursuing advanced studies in Computer Engineering with focus on AI and Machine Learning."
    },
    {
      institution: "JSS Academy of Technical Education",
      degree: "Bachelor of Engineering - BE, Computer Science",
      duration: "2015 - 2019",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQH2OCuPsOd9XQ/company-logo_100_100/company-logo_100_100/0/1675087118747/jss_academy_of_technical_education_karnataka_logo?e=2147483647&v=beta&t=3VDz4wIzgsogcFL2zNku81wcOksxI0xniU3rx19u8Ws",
      description: "Graduated with strong foundation in computer science fundamentals and programming."
    }
  ];

  const closeModal = () => setSelectedExperience(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <i className="ri-briefcase-line text-blue-600 mr-3 w-6 h-6 flex items-center justify-center"></i>
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedExperience(index)}
                >
                  <img 
                    src={exp.logo} 
                    alt={exp.company}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{exp.position}</h4>
                    <p className="text-blue-600 font-semibold mb-2">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-3">{exp.duration}</p>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <i className="ri-graduation-cap-line text-blue-600 mr-3 w-6 h-6 flex items-center justify-center"></i>
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <img 
                    src={edu.logo} 
                    alt={edu.institution}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h4>
                    <p className="text-blue-600 font-semibold mb-2">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mb-3">{edu.duration}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience Details Modal */}
      {selectedExperience !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                  <img 
                    src={experiences[selectedExperience].logo} 
                    alt={experiences[selectedExperience].company}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{experiences[selectedExperience].position}</h3>
                    <p className="text-blue-600 font-semibold">{experiences[selectedExperience].company}</p>
                    <p className="text-gray-500">{experiences[selectedExperience].duration}</p>
                  </div>
                </div>
                <button 
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                >
                  <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
                </button>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Experience Details</h4>
                <p className="text-gray-600 leading-relaxed">{experiences[selectedExperience].details}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies & Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {experiences[selectedExperience].skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;
