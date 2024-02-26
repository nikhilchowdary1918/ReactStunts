import { resList } from "../Constants";
import Restcard from "./Restcard";
import { useState } from "react";

function filterData(searchInput,restInput){
  const filterData= restInput.filter((restaurant) => restaurant.data.name.includes(searchInput));
  return filterData;
}
const Body= () =>{
    const[restInput,setRestInput]=useState(resList)
    const[searchInput,setSearchInput]=useState("")

    return(
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
          restInput.map((restaurant)=>{
            return <Restcard {...restaurant.data} key={restaurant.data.id}/>
          })
        }
    
      </div>
      </>
    )
    }

export default Body;