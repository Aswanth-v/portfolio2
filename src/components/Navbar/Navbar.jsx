import React from 'react';
import './Navbar.css';

import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [text] = useTypewriter({
    words: ['a Developer', 'an Artist', '& a Designer'],
    loop: true,
    delay: 100,
    deleteSpeed: 50,
  });

  // 🔽 Resume download function
  const handleDownloadResume = () => {
    const resumeUrl = '/recorces/Aswanth_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Aswanth_Resume.pdf';
    link.click();
  };

  return (
    <>
      <div className="background">
        <div className="overlay-text">
          <p style={{ color: "#1ce480", fontFamily: "Georgia" }}>Hi! &nbsp;I am</p>
          <h1>Aswanth.v</h1>
          <p className="typewriter-effect">
            I'm &nbsp;<span className="animated-text">{text}</span>
            <Cursor cursorColor="#1ce480" />
          </p>

          <div className="but-div">
            <button
              className="button"
              onClick={() =>
                window.open("https://linkedin.com/in/aswanth-v", "_blank", "noopener,noreferrer")
              }
            >
              About Me
            </button>

            {/* 🔽 Resume Download Button */}
            <button className="button" onClick={handleDownloadResume}>
              Download Resume
            </button>
          </div>
        </div>

        <div>
          <a href="mailto:aswanthvthalora140905@gmail.com">
            <h2 className="chat">Let's Chat</h2>
          </a>
        </div>

        <div className="social-icon">
          <a href="https://github.com/aswanth-v" target="_blank" rel="noopener noreferrer" className="icon1">
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a href="https://linkedin.com/in/aswanth-v" target="_blank" rel="noopener noreferrer" className="icon2">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a href="https://instagram.com/_aswa_v" target="_blank" rel="noopener noreferrer" className="icon3">
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a href="https://wa.me/7736212900" target="_blank" rel="noopener noreferrer" className="icon4">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
