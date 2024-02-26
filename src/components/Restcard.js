import { CDN_URL } from "../Constants";
const Restcard=({cloudinaryImageId,name,cuisines,lastMileTravel})=>{
    return(
      <div className="card">
        <img src={ CDN_URL + cloudinaryImageId}/>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravel} Miles away</h4>
      </div>
    )
  }

export default Restcard;  