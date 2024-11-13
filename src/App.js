// src/App.js
import React from 'react';
import './App.css'; // Import CSS file
import Header from './components/Header';
import Profile from './components/Profile';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Languages from './components/Languages';

const App = () => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
    <Header />
    <Profile />
    <Education />
    <Projects />
    <Skills />
    <Languages />
  </div>
);

export default App;
