import Restcard from "./Restcard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchInput,allRest){
  const filterData= allRest.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase()));
  return filterData;
}
const Body= () =>{
    const[allRest,setAllRest]=useState([])
    //restInput--Data in cards, setRestdata-- function that is created by useState hook to change the state of the data
    const[filteredData,setFilteredData]=useState([])
    const[searchInput,setSearchInput]=useState("")

    useEffect(()=>{getRestfromapi();},[])
    //useEffect(()=>{console.log("use effect is called")},[searchInput]) example of useeffect when searchinput is changed
    //useEffect(()=>{console.log("use effect is called")},[]) If dependancy array is empty ,it is called only once

    async function getRestfromapi(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9622536&lng=77.6979885&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      const arrayOfCards = json.data.cards; 
      const restaurant_list = "restaurant_grid_listing";
      for (const cardObj of arrayOfCards) { 
        if (cardObj.card.card && cardObj.card.card.id === restaurant_list) 
        { 
          const resData = cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
          //console.log(resData)
          setAllRest(resData)
          setFilteredData(resData)
      //setAllRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }}}
    return(allRest.length === 0)? <Shimmer/> : (
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
  
          const data = filterData(searchInput,allRest);
          //console.log(data)
          setFilteredData(data);
        } }
        
        >search</button>
 
      </div>
      <div className="restcard">
      {
        filteredData.map((restaurant) =>{ 
          return (
            restaurant.info ? <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}><Restcard {...restaurant.info} /></Link> : null
        );
      })
      }
      </div>

      </>
    )
    }

export default Body;