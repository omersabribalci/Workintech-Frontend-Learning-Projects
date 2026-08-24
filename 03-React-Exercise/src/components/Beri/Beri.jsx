import { useState } from "react";
import BeriTitle from "./BeriTitle";
function Beri({profile, setStudent}){
    const[counter, setCounter] = useState(0);
    return (
    <>
        <BeriTitle profile = {profile}/>
        <button
            onClick = {
            (e)=>{
            setStudent(`${profile.firstName} ${profile.lastName}`);
            }
            }
        > Beni Seç</button>
        <button 
        onClick = {
            (e)=>{
            console.log("arttır butonu");
            setCounter(counter+profile.increment);
            }
        }
        >Arttır</button>
        <span>{counter}</span>
    </>
    )
}
export default Beri