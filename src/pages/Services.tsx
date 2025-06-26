import React from 'react';
import { Wrench, Users, Award, BookOpen, Briefcase, Shield, Clock, Target } from 'lucide-react';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: "Technical Training",
      description: "Comprehensive hands-on training in various technical trades with modern equipment and expert guidance.",
      features: ["Practical Workshops", "Theory Classes", "Industry Projects", "Skill Certification"]
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: "Placement Services",
      description: "Dedicated placement cell ensuring 100% job placement with leading companies across various industries.",
      features: ["Campus Recruitment", "Interview Preparation", "Resume Building", "Career Counseling"]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Skill Development",
      description: "Continuous skill enhancement programs to keep students updated with latest industry trends and technologies.",
      features: ["Soft Skills Training", "Communication Skills", "Leadership Development", "Team Building"]
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Certification Programs",
      description: "Government-recognized certifications and additional industry certifications to enhance career prospects.",
      features: ["NCVT Certification", "Industry Certificates", "Skill Badges", "Digital Credentials"]
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Workshop Facilities",
      description: "State-of-the-art workshops equipped with modern machinery and tools for practical learning experience.",
      features: ["Modern Equipment", "Safety Standards", "Maintenance Support", "Tool Library"]
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Student Support",
      description: "Comprehensive student support services including counseling, mentoring, and academic assistance.",
      features: ["Academic Support", "Personal Counseling", "Mentorship Program", "Peer Learning"]
    }
  ];

  const additionalServices = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Timings",
      description: "Multiple batch timings to accommodate working professionals and students"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Customized Training",
      description: "Tailored training programs for corporate clients and specific industry requirements"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Online Resources",
      description: "Digital learning materials and online support for enhanced learning experience"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Alumni Network",
      description: "Strong alumni network providing ongoing support and career opportunities"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Comprehensive technical education services designed to empower students with industry-relevant skills and career opportunities
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of services designed to support your technical education journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-purple-50 transition-colors group">
                <div className="bg-purple-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-700 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="bg-purple-600 text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Extra support services to enhance your learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-purple-600">{service.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Serve You
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our systematic approach to delivering quality technical education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">Initial skill assessment and career counseling</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Training</h3>
              <p className="text-gray-600 text-sm">Comprehensive technical training with hands-on practice</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certification</h3>
              <p className="text-gray-600 text-sm">Government-recognized certification upon completion</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Placement</h3>
              <p className="text-gray-600 text-sm">Job placement assistance and career support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5000+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Courses Offered</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Our Services?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have benefited from our comprehensive technical education services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;