import ProfileClass from "./ProfileClass";
import ProfileFunctionalComp from "./Profile";
const About=()=>{
    return(
        <div>
        <h1>You got into About using router</h1>
        <p>This is a basic food app, for your food devlivery. This is named as FoodHeaven</p>
        <ProfileFunctionalComp name={"Nikhil"}/>
        <ProfileClass/>
        </div>
    )

} 
export default About;