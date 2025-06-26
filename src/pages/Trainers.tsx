import React from 'react';
import { Star, Award, BookOpen, Users } from 'lucide-react';
import Footer from '../components/Footer';

const Trainers = () => {
  const trainersData = [
    {
      name: 'Walter White',
      subject: 'Business Management',
      img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      description: 'Expert in business strategy and management with over 15 years of industry experience.',
      experience: '15+ Years',
      rating: 4.9,
      students: 500
    },
    {
      name: 'Sarah Johnson',
      subject: 'Digital Marketing',
      img: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      description: 'Digital marketing specialist with proven track record in social media and content marketing.',
      experience: '12+ Years',
      rating: 4.8,
      students: 450
    },
    {
      name: 'William Anderson',
      subject: 'Mathematics & Engineering',
      img: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
      description: 'Mathematics professor with expertise in engineering applications and problem-solving.',
      experience: '18+ Years',
      rating: 4.9,
      students: 600
    },
    {
      name: 'Amanda Jepson',
      subject: 'Foreign Languages',
      img: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      description: 'Multilingual educator specializing in English, French, and German language instruction.',
      experience: '10+ Years',
      rating: 4.7,
      students: 350
    },
    {
      name: 'Brian Doe',
      subject: 'Web Development',
      img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      description: 'Full-stack developer and instructor with expertise in modern web technologies.',
      experience: '8+ Years',
      rating: 4.8,
      students: 400
    },
    {
      name: 'Josepha Palas',
      subject: 'Business Analytics',
      img: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      description: 'Data analyst and business intelligence expert helping students master analytical skills.',
      experience: '14+ Years',
      rating: 4.9,
      students: 380
    },
  ];

  const stats = [
    { icon: <Users className="h-8 w-8" />, value: '50+', label: 'Expert Trainers' },
    { icon: <Award className="h-8 w-8" />, value: '15+', label: 'Years Experience' },
    { icon: <BookOpen className="h-8 w-8" />, value: '25+', label: 'Courses Offered' },
    { icon: <Star className="h-8 w-8" />, value: '4.8', label: 'Average Rating' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Expert Trainers
          </h1>
          <h2 className="text-2xl text-blue-100 mb-4">Skilled. Certified. Committed.</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Our trainers are the foundation of our success. With both academic qualifications and industry experience, they bring practical insight to every session.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainersData.map((trainer, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative">
                  <img 
                    src={trainer.img} 
                    alt={trainer.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{trainer.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{trainer.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{trainer.subject}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{trainer.description}</p>
                  
                  {/* Stats */}
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      {trainer.experience}
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {trainer.students}+ Students
                    </span>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
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
            Learn from Industry Experts
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our courses and get mentored by experienced professionals who are passionate about your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              View All Courses
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Meet Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Trainers;