import Header from './components/Header';
import AboutmePage from './pages/AboutmePage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import Homepage from './pages/Homepage';

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