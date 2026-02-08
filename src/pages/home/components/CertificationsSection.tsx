
import React from 'react';

const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: "Verified International Academic Qualifications",
      issuer: "World Education Services",
      date: "Mar 2023",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGrSmKE472DMw/company-logo_100_100/company-logo_100_100/0/1715805044273/worldeducationservices_logo?e=2147483647&v=beta&t=6EQg_KYEoGo6IxmGE2xE889OmSX6a2RIuLujgChu6u8",
      credentialUrl: "https://www.credly.com/badges/9e740006-5853-40b5-839e-b2cb64a49835/linked_in_profile",
      type: "credential"
    },
    {
      title: "Programming with Python",
      issuer: "Internshala",
      date: "May 2018",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFi4GG2XwFHqQ/company-logo_100_100/company-logo_100_100/0/1630487078763/internshala_logo?e=2147483647&v=beta&t=aYaoJTGRnheDED4jjE1x9wfc0inLHakh2jxilJ1w9qc",
      credentialId: "B6D7C6BE-CBC6-EC16-C5F6-4D495F6DDCBA",
      credentialUrl: "https://trainings.internshala.com/verify_certificate",
      type: "credential"
    },
    {
      title: "Life and Employability Skills",
      issuer: "NASSCOM Foundation",
      date: "Aug 2018",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHE4atsIieRkw/company-logo_100_100/company-logo_100_100/0/1679375336782/nasscom_foundation_logo?e=2147483647&v=beta&t=zPAfxRFiEZ_IGpgr14N6LzTlns0CbXNRes9zg-cgmdQ",
      type: "certificate"
    },
    {
      title: "Entrepreneurship Awareness Programme",
      issuer: "Entrepreneurship Development Institute of India",
      date: "Apr 2018",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEIQ33u7HCJpQ/company-logo_100_100/company-logo_100_100/0/1701327991207/ediiahmedabad_logo?e=2147483647&v=beta&t=_FlmlbPIEjS6_zrTuXVm1p8hKdcf0hrGA-fjIbywaso",
      type: "certificate"
    }
  ];

  const courses = [
    "Android App Development Masterclass using Kotlin",
    "The Complete Web Developer in 2022: Zero to Mastery",
    "Programming with Python"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Learning</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development through certifications and courses.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <i className="ri-medal-line text-blue-600 mr-3 w-6 h-6 flex items-center justify-center"></i>
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <img 
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h4>
                    <p className="text-blue-600 font-semibold mb-1">{cert.issuer}</p>
                    <p className="text-gray-500 text-sm mb-3">Issued {cert.date}</p>
                    
                    {cert.credentialId && (
                      <p className="text-gray-600 text-sm mb-3">
                        Credential ID: {cert.credentialId}
                      </p>
                    )}
                    
                    {cert.credentialUrl && (
                      <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm cursor-pointer">
                        See credential
                        <i className="ri-external-link-line ml-1 w-4 h-4 flex items-center justify-center"></i>
                      </button>
                    )}
                  </div>
                  <div className="flex-shrink-0">
                    <div className={`w-3 h-3 rounded-full ${
                      cert.type === 'credential' ? 'bg-green-500' : 'bg-blue-500'
                    }`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <i className="ri-book-line text-blue-600 mr-3 w-6 h-6 flex items-center justify-center"></i>
            Completed Courses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-graduation-cap-line text-2xl text-blue-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{course}</h4>
                <p className="text-gray-600 text-sm">Successfully completed</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Courses Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Hours of Learning</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Skills Acquired</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
