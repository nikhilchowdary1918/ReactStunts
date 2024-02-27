import { useState } from 'react';
import logo from '../logo.png'
const Title = () => {
  return (
    <a href="/">
      <img src={logo} className="logo"></img>
    </a>
  );
};
const Header = () => {
  const[ttl,setTtl]=useState("food heaven")
  return (

    <>
      <div className="header">
        <Title />
        <h1>{ttl}</h1>
        <button onClick={()=> setTtl("Food villa changed")}>Click to change title</button>
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
