import { CDN_URL } from "../Constants";
const Restcard=({cloudinaryImageId,name,cuisines,lastMileTravel,areaName,})=>{
    return(
      <div className="card">
        <img src={ CDN_URL + cloudinaryImageId}/>
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
      </div>
    )
  }

export default Restcard;  