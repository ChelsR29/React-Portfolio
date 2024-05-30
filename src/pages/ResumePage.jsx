function ResumePage() {
  return (
    <div className="container pt-4">
      <h2>Resume</h2>
      <p>Download my resume: <a href="/path/to/your/resume.pdf" download>Download Resume</a></p>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </div>
  );
}

export default ResumePage;

