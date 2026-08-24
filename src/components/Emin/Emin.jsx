import { useState } from "react";
import EminTitle from "./EminTitle";

function Emin({profile, setStudent}) {
  const [counter, setCounter] = useState(0);
  
  return (
    <>
      <EminTitle profile={profile} />
      
      <button onClick={()=>{
        setStudent(`${profile.firstName} ${profile.lastName}`)
      }}>Beni Seç!</button>  

      <button 
      onClick={ (e) => {
        console.log("Emin artir butonu");
        setCounter(counter + profile.increment);
      } }>Artir</button>
      <span>{ counter }</span>
    </>
  )
}

export default Emin
