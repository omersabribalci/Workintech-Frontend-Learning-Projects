import { useState } from "react"
import EralpTitle from "./EralpTitle";


function Eralp({profile, setStudent}) {

  const [counter, setCounter] = useState(0);

  return (
    <>
      <EralpTitle profile = {profile} />

    <button
        onClick={()=>{
            setStudent(`${profile.firstName} ${profile.lastName}`)
        }}
    >Beni Sec</button>

      <button 
        onClick={
            (e) => {
                console.log('Eralp arttir buttonu')
                setCounter(counter + profile.increment)
            }
        }
      >Arttir</button>
      <span>{counter}</span>
    </>
  );
}

export default Eralp