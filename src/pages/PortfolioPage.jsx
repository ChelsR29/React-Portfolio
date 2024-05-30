import Project from '../components/Project';

const projects = [
  {
    title: 'Project 1',
    deployLink: 'https://example.com/project1',
    repoLink: 'https://github.com/username/project1',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    title: 'Project 2',
    deployLink: 'https://example.com/project2',
    repoLink: 'https://github.com/username/project2',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    title: 'Project 3',
    deployLink: 'https://example.com/project3',
    repoLink: 'https://github.com/username/project3',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    title: 'Project 4',
    deployLink: 'https://example.com/project4',
    repoLink: 'https://github.com/username/project4',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    title: 'Project 5',
    deployLink: 'https://example.com/project5',
    repoLink: 'https://github.com/username/project5',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    title: 'Project 6',
    deployLink: 'https://example.com/project6',
    repoLink: 'https://github.com/username/project6',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
];

function Portfolio() {
  return (
    <div className="container">
      <h2>Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
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