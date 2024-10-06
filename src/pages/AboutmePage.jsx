/* eslint-disable react/no-unescaped-entities */
import './AboutmePage.css';
import ProfilePic from '../assets/IMG_2605.png';

function AboutmePage() {
  return (
    <div className="aboutme-container pt-4 pb-5">
        <article id="about-me" className="about-me">
          <h2 className="section-title">About Me</h2>
          
          <div className="about-me-content">
            <div className="about-me-text">
            <p className="indented-paragraph">
              Hi there! I hold a certificate from Rutgers Coding Bootcamp and a Master's in Forensic Psychology, 
              both reflecting my passion for helping others. I am skilled in React and the MERN stack, 
              which allows me to build dynamic, responsive web applications that focus on user experience 
              and functionality.
            </p>
            <p className="indented-paragraph">
              Beyond development, my interests include music, anime, gaming, sports, exploring nature, all things related 
              to animals, mental health, art, and astrology. My goal is to create applications that make a 
              positive impact on people’s lives.
            </p>
            </div>

            <img
              src={ProfilePic}
              alt="Profile"
              className="profile-pic"
            />
          </div>
        </article>

        {/* Technical Skills Section */}
        <section className="skills-section">
          <h3 className="section-title">Technical Skills</h3>

          <div className="skills-list">
            {/* Skill badges mixed but color-coordinated */}
            <span className="skill-badge frontend">HTML</span>
            <span className="skill-badge frontend">CSS</span>
            <span className="skill-badge frontend">JavaScript</span>
            <span className="skill-badge frontend">React</span>
            <span className="skill-badge frontend">Redux</span>

            <span className="skill-badge backend">Node.js</span>
            <span className="skill-badge backend">Express</span>
            <span className="skill-badge backend">RESTful APIs</span>
            <span className="skill-badge backend">GraphQL</span>

            <span className="skill-badge databases">MySQL</span>
            <span className="skill-badge databases">MongoDB</span>

            <span className="skill-badge devops">GitHub</span>

            <span className="skill-badge security">OAuth</span>
            <span className="skill-badge security">JWT</span>

            <span className="skill-badge testing">Jest</span>
          </div>

          {/* Scroll Indicator at the Bottom */}
          <a href="#contact" className="scroll-arrow-about">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
          </a>
        </section>
    </div>
  );
}

export default AboutmePage;