import React from 'react';
import { Calendar, Users, Award, Globe, BookOpen, Presentation, Star, Clock } from 'lucide-react';

const upcomingEvents = [
  {
    title: 'International HR Conference 2024',
    date: 'March 15-16, 2024',
    type: 'Conference',
    description: 'Exploring the future of Human Resource Management in the digital age.',
    icon: <Users className="h-6 w-6 text-blue-600" />,
    status: 'Upcoming'
  },
  {
    title: 'Customer Relationship Management Workshop',
    date: 'April 5, 2024',
    type: 'Workshop',
    description: 'Advanced strategies for building and maintaining customer relationships.',
    icon: <Presentation className="h-6 w-6 text-green-600" />,
    status: 'Upcoming'
  },
  {
    title: 'Digital Marketing Summit',
    date: 'May 10-11, 2024',
    type: 'Summit',
    description: 'Latest trends and innovations in digital marketing and brand building.',
    icon: <Globe className="h-6 w-6 text-orange-600" />,
    status: 'Upcoming'
  }
];

const pastEvents = [
  {
    title: 'Business Analytics Conference 2023',
    date: 'December 10-11, 2023',
    type: 'Conference',
    description: 'Data-driven decision making in modern business environments.',
    icon: <Award className="h-6 w-6 text-purple-600" />,
    attendees: '200+'
  },
  {
    title: 'Leadership Development Program',
    date: 'November 20-22, 2023',
    type: 'MDP',
    description: 'Executive leadership skills and strategic thinking workshop.',
    icon: <Star className="h-6 w-6 text-yellow-600" />,
    attendees: '50+'
  },
  {
    title: 'Financial Management Seminar',
    date: 'October 15, 2023',
    type: 'Seminar',
    description: 'Modern financial management practices and investment strategies.',
    icon: <BookOpen className="h-6 w-6 text-red-600" />,
    attendees: '150+'
  }
];

const eventCategories = [
  { name: 'Conferences', count: 12, icon: <Globe className="h-8 w-8 text-blue-600" /> },
  { name: 'Workshops', count: 25, icon: <Presentation className="h-8 w-8 text-green-600" /> },
  { name: 'MDP Programs', count: 8, icon: <BookOpen className="h-8 w-8 text-orange-600" /> },
  { name: 'Seminars', count: 18, icon: <Users className="h-8 w-8 text-purple-600" /> }
];

const Events = () => (
  <section className="relative min-h-[70vh] bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-8 md:py-16 px-2 md:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12 animate-fadeIn">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-orange-500 rounded-full p-5 shadow-lg">
            <Calendar className="h-12 w-12 text-white" />
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-lg">Events & Conferences</h1>
        <p className="text-lg md:text-xl text-blue-900 font-medium max-w-3xl mx-auto">
          ATM Global Business School regularly hosts international conferences, MDP programs, and events on topics like Human Resource Management, Customer Relationship Management, and more.
        </p>
      </div>

      {/* Event Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fadeInUp">
        {eventCategories.map((category) => (
          <div key={category.name} className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-3">
              {category.icon}
            </div>
            <div className="text-2xl font-bold text-blue-600 mb-2">{category.count}</div>
            <div className="text-sm text-gray-600">{category.name}</div>
          </div>
        ))}
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 animate-fadeInUp">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Upcoming Events</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mx-auto mb-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div key={event.title} className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  {event.icon}
                </div>
                <div>
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    {event.status}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">{event.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{event.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {event.date}
                </div>
                <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  {event.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 animate-fadeInUp">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Past Events</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mx-auto mb-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event) => (
            <div key={event.title} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border-l-4 border-gray-400 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-100 rounded-lg mr-3">
                  {event.icon}
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                    Completed
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{event.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {event.date}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  {event.attendees}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-fadeInUp">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">International Conferences</h3>
          <p className="text-gray-700 mb-4">
            We host prestigious international conferences that bring together industry experts, 
            academicians, and professionals to discuss cutting-edge topics in business and management.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Global networking opportunities
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Industry expert presentations
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Research paper presentations
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">MDP Programs</h3>
          <p className="text-gray-700 mb-4">
            Our Management Development Programs (MDP) are designed for working professionals 
            to enhance their skills and stay updated with industry trends.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
              Executive leadership training
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
              Industry-specific modules
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
              Certificate programs
            </li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-center text-white animate-fadeInUp">
        <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
        <p className="text-lg mb-6 opacity-90">
          Subscribe to our newsletter to get updates about upcoming events, conferences, and programs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="px-4 py-3 rounded-lg text-gray-800 w-full sm:w-64"
          />
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
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

export default Events; 