import { FaGithub } from 'react-icons/fa';
import './Project.css'; // Import CSS file for styling

function Project({ title, description, deployLink, repoLink, techStack, image }) {
  return (
    <div className="project">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="project-details-container">
          <div className="project-details">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>

            {/* Conditionally render the tech stack if it exists and if deployLink is valid */}
            {techStack && deployLink !== '#' && (
              <div className="tech-stack">
                {techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            )}

            {/* Conditionally render the project links if they are not placeholders */}
            <div className="project-links">
              {deployLink && deployLink !== '#' && (
                <a href={deployLink} className="project-btn" target="_blank" rel="noopener noreferrer">
                  Live
                </a>
              )}
              {repoLink && repoLink !== '#' && (
                <a href={repoLink} className="project-btn" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Git
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;



