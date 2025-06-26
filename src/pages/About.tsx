import React from 'react';
import { CheckCircle, Users, Award, Building, Target, Briefcase } from 'lucide-react';
import Footer from '../components/Footer';

const About = () => {
  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Industry-Relevant Curriculum",
      description: "Our programs are designed in consultation with industry experts, ensuring students gain up-to-date knowledge and practical skills that are in demand across sectors."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Experienced Faculty",
      description: "Learn from a dedicated team of instructors with real-world experience and a passion for teaching. They mentor, guide, and prepare students for both employment and further education."
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Modern Infrastructure",
      description: "State-of-the-art workshops, fully equipped laboratories, and smart classrooms create the perfect setting for technical and non-technical training alike."
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Placement Support",
      description: "We have strong ties with local industries and national-level companies, offering regular campus placement drives, apprenticeships, and on-the-job training opportunities."
    }
  ];

  const governmentOpportunities = [
    "Indian Railways",
    "Indian Army, Navy, and Air Force",
    "PWD, Irrigation Department",
    "Vocational and Technical Education Departments"
  ];

  const psuCompanies = [
    "BHEL, HAL, SAIL, GAIL, NTPC, HMT, UPPCL",
    "ONGC, Defence Factories, and more"
  ];

  const privateSectors = [
    {
      category: "Automobile & Manufacturing",
      companies: "Tata Motors, Maruti Suzuki, Hyundai, Mahindra, Escorts"
    },
    {
      category: "Infrastructure & Engineering",
      companies: "L&T, Essar, Jindal, Videocon"
    },
    {
      category: "Energy & Corporate",
      companies: "Reliance, Aditya Birla, ITC"
    },
    {
      category: "Technology & Services",
      companies: "Wipro, Infosys"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Our ITI College
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Shaping the future through excellence in technical education and industry-focused training
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg" 
                  alt="Students in workshop" 
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm">Placement Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our ITI College?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At our college, we are committed to shaping the future of our students by offering high-quality technical and non-technical education that meets industry standards and fosters personal growth. Whether you're aiming for hands-on vocational training or a foundation in general skills, our ITI college provides the ideal environment for success.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="bg-blue-600 text-white p-2 rounded-lg flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Career Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our graduates find excellent opportunities across various sectors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Government Sector */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Government Sectors
              </h3>
              <p className="text-gray-600 mb-6">
                ITI-certified students are eligible for various positions in government departments.
              </p>
              <ul className="space-y-3">
                {governmentOpportunities.map((opportunity, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{opportunity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PSU Sector */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Public Sector Units (PSUs)
              </h3>
              <p className="text-gray-600 mb-6">
                Highly respected PSUs and corporations recruit ITI graduates regularly.
              </p>
              <ul className="space-y-3">
                {psuCompanies.map((company, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{company}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Private Sector */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Private Sector
              </h3>
              <p className="text-gray-600 mb-6">
                Leading companies across industries seek skilled ITI professionals.
              </p>
              <div className="space-y-4">
                {privateSectors.map((sector, index) => (
                  <div key={index}>
                    <h5 className="font-semibold text-gray-900 mb-1">{sector.category}:</h5>
                    <p className="text-sm text-gray-600">{sector.companies}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates who have built their careers with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;