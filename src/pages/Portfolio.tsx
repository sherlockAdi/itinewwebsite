import React from 'react';
import { ExternalLink, Award, Users, TrendingUp, Calendar } from 'lucide-react';
import Footer from '../components/Footer';

const Portfolio = () => {
  const projects = [
    {
      title: "Smart Home Automation System",
      category: "Electronics",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      description: "IoT-based home automation system developed by our Electronics students",
      technologies: ["Arduino", "IoT", "Mobile App", "Sensors"],
      student: "Rahul Sharma - Electronics Batch 2023"
    },
    {
      title: "Automated Welding Robot",
      category: "Mechanical",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      description: "Precision welding robot designed and built by Mechanical Engineering students",
      technologies: ["Robotics", "Welding", "Programming", "CAD Design"],
      student: "Priya Singh - Welder Batch 2023"
    },
    {
      title: "E-Commerce Website",
      category: "Computer",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      description: "Full-stack e-commerce platform developed by COPA students",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
      student: "Amit Kumar - COPA Batch 2023"
    },
    {
      title: "Fashion Design Collection",
      category: "Fashion",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
      description: "Sustainable fashion collection showcasing traditional and modern designs",
      technologies: ["Design", "Tailoring", "Sustainability", "Innovation"],
      student: "Sneha Patel - Fashion Design Batch 2023"
    },
    {
      title: "HVAC Control System",
      category: "Refrigeration",
      image: "https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg",
      description: "Energy-efficient HVAC control system with smart monitoring",
      technologies: ["HVAC", "Control Systems", "Energy Efficiency", "Monitoring"],
      student: "Vikash Yadav - RAC Batch 2023"
    },
    {
      title: "Precision Machining Project",
      category: "Turner",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      description: "High-precision components manufactured using advanced turning techniques",
      technologies: ["CNC", "Precision Machining", "Quality Control", "CAM"],
      student: "Rajesh Kumar - Turner Batch 2023"
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "National Skills Competition",
      description: "1st Place in National ITI Skills Competition 2023",
      year: "2023"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Industry Partnership",
      description: "Collaboration with 50+ leading companies",
      year: "2023"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Placement Record",
      description: "100% placement rate for 5 consecutive years",
      year: "2019-2024"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Innovation Award",
      description: "Best Innovation in Technical Education Award",
      year: "2022"
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "95%", label: "Success Rate" },
    { value: "50+", label: "Industry Partners" },
    { value: "15+", label: "Awards Won" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-900 via-red-800 to-pink-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Showcasing the innovative projects and achievements of our talented students and faculty
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the innovative projects created by our students across various technical disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Student Info */}
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm text-gray-600">Created by:</p>
                    <p className="font-semibold text-gray-900">{project.student}</p>
                  </div>

                  {/* View Button */}
                  <button className="mt-4 w-full bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center group">
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognition and awards that highlight our commitment to excellence in technical education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-colors">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 mb-3">{achievement.description}</p>
                <span className="text-orange-600 font-semibold">{achievement.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Campus Life Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Glimpses of our vibrant campus life and learning environment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
              "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
              "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
              "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
              "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
              "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
              "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
              "https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg"
            ].map((image, index) => (
              <div key={index} className="relative group cursor-pointer">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Be Part of Our Success Story
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join our community of innovators and create projects that make a difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              View More Projects
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Portfolio;