/* eslint-disable react/no-unescaped-entities */
import './Homepage.css';
import heroImg from '../assets/HeroPic.png'

function Homepage() {
    return (
        <div className="homepage pt-4 pb-5">
            <section id="hero">
                <div>
                    <img
                        src={heroImg}
                        alt="Animated Pic of Me"
                    />
                </div>
                <div>
                    <h1>
                        Hello!
                        <br />
                        I'm Chelsea Ramdat,
                    </h1>
                    <h2>A Full Stack Web Developer,</h2>
                    <p>
                        with a passion for creating aesthetic and seamless user experiences.
                    </p>
                </div>
            </section>
                {/* Scroll Indicator */}
                <a href="#projects" className="scroll-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </a>

        </div>
    );
}

export default Homepage;
