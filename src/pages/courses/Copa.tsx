import React from 'react';
import { Clock, Users, Award, CheckCircle, BookOpen, Briefcase } from 'lucide-react';
import Footer from '../../components/Footer';

const Copa = () => {
  const courseDetails = {
    duration: "1 Year",
    eligibility: "10th Pass",
    ageLimit: "14-40 years",
    certification: "NCVT Certificate",
    students: "500+ Enrolled"
  };

  const syllabus = [
    {
      semester: "Semester 1",
      subjects: [
        "Computer Fundamentals",
        "Operating Systems (Windows/Linux)",
        "MS Office Suite (Word, Excel, PowerPoint)",
        "Internet & Email",
        "Basic Programming Concepts"
      ]
    },
    {
      semester: "Semester 2",
      subjects: [
        "Database Management (MS Access)",
        "Web Development Basics (HTML, CSS)",
        "Programming Languages (C, Visual Basic)",
        "Computer Hardware & Networking",
        "Project Work"
      ]
    }
  ];

  const careerOpportunities = [
    "Computer Operator",
    "Data Entry Operator",
    "Office Assistant",
    "Junior Programmer",
    "Web Developer",
    "Database Assistant",
    "IT Support Executive",
    "Digital Marketing Assistant"
  ];

  const skills = [
    "Computer Operations",
    "Programming Basics",
    "Database Management",
    "Web Development",
    "Office Applications",
    "Internet & Email",
    "Hardware Troubleshooting",
    "Software Installation"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            COPA Course
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Computer Operator & Programming Assistant - Your gateway to the digital world
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">1 Year Program</h3>
            <p className="text-blue-100">Industry-Focused Curriculum</p>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg" 
                alt="COPA Course" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About COPA Course
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Computer Operator & Programming Assistant (COPA) course is designed to provide comprehensive training in computer operations, basic programming, and office applications. This course prepares students for various entry-level positions in the IT industry.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Students will gain hands-on experience with modern software applications, programming languages, and computer systems, making them job-ready for the digital economy.
              </p>

              {/* Course Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Duration</h4>
                  <p className="text-gray-600">{courseDetails.duration}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Eligibility</h4>
                  <p className="text-gray-600">{courseDetails.eligibility}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <Award className="h-6 w-6 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Certification</h4>
                  <p className="text-gray-600">{courseDetails.certification}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <Briefcase className="h-6 w-6 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Students</h4>
                  <p className="text-gray-600">{courseDetails.students}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Course Syllabus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive curriculum covering all aspects of computer operations and programming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {syllabus.map((semester, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{semester.semester}</h3>
                <ul className="space-y-3">
                  {semester.subjects.map((subject, subjectIndex) => (
                    <li key={subjectIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Career */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Skills */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills You'll Learn</h2>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                    <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="font-medium text-gray-900">{skill}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Career Opportunities</h2>
              <div className="space-y-4">
                {careerOpportunities.map((career, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <Briefcase className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <span className="font-medium text-gray-900">{career}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Apply
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to secure your admission in COPA course
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-gray-600 text-sm">Fill the application form with required details</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Document Verification</h3>
              <p className="text-gray-600 text-sm">Submit 10th certificate and other documents</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fee Payment</h3>
              <p className="text-gray-600 text-sm">Pay the course fees to confirm admission</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Learning</h3>
              <p className="text-gray-600 text-sm">Begin your journey in computer technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your COPA Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful students who have built their careers in computer technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Copa;