import React from 'react';
import { Link } from 'react-router-dom';

const AboutIndex = () => (
  <section className="py-8 px-4 max-w-3xl mx-auto">
    <h1 className="text-2xl font-bold mb-4">About ATM Global Business School</h1>
    <p className="text-gray-700 mb-4">ATM Global Business School (ATM-GBS) was founded in 1999 under aegis of Shree Vaishno Education Society by Ex-IMTians to impart quality education and outstanding learning experience to its students at affordable price. It is promoted by a group of eminent educationists & industrial professionals with a commitment to develop and deliver industry-focused programmes and build a solid foundation for the future of its students.</p>
    <ul className="list-disc pl-6 space-y-2">
      <li><Link className="text-blue-600 hover:underline" to="/about/vision">Vision</Link></li>
      <li><Link className="text-blue-600 hover:underline" to="/about/mission">Mission</Link></li>
      <li><Link className="text-blue-600 hover:underline" to="/about/commitment">Our Commitment</Link></li>
      <li><Link className="text-blue-600 hover:underline" to="/about/people">Our People</Link></li>
      <li><Link className="text-blue-600 hover:underline" to="/about/council">Council</Link></li>
      <li><Link className="text-blue-600 hover:underline" to="/about/director-message">Director's Message</Link></li>
      <li><Link className="text-blue-600 hover:underline" to="/about/history">History</Link></li>
      <li><Link className="text-blue-600 hover:underline" to="/about/placements">Placements</Link></li>
      <li><Link className="text-blue-600 hover:underline" to="/about/events">Events & Conferences</Link></li>
      <li><Link className="text-blue-600 hover:underline" to="/about/contact">Contact/Enquiry</Link></li>
    </ul>
  </section>
);

export default AboutIndex; 