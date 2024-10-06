// PortfolioPage.jsx
import Project from '../components/Project';
import './PortfolioPage.css'; // Import the CSS file
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import InProgress from '../assets/InProgress.png'


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
    description: 'More projects are currently under development.',
    deployLink: '#', // Placeholder or omit if you want
    repoLink: '#', // Placeholder or omit if you want
    image: InProgress,
    techStack: ['React', 'JavaScript'], // Add placeholder or future tech stack
  }
  // Add descriptions and techStack for the rest
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

      {/* Scroll Indicator at the Bottom */}
      <a href="#aboutme" className="scroll-arrow-portfolio">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </a>

    </div>
  );
}

export default Portfolio;
