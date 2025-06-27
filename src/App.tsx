import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutIndex from './pages/about/Index';
import Vision from './pages/about/Vision';
import Mission from './pages/about/Mission';
import Commitment from './pages/about/Commitment';
import People from './pages/about/People';
import Council from './pages/about/Council';
import DirectorMessage from './pages/about/DirectorMessage';
import History from './pages/about/History';
import Placements from './pages/about/Placements';
import Events from './pages/about/Events';
import AboutContact from './pages/about/Contact';
import Courses from './pages/Courses';
import Placement from './pages/Placement';
import Resources from './pages/Resources';
import Trainers from './pages/Trainers';
import Admission from './pages/Admission';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Copa from './pages/courses/Copa';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="about">
            <Route index element={<AboutIndex />} />
            <Route path="vision" element={<Vision />} />
            <Route path="mission" element={<Mission />} />
            <Route path="commitment" element={<Commitment />} />
            <Route path="people" element={<People />} />
            <Route path="council" element={<Council />} />
            <Route path="director-message" element={<DirectorMessage />} />
            <Route path="history" element={<History />} />
            <Route path="placements" element={<Placements />} />
            <Route path="events" element={<Events />} />
            <Route path="contact" element={<AboutContact />} />
          </Route>
          <Route path="courses" element={<Courses />} />
          <Route path="placement" element={<Placement />} />
          <Route path="resources" element={<Resources />} />
          <Route path="trainers" element={<Trainers />} />
          <Route path="admission" element={<Admission />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="copa" element={<Copa />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;