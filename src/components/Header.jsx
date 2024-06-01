import Nav from './Navigation'
import './Header.css'; 
import Banner from '../assets/archispeak+website+banner+dark.png'

const Header = () => {
  return (
    <header className='header'>
       <h1>Chelsea R.</h1>
       <Nav />
       <img
            src= {Banner}
            alt="Banner"
            className="banner-image"
          />
    </header>
  );
};

export default Header;
