import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('[data-section="projects"]');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAwards = () => {
    const awardsSection = document.querySelector('[data-section="awards"]');
    if (awardsSection) {
      awardsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Modern%20software%20engineer%20workspace%20with%20multiple%20monitors%20displaying%20code%2C%20clean%20minimalist%20tech%20office%20environment%20with%20blue%20and%20purple%20ambient%20lighting%2C%20professional%20developer%20setup%20with%20modern%20computers%20and%20programming%20interfaces&width=1920&height=1080&seq=hero-bg-001&orientation=landscape')`
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Danish Khan
            </h1>
            <h2 className="text-2xl lg:text-3xl text-blue-300 mb-6 font-light">
              Software Engineer & AI Enthusiast
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              5+ years of cross-domain experience in web, mobile, and AI technologies. 
              Currently at VoiceBotics AI, pursuing Master's in Computer Science at Northeastern University.
            </p>

            {/* Outstanding Student Award Highlight */}
            <div 
              onClick={scrollToAwards}
              className="mb-8 cursor-pointer group"
            >
              <div className="relative bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-yellow-500/20 border border-yellow-400/50 rounded-lg px-5 py-4 flex items-center justify-between gap-4 hover:from-yellow-500/30 hover:via-amber-500/30 hover:to-yellow-500/30 hover:border-yellow-400/80 transition-all duration-300">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <i className="ri-medal-line text-yellow-400 text-xl"></i>
                  </div>
                  <div className="min-w-0">
                    <p className="text-yellow-300 text-xs font-semibold uppercase tracking-wider mb-0.5">Major Accomplishment</p>
                    <p className="text-white font-bold text-base lg:text-lg truncate">
                      WINNER — Outstanding Student Award 2026
                    </p>
                    <p className="text-yellow-200/70 text-sm">Northeastern University</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-yellow-500/20 rounded-full group-hover:bg-yellow-500/30 transition-colors">
                  <i className="ri-trophy-fill text-yellow-400 text-3xl group-hover:scale-110 transition-transform"></i>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToProjects}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                View My Work
              </button>
              <button 
                onClick={() => window.open('https://drive.google.com/file/d/160owOspKDxXFKvAK08bfWxDMNG-7cMZu/view?usp=sharing', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                Download Resume
              </button>
              <button 
                onClick={scrollToContact}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQHClrPQrHSKHg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719044848022?e=2147483647&v=beta&t=eIPa0HOqmGznVrGF3XvT2tQ-czuwAs-fyjlQ74gQ-0I"
                  alt="Danish Khan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                Software Engineer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
