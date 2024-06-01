function Project({ title, deployLink, repoLink, image }) {
  return (
    <div className="project">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="project-details">
          <h3 className="project-info">{title}</h3>
          <p className="project-info">GitHub Repo: <a href={repoLink}>{repoLink}</a></p>
          <p className="project-info">Deployed App: <a href={deployLink}>{deployLink}</a></p>
        </div>
      </div>
    </div>
  );
}

export default Project;


