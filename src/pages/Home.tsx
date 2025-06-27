import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  Award, 
  BookOpen, 
  Target,
  CheckCircle,
  Star,
  Play,
  Calendar,
  Clock,
  MapPin
} from 'lucide-react';
import Footer from '../components/Footer';

const Home = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, value: '5000+', label: 'Students Enrolled' },
    { icon: <Award className="h-8 w-8" />, value: '100%', label: 'Placement Rate' },
    { icon: <BookOpen className="h-8 w-8" />, value: '25+', label: 'Courses Offered' },
    { icon: <Target className="h-8 w-8" />, value: '15+', label: 'Years Experience' },
  ];

  const features = [
    {
      icon: <Award className="h-12 w-12" />,
      title: "Industry-Certified Courses",
      description: "All our courses are designed according to industry standards and certified by relevant authorities."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Expert Faculty",
      description: "Learn from experienced professionals with real-world industry experience and academic excellence."
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "100% Placement Support",
      description: "Dedicated placement cell ensuring every student gets the right opportunity to start their career."
    }
  ];

  const courses = [
    {
      title: "Computer Operator & Programming Assistant (COPA)",
      duration: "1 Year",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
      description: "Learn computer operations, programming basics, and office applications."
    },
    {
      title: "Electrician",
      duration: "2 Years",
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
      description: "Master electrical installations, maintenance, and safety procedures."
    },
    {
      title: "Welder",
      duration: "1 Year",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      description: "Develop welding skills for various industrial applications."
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      course: "COPA Graduate",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      text: "The training I received here helped me secure a great job in a multinational company. The faculty is excellent and very supportive.",
      rating: 5
    },
    {
      name: "Priya Singh",
      course: "Electrician Graduate",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
      text: "Best decision I made was joining this institute. The practical training and placement support are outstanding.",
      rating: 5
    },
    {
      name: "Amit Kumar",
      course: "Welder Graduate",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      text: "The hands-on experience and modern equipment helped me become job-ready. Now I'm working in a top manufacturing company.",
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Shape Your Future with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Technical Excellence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join India's premier ITI college and transform your career with industry-relevant skills, expert training, and guaranteed placement support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/admission"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-200 flex items-center justify-center group">
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our ITI College?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive technical education with modern facilities and industry connections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors group">
                <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our most sought-after technical courses designed for industry success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <Link 
                    to="/courses"
                    className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              View All Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our successful graduates who are now thriving in their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-colors">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
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
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students and build a rewarding career in technical fields
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admission"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply for Admission
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default Home;