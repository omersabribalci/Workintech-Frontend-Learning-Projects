import { useState } from "react"
import MeryemTitle from "./MeryemTitle";

function Meryem({profile,setStudent}) {
  const [counter,setCounter]=useState(0);
  return (
    <>
      
      <MeryemTitle profile={profile}/>

      <button 
        onClick={()=>{
            setStudent(`${profile.firstName} ${profile.lastName}`);
        }}
    >Beni Sec</button>

      <button onClick={(e) =>{
        console.log("Meryem Arttır");
        setCounter(counter + profile.increment);
      }}>Arttır</button>
      <span>{ counter }</span>
    </>
  )
}

export default Meryem
