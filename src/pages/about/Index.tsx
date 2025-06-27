import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Target, Users, Shield, Award, MessageSquare, Clock, Briefcase, Calendar, Phone, Building } from 'lucide-react';

const aboutPages = [
  {
    title: 'Vision',
    description: 'Discover our long-term vision and aspirations for the future of business education.',
    icon: <Eye className="h-8 w-8 text-blue-600" />,
    link: '/about/vision',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Mission',
    description: 'Learn about our mission to provide excellence in management and technical education.',
    icon: <Target className="h-8 w-8 text-orange-500" />,
    link: '/about/mission',
    color: 'from-orange-500 to-orange-600'
  },
  {
    title: 'Our Commitment',
    description: 'Explore our values and commitment to student success and academic excellence.',
    icon: <Shield className="h-8 w-8 text-green-500" />,
    link: '/about/commitment',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Our People',
    description: 'Meet our dedicated faculty and staff who make ATM-GBS a center of excellence.',
    icon: <Users className="h-8 w-8 text-purple-500" />,
    link: '/about/people',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Council',
    description: 'Get to know our advisory board and governing council members.',
    icon: <Award className="h-8 w-8 text-red-500" />,
    link: '/about/council',
    color: 'from-red-500 to-red-600'
  },
  {
    title: "Director's Message",
    description: 'Read inspiring messages from our esteemed directors.',
    icon: <MessageSquare className="h-8 w-8 text-indigo-500" />,
    link: '/about/director-message',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    title: 'History',
    description: 'Journey through our remarkable history from 1999 to present.',
    icon: <Clock className="h-8 w-8 text-teal-500" />,
    link: '/about/history',
    color: 'from-teal-500 to-teal-600'
  },
  {
    title: 'Placements',
    description: 'Explore our placement records and career opportunities.',
    icon: <Briefcase className="h-8 w-8 text-pink-500" />,
    link: '/about/placements',
    color: 'from-pink-500 to-pink-600'
  },
  {
    title: 'Events',
    description: 'Stay updated with our latest events, conferences, and activities.',
    icon: <Calendar className="h-8 w-8 text-yellow-500" />,
    link: '/about/events',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    title: 'Contact',
    description: 'Get in touch with us for admissions, queries, and support.',
    icon: <Phone className="h-8 w-8 text-gray-500" />,
    link: '/about/contact',
    color: 'from-gray-500 to-gray-600'
  }
];

const AboutIndex = () => (
  <section className="relative min-h-[70vh] bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-8 md:py-16 px-2 md:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12 animate-fadeIn">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-orange-500 rounded-full p-5 shadow-lg">
            <Building className="h-12 w-12 text-white" />
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-lg">About ATM Global Business School</h1>
        <p className="text-lg md:text-xl text-blue-900 font-medium max-w-3xl mx-auto">
          Discover the story, people, and values that make ATM-GBS a leading institution in business education since 1999.
        </p>
      </div>

      {/* Overview Section */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 animate-fadeInUp">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Institution</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mx-auto mb-6"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              ATM Global Business School (ATM-GBS) was founded in 1999 under the aegis of Shree Vaishno Education Society by Ex-IMTians to impart quality education and outstanding learning experience to its students at affordable price.
            </p>
            <p className="text-gray-700 leading-relaxed">
              It is promoted by a group of eminent educationists & industrial professionals with a commitment to develop and deliver industry-focused programmes and build a solid foundation for the future of its students.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Why Choose ATM-GBS?</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                25+ Years of Excellence
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Industry-Focused Curriculum
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Expert Faculty & Mentors
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Strong Industry Partnerships
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Affordable Quality Education
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* About Pages Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Explore Our Story</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 animate-fadeInUp">
          {aboutPages.map((page) => (
            <Link
              key={page.title}
              to={page.link}
              className="group block"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-blue-200 hover:border-blue-500 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-orange-100 transition-all duration-300">
                    {page.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {page.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {page.description}
                </p>
                <div className="mt-4 text-blue-500 font-medium text-sm group-hover:text-blue-600 transition-colors">
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 animate-fadeInUp">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Quick Facts</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">1999</div>
            <div className="text-sm text-gray-600">Founded</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
            <div className="text-sm text-gray-600">Students</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Faculty</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-sm text-gray-600">Partners</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.7s cubic-bezier(.4,0,.2,1); }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s cubic-bezier(.4,0,.2,1); }
      `}</style>
    </div>
  </section>
);

export default AboutIndex; 