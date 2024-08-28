import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch=useDispatch();
  const handleClearcart=()=>{
    dispatch(clearCart());
  }

  return (
    <div className="w-6/12 mx-auto">
      <div className="flex flex-col items-start">
        <div className="cart m-10 p-10">
           
          <h1 className="text-2xl font-bold">Cart🛒</h1>
          <h2>{cartItems.length} items</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="border-b border-gray-200 py-4 relative">
                <button
                  className="p-2 bg-green-400 text-white font-bold rounded-lg shadow-md hover:bg-green-600 absolute right-2"
                  onClick={() => handleAdditem(item)}
                >
                  Add +
                </button>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600 mt-2">Price: ₹{item.price / 100}</p>
                <p className="text-gray-700 mt-2">{item.description}</p>
              </li>
            ))}
          </ul>
          <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearcart}> CLEAR CART</button> 
          {cartItems.length== 0 && <h1>CART IS EMPTY, ADD ITEMS TO THE CART</h1>}
        </div>
      </div>
    </div>
  );
};

export default Cart;
