import React, { useState } from 'react';

const people = [
  {
    name: 'Mr. Indramani Tiwari',
    title: 'HOD and Professor MBA, CFM-Bangalore, CFP-FPSB., Financial Mgmt',
    img: 'indramani.jpg',
    bio: 'Expert in financial management and academic leadership, Mr. Tiwari has mentored hundreds of students to success.',
    remark: '“Guiding students to financial wisdom.”',
  },
  {
    name: 'Dr. Shameena Gupta',
    title: 'Ph.D., M.Phil, MCA(PGDCA), MBA Director, ATM Global Operations Research',
    img: 'shameena_madan_0013.jpg',
    bio: 'A visionary leader and director, Dr. Gupta is dedicated to fostering innovation and research at ATM-GBS.',
    remark: '“Inspiring innovation every day.”',
  },
  {
    name: 'Dr. M.Chandra Sekhar',
    title: 'Doctorate in Management PG Guidance and Counseling TQM and Six Sigma',
    img: 'chander_sherkar_0010.jpg',
    bio: 'Specialist in management and quality systems, Dr. Sekhar brings global best practices to the classroom.',
    remark: '“Quality is not an act, it is a habit.”',
  },
  {
    name: 'Prof. Jan Surya',
    title: 'PhD.(Thesis Submitted) MBA(IB), IIFT CCIBL, CCEM IB & Marketing',
    img: 'jan_surya_019.jpg',
    bio: 'International business and marketing expert, Prof. Surya connects theory with real-world application.',
    remark: '“Bridging academia and industry.”',
  },
  {
    name: 'Dr. (Prof.)A.K Puri',
    title: 'Ph.D., MBA, FMS, Delhi, CAIIB, DCLSP, M.Sc. Banking & Finance Mgmt.',
    img: 'akpuri_002.jpg',
    bio: 'With decades of experience in banking and finance, Dr. Puri is a pillar of academic excellence.',
    remark: '“Empowering future bankers.”',
  },
  {
    name: 'Dr. Sanjeev Gupta',
    title: 'Ph.D. MBA, PGDCA (MCA) DG, ATM Global Business Sch Entrepreneur Mgmt.',
    img: 'sanjeeev_sir_005.jpg',
    bio: 'Entrepreneurship mentor and management guru, Dr. Gupta inspires students to think big.',
    remark: '“Turning ideas into impact.”',
  },
  {
    name: 'Dr. (Col.)P.S. Bajaj',
    title: 'B.E. (Elect.), C. Eng (I), FIE (I) . MM. (A.U.) PG Business Communication & HR',
    img: 'psbajaj_006.jpg',
    bio: 'A leader in engineering and HR, Dr. Bajaj brings discipline and communication skills to the fore.',
    remark: '“Discipline is the bridge between goals and accomplishment.”',
  },
  {
    name: 'Mr. Sanjeev Kapoor',
    title: 'BE, (Delhi College of Engg) PGDIM (Delhi School of Marketing',
    img: 'sanjeevkapur_0014.jpg',
    bio: 'Marketing strategist and engineer, Mr. Kapoor helps students master both technology and business.',
    remark: '“Where marketing meets engineering.”',
  },
  {
    name: 'Mr. S.S Sharma',
    title: 'PGDM Chief General Manager, IT JK Tyre & Industrie ERP & MIS',
    img: 'ssharma_004.jpg',
    bio: 'IT and ERP expert, Mr. Sharma is passionate about digital transformation in business.',
    remark: '“Driving digital change.”',
  },
  {
    name: 'Dr. P.S Grover',
    title: 'PhD., M.Sc. Software Engineer',
    img: 'psgrover_0017.jpg',
    bio: 'Software engineering specialist, Dr. Grover is committed to building strong technical foundations.',
    remark: '“Code is poetry.”',
  },
  {
    name: 'Mr. Sanjay Gupta',
    title: 'M.Tech.(Mech. Engineering) Software Engineering',
    img: 'sanjay_gupta_0015.jpg',
    bio: 'Mechanical and software engineering educator, Mr. Gupta bridges the gap between hardware and software.',
    remark: '“Engineering the future.”',
  },
  {
    name: 'Mr. Alok Agarwal',
    title: 'Pursuing Doctoral Programme MBA, M.Sc (Chemistry) Business Law',
    img: 'alokagarwal_0011.jpg',
    bio: 'Business law and chemistry expert, Mr. Agarwal brings interdisciplinary knowledge to students.',
    remark: '“Knowledge knows no boundaries.”',
  },
  {
    name: 'Mr. M.P Goel',
    title: 'PG Mathematics with Statistics PG Economics with Mathematics',
    img: 'mpgoel_0018.jpg',
    bio: 'Mathematics and economics mentor, Mr. Goel is dedicated to analytical thinking and problem-solving.',
    remark: '“Numbers tell the story.”',
  },
  {
    name: 'Dr. P.U.B. Rao',
    title: 'Ph.D. in Psychology Director, AA Consulting Ex. S Organization Behaviour',
    img: 'pbrro_007.jpg',
    bio: 'Organizational behavior and psychology expert, Dr. Rao helps students understand people and systems.',
    remark: '“People are the heart of organizations.”',
  },
  {
    name: 'Mr. Avirag Jain',
    title: 'MBA, PGD. in Cyber Law Head Offshore Development C IT & Out Sourcing',
    img: 'avirag_012.jpg',
    bio: 'Cyber law and IT outsourcing leader, Mr. Jain prepares students for the digital economy.',
    remark: '“Securing the digital future.”',
  },
  {
    name: 'Mr. Sachin Dhamija',
    title: 'B. Tech (AME), LL.B Retail',
    img: 'sachin_demiji_016.jpg',
    bio: 'Retail and law professional, Mr. Dhamija brings practical business insights to the classroom.',
    remark: '“Retail is detail.”',
  },
];

const People = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-8 md:py-16 px-2 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-10 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-lg">Our People</h1>
          <p className="text-lg md:text-xl text-blue-900 font-medium max-w-2xl mx-auto">
            Our people are responsible for creating the ethos of success in which the business leaders of tomorrow thrive. Comprising highly qualified, seasoned business professionals and academics from around the world, our faculty are dedicated to ensuring students succeed in every endeavour.
          </p>
        </div>
        {/* People Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-fadeInUp">
          {people.map((person, idx) => (
            <div
              key={person.name}
              className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-blue-200 transition-all duration-300 cursor-pointer relative ${activeIndex === idx ? 'z-50 scale-110 shadow-2xl border-blue-600' : 'z-0'} ${activeIndex !== null && activeIndex !== idx ? 'opacity-60' : 'opacity-100'}`}
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              style={{ boxShadow: activeIndex === idx ? '0 8px 32px 0 rgba(0, 68, 255, 0.25)' : undefined }}
            >
              <div className="relative mb-4">
                <img
                  src={import.meta.env.BASE_URL + 'src/assets/people/' + person.img}
                  alt={person.name}
                  className={`w-28 h-28 object-cover rounded-full border-4 border-blue-100 shadow transition-all duration-300 ${activeIndex === idx ? 'scale-110 brightness-75' : ''}`}
                />
                <div className={`absolute inset-0 rounded-full bg-blue-600 bg-opacity-30 transition-opacity duration-300 ${activeIndex === idx ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
              <h3 className={`text-lg font-semibold mb-1 transition-colors duration-300 ${activeIndex === idx ? 'text-blue-600' : 'text-blue-800'}`}>{person.name}</h3>
              <p className="text-gray-600 text-sm">{person.title}</p>
              <div className={`transition-all duration-300 overflow-hidden ${activeIndex === idx ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                <p className="text-blue-900 text-base mb-2">{person.bio}</p>
                <span className="block text-blue-500 italic font-medium">{person.remark}</span>
              </div>
            </div>
          ))}
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

export default People; 