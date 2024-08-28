import logo from '../logo1.png';
import { Link } from 'react-router-dom';
import useStatus from '../utils/useStatus';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
const Title = () => {
  return (
    <a href="/">
      <img src={logo} className="logo"></img>
    </a>
  );
};

const Header = () => {
  const onlinestatus= useStatus();
  const {loggedinuser}= useContext(UserContext)

  const cartItems=useSelector((store)=> store.cart.items);
  console.log(cartItems);

  return (

    <>
      <div className="flex justify-between bg-green-100 shadow-lg m-10 ">
        <Title />
        <div className="flex items-center">
          <ul className="flex p-10 m-10">
          <li className='px-4 text-black text-lg font-semibold '>
            Status: {onlinestatus? "✅":"🛑" }
            </li>  
          <li className='px-4 text-black text-lg font-semibold '>
            <Link to="/">Home</Link> 
          </li>
          <li className='px-4 text-black text-lg font-semibold '>
            <Link to="/about">About US</Link>
          </li>
          <li className='px-4 text-black text-lg font-semibold '>
            <Link to="/contact">Contact</Link></li>
          <li className='px-4 text-black text-xl font-bold '>
          <Link to="/cart">Cart🛒-({cartItems.length}) items</Link></li>
          <li className='px-4 text-black text-lg font-semibold '>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className='px-4 text-black text-lg font-bold '>
             {loggedinuser} 
          </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
