import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";  
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const RestaurantMenu= ()=>{
    const {resId}= useParams();
    const { restaurant, menuItems } = useRestaurant(resId)

    const dispatch = useDispatch();
    const handleAdditem=(item)=>{
        dispatch(addItem(item));

    }

    return !restaurant ? (
        <Shimmer />
        ) : (
            <>

        <div className="content ">
        <div className="restaurant-info text-center ">
            <h2 className="font-bold text-2xl ">{restaurant.name}</h2>
            <h3 className="font-semibold text-xl my-4">{restaurant?.cuisines?.join(", ")}</h3>
            <h3 className="font-semibold">Rating:{restaurant?.avgRating}⭐  ||  Cost:{restaurant?.costForTwoMessage}🤑</h3>
        </div>
        <div className="w-6/12 mx-auto">   
        <div className="flex flex-col items-start">
            <div className="menu m-10 p-10">
            <h2 className="text-xl font-bold ">Menu</h2>
            <h2>{menuItems.length} items</h2>
        <ul>
            {menuItems.map((item) => (
                
                <li key={item.id} className="border-b border-gray-200 py-4 relative ">
                    <button className="p-2 bg-green-400 text-white font-bold rounded-lg shadow-md hover:bg-green-600 absolute right-2"
                     onClick={()=>handleAdditem(item)}>
                        Add +
                        </button>
                    <h3 className="text-lg font-semibold">{item.name}</h3>

                    <p className="text-gray-600 mt-2">Price: ₹{item.price / 100}</p>
                    <p className="text-gray-700 mt-2">{item.description}</p>

                </li>
                
            ))}
        </ul>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default RestaurantMenu;
