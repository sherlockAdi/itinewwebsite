import React from 'react';
import { Clock, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Courses = () => {
  const courses = [
    {
      title: "Computer Operator & Programming Assistant (COPA)",
      duration: "1 Year",
      students: "500+",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
      description: "Learn computer operations, programming basics, office applications, and digital literacy skills essential for modern workplaces.",
      skills: ["MS Office", "Programming Basics", "Database Management", "Web Development"],
      link: "/copa"
    },
    {
      title: "Electrician",
      duration: "2 Years",
      students: "400+",
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
      description: "Master electrical installations, maintenance, safety procedures, and modern electrical systems for residential and industrial applications.",
      skills: ["Electrical Wiring", "Motor Control", "Safety Protocols", "Circuit Analysis"],
      link: "/courses"
    },
    {
      title: "Welder",
      duration: "1 Year",
      students: "300+",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      description: "Develop welding skills for various industrial applications including arc welding, gas welding, and modern welding techniques.",
      skills: ["Arc Welding", "Gas Welding", "TIG Welding", "Safety Standards"],
      link: "/courses"
    },
    {
      title: "Turner",
      duration: "2 Years",
      students: "250+",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      description: "Learn precision machining, lathe operations, and metal working techniques for manufacturing and production industries.",
      skills: ["Lathe Operations", "Precision Measurement", "Metal Working", "Quality Control"],
      link: "/courses"
    },
    {
      title: "Mechanic Motor Vehicle",
      duration: "2 Years",
      students: "350+",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg",
      description: "Comprehensive training in automobile maintenance, repair, and modern vehicle technologies including hybrid systems.",
      skills: ["Engine Repair", "Transmission", "Electrical Systems", "Diagnostics"],
      link: "/courses"
    },
    {
      title: "Fashion Design & Technology",
      duration: "1 Year",
      students: "200+",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
      description: "Creative and technical training in fashion design, garment construction, and textile technology for the fashion industry.",
      skills: ["Design Principles", "Pattern Making", "Garment Construction", "Textile Knowledge"],
      link: "/courses"
    },
    {
      title: "Refrigeration & Air Conditioning",
      duration: "2 Years",
      students: "180+",
      image: "https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg",
      description: "Specialized training in HVAC systems, refrigeration technology, and climate control systems for commercial and residential use.",
      skills: ["HVAC Systems", "Refrigeration Cycles", "System Installation", "Troubleshooting"],
      link: "/courses"
    },
    {
      title: "Draftsman (Mechanical)",
      duration: "2 Years",
      students: "150+",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg",
      description: "Technical drawing, CAD software training, and mechanical design principles for engineering and manufacturing sectors.",
      skills: ["Technical Drawing", "CAD Software", "Blueprint Reading", "Design Standards"],
      link: "/courses"
    },
    {
      title: "Electronic Mechanic",
      duration: "2 Years",
      students: "220+",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
      description: "Electronics repair, circuit analysis, and modern electronic systems maintenance for consumer and industrial electronics.",
      skills: ["Circuit Analysis", "PCB Repair", "Component Testing", "Digital Electronics"],
      link: "/courses"
    }
  ];

  const features = [
    "Industry-Standard Curriculum",
    "Hands-on Practical Training",
    "Modern Equipment & Labs",
    "Expert Faculty",
    "100% Placement Support",
    "Government Certification"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 via-blue-800 to-purple-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Courses
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose from our comprehensive range of technical courses designed to meet industry demands and career aspirations
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Courses?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our courses are designed with industry input to ensure you gain relevant skills and knowledge
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium text-gray-900">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                  
                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students} Enrolled
                    </span>
                  </div>

                  {/* CTA */}
                  <Link 
                    to={course.link}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Technical Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose your course and begin building the skills that will shape your future career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admission"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply for Admission
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Course Details
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Courses;