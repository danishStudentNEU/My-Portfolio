
import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import AwardsSection from './components/AwardsSection';
import ContactSection from './components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <AwardsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
