import { useState } from "react"
import DoraTitle from "./DoraTitle";

function Dora({profile, setStudent}) {
  const [counter,setCounter] = useState(21);

  return (
    <>
      <DoraTitle profile = {profile} />

      <button
        onClick={()=>{
            setStudent(`${profile.firstName} ${profile.lastName}`)
        }}
    >beni Seç
      </button>
      <button onClick={(e) =>{
        console.log("Dora Butonunu Arttırdı.")
        setCounter(counter + profile.increment);
      }
    }
      >arttir</button>
      <span> { counter } </span>
    </>
  )
}

export default Dora