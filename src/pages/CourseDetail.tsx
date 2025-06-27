import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, 
  Users, 
  Award, 
  ArrowLeft, 
  GraduationCap, 
  BookOpen, 
  Briefcase, 
  Star,
  CheckCircle,
  Calendar,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import Footer from '../components/Footer';

const CourseDetail = () => {
  const { courseId } = useParams();

  // Course data - in a real app, this would come from an API
  const courseData = {
    'electronics': {
      title: "Electronics & Hardware",
      duration: "6 Months",
      students: "150+",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
      description: "Learn electronics fundamentals, hardware troubleshooting, and modern electronic systems. This comprehensive course covers everything from basic circuit analysis to advanced digital electronics and PCB repair.",
      longDescription: "Our Electronics & Hardware course is designed to provide students with a solid foundation in electronics principles and practical skills needed in today's technology-driven world. You'll learn to diagnose, repair, and maintain various electronic systems and devices.",
      skills: ["Circuit Analysis", "PCB Repair", "Component Testing", "Digital Electronics", "Microcontrollers", "Troubleshooting"],
      category: "Electronics & Hardware",
      eligibility: "10th Pass or equivalent",
      fees: "₹25,000",
      placement: "95%",
      avgSalary: "₹3.5 LPA",
      curriculum: [
        "Basic Electronics and Components",
        "Circuit Analysis and Design",
        "Digital Electronics Fundamentals",
        "Microcontroller Programming",
        "PCB Design and Fabrication",
        "Troubleshooting Techniques",
        "Safety Protocols and Standards"
      ],
      careerOpportunities: [
        "Electronics Technician",
        "Hardware Engineer",
        "Service Engineer",
        "Quality Control Inspector",
        "Technical Support Specialist"
      ],
      highlights: [
        "Hands-on practical training",
        "Industry-standard equipment",
        "Expert faculty with industry experience",
        "100% placement assistance",
        "Government certification",
        "Internship opportunities"
      ]
    },
    'electrical': {
      title: "Multi Skill Technician (Electrical)",
      duration: "1 Year",
      students: "200+",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800",
      description: "Comprehensive electrical training covering installation, maintenance, and safety protocols for residential and industrial applications.",
      longDescription: "This intensive program prepares you for a career in electrical systems with hands-on training in wiring, motor control, safety protocols, and modern electrical technologies.",
      skills: ["Electrical Wiring", "Motor Control", "Safety Protocols", "Circuit Analysis", "Industrial Automation", "PLC Programming"],
      category: "Electronics & Hardware",
      eligibility: "10th Pass or equivalent",
      fees: "₹35,000",
      placement: "98%",
      avgSalary: "₹4.2 LPA",
      curriculum: [
        "Electrical Fundamentals and Safety",
        "Wiring and Installation Techniques",
        "Motor Control Systems",
        "Industrial Electrical Systems",
        "PLC Programming and Automation",
        "Electrical Maintenance and Troubleshooting",
        "Energy Conservation and Efficiency"
      ],
      careerOpportunities: [
        "Electrical Technician",
        "Maintenance Engineer",
        "Automation Specialist",
        "Service Engineer",
        "Electrical Supervisor"
      ],
      highlights: [
        "Industry-standard electrical labs",
        "Real-world project experience",
        "Safety certification training",
        "Expert electrical engineers as faculty",
        "Placement in top electrical companies",
        "Continuous skill development"
      ]
    },
    'solar': {
      title: "Solar and LED Technician",
      duration: "8 Months",
      students: "120+",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
      description: "Specialized training in solar panel installation, LED systems, and renewable energy technologies for sustainable development.",
      longDescription: "Join the green energy revolution with our comprehensive Solar and LED Technician program. Learn to install, maintain, and optimize solar power systems and energy-efficient LED lighting solutions.",
      skills: ["Solar Installation", "LED Systems", "Energy Efficiency", "Maintenance", "System Design", "Troubleshooting"],
      category: "Electronics & Hardware",
      eligibility: "10th Pass or equivalent",
      fees: "₹30,000",
      placement: "92%",
      avgSalary: "₹3.8 LPA",
      curriculum: [
        "Solar Energy Fundamentals",
        "Solar Panel Installation and Maintenance",
        "LED Lighting Systems",
        "Energy Efficiency and Conservation",
        "System Design and Optimization",
        "Safety and Compliance Standards",
        "Business and Entrepreneurship Skills"
      ],
      careerOpportunities: [
        "Solar Installation Technician",
        "LED Lighting Specialist",
        "Energy Efficiency Consultant",
        "Renewable Energy Technician",
        "Green Technology Entrepreneur"
      ],
      highlights: [
        "Hands-on solar installation training",
        "LED system design and implementation",
        "Industry partnerships with solar companies",
        "Government certification programs",
        "Entrepreneurship guidance",
        "Environmental impact awareness"
      ]
    }
  };

  const course = courseData[courseId as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
          <Link to="/courses" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link to="/courses" className="text-blue-200 hover:text-white transition-colors flex items-center">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Courses
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-orange-500 rounded-full p-3 shadow-lg mr-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {course.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {course.title}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-6 text-white">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{course.students} Students</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  <span>{course.placement}% Placement</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* About Course */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Course</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {course.longDescription}
                </p>
              </div>

              {/* Curriculum */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Curriculum</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.curriculum.map((item, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills You'll Learn */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills You'll Learn</h2>
                <div className="flex flex-wrap gap-3">
                  {course.skills.map((skill, index) => (
                    <span key={index} className="bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Career Opportunities */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.careerOpportunities.map((career, index) => (
                    <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg">
                      <Briefcase className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700 font-medium">{career}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Course Highlights */}
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Course Highlights</h3>
                <div className="space-y-3">
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Course Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Eligibility:</span>
                    <span className="font-semibold">{course.eligibility}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Course Fee:</span>
                    <span className="font-semibold text-green-600">{course.fees}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Placement Rate:</span>
                    <span className="font-semibold text-blue-600">{course.placement}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Avg. Salary:</span>
                    <span className="font-semibold text-orange-600">{course.avgSalary}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Enroll?</h3>
                <p className="text-blue-100 mb-6">
                  Start your journey towards a successful career in {course.category}
                </p>
                <div className="space-y-3">
                  <Link
                    to="/admission"
                    className="block w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Apply Now
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Get More Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Related Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(courseData).slice(0, 3).map(([id, course]) => (
              <div key={id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <span>{course.duration}</span>
                    <span>{course.students} Students</span>
                  </div>
                  <Link 
                    to={`/courses/${id}`}
                    className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-orange-600 transition-all text-center block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CourseDetail; 