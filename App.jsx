import Header from './src/components/Header';
import Footer from './src/components/Footer';
import AboutmePage from './src/pages/AboutmePage';
import ContactPage from './src/pages/ContactPage';
import PortfolioPage from './src/pages/PortfolioPage';
import ResumePage from './src/pages/ResumePage';

function App() {
  return (
    <>
      <Header />
      <div id="aboutme">
        <AboutmePage />
      </div>
      <div id="portfolio">
        <PortfolioPage />
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