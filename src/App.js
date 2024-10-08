import React, {Suspense, lazy, useEffect, useState} from "react";
import  ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
//import Grocery from "./components/Grocery";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";



const Grocery= lazy(()=>import("./components/Grocery"))

const AppLayout=() =>{

  const[userName,setUserName] =useState();

  useEffect(()=>{
    //Make an API call
    const data={
      name:"Nikhil chow",
    };
    setUserName(data.name);
  },[])
  return(
    <>
    <Provider store={appStore}> 
    <UserContext.Provider value={{loggedinuser:userName}}>
    <Header/>
    <Outlet/>
    </UserContext.Provider>
    </Provider>

    </>
  )
}
 const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>,
        children:[
          {
            path:"profile",
            element:<Profile/>
          }
        ]
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
      }

    ]
  },
 ])
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
