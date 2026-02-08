
import React from 'react';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: "ri-map-pin-line",
      title: "Location",
      value: "Oakland, California, United States",
      color: "text-blue-600"
    },
    {
      icon: "ri-mail-line",
      title: "Email",
      value: "profmaildanish@gmail.com",
      color: "text-green-600",
      action: () => window.open('mailto:profmaildanish@gmail.com', '_blank')
    },
    {
      icon: "ri-linkedin-line",
      title: "LinkedIn",
      value: "7K+ Followers",
      color: "text-purple-600",
      action: () => window.open('https://www.linkedin.com/in/danish-khan-76b794191/', '_blank')
    }
  ];

  return (
    <section id="contact-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you and see how we can work together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Let's Connect</h3>
          
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow ${info.action ? 'cursor-pointer' : ''}`}
                onClick={info.action}
              >
                <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center`}>
                  <i className={`${info.icon} text-xl ${info.color} w-6 h-6 flex items-center justify-center`}></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{info.title}</h4>
                  <p className={`${info.action ? 'text-blue-600 hover:text-blue-700' : 'text-gray-600'}`}>
                    {info.value}
                  </p>
                </div>
                {info.action && (
                  <div className="ml-auto">
                    <i className="ri-external-link-line text-gray-400 w-5 h-5 flex items-center justify-center"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;