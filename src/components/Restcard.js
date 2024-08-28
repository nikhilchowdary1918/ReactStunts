import { IMG_CDN_URL,CDN_URL } from "../Constants";
const Restcard=({cloudinaryImageId,name,cuisines,areaName,})=>{
    return(

      <div className="card m-10 p-4 w-[250px] bg-green-50 rounded-lg shadow-md hover:bg-green-200 shadow-lg">
        <img src={ CDN_URL + cloudinaryImageId}/>
        <h2 className="font-bold">{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
      </div>
    )
  }

export default Restcard;  