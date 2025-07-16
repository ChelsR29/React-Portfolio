/* eslint-disable react/no-unescaped-entities */
import './AboutmePage.css';
import ProfilePic from '../assets/images/IMG_2605.png';
import { useEffect } from 'react';

function AboutmePage() {
  useEffect(() => {
    const aboutLinks = document.querySelectorAll('a[href="#aboutme"]');
    const hoverAbout = document.querySelector('.hover-about');

    if (aboutLinks.length > 0 && hoverAbout) {
      const handleClick = () => {
        hoverAbout.classList.remove('animate-hover-info');
        setTimeout(() => {
          hoverAbout.classList.add('animate-hover-info');
        }, 10);
      };

      aboutLinks.forEach(link => {
        link.addEventListener('click', handleClick);
      });

      // Cleanup
      return () => {
        aboutLinks.forEach(link => {
          link.removeEventListener('click', handleClick);
        });
      };
    }
  }, []);


  return (
    <div className="aboutme-container pt-4 pb-5">
      <article id="about-me" className="about-me">
        <h2 className="section-title">About Me</h2>
        <p className="hover-about">hover over image to see my interests!</p>
        <div className="centered-profile">
          <div className="profile-wrapper">
            <img
              src={ProfilePic}
              alt="Profile"
              className="profile-pic"
            />

            {/* Hover bubbles with interests */}
            <div className="hover-interests">
              <div className="interest-bubble"><span>🎵</span><p>Music</p></div>
              <div className="interest-bubble"><span>🎮</span><p>Gaming</p></div>
              <div className="interest-bubble"><span>🌳</span><p>Nature</p></div>
              <div className="interest-bubble"><span>🐾</span><p>Animals</p></div>
              <div className="interest-bubble"><span>🧠</span><p>Mental Health</p></div>
              <div className="interest-bubble"><span>🎨</span><p>Art</p></div>
              <div className="interest-bubble"><span>🥎</span><p>Sports</p></div>
              <div className="interest-bubble"><span>🔮</span><p>Astrology</p></div>
              <div className="interest-bubble"><span>📺</span><p>Anime</p></div>
            </div>
          </div>

          <p className="indented-paragraph paragraph-below-image">
            Hi there! I hold a certificate from Rutgers Coding Bootcamp and a Master's in Forensic Psychology, 
            both reflecting my passion for helping others. I am skilled in React and the MERN stack, 
            which allows me to build dynamic, responsive web applications that focus on user experience 
            and functionality.
          </p>
        </div>
      </article>

      {/* Scroll Arrow */}
      <a href="#contact" className="scroll-arrow-about">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </a>
    </div>
  );
}

export default AboutmePage;
