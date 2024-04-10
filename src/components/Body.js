import Restcard from "./Restcard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useFillrestcard from "../utils/useFillrestcard";
import useStatus from "../utils/useStatus";



const Body= () =>{

    const{allRest,filteredData} = useFillrestcard()

    const[searchInput,setSearchInput]=useState("")

    const isonline= useStatus();
    if(!isonline){
      return <h1>Please check your internet connection, You are Offline🛑🛑🛑😔😔😔😔😔😔😔</h1>
    }


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