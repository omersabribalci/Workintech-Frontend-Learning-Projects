 import { useState } from "react"
 import YusufTitle from "./YusufTitle";

 function Yusuf({profile, setStudent}) {
  const [counter, setCounter] = useState(0);
  
  return (
    <>
      <YusufTitle profile={profile} />
      <button 
        onClick={()=>{
            setStudent(`${profile.firstName} ${profile.lastName}`);
        }}
    >Beni Sec</button>


      <button 
        onClick={
            (e) => {
                console.log('Yusuf arttir butonu')
                setCounter(counter + profile.increment);
                }
        }
      >Arttir</button>
      <span>{ counter }</span>
    </>
  );
}


export default Yusuf