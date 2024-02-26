import logo from '../logo.png'
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
            <li>Home</li>
            <li>About US</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
