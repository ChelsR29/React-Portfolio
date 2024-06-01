import { FaGithub } from 'react-icons/fa';
import './Project.css'; // Import CSS file for styling

function Project({ title, deployLink, repoLink, image }) {
  return (
    <div className="project">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="project-details-container">
          <div className="project-details">
            <h3 className="project-link"><a href={deployLink}>{title}</a></h3>
            <p className="repo-link"><a href={repoLink}><FaGithub /></a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

