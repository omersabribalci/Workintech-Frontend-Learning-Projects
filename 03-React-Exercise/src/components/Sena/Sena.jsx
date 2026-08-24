import { useState } from "react"
import SenaTitle from "./SenaTitle";

function Sena({profile, setStudent}) {



  const [counter,setCounter]=useState(0);
 
  return (
    <>
      <SenaTitle profile={profile} />

      <button
      onClick={()=>{
        setStudent(`${profile.firstName} ${profile.lastName}`)
      }}> Beni Sec
      </button>
      
      <button 
        onClick={
            (e) => {
                console.log('Sena arttir buttonu')
                setCounter(counter + profile.increment);
            }
        }
      >Arttir</button>
      <span>{ counter }</span>
    </>
  )
}

export default Sena
