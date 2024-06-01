// PortfolioPage.jsx

import Project from '../components/Project';
import './PortfolioPage.css'; // Import the CSS file
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import Project3 from '../assets/Project3.png'
import Project4 from '../assets/Project4.png'
import Project5 from '../assets/Project5.png';
import Project6 from '../assets/project6.png';

const projects = [
  {
    title: 'Tech Blog',
    deployLink: 'https://calm-scrubland-92937-dea32940f66f.herokuapp.com/',
    repoLink: 'https://github.com/ChelsR29/Tech-Blog',
    image: Project1, // Replace with actual image URL
  },
  {
    title: 'Note Taker',
    deployLink: 'https://frozen-peak-12428-63b0a52ed80b.herokuapp.com/',
    repoLink: 'https://github.com/ChelsR29/Note-Taker',
    image: Project2, // Replace with actual image URL
  },
  {
    title: 'Weather Dashboard',
    deployLink: 'https://chelsr29.github.io/Weather-Dashboard/',
    repoLink: 'https://github.com/ChelsR29/Weather-Dashboard',
    image: Project3, // Replace with actual image URL
  },
  {
    title: 'Work Day Scheduler',
    deployLink: 'https://chelsr29.github.io/Work-Day-Scheduler/',
    repoLink: 'https://github.com/ChelsR29/Work-Day-Scheduler',
    image: Project4, // Replace with actual image URL
  },
  {
    title: 'Coding Quiz',
    deployLink: 'https://chelsr29.github.io/Coding-Quiz/',
    repoLink: 'https://github.com/ChelsR29/Coding-Quiz',
    image: Project5, // Replace with actual image URL
  },
  {
    title: 'Password Generator',
    deployLink: 'https://chelsr29.github.io/password-generator/',
    repoLink: 'https://github.com/ChelsR29/password-generator',
    image: Project6, // Replace with actual image URL
  },
];

function Portfolio() {
  return (
    <div className="portfolio-container">
      <h2 className="section-title">Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <Project 
              title={project.title} 
              deployLink={project.deployLink} 
              repoLink={project.repoLink} 
              image={project.image} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
