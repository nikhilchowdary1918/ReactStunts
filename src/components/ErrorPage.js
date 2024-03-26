import { useRouteError } from "react-router-dom";

const ErrorPage=() =>{
    const Err= useRouteError();
    console.log(Err)
    return(
        <>
        <h1>Oops!!!!!!!!!!!!!!!</h1>
        <h2>Something went wrong!!!!!!!!!!!</h2>
        <h3>{Err.status + " : " + Err.statusText}</h3>
        </>
    )
}
export default ErrorPage;