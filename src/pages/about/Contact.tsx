import React from 'react';

const AboutContact = () => (
  <section className="py-8 px-4 max-w-3xl mx-auto">
    <h1 className="text-2xl font-bold mb-4">Contact / Enquiry</h1>
    <p className="text-gray-700 mb-2">ATM Global Business School (ATM-GBS) has set up a 24x7 help center for admission queries or other information. Please contact us or call +91 97 116 12832.</p>
    <form className="mt-6 space-y-4">
      <input className="w-full border rounded px-3 py-2" type="text" placeholder="Full name" />
      <input className="w-full border rounded px-3 py-2" type="email" placeholder="Email address" />
      <input className="w-full border rounded px-3 py-2" type="tel" placeholder="Phone number" />
      <textarea className="w-full border rounded px-3 py-2" placeholder="Message" rows={4}></textarea>
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700" type="submit">Send Enquiry</button>
    </form>
  </section>
);

export default AboutContact; 