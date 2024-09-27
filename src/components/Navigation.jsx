import { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false); // State for the menu toggle
  const [isDarkMode, setIsDarkMode] = useState(false); // State for the theme toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Toggle the theme state
  };

  // Apply the theme class to the body when the theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <>
      {/* Light/Dark Mode Toggle */}
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {isDarkMode ? '☀️' : '🌙'} {/* Sun and Moon icons */}
      </button>

      {/* Hamburger menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Full screen overlay menu */}
      <div className={`overlay ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>&times;</button>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#aboutme" className="nav-link" onClick={toggleMenu}>
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link" onClick={toggleMenu}>
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={toggleMenu}>
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="#resume" className="nav-link" onClick={toggleMenu}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;


