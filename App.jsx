import Header from './src/components/Header';
import AboutmePage from './src/pages/AboutmePage';
import ContactPage from './src/pages/ContactPage';
import PortfolioPage from './src/pages/PortfolioPage';
import Homepage from './src/pages/Homepage';

function App() {
  return (
    <>
      <Header />
      <div id="homepage">
        <Homepage />
      </div>
      <div id="projects" style={{ height: '100vh' }}>
        <PortfolioPage />
      </div>
      <div id="aboutme">
        <AboutmePage />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
    </>
  );
}

export default App;