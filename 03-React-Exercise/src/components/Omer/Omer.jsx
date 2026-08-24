import { useState } from "react";
import OmerTitle from "./OmerTitle.jsx";

export default function Omer({ profile, setStudent }) {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <OmerTitle profile={profile} />

      <button
        onClick={() => {
          setStudent(`${profile.firstName} ${profile.lastName}`);
        }}
      >
        Beni Sec
      </button>
      <button
        onClick={(e) => {
          console.log("Omer arttir butonu");
          setCounter(counter + profile.increment);
        }}
      >
        Arttir
      </button>
      <span>{counter}</span>
    </>
  );
}
