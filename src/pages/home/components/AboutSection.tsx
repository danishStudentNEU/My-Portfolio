
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20software%20engineer%20working%20on%20advanced%20AI%20and%20machine%20learning%20projects%2C%20modern%20tech%20workspace%20with%20multiple%20screens%20showing%20code%20and%20data%20visualizations%2C%20clean%20professional%20environment%20with%20blue%20and%20white%20color%20scheme&width=600&height=400&seq=about-img-001&orientation=landscape"
              alt="Professional workspace"
              className="rounded-lg shadow-lg w-full h-80 object-cover object-top"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Passionate Software Engineer with 5+ Years of Experience
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a Software Engineer with 5+ years of cross-domain experience in web, mobile, and AI technologies. 
              Currently working at VoiceBotics AI while pursuing my Master's in Computer Science at Northeastern University.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              My expertise spans across modern web frameworks, mobile development, and cutting-edge AI solutions. 
              I'm passionate about creating innovative solutions that solve real-world problems and drive business growth.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">7K+</div>
                <div className="text-gray-600">LinkedIn Followers</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Network Connections</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
