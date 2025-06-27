import React from 'react';
import { Calendar, Award, Users, Building, GraduationCap, Globe } from 'lucide-react';

const timeline = [
  {
    year: '1999',
    title: 'Foundation',
    description: 'ATM Global Business School was founded under the aegis of Shree Vaishno Education Society by Ex-IMTians.',
    icon: <Building className="h-6 w-6 text-blue-600" />,
    highlight: 'Inception'
  },
  {
    year: '2000-2005',
    title: 'Early Growth',
    description: 'Established core programs and built a strong foundation in management education with industry-focused curriculum.',
    icon: <GraduationCap className="h-6 w-6 text-green-600" />,
    highlight: 'Foundation Years'
  },
  {
    year: '2005-2010',
    title: 'Expansion Phase',
    description: 'Introduced new specializations, enhanced infrastructure, and strengthened industry partnerships.',
    icon: <Users className="h-6 w-6 text-orange-600" />,
    highlight: 'Growth'
  },
  {
    year: '2010-2015',
    title: 'Technology Integration',
    description: 'Embraced digital transformation with modern teaching methodologies and technology-enhanced learning.',
    icon: <Globe className="h-6 w-6 text-purple-600" />,
    highlight: 'Innovation'
  },
  {
    year: '2015-2020',
    title: 'Excellence Recognition',
    description: 'Achieved multiple accreditations and recognition for academic excellence and industry relevance.',
    icon: <Award className="h-6 w-6 text-red-600" />,
    highlight: 'Recognition'
  },
  {
    year: '2020-Present',
    title: 'Global Leadership',
    description: 'Leading the way in modern business education with cutting-edge programs and international collaborations.',
    icon: <Calendar className="h-6 w-6 text-indigo-600" />,
    highlight: 'Leadership'
  }
];

const achievements = [
  { number: '25+', label: 'Years of Excellence', icon: <Calendar className="h-8 w-8 text-blue-600" /> },
  { number: '5000+', label: 'Students Graduated', icon: <GraduationCap className="h-8 w-8 text-green-600" /> },
  { number: '100+', label: 'Industry Partners', icon: <Building className="h-8 w-8 text-orange-600" /> },
  { number: '50+', label: 'Expert Faculty', icon: <Users className="h-8 w-8 text-purple-600" /> }
];

const History = () => (
  <section className="relative min-h-[70vh] bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-8 md:py-16 px-2 md:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-lg">Our Journey</h1>
        <p className="text-lg md:text-xl text-blue-900 font-medium max-w-3xl mx-auto">
          From humble beginnings in 1999 to becoming a leading institution in business education - discover the remarkable journey of ATM Global Business School.
        </p>
      </div>

      {/* Founding Story */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 animate-fadeInUp">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Founding Story</h2>
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
            <h3 className="text-xl font-bold text-blue-800 mb-4">Our Mission from Day One</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Quality education at affordable prices
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Industry-focused curriculum
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Outstanding learning experience
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Strong foundation for future success
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Our Timeline</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-orange-500 h-full hidden md:block"></div>
          
          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={item.year} className={`flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
                {/* Timeline Item */}
                <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mb-4 md:mb-0`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-blue-100 rounded-lg mr-3">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                          {item.highlight}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <div className="mt-3 text-2xl font-bold text-blue-600">{item.year}</div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="relative z-10 bg-white rounded-full p-3 shadow-lg border-4 border-blue-500 hidden md:block">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
                
                {/* Spacer for mobile */}
                <div className="md:hidden w-full h-8"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 animate-fadeInUp">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Key Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement) => (
            <div key={achievement.label} className="text-center p-6 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-3">
                {achievement.icon}
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.number}</div>
              <div className="text-sm text-gray-600">{achievement.label}</div>
            </div>
          ))}
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

export default History; 