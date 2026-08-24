import { useState } from "react";
import TuncTitle from "./TuncTitle";

//function Tunc(props) {
function Tunc({ profile, setStudent }) {
  //const {lastName} = props; // 2.

  const [counter, setCounter] = useState(0);

  return (
    <>
      {/* 1. <h2>ben {name} {props.lastName}</h2> */}
      <TuncTitle profile={profile} />

      <button
        onClick={(e) => {
          setStudent(`${profile.firstName} ${profile.lastName}`);
        }}
      >
        Beni Sec
      </button>

      <button
        onClick={(e) => {
          setCounter(counter + profile.increment);
        }}
      >
        Arttir
      </button>
      <span>{counter}</span>
    </>
  );
}

export default Tunc;
