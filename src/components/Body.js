import { resList } from "../Constants";
import Restcard from "./Restcard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchInput,restInput){
  const filterData= restInput.filter((restaurant) => restaurant.data.name.includes(searchInput));
  return filterData;
}
const Body= () =>{
    const[restInput,setRestInput]=useState([])
    //restInput--Data in cards, setRestdata-- function that is created by useState hook to change the state of the data
    const[searchInput,setSearchInput]=useState("")

    useEffect(()=>{getRestfromapi();},[])
    //useEffect(()=>{console.log("use effect is called")},[searchInput]) example of useeffect when searchinput is changed
    //useEffect(()=>{console.log("use effect is called")},[]) If dependancy array is empty ,it is called only once

    async function getRestfromapi(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9622536&lng=77.6979885&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json)
      const arrayOfCards = json.data.cards; 
      const restaurant_list = "restaurant_grid_listing";
      for (const cardObj of arrayOfCards) { 
        if (cardObj.card.card && cardObj.card.card.id === restaurant_list) 
        { 
          const resData = cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
          console.log(resData)
          setRestInput(resData)
      //setRestInput(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }}}
    return(restInput.length === 0)? <Shimmer/> : (
      <>
      <div className="search-container">
        <input 
        type="text" 
        className="input-search" 
        placeholder="search" 
        value={searchInput} 
        onChange={(e)=>{
          setSearchInput(e.target.value)
        }}
        />
        <button 
        className="search-btn"
        onClick={() =>{
  
          const data = filterData(searchInput,restInput);
          //console.log(data)
          setRestInput(data);
        } }
        
        >search</button>
 
      </div>
      <div className="restcard">
      {
        restInput.map((restaurant) => (
        restaurant.info ? <Restcard {...restaurant.info} key={restaurant.info.id}/> : null
        ))
      }
      </div>

      </>
    )
    }

export default Body;