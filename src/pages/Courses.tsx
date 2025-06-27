import React, { useState } from 'react';
import { Clock, Users, Award, ArrowRight, GraduationCap, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courseCategories = [
    { id: 'all', name: 'All Courses' },
    { id: 'electronics', name: 'Electronics & Hardware' },
    { id: 'apparel', name: 'Apparel & Home Furnishing' },
    { id: 'beauty', name: 'Beauty & Wellness' },
    { id: 'bfsi', name: 'BFSI' },
    { id: 'green', name: 'Green Jobs' },
    { id: 'construction', name: 'Construction' },
    { id: 'it', name: 'IT-ITES' },
    { id: 'management', name: 'Management & Entrepreneurship' },
    { id: 'retail', name: 'Retail' },
    { id: 'tourism', name: 'Tourism & Hospitality' }
  ];

  const allCourses = [
    // Electronics & Hardware
    {
      id: 'electronics',
      title: "Electronics & Hardware",
      duration: "6 Months",
      students: "150+",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500",
      description: "Learn electronics fundamentals, hardware troubleshooting, and modern electronic systems.",
      skills: ["Circuit Analysis", "PCB Repair", "Component Testing", "Digital Electronics"],
      category: "electronics"
    },
    {
      id: 'electrical',
      title: "Multi Skill Technician (Electrical)",
      duration: "1 Year",
      students: "200+",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500",
      description: "Comprehensive electrical training covering installation, maintenance, and safety protocols.",
      skills: ["Electrical Wiring", "Motor Control", "Safety Protocols", "Circuit Analysis"],
      category: "electronics"
    },
    {
      id: 'solar',
      title: "Solar and LED Technician",
      duration: "8 Months",
      students: "120+",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500",
      description: "Specialized training in solar panel installation, LED systems, and renewable energy.",
      skills: ["Solar Installation", "LED Systems", "Energy Efficiency", "Maintenance"],
      category: "electronics"
    },
    {
      id: 'mechanical',
      title: "Mechanical Filter",
      duration: "6 Months",
      students: "80+",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500",
      description: "Mechanical systems maintenance, filter technology, and industrial applications.",
      skills: ["Filter Technology", "System Maintenance", "Industrial Applications", "Quality Control"],
      category: "electronics"
    },
    {
      id: 'racw',
      title: "Field Engineer RACW",
      duration: "1 Year",
      students: "100+",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      description: "Refrigeration, Air Conditioning, and Water systems engineering and maintenance.",
      skills: ["HVAC Systems", "Refrigeration", "Water Systems", "Field Service"],
      category: "electronics"
    },
    {
      id: 'ac',
      title: "Field Technician AC",
      duration: "8 Months",
      students: "90+",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      description: "Air conditioning installation, repair, and maintenance for residential and commercial systems.",
      skills: ["AC Installation", "System Repair", "Maintenance", "Troubleshooting"],
      category: "electronics"
    },

    // Apparel & Home Furnishing
    {
      id: 'apparel',
      title: "Apparel, Made-ups & Home Furnishing",
      duration: "1 Year",
      students: "180+",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500",
      description: "Textile design, garment construction, and home furnishing manufacturing.",
      skills: ["Textile Design", "Garment Construction", "Pattern Making", "Quality Control"],
      category: "apparel"
    },
    {
      id: 'fashion-designer',
      title: "Assistant Fashion Designer",
      duration: "1 Year",
      students: "120+",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500",
      description: "Fashion design principles, trend analysis, and creative garment development.",
      skills: ["Design Principles", "Trend Analysis", "Creative Development", "Fashion Technology"],
      category: "apparel"
    },

    // Beauty & Wellness
    {
      id: 'beauty',
      title: "Beauty & Wellness",
      duration: "6 Months",
      students: "200+",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500",
      description: "Comprehensive beauty therapy, wellness practices, and personal care services.",
      skills: ["Beauty Therapy", "Wellness Practices", "Personal Care", "Client Services"],
      category: "beauty"
    },
    {
      id: 'makeup-trainer',
      title: "Make Up Trainer",
      duration: "4 Months",
      students: "150+",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500",
      description: "Professional makeup artistry, techniques, and training methodologies.",
      skills: ["Makeup Artistry", "Techniques", "Training Methods", "Product Knowledge"],
      category: "beauty"
    },
    {
      id: 'yoga-trainer',
      title: "Yoga Trainer",
      duration: "6 Months",
      students: "100+",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500",
      description: "Yoga instruction, meditation techniques, and wellness coaching.",
      skills: ["Yoga Instruction", "Meditation", "Wellness Coaching", "Anatomy"],
      category: "beauty"
    },

    // BFSI
    {
      id: 'bfsi',
      title: "BFSI",
      duration: "1 Year",
      students: "250+",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500",
      description: "Banking, Financial Services, and Insurance sector training and operations.",
      skills: ["Banking Operations", "Financial Services", "Insurance", "Customer Service"],
      category: "bfsi"
    },
    {
      id: 'accounts-executive',
      title: "Accounts Executive (Statutory Compliance)",
      duration: "1 Year",
      students: "180+",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500",
      description: "Accounting principles, statutory compliance, and financial reporting.",
      skills: ["Accounting", "Statutory Compliance", "Financial Reporting", "Taxation"],
      category: "bfsi"
    },
    {
      id: 'gst-assistant',
      title: "Goods and Services Tax (GST) Accounts Assistant",
      duration: "8 Months",
      students: "200+",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500",
      description: "GST compliance, tax calculations, and accounting software applications.",
      skills: ["GST Compliance", "Tax Calculations", "Accounting Software", "Documentation"],
      category: "bfsi"
    },

    // Green Jobs
    {
      id: 'green',
      title: "Green Jobs",
      duration: "1 Year",
      students: "80+",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500",
      description: "Sustainable practices, environmental conservation, and green technology applications.",
      skills: ["Sustainability", "Environmental Conservation", "Green Technology", "Eco-friendly Practices"],
      category: "green"
    },
    {
      id: 'solar-pv-executive',
      title: "Solar PV Business Development Executive",
      duration: "6 Months",
      students: "60+",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500",
      description: "Solar business development, market analysis, and renewable energy sales.",
      skills: ["Business Development", "Market Analysis", "Sales", "Solar Technology"],
      category: "green"
    },

    // Construction
    {
      id: 'construction',
      title: "Construction",
      duration: "1 Year",
      students: "150+",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500",
      description: "Construction management, site supervision, and building technology.",
      skills: ["Construction Management", "Site Supervision", "Building Technology", "Safety"],
      category: "construction"
    },
    {
      id: 'electrical-supervisor',
      title: "Supervisor Electrical Works",
      duration: "1 Year",
      students: "100+",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500",
      description: "Electrical works supervision, project management, and safety compliance.",
      skills: ["Electrical Supervision", "Project Management", "Safety Compliance", "Team Leadership"],
      category: "construction"
    },

    // IT-ITES
    {
      id: 'it',
      title: "IT-ITES",
      duration: "1 Year",
      students: "300+",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500",
      description: "Information Technology and IT-enabled services training and operations.",
      skills: ["IT Operations", "Software Development", "Digital Services", "Technical Support"],
      category: "it"
    },
    {
      id: 'hardware-engineer',
      title: "Hardware Engineer",
      duration: "1 Year",
      students: "120+",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500",
      description: "Computer hardware design, maintenance, and system integration.",
      skills: ["Hardware Design", "System Integration", "Maintenance", "Troubleshooting"],
      category: "it"
    },
    {
      id: 'software-engineer',
      title: "Software Engineer",
      duration: "1 Year",
      students: "200+",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500",
      description: "Software development, programming, and application design.",
      skills: ["Programming", "Software Development", "Application Design", "Database Management"],
      category: "it"
    },
    {
      id: 'web-developer',
      title: "Web Developer",
      duration: "8 Months",
      students: "180+",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500",
      description: "Web development, front-end and back-end programming, and digital solutions.",
      skills: ["Web Development", "Front-end", "Back-end", "Digital Solutions"],
      category: "it"
    },

    // Management & Entrepreneurship
    {
      id: 'management',
      title: "Management & Entrepreneurship",
      duration: "1 Year",
      students: "250+",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500",
      description: "Business management, entrepreneurship, and organizational leadership.",
      skills: ["Business Management", "Entrepreneurship", "Leadership", "Strategic Planning"],
      category: "management"
    },
    {
      id: 'office-assistant',
      title: "Office Assistant",
      duration: "6 Months",
      students: "150+",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500",
      description: "Office administration, communication, and administrative support skills.",
      skills: ["Office Administration", "Communication", "Administrative Support", "Organization"],
      category: "management"
    },

    // Retail
    {
      id: 'retail',
      title: "Retail",
      duration: "6 Months",
      students: "200+",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500",
      description: "Retail operations, customer service, and sales management.",
      skills: ["Retail Operations", "Customer Service", "Sales Management", "Inventory Control"],
      category: "retail"
    },
    {
      id: 'retail-manager',
      title: "Retail Store Manager",
      duration: "1 Year",
      students: "120+",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500",
      description: "Store management, team leadership, and retail business operations.",
      skills: ["Store Management", "Team Leadership", "Business Operations", "Performance Management"],
      category: "retail"
    },

    // Tourism & Hospitality
    {
      id: 'tourism',
      title: "Tourism & Hospitality",
      duration: "1 Year",
      students: "180+",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500",
      description: "Tourism management, hospitality services, and customer experience.",
      skills: ["Tourism Management", "Hospitality Services", "Customer Experience", "Event Planning"],
      category: "tourism"
    },
    {
      id: 'front-office-manager',
      title: "Front Office Manager",
      duration: "1 Year",
      students: "100+",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500",
      description: "Front office operations, guest relations, and hospitality management.",
      skills: ["Front Office Operations", "Guest Relations", "Hospitality Management", "Communication"],
      category: "tourism"
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? allCourses 
    : allCourses.filter(course => course.category === selectedCategory);

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
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-orange-500 rounded-full p-5 shadow-lg">
              <GraduationCap className="h-12 w-12 text-white" />
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Vocational Courses
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose from our comprehensive range of vocational courses designed to meet industry demands and career aspirations
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
              <div key={index} className="text-center p-4 bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg hover:shadow-lg transition-all">
                <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium text-gray-900">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filter by Category
            </h3>
            <span className="text-sm text-gray-600">
              {filteredCourses.length} courses found
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {courseCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                {/* Image */}
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">{course.description}</p>
                  
                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {course.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                      {course.skills.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          +{course.skills.length - 3} more
                        </span>
                      )}
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
                      {course.students}
                    </span>
                  </div>

                  {/* CTA */}
                  <Link 
                    to={`/courses/${course.id}`}
                    className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-orange-600 transition-all flex items-center justify-center group"
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our vocational training programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admission"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Courses;