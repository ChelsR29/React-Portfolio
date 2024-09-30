import Header from './src/components/Header';
import Footer from './src/components/Footer';
import AboutmePage from './src/pages/AboutmePage';
import ContactPage from './src/pages/ContactPage';
import PortfolioPage from './src/pages/PortfolioPage';
import ResumePage from './src/pages/ResumePage';
import Homepage from './src/pages/Homepage';

function App() {
  return (
    <>
      <Header />
      <div id="homepage">
        <Homepage />
      </div>
      <div id="projects">
        <PortfolioPage />
      </div>
      <div id="aboutme">
        <AboutmePage />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
      <div id="resume">
        <ResumePage />
      </div>
      <Footer />
    </>
  );
}

export default App;