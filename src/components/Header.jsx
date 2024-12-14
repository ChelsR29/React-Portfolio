import Nav from './Navigation';
import './Header.css'; 

const Header = () => {
  return (
    <header className='header'>
      <a href="#top" className="header-link">
        <h1>Chelsea R.</h1>
      </a>
      <Nav />
    </header>
  );
};

export default Header;

