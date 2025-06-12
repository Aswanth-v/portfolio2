import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx'
import './index.css';
import Works from './components/works/Works.jsx';
import Contact  from './components/Contact/Contact.jsx';


function App() {
  const who = "Hi, I'm Aswanth, a passionate web developer with experience in building modern web applications using the MERN stack. I love creating responsive and user-friendly websites, and I'm always eager to learn new technologies. Let's build something great together!";
  return (
    <div>
      
      <Navbar />
     
      <Hero who={who}/>
      <Works/>
      <Contact/>
    </div>
    
  );
}

export default App;
