import React from 'react';
import { Briefcase, TrendingUp, Users, Award, Building, CheckCircle, Star, Target } from 'lucide-react';

const placementStats = [
  { number: '84+', label: 'Companies Visited', icon: <Building className="h-8 w-8 text-blue-600" /> },
  { number: '95%', label: 'Placement Rate', icon: <TrendingUp className="h-8 w-8 text-green-600" /> },
  { number: '₹8.5L', label: 'Highest Package', icon: <Award className="h-8 w-8 text-orange-600" /> },
  { number: '₹4.2L', label: 'Average Package', icon: <Target className="h-8 w-8 text-purple-600" /> }
];

const topCompanies = [
  'IBM', 'Genpact', 'Samsung', 'Trident Group', 'NJ Invest', 'Indusind Bank', 
  'Axis Bank', 'HDFC Bank', 'ICICI Bank', 'Wipro', 'Infosys', 'TCS',
  'Tech Mahindra', 'Cognizant', 'Accenture', 'Deloitte', 'KPMG', 'EY'
];

const placementProcess = [
  {
    step: '01',
    title: 'Pre-Placement Training',
    description: 'Comprehensive training in technical skills, communication, and interview preparation.'
  },
  {
    step: '02',
    title: 'Company Registration',
    description: 'Leading companies register for campus recruitment drives.'
  },
  {
    step: '03',
    title: 'Selection Process',
    description: 'Multi-stage selection including written tests, group discussions, and interviews.'
  },
  {
    step: '04',
    title: 'Final Placement',
    description: 'Successful candidates receive offer letters and begin their careers.'
  }
];

const Placements = () => (
  <section className="relative min-h-[70vh] bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-8 md:py-16 px-2 md:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12 animate-fadeIn">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-orange-500 rounded-full p-5 shadow-lg">
            <Briefcase className="h-12 w-12 text-white" />
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-lg">Placements & Career Success</h1>
        <p className="text-lg md:text-xl text-blue-900 font-medium max-w-3xl mx-auto">
          More than 84 companies have visited ATM for campus placement, including IBM, Genpact, Samsung, Trident group, NJ Invest, Indusind Bank, Axis Bank, HDFC, and many more.
        </p>
      </div>

      {/* Placement Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fadeInUp">
        {placementStats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-3">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Top Companies */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 animate-fadeInUp">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Recruiting Partners</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mx-auto mb-6"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {topCompanies.map((company) => (
            <div key={company} className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
              <div className="text-sm font-semibold text-blue-800">{company}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Placement Process */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Our Placement Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {placementProcess.map((process) => (
            <div key={process.step} className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-blue-800">{process.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 animate-fadeInUp">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Success Stories</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mx-auto mb-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              <h3 className="text-xl font-bold text-blue-800">Highest Package</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Our students have achieved remarkable success with the highest package reaching ₹8.5 LPA, 
              demonstrating the quality of education and training provided at ATM-GBS.
            </p>
            <div className="text-2xl font-bold text-blue-600">₹8.5 LPA</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
              <h3 className="text-xl font-bold text-blue-800">Placement Success</h3>
            </div>
            <p className="text-gray-700 mb-4">
              With a 95% placement rate, our graduates are successfully placed across various sectors 
              including IT, Banking, Consulting, and Manufacturing industries.
            </p>
            <div className="text-2xl font-bold text-green-600">95% Success Rate</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-center text-white animate-fadeInUp">
        <h3 className="text-2xl font-bold mb-4">Ready to Start Your Career?</h3>
        <p className="text-lg mb-6 opacity-90">
          Join ATM-GBS and become part of our successful alumni network with excellent placement opportunities.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Apply Now
        </button>
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

export default Placements; 