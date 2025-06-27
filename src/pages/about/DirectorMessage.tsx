import React from 'react';

const DirectorMessage = () => (
  <section className="relative min-h-[70vh] bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-8 md:py-16 px-2 md:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-lg">Messages from Our Directors</h1>
        <p className="text-lg md:text-xl text-blue-900 font-medium max-w-3xl mx-auto">
          Visionary leadership and guidance from our esteemed directors shaping the future of business education.
        </p>
      </div>

      {/* Directors Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 animate-fadeInUp">
        {/* Dr. Shameena Gupta */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-blue-500">
          <div className="text-center mb-6">
            <div className="relative mb-6">
              <img
                src={import.meta.env.BASE_URL + 'src/assets/people/shameena_madan_0013.jpg'}
                alt="Dr. Shameena Gupta"
                className="w-48 h-48 object-cover rounded-full border-4 border-blue-100 shadow-lg mx-auto"
              />
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full p-3 shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Prof. (Dr.) Shameena Gupta</h2>
            <p className="text-blue-600 font-semibold mb-4">Director, ATM Global Business School</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Ph.D., M.Phil, MCA(PGDCA), MBA</p>
              <p>ATM Global Operations Research</p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">20+</div>
                  <div className="text-xs text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1000+</div>
                  <div className="text-xs text-gray-500">Students Mentored</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The dawn of a new technology-integrated business has evolved into a career-savvy generation. The emerging environment has brought about a marked change in the contemporary education system.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-4 rounded-xl border-l-4 border-blue-500">
              <p className="italic text-blue-800 font-medium">
                "Our commitment is to nurture future leaders who are not just academically excellent but also socially responsible and globally competitive."
              </p>
            </div>
            
            <p>
              ATM-GBS provides students with a rich classroom experience, thus generating unparalleled opportunities to expand the learning horizon of the real world of business, government administration, and the functioning of the non-profit sector.
            </p>
          </div>
        </div>

        {/* Dr. Sanjeev Gupta */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-orange-500">
          <div className="text-center mb-6">
            <div className="relative mb-6">
              <img
                src={import.meta.env.BASE_URL + 'src/assets/people/sanjeeev_sir_005.jpg'}
                alt="Dr. Sanjeev Gupta"
                className="w-48 h-48 object-cover rounded-full border-4 border-orange-100 shadow-lg mx-auto"
              />
              <div className="absolute -bottom-2 -right-2 bg-orange-600 text-white rounded-full p-3 shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-orange-800 mb-2">Dr. Sanjeev Gupta</h2>
            <p className="text-orange-600 font-semibold mb-4">DG, ATM Global Business School</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Ph.D. MBA, PGDCA (MCA)</p>
              <p>Entrepreneur Management</p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">25+</div>
                  <div className="text-xs text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">500+</div>
                  <div className="text-xs text-gray-500">Projects Led</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              As the Director General of ATM Global Business School, I believe in the power of entrepreneurship and innovation to transform education and create lasting impact in the business world.
            </p>
            
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-4 rounded-xl border-l-4 border-orange-500">
              <p className="italic text-orange-800 font-medium">
                "Entrepreneurship is not just about starting businesses; it's about creating value, solving problems, and making a difference in society."
              </p>
            </div>
            
            <p>
              Our institution is committed to fostering an environment where students can develop their entrepreneurial mindset, gain practical business skills, and become leaders who drive positive change in their communities and industries.
            </p>
            
            <p>
              We focus on integrating real-world business challenges with academic excellence, ensuring our graduates are well-prepared to navigate the complexities of today's dynamic business landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Joint Message Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-100 to-orange-100 rounded-2xl p-8 text-center animate-fadeInUp">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Shared Vision</h3>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Together, we are committed to building a world-class institution that not only imparts knowledge but also instills values, 
          fosters innovation, and prepares students to become leaders who will shape the future of business and society.
        </p>
        <div className="mt-6 flex justify-center space-x-8">
          <div className="text-center">
            <p className="font-semibold text-blue-800">Prof. (Dr.) Shameena Gupta</p>
            <p className="text-sm text-gray-600">Director</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-orange-800">Dr. Sanjeev Gupta</p>
            <p className="text-sm text-gray-600">Director General</p>
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

export default DirectorMessage; 