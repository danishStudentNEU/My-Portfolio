import React from 'react';

const AwardsSection: React.FC = () => {
  const professionalAwards = [
    {
      title: "Outstanding Student Award 2026",
      organization: "Northeastern University",
      date: "April 2026",
      description: "The Outstanding Student Award at Northeastern University recognizes exceptional academic achievement, leadership, and meaningful contributions to the campus community. Recipients demonstrate excellence across scholarship, service, and positive impact on fellow students and university life.",
      type: "academic",
      icon: "ri-trophy-fill",
      tags: []
    },
    {
      title: "SyncXcellence Award for 'Cloud SE Frontier Upgrade Flow'",
      organization: "Synchronoss Technologies India Pvt Ltd",
      date: "Aug 2022",
      description: "Awarded by CTO for successfully delivering a three-phase upgrade flow of Frontier Cloud Environment from 2017 to current backend components.",
      type: "technical",
      icon: "ri-award-line",
      tags: []
    },
    {
      title: "SyncXcellence Award for 'SyncCares' Program",
      organization: "Synchronoss Technologies India Pvt Ltd",
      date: "Aug 2022",
      description: "Honored by CLO for making the first Global 'SyncCares' program a success with 11 events in 5 countries contributing over 300 volunteer hours.",
      type: "leadership",
      icon: "ri-heart-line",
      tags: []
    }
  ];

  const otherAwards = [
    {
      title: "Finalists at the Global Innovation Jam 2022",
      organization: "Synchronoss Technologies India Pvt Ltd",
      date: "Dec 2022",
      description: "Team D-AURA awarded for presenting 'Dream Cloud- Explore, Discover and Attain' to enhance Consumer Engagement of Cloud Product.",
      type: "innovation",
      icon: "ri-lightbulb-line",
      tags: []
    },
    {
      title: "Innovative Idea 2020",
      organization: "Synchronoss Technologies Pvt Ltd",
      date: "Dec 2020",
      description: "Global recognition for showcasing innovative idea 'E-Cloud: Passion meets Purpose' among diverse international teams.",
      type: "innovation",
      icon: "ri-idea-line",
      tags: []
    },
    {
      title: "Proficiency in Mathematics and Computer Application",
      organization: "Innisfree House School",
      date: "Sep 2013",
      description: "Recognized for consistent performance of >90% across 3 years of high-school academic venture.",
      type: "academic",
      icon: "ri-trophy-line",
      tags: []
    }
  ];

  const achievements = [
    { label: "Global Awards", value: "5+" },
    { label: "Recognition Events", value: "10+" },
    { label: "Team Projects Led", value: "8+" },
    { label: "Innovation Ideas", value: "15+" }
  ];

  const AwardCard = ({ award, index }: { award: any, index: number }) => (
    <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
          award.type === 'innovation' ? 'bg-yellow-100' :
          award.type === 'technical' ? 'bg-blue-100' :
          award.type === 'leadership' ? 'bg-green-100' :
          'bg-amber-100'
        }`}>
          <i className={`${award.icon} text-xl ${
            award.type === 'innovation' ? 'text-yellow-600' :
            award.type === 'technical' ? 'text-blue-600' :
            award.type === 'leadership' ? 'text-green-600' :
            'text-amber-600'
          } w-6 h-6 flex items-center justify-center`}></i>
        </div>
        
        <div className="flex-1">
          <div className="mb-3">
            <h3 className="text-lg font-bold text-gray-900 mb-1">{award.title}</h3>
            <p className="text-blue-600 font-semibold text-sm mb-1">{award.organization}</p>
            <div className="flex items-center gap-2 flex-wrap">
              <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                award.type === 'innovation' ? 'bg-yellow-100 text-yellow-800' :
                award.type === 'technical' ? 'bg-blue-100 text-blue-800' :
                award.type === 'leadership' ? 'bg-green-100 text-green-800' :
                'bg-amber-100 text-amber-800'
              }`}>
                {award.type.charAt(0).toUpperCase() + award.type.slice(1)}
              </div>
              {award.title === "Outstanding Student Award 2026" && (
                <div className="px-2 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800">
                  Community Impact
                </div>
              )}
              <span className="text-gray-500 text-xs">{award.date}</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-white" data-section="awards">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Honors & Awards</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognition for outstanding performance, innovation, and leadership in various projects and initiatives.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.value}</div>
              <div className="text-gray-600">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Awards in Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Professional Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Achievements</h3>
            <div className="space-y-6">
              {professionalAwards.map((award, index) => (
                <AwardCard key={index} award={award} index={index} />
              ))}
            </div>
          </div>

          {/* Other Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Achievements</h3>
            <div className="space-y-6">
              {otherAwards.map((award, index) => (
                <AwardCard key={index} award={award} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">Let's Achieve Great Things Together</h3>
          <p className="text-xl text-blue-100">
            Ready to bring innovation and excellence to your next project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
