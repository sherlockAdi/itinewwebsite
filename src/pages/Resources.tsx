import React from 'react';
import { BookOpen, Download, Video, FileText, Users, Award } from 'lucide-react';
import Footer from '../components/Footer';

const Resources = () => {
  const resourceCategories = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Study Materials",
      description: "Comprehensive study guides and reference materials for all courses",
      count: "150+ Resources"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Lectures",
      description: "High-quality video content covering practical and theoretical concepts",
      count: "200+ Videos"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Practice Papers",
      description: "Previous year papers and mock tests for exam preparation",
      count: "100+ Papers"
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Digital Library",
      description: "Access to e-books, journals, and technical documentation",
      count: "500+ Books"
    }
  ];

  const features = [
    "24/7 Online Access",
    "Mobile-Friendly Platform",
    "Regular Content Updates",
    "Expert-Curated Materials",
    "Interactive Learning Tools",
    "Progress Tracking"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Learning Resources
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Access comprehensive study materials, video lectures, and digital resources to enhance your learning experience
          </p>
        </div>
      </section>

      {/* Banner Image */}
      <section className="relative">
        <img 
          src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg" 
          alt="Learning Resources" 
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Study at a Fun Loving Environment</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              Experience learning like never before with our modern facilities and engaging teaching methods
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resource Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive collection of learning materials designed to support your academic journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-purple-50 transition-colors group text-center">
                <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-700 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <span className="text-purple-600 font-semibold">{category.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
                alt="Students studying" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Study at a Fun Loving Environment
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="mb-4">
                  Our learning environment is designed to make education enjoyable and effective. We believe that when students are engaged and motivated, they achieve better results and develop a genuine love for learning.
                </p>
                <p className="mb-4">
                  With state-of-the-art facilities, interactive teaching methods, and a supportive community, we create an atmosphere where students can thrive academically while enjoying their educational journey.
                </p>
                <p>
                  Our comprehensive resource library ensures that every student has access to the materials they need to succeed, whether they prefer traditional textbooks, digital content, or multimedia learning tools.
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">Study Resources</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-gray-600">Video Lectures</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Access Premium Learning Resources
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join our platform and get unlimited access to all study materials, video lectures, and practice resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Get Access Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              View Sample Content
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Resources;