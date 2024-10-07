import './ResumePage.css';

function ResumePage() {
  return (
    <div className="resume-container pt-4">
      <section className="content">
        <h2 className="section-title">Resume</h2>
        <p>Download my resume: <a href="/path/to/your/resume.pdf" download>Download Resume</a></p>
      </section>
    </div>
  );
}

export default ResumePage;


