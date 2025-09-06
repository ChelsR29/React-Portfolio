// PortfolioPage.jsx
import Project from '../components/Project';
import './PortfolioPage.css';
import Project1 from '../assets/images/Project1.png';
import Project2 from '../assets/images/Project2.png';
import Project3 from '../assets/images/Project3.png';
import Project4 from '../assets/images/Project4.png';

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGithub,
  FaLock, FaShieldAlt
} from 'react-icons/fa';
import { SiRedux, SiExpress, SiGraphql, SiMysql, SiMongodb, SiJest } from 'react-icons/si';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { useEffect, useMemo, useRef, useState } from 'react';

const projects = [
  {
    title: 'Inkspire Studio',
    description: 'A modern tattoo studio portfolio and booking site.',
    deployLink: 'https://inkspire-studio.netlify.app/',
    repoLink: 'https://github.com/ChelsR29/inkspire-studio',
    image: Project3,
    techStack: ['React', 'Tailwind CSS', 'Google Sheets Integration'],
  },
  {
    title: 'DJ Eclipse Event Page',
    description: 'A responsive, modern landing page built for a live DJ event.',
    deployLink: 'https://dj-eclipse-event.netlify.app/', // replace with your actual deployed link
    repoLink: 'https://github.com/ChelsR29/Event-Landing-DJParty', // replace with your actual repo link
    image: Project4, // update this import with your actual image variable
    techStack: ['HTML', 'CSS', 'JavaScript', 'Google Sheets Integration'],
  },
  {
    title: 'PawFolio',
    description: 'A pet management site built using MERN stack',
    deployLink: 'https://pawfolio-kk2s.onrender.com/',
    repoLink: 'https://github.com/mojo718/PawFolio',
    image: Project1,
    techStack: ['React', 'GraphQL', 'MongoDB', 'Mongoose ODM'],
  },
  {
    title: 'Tech Blog',
    description: 'A CMS-style blog site built using the MVC paradigm',
    deployLink: 'https://calm-scrubland-92937-dea32940f66f.herokuapp.com/',
    repoLink: 'https://github.com/ChelsR29/Tech-Blog',
    image: Project2,
    techStack: ['React', 'Node.js', 'Express.js', 'Sequelize'],
  },
];

const SKILL_CHANNELS = [
  {
    name: 'Frontend',
    skills: [
      { label: 'HTML', icon: <FaHtml5 /> },
      { label: 'CSS', icon: <FaCss3Alt /> },
      { label: 'JavaScript', icon: <FaJs /> },
      { label: 'React', icon: <FaReact /> },
      { label: 'Redux', icon: <SiRedux /> },
    ],
    color: 'frontend',
  },
  {
    name: 'Backend',
    skills: [
      { label: 'GitHub', icon: <FaGithub /> },
      { label: 'Express', icon: <SiExpress /> },
      { label: 'GraphQL', icon: <SiGraphql /> },
      { label: 'Node', icon: <FaNode /> },
    ],
    color: 'backend',
  },
  {
    name: 'Database',
    skills: [
      { label: 'MySQL', icon: <SiMysql /> },
      { label: 'MongoDB', icon: <SiMongodb /> },
    ],
    color: 'databases',
  },
  {
    name: 'Security',
    skills: [
      { label: 'OAuth', icon: <FaLock /> },
      { label: 'JWT', icon: <FaShieldAlt /> },
    ],
    color: 'security',
  },
  {
    name: 'Testing',
    skills: [
      { label: 'Jest', icon: <SiJest /> },
    ],
    color: 'testing',
  },
];

function Portfolio() {
  // carousel state
  const [index, setIndex] = useState(0);
  const total = projects.length;
  const current = useMemo(() => projects[index], [index]);

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);
  const selectProject = (e) => setIndex(Number(e.target.value));

  // keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // touch swipe
  const touchStartX = useRef(null);
  const onTouchStart = (e) => { touchStartX.current = e.changedTouches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) dx < 0 ? goNext() : goPrev();
    touchStartX.current = null;
  };

  // NEW: Channel guide state (replaces skills-section)
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className="portfolio-container">
      <h2 className="section-title">PROJECTS</h2>
      <p className="hover-info">Use the arrows or the menu to switch projects</p>

      {/* Carousel */}
      <div
        className="carousel"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          className="nav-btn left"
          aria-label="Previous project"
          onClick={goPrev}
        >
          <FaChevronLeft />
        </button>

        <div className="slide">

          {/* animated fade via CSS */}
          <div key={current.title} className="slide-fade">
            <div className="project-wrapper">
              <Project
                title={current.title}
                description={current.description}
                deployLink={current.deployLink}
                repoLink={current.repoLink}
                image={current.image}
                techStack={current.techStack}
              />
            </div>
          </div>

          {/* Inline meta row */}
          <div className="slide-meta">
            <div className="counter">
              {index + 1} / {total}
            </div>
            <select
              className="project-select"
              aria-label="Select project"
              value={index}
              onChange={selectProject}
            >
              {projects.map((p, i) => (
                <option key={p.title} value={i}>
                  {p.title}
                </option>
              ))}
            </select>

            {/* Channel toggle sits over the "TV" */}
            <button
              className={`channel-toggle ${showGuide ? 'active' : ''}`}
              aria-pressed={showGuide}
              onClick={() => setShowGuide((s) => !s)}
            >
              {showGuide ? 'Close Guide' : 'Open Guide'}
            </button>
          </div>

          {/* === NEW: Channel Guide Overlay === */}
          {showGuide && (
            <div className="channel-guide" role="dialog" aria-label="Skill channel guide">
              <div className="channel-header">
                <div className="live-dot" aria-hidden />
                <span className="channel-title">Technical Skills</span>

              </div>

              <div className="channel-scroller" tabIndex={0}>
                {SKILL_CHANNELS.map((row) => (
                  <div className="channel-row" key={row.name}>
                    <div className={`channel-name ${row.color}`}>{row.name}</div>
                    <div className="channel-slots">
                      {row.skills.map((s) => (
                        <div className="channel-slot" key={s.label} title={s.label}>
                          <div className="slot-icon">{s.icon}</div>
                          <div className="slot-label">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <button
          className="nav-btn right"
          aria-label="Next project"
          onClick={goNext}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="dots">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            aria-label={`Go to project ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {/* REMOVED: old skills-section */}
    </div>
  );
}

export default Portfolio;

