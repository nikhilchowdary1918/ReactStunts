import React from "react";
import  ReactDOM from "react-dom/client";


const func=()=>{
  return <h1>hi nik</h1>
}
const Functionalcomponent=() =>{
  return(
  <div>
  {func()}  
  <h1 id="title" key="h1"> Hi for h1</h1>
  <h2>hi for h2 </h2>
  </div>
  )
} 
 
  const root= ReactDOM.createRoot(document.getElementById("root"));


root.render(<Functionalcomponent/>);
