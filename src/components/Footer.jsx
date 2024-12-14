import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Using react-icons for icons
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center">
      <div className="container">
        <p>Social Links:</p>
        <a href="https://github.com/ChelsR29" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
          <FaGithub size={25} />
        </a>
        <a href="https://www.linkedin.com/in/chelsea-ramdat" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
          <FaLinkedin size={25} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
