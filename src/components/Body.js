import Restcard from "./Restcard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useFillrestcard from "../utils/useFillrestcard";
import useStatus from "../utils/useStatus";



const Body= () =>{

    const{allRest,filteredData,setFilteredData} = useFillrestcard()

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
        className="input-search m-10 p-3 border border-solid border-gray-400 text-lg shadow-lg rounded-lg" 
        placeholder="search"  
        value={searchInput} 
        onChange={(e)=>{
          setSearchInput(e.target.value)
        }}
        />
        <button 
        className="search-btn m-4 p-4 bg-green-100 rounded-lg text-black text-lg font-semibold shadow-md hover:shadow-lg hover:bg-green-200 transition duration-300 ease-in-out"
        onClick={() =>{
  
          const data = filterData(searchInput,allRest);
          setFilteredData(data);
        } }
        
        >Search</button>
 
      </div>
      
      <div className="restcard flex flex-wrap">
        

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