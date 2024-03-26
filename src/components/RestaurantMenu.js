import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
const RestaurantMenu= ()=>{
    const {resid}= useParams();

    // const[restaurant,setRestaurant]=useState();

    // useEffect(()=>{
    //     getRestaurantInfo()
    // },[]);

    // async function getRestaurantInfo(){
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9622536&lng=77.6979885&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //     const json = await data.json();
    //     console.log(json.data);
    //     setRestaurant(json.data);
    // }

    return(
        <div>
            <h1>restaurant id= {resid}</h1>
            
        </div>
    )
}
export default RestaurantMenu;