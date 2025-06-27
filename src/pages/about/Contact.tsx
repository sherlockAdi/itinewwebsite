import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Building, Users, CheckCircle, AlertCircle, Eye } from 'lucide-react';

const contactInfo = [
  {
    icon: <Phone className="h-8 w-8 text-blue-600" />,
    title: 'Phone',
    details: ['+91 97 116 12832', '+91 11 4567 8901'],
    description: '24x7 help center for admission queries'
  },
  {
    icon: <Mail className="h-8 w-8 text-green-600" />,
    title: 'Email',
    details: ['info@atm.edu.in', 'admissions@atm.edu.in'],
    description: 'Get in touch via email'
  },
  {
    icon: <MapPin className="h-8 w-8 text-orange-600" />,
    title: 'Address',
    details: ['ATM Global Business School', 'Delhi NCR, India'],
    description: 'Visit our campus'
  },
  {
    icon: <Clock className="h-8 w-8 text-purple-600" />,
    title: 'Office Hours',
    details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
    description: 'We are here to help'
  }
];

const departments = [
  { name: 'Admissions', phone: '+91 97 116 12832', email: 'admissions@atm.edu.in' },
  { name: 'Academic Affairs', phone: '+91 11 4567 8902', email: 'academic@atm.edu.in' },
  { name: 'Student Services', phone: '+91 11 4567 8903', email: 'students@atm.edu.in' },
  { name: 'Placement Cell', phone: '+91 11 4567 8904', email: 'placement@atm.edu.in' }
];

const AboutContact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [showSubmissionDetails, setShowSubmissionDetails] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Get additional submission details
      const submissionDetails = {
        ...formData,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        pageUrl: window.location.href,
        referrer: document.referrer,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language
      };

      // Log to console for tracking
      console.log('=== CONTACT FORM SUBMISSION ===');
      console.log('Form Data:', formData);
      console.log('Submission Details:', submissionDetails);
      console.log('=== END SUBMISSION ===');

      // Store submitted data for display
      setSubmittedData(submissionDetails);

      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      setStatusMessage('Thank you! Your message has been received. We will get back to you soon.');
      setShowSubmissionDetails(true);
      
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setStatusMessage('Sorry, there was an error processing your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-8 md:py-16 px-2 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fadeIn">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-orange-500 rounded-full p-5 shadow-lg">
              <MessageSquare className="h-12 w-12 text-white" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-lg">Contact & Enquiry</h1>
          <p className="text-lg md:text-xl text-blue-900 font-medium max-w-3xl mx-auto">
            ATM Global Business School (ATM-GBS) has set up a 24x7 help center for admission queries or other information. 
            We're here to help you with all your questions and concerns.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fadeInUp">
          {contactInfo.map((info) => (
            <div key={info.title} className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">{info.title}</h3>
              <div className="space-y-1 mb-3">
                {info.details.map((detail, index) => (
                  <p key={index} className="text-sm text-gray-600">{detail}</p>
                ))}
              </div>
              <p className="text-xs text-gray-500">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 animate-fadeInUp">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">Send Us a Message</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mx-auto mb-6"></div>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <p className="text-green-800 font-semibold">Message Received!</p>
                </div>
                <p className="text-green-700">{statusMessage}</p>
                <button
                  onClick={() => setShowSubmissionDetails(!showSubmissionDetails)}
                  className="mt-2 text-green-600 hover:text-green-800 text-sm font-medium flex items-center"
                >
                  <Eye className="h-4 w-4 mr-1" />
                  {showSubmissionDetails ? 'Hide' : 'Show'} submission details
                </button>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                <p className="text-red-800">{statusMessage}</p>
              </div>
            )}

            {/* Submission Details */}
            {showSubmissionDetails && submittedData && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Submission Details:</h4>
                <div className="text-sm text-blue-700 space-y-1">
                  <p><strong>Name:</strong> {submittedData.fullName}</p>
                  <p><strong>Email:</strong> {submittedData.email}</p>
                  <p><strong>Phone:</strong> {submittedData.phone}</p>
                  <p><strong>Subject:</strong> {submittedData.subject}</p>
                  <p><strong>Message:</strong> {submittedData.message}</p>
                  <p><strong>Submitted:</strong> {new Date(submittedData.timestamp).toLocaleString()}</p>
                  <p><strong>Page:</strong> {submittedData.pageUrl}</p>
                  <p><strong>Referrer:</strong> {submittedData.referrer || 'Direct visit'}</p>
                  <p><strong>Device:</strong> {submittedData.screenResolution}</p>
                  <p><strong>Language:</strong> {submittedData.language}</p>
                  <p><strong>Timezone:</strong> {submittedData.timezone}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number" 
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <select 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="Admission Enquiry">Admission Enquiry</option>
                  <option value="Academic Information">Academic Information</option>
                  <option value="Placement Related">Placement Related</option>
                  <option value="General Information">General Information</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help you..." 
                  rows={4}
                  required
                ></textarea>
              </div>
              <button 
                className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600'
                } text-white`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-3" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Department Contacts & Quick Info */}
          <div className="space-y-8 animate-fadeInUp">
            {/* Department Contacts */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Department Contacts</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mx-auto mb-6"></div>
              </div>
              <div className="space-y-4">
                {departments.map((dept) => (
                  <div key={dept.name} className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg p-5 hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-blue-800 mb-5">{dept.name}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-blue-600" />
                        {dept.phone}
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-green-600" />
                        {dept.email}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Information */}
            {/* <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Quick Information</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mx-auto mb-6"></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                  <Building className="h-6 w-6 text-green-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Campus Visit</h3>
                    <p className="text-sm text-gray-600">Schedule a campus tour to explore our facilities</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Student Support</h3>
                    <p className="text-sm text-gray-600">24/7 support for current students</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-orange-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Live Chat</h3>
                    <p className="text-sm text-gray-600">Chat with our representatives online</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-center text-white animate-fadeInUp">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-lg mb-6 opacity-90">
            Call our 24x7 helpline for instant support and guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+919711612832" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              +91 97 116 12832
            </a>
            <a 
              href="mailto:sw2@atm.edu.in" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
            >
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </a>
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
};

export default AboutContact; 