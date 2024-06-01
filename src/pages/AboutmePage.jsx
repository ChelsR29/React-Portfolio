import './AboutmePage.css';

function AboutmePage() {
  return (
    <div className="aboutme-container pt-4 pb-5">
      <section className="content">
        <article id="about-me" className="about-me">
          <h2 className="section-title">About Me</h2>
          <img
            src="src/assets/download.jpg"
            alt="Profile"
            className="profile-pic"
          />
          <div className="about-me-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
              tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
              impedit suscipit sed magnam alias in, repellat expedita hic explicabo
              architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Velit voluptate exercitationem quaerat pariatur
              mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
              nostrum temporibus ad omnis nam rerum eligendi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
              tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
              impedit suscipit sed magnam alias in, repellat expedita hic explicabo
              architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Velit voluptate exercitationem quaerat pariatur
              mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
              nostrum temporibus ad omnis nam rerum eligendi.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default AboutmePage;

