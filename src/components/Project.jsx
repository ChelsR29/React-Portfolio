function Project({ title, deployLink, repoLink, image }) {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a href={deployLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          View Deployed App
        </a>
        <a href={repoLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '0.5rem' }}>
          View GitHub Repo
        </a>
      </div>
    </div>
  );
}

export default Project;

