import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from './components/MainHeader';
import Home from './pages/Home';
import About from './pages/About';
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
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/copa" element={<Copa />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;