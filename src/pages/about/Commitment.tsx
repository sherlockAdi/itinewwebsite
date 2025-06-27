import React, { useEffect, useRef, useState } from 'react';
import { Users, Award, Eye, ShieldCheck, BookOpen } from 'lucide-react';

const values = [
  {
    icon: <Users className="h-8 w-8 text-blue-600" />, 
    title: 'Student-Centric Approach',
    description: 'ATM-GBS organizes itself around students, empowering self-governance and student-led learning.'
  },
  {
    icon: <Award className="h-8 w-8 text-orange-500" />, 
    title: 'Value Creation for Stakeholders',
    description: 'We create value for students, corporate clients, employees, and the community through education and innovation.'
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-green-600" />, 
    title: 'Transparency',
    description: 'We operate with honesty and integrity, ensuring transparency in all our operations.'
  },
  {
    icon: <BookOpen className="h-8 w-8 text-purple-600" />, 
    title: 'Commitment to Quality',
    description: 'We demand quality from our service providers and maintain the highest standards in education.'
  },
];

const images = [
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', // classroom
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', // woman with textbook
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', // student with bag
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=600&q=80', // group study
  'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80', // chalkboard
];

function ImageSlider({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, images.length]);

  const startX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX.current !== null) {
      const diff = e.changedTouches[0].clientX - startX.current;
      if (diff > 50) setCurrent((prev) => (prev - 1 + images.length) % images.length);
      if (diff < -50) setCurrent((prev) => (prev + 1) % images.length);
    }
    startX.current = null;
  };

  return (
    <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg bg-gray-200" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Commitment Slide ${idx + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          draggable={false}
        />
      ))}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-2.5 h-2.5 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-white border border-blue-300'} transition-all`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const Commitment = () => (
  <section className="relative min-h-[70vh] bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-8 md:py-16 px-2 md:px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">
      {/* Left: Content */}
      <div className="flex-1 min-w-0">
        {/* Hero Section */}
        <div className="text-center md:text-left mb-10 animate-fadeIn">
          {/* <div className="flex justify-center md:justify-start mb-6">
            <span className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-orange-500 rounded-full p-5 shadow-lg">
              <Eye className="h-12 w-12 text-white" />
            </span>
          </div> */}
          {/* <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-lg">Our Commitment</h1> */}
          <p className="text-lg md:text-xl text-blue-900 font-medium max-w-2xl mx-auto md:mx-0">
            ATM-GBS is committed to its values of educating and grooming individuals ready to contribute in making society better off. Our values guide every stakeholder to create a favorable environment for our mission.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl shadow p-6 md:p-8 text-center animate-fadeInUp mb-8">
          <blockquote className="italic text-blue-800 text-lg md:text-xl mb-4">“By abiding by our values, everyone at ATM-GBS contributes to an environment where our mission can be accomplished.”</blockquote>
          <div className="text-blue-700 font-bold">Prof. (Dr.) Shameena Gupta</div>
          <div className="text-blue-500 text-sm">Director, ATM Global Business School</div>
        </div>

        {/* Values/Commitment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-fadeInUp">
          {values.map((val, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border-t-4 border-blue-200 hover:border-blue-500 transition-all">
              <div className="mb-3">{val.icon}</div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">{val.title}</h3>
              <p className="text-gray-600 text-sm">{val.description}</p>
            </div>
          ))}
        </div>

        {/* Leadership Quote */}
        

        {/* Commitment Statement Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-blue-100 animate-fadeInUp">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
            ATM-GBS Our Values
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            ATM-GBS is committed to its values of educating and grooming individuals ready to contribute in making the Society better off. By undertaking to abide by these values, everyone at ATM-GBS will contribute to creating a favorable environment in which ATM-GBS's mission can be accomplished.
          </p>
          <ul className="list-disc pl-6 text-gray-600 text-base space-y-2">
            <li>Student-Centric Approach: Empowering students by encouraging self-governance and student-led learning.</li>
            <li>Support and respect for internationally proclaimed human rights.</li>
            <li>Uphold freedom of association and effective recognition of the right to collective bargaining.</li>
            <li>Support all precautionary approaches to environmental challenges.</li>
            <li>Fight against all forms of corruption.</li>
            <li>Focus on value creation for all stakeholders: students, corporate clients, employees, and the community.</li>
            <li>Transparency in operations, honesty, and integrity.</li>
            <li>Commitment to quality in all services and education provided.</li>
          </ul>
        </div>
      </div>

      {/* Right: Image Slider */}
      <div className="flex-1 w-full max-w-md mx-auto md:mx-0 md:sticky md:top-24">
        <ImageSlider images={images} />
      </div>
    </div>

    {/* Decorative SVG or Shape */}
    <svg className="absolute bottom-0 left-0 w-full h-16 md:h-24 text-blue-200" fill="none" viewBox="0 0 1440 320"><path fill="currentColor" fillOpacity=".3" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,128C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
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
  </section>
);

export default Commitment; 