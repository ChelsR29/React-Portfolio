// PortfolioPage.jsx
import Project from '../components/Project';
import './PortfolioPage.css'; // Import the CSS file
import Project1 from '../assets/images/Project1.png'
import Project2 from '../assets/images/Project2.png'
import InProgress from '../assets/images/InProgress.png'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt,
  FaDatabase, FaGithub, FaLock, FaShieldAlt, FaFlask, FaExchangeAlt, FaCode
} from 'react-icons/fa';
import { SiRedux, SiExpress, SiGraphql, SiMysql, SiMongodb, SiJest } from 'react-icons/si';


const projects = [
  {
    title: 'PawFolio',
    description: 'A pet management site built using MERN stack',
    deployLink: 'https://pawfolio-kk2s.onrender.com/',
    repoLink: 'https://github.com/mojo718/PawFolio',
    image: Project1,
    techStack: ['React', 'GraphQL', 'MongoDB', 'Mongoose ODM'], // Add tech stack here
  },
  {
    title: 'Tech Blog',
    description: 'A CMS-style blog site built using the MVC paradigm',
    deployLink: 'https://calm-scrubland-92937-dea32940f66f.herokuapp.com/',
    repoLink: 'https://github.com/ChelsR29/Tech-Blog',
    image: Project2,
    techStack: ['React', 'Node.js', 'Express.js', 'Sequalize'], // Add tech stack here
  },
  {
    title: 'In Progress',
    description: 'Check out my Github for more projects I am currently working on!',
    deployLink: '#', // Placeholder or omit if you want
    repoLink: '#', // Placeholder or omit if you want
    image: InProgress,
    techStack: ['React', 'JavaScript'], // Add placeholder or future tech stack
  }
];

import { useEffect } from 'react';

function Portfolio() {
  useEffect(() => {
    // Select all elements with href="#projects"
    const projectLinks = document.querySelectorAll('a[href="#projects"]');
    const hoverInfo = document.querySelector('.hover-info');

    if (projectLinks.length > 0 && hoverInfo) {
      projectLinks.forEach(link => {
        link.addEventListener('click', () => {
          // Remove the animation class to reset the animation
          hoverInfo.classList.remove('animate-hover-info');
          
          // Re-add the animation class after a short delay to trigger the animation
          setTimeout(() => {
            hoverInfo.classList.add('animate-hover-info');
          }, 10); // Delay to ensure the animation is reset and then triggered again
        });
      });
    }

    // Cleanup event listener when the component unmounts
    return () => {
      projectLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="portfolio-container">
      <h2 className="section-title">PROJECTS</h2>
      <p className="hover-info">hover over any project for more information</p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <Project 
              title={project.title} 
              description={project.description} 
              deployLink={project.deployLink} 
              repoLink={project.repoLink} 
              image={project.image} 
              techStack={project.techStack} 
            />
          </div>
        ))}
      </div>

      {/* Technical Skills Section */}
        <section className="skills-section">
          <h3 className="section-title">Technical Skills</h3>

          <div className="skills-list">
            <div className="skill-badge frontend">
              <span className="skill-category">Frontend</span>
              <FaHtml5 size={40} />
              <span className="skill-label">HTML</span>
            </div>
            <div className="skill-badge frontend">
              <span className="skill-category">Frontend</span>
              <FaCss3Alt size={40} />
              <span className="skill-label">CSS</span>
            </div>
            <div className="skill-badge frontend">
              <span className="skill-category">Frontend</span>
              <FaJs size={40} />
              <span className="skill-label">JavaScript</span>
            </div>
            <div className="skill-badge frontend">
              <span className="skill-category">Frontend</span>
              <FaReact size={40} />
              <span className="skill-label">React</span>
            </div>
            <div className="skill-badge frontend">
              <span className="skill-category">Frontend</span>
              <SiRedux size={40} />
              <span className="skill-label">Redux</span>
            </div>

            <div className="skill-badge backend">
              <span className="skill-category">Backend</span>
              <FaNode size={40} />
              <span className="skill-label">Node.js</span>
            </div>
            <div className="skill-badge backend">
              <span className="skill-category">Backend</span>
              <SiExpress size={40} />
              <span className="skill-label">Express</span>
            </div>
            <div className="skill-badge backend">
              <span className="skill-category">Backend</span>
              <FaExchangeAlt size={32} />
              <span className="skill-label">RESTful APIs</span>
            </div>
            <div className="skill-badge backend">
              <span className="skill-category">Backend</span>
              <SiGraphql size={40} />
              <span className="skill-label">GraphQL</span>
            </div>

            <div className="skill-badge databases">
              <span className="skill-category">Database</span>
              <SiMysql size={40} />
              <span className="skill-label">MySQL</span>
            </div>
            <div className="skill-badge databases">
              <span className="skill-category">Database</span>
              <SiMongodb size={40} />
              <span className="skill-label">MongoDB</span>
            </div>

            <div className="skill-badge devops">
              <span className="skill-category">DevOps</span>
              <FaGithub size={40} />
              <span className="skill-label">GitHub</span>
            </div>

            <div className="skill-badge security">
              <span className="skill-category">Security</span>
              <FaLock size={40} />
              <span className="skill-label">OAuth</span>
            </div>
            <div className="skill-badge security">
              <span className="skill-category">Security</span>
              <FaShieldAlt size={40} />
              <span className="skill-label">JWT</span>
            </div>

            <div className="skill-badge testing">
              <span className="skill-category">Testing</span>
              <SiJest size={40} />
              <span className="skill-label">Jest</span>
            </div>
          </div>



          {/* Scroll Arrow now inside the skills section */}
          <a href="#aboutme" className="scroll-arrow-portfolio">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </a>
        </section>
    </div>
  );
}

export default Portfolio;
