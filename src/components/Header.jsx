import Nav from './Navigation'
import './Header.css'; 

const Header = () => {
  return (
    <header className='header'>
       <h1>Chelsea R.</h1>
       <Nav />
       <img
            src="src/assets/archispeak+website+banner+dark.jpg"
            alt="Banner"
            className="banner-image"
          />
    </header>
  );
};

export default Header;
