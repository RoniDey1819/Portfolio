import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Papers from './components/Papers';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Certifications />
      <Papers />
      <ProjectList />
      <Contact />
      <footer style={{ textAlign: 'center', padding: '20px', color: '#666', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} Roni Dey. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
