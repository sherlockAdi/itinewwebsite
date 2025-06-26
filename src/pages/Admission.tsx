import React, { useState } from 'react';
import { Calendar, FileText, Users, CheckCircle, Clock, Phone, Mail } from 'lucide-react';
import Footer from '../components/Footer';

const Admission = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    qualification: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const admissionProcess = [
    {
      step: '1',
      title: 'Application Submission',
      description: 'Fill out the online application form with required documents'
    },
    {
      step: '2',
      title: 'Document Verification',
      description: 'Submit and verify educational certificates and identity proof'
    },
    {
      step: '3',
      title: 'Entrance Test/Interview',
      description: 'Appear for course-specific entrance test or interview'
    },
    {
      step: '4',
      title: 'Fee Payment',
      description: 'Complete admission by paying the required fees'
    },
    {
      step: '5',
      title: 'Course Commencement',
      description: 'Begin your technical education journey with us'
    }
  ];

  const eligibilityCriteria = [
    {
      course: "COPA",
      qualification: "10th Pass",
      age: "14-40 years"
    },
    {
      course: "Electrician",
      qualification: "10th Pass",
      age: "14-40 years"
    },
    {
      course: "Welder",
      qualification: "8th Pass",
      age: "14-40 years"
    },
    {
      course: "Turner",
      qualification: "10th Pass",
      age: "14-40 years"
    },
    {
      course: "Mechanic Motor Vehicle",
      qualification: "10th Pass",
      age: "14-40 years"
    },
    {
      course: "Fashion Design",
      qualification: "10th Pass",
      age: "14-40 years"
    }
  ];

  const importantDates = [
    { event: "Application Start Date", date: "January 15, 2024" },
    { event: "Application Last Date", date: "March 30, 2024" },
    { event: "Entrance Test", date: "April 15-20, 2024" },
    { event: "Result Declaration", date: "May 1, 2024" },
    { event: "Admission Confirmation", date: "May 15, 2024" },
    { event: "Classes Begin", date: "June 1, 2024" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Admissions Open
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Take the first step towards a successful technical career. Apply now for our industry-focused courses.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">2024-25 Batch</h3>
            <p className="text-green-100">Applications Now Open</p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Apply Now</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Course *
                    </label>
                    <select
                      id="course"
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select a course</option>
                      <option value="copa">COPA</option>
                      <option value="electrician">Electrician</option>
                      <option value="welder">Welder</option>
                      <option value="turner">Turner</option>
                      <option value="mechanic">Mechanic Motor Vehicle</option>
                      <option value="fashion">Fashion Design</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-2">
                      Educational Qualification *
                    </label>
                    <select
                      id="qualification"
                      name="qualification"
                      required
                      value={formData.qualification}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select qualification</option>
                      <option value="8th">8th Pass</option>
                      <option value="10th">10th Pass</option>
                      <option value="12th">12th Pass</option>
                      <option value="graduate">Graduate</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Any additional information or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help?</h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Admission Office</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 9876543210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">admissions@iticollege.edu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Office Hours</p>
                      <p className="text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Quick Tips</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Keep all documents ready before applying</li>
                    <li>• Apply early to secure your preferred course</li>
                    <li>• Contact us for any clarifications</li>
                    <li>• Check eligibility criteria carefully</li>
                  </ul>
                </div>
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
              Admission Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to secure your admission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {admissionProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Important Dates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Eligibility Criteria */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Eligibility Criteria</h2>
              <div className="space-y-4">
                {eligibilityCriteria.map((criteria, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{criteria.course}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Qualification</p>
                        <p className="font-semibold text-gray-900">{criteria.qualification}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Age Limit</p>
                        <p className="font-semibold text-gray-900">{criteria.age}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Dates */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Important Dates</h2>
              <div className="space-y-4">
                {importantDates.map((date, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-green-600" />
                      <span className="font-medium text-gray-900">{date.event}</span>
                    </div>
                    <span className="text-green-600 font-semibold">{date.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't Wait - Apply Today!
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Limited seats available. Secure your future with quality technical education.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Start Your Application
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Admission;