import { useParams } from "react-router-dom";
import {
    swiggy_menu_api_URL,
    CDN_URL,
    ITEM_IMG_CDN_URL,
    MENU_ITEM_TYPE_KEY,
    RESTAURANT_TYPE_KEY,
  } from "../Constants";
import Shimmer from "./Shimmer";  
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu= ()=>{
    const {resId}= useParams();
    const { restaurant, menuItems } = useRestaurant(resId)

    return !restaurant ? (
        <Shimmer />
        ) : (
            <>
        <div className="content">
        <div className="restaurant-info">
            <h1>Restaurant id= {resId}</h1>
            <h2>{restaurant.name}</h2>
            <img src={CDN_URL + restaurant.cloudinaryImageId}/>
            <h3>{restaurant?.cuisines?.join(", ")}</h3>
            <h3>Rating:{restaurant?.avgRating}</h3>
            <h3>{restaurant?.sla?.slaString}</h3>
            <h3>Cost:{restaurant?.costForTwoMessage}</h3>

        </div>
        <div className="menu">
            {console.log(menuItems)}
            <h2>Menu</h2>
            <h2>{menuItems.length} items</h2>
            <h3>{menuItems.map((item) => <li key={item?.id}>{item?.name}</li>)}</h3>

            </div>
        </div>
        </>
    )
}
export default RestaurantMenu;
