import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../src/components/Layout/Layout.js';
import Home from '../src/components/Home.js';
import About from '../src/components/About.js';
import Projects from '../src/components/Projects.js';
import Contact from '../src/components/Contact.js';
import MediaCorner from '../src/components/MediaCorner.js'
import './App.css'
import WhatWeDo from '../src/components/WhatWeDo.js';
import Gallery from '../src/components/Gallery.js';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mediacorner" element={<MediaCorner />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;