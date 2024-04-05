import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import {
    swiggy_menu_api_URL,
    CDN_URL,
    ITEM_IMG_CDN_URL,
    MENU_ITEM_TYPE_KEY,
    RESTAURANT_TYPE_KEY,
  } from "../Constants";
import Shimmer from "./Shimmer";  
const RestaurantMenu= ()=>{
    const {resId}= useParams();
    const [restaurant,setRestaurant] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    useEffect(()=>{getRestaurantInfo()},[])

    async function getRestaurantInfo(){
    try{
        const data = await fetch(swiggy_menu_api_URL + resId);
        const json = await data.json();
        console.log(json);
        // Set restaurant data
        const restaurantData = json?.data?.cards?.map(x => x.card)?.find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
        setRestaurant(restaurantData);

        // Set menu item data
        const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.
        cards?.map(x => x.card?.card)?.filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];

        const uniqueMenuItems = [];
        menuItemsData.forEach((item) => {
            if (!uniqueMenuItems.find(x => x.id === item.id)) 
            {
                uniqueMenuItems.push(item);
            }
        })
        setMenuItems(uniqueMenuItems);
        
    }
    catch (error){
        setMenuItems([]);
        setRestaurant(null);
        console.log(error);

    }
}

    // const[restaurant,setRestaurant]=useState({});

    // useEffect(()=>{
    //     getRestaurantInfo()
    // },[]);

    // async function getRestaurantInfo(){
    //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=");
    //     const json = await data.json();
    //     console.log(json.data);
    //     //setRestaurant(json.data);


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
