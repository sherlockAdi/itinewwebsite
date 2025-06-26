import React from 'react';
import { Building, Users, TrendingUp, Award, CheckCircle, Target } from 'lucide-react';
import Footer from '../components/Footer';

const Placement = () => {
  const placementStats = [
    { icon: <Users className="h-8 w-8" />, value: '100%', label: 'Placement Rate' },
    { icon: <Building className="h-8 w-8" />, value: '500+', label: 'Partner Companies' },
    { icon: <TrendingUp className="h-8 w-8" />, value: '₹25,000', label: 'Average Package' },
    { icon: <Award className="h-8 w-8" />, value: '95%', label: 'Student Satisfaction' },
  ];

  const companies = [
    'Tata Motors', 'Maruti Suzuki', 'Hyundai', 'Mahindra', 'L&T',
    'BHEL', 'HAL', 'SAIL', 'ONGC', 'NTPC', 'Reliance', 'Wipro',
    'Infosys', 'Indian Railways', 'Defence Factories'
  ];

  const placementProcess = [
    {
      step: '1',
      title: 'Skill Assessment',
      description: 'Comprehensive evaluation of technical and soft skills'
    },
    {
      step: '2',
      title: 'Resume Building',
      description: 'Professional resume preparation and portfolio development'
    },
    {
      step: '3',
      title: 'Interview Training',
      description: 'Mock interviews and communication skill enhancement'
    },
    {
      step: '4',
      title: 'Company Matching',
      description: 'Matching students with suitable company requirements'
    },
    {
      step: '5',
      title: 'Final Placement',
      description: 'Successful placement with ongoing support'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 via-green-800 to-emerald-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            100% Placement Guarantee
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Our dedicated placement cell ensures every student gets the right opportunity to start their career with leading companies across India.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {placementStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-600">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
                alt="Placement support" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                100% Placement Support
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="mb-4">
                  आज के इस दौर में तालिम और ट्रेनिंग का मकसद है सिर्फ नौकरी। अगर नौकरी नही तो किस काम की ट्रेनिंग और कैसी तालिम। अगर कोई संस्था ट्रेनिंग दे रही है तो उसका अपना प्लेसमेंट डिपार्टमेंट भी होना चाहिए ताकि पास होने वाले स्टुडेंट का कैम्पस सेलेक्शन हो सके।
                </p>
                <p className="mb-4">
                  हमें इस बात का गौरव प्राप्त है कि हमारे तमाम स्टुडेंट का देश और विदेश की कंपनियों में सेलेक्शन हो जाता है। और इस काम के लिए हमारा प्लेसमेंट डिपार्टमेंट पूरी जिम्मेदारी और जवाबदेही के साथ महीने के 26 दिन काम करता है।
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Dedicated Placement Team</h4>
                    <p className="text-gray-600">26 days a month active placement support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">National & International Opportunities</h4>
                    <p className="text-gray-600">Placements in leading companies across India and abroad</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Campus Recruitment</h4>
                    <p className="text-gray-600">Regular campus drives and direct company interactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Placement Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to ensure every student gets placed successfully
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {placementProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
                {index < placementProcess.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-green-200 transform translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Placement Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leading companies that regularly recruit our graduates
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {companies.map((company, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{company}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secure Your Future Today
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our placement program and get guaranteed job opportunities with leading companies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Contact Placement Cell
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Placement;