import logo from '../logo.png';
import { Link } from 'react-router-dom';
const Title = () => {
  return (
    <a href="/">
      <img src={logo} className="logo"></img>
    </a>
  );
};
const Header = () => {

  return (

    <>
      <div className="header">
        <Title />

        <div className="nav-items">
          <ul>
          <li>
            <Link to="/">Home</Link> 
          </li>
          <li>
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link></li>
          <li>
          <Link to="/cart">Cart</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
