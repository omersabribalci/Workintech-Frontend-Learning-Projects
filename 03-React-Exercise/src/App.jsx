import './App.css'
import Tunc from './components/Tunc/Tunc'
import Eralp from './components/Eralp/Eralp'
import Beri from './components/Beri/Beri'
import Emin from './components/Emin/Emin'
import Dora from './components/Dora/Dora'
import Omer from "./components/Omer/Omer"
import Meryem from "./components/Meryem/Meryem"
import Yusuf from './components/Yusuf/Yusuf'
import Sena from './components/Sena/Sena'
import { useState } from 'react'

const yusufProfile = {
  firstName:"Yusuf",
  lastName:"Kosar",
  increment:7
};

const tuncProfile ={
  firstName:"Tunc",
  lastName:"Kiral",
  increment:5
};
const senaProfile ={
  firstName:"Sena",
  lastName:"Kiziltas",
  increment:13
};

const omerProfile = {
  firstName:"Omer",
  lastName:"Balci",
  increment:7
}
const eminProfile = {
  firstName:"Emin",
  lastName:"Candemir",
  increment:9
}
const berivanProfile = {
  firstName:"Berivan",
  lastName:"Sezer",
  increment:100,
}
const doraProfile ={
  firstName:"Dora",
  lastName:"Özkan",
  increment:21
}
const eralpProfile = {
  firstName:"Eralp",
  lastName:"Yirtimci",
  increment:16
}
const meryemProfile = {
firstName:"Meryem",
 lastName:"Aydın",
 increment:1
}

function App() {
  const [student, setStudent] = useState('');
  return (
    <>
     
      <h1>Sinif P1125</h1>
      <h3>secilen : {student}</h3>
      <div className="card">
        <Tunc profile={tuncProfile} setStudent={setStudent} />
        <Eralp profile={eralpProfile} setStudent={setStudent} />
        <Beri profile = {berivanProfile} setStudent={setStudent} />
        <Omer profile ={omerProfile} setStudent={setStudent} />
        <Emin profile={eminProfile} setStudent={setStudent} />
        <Meryem profile={meryemProfile} setStudent={setStudent} />
        <Yusuf profile ={yusufProfile} setStudent={setStudent} />
        <Sena profile={senaProfile} setStudent={setStudent} />
        <Dora profile = {doraProfile} setStudent={setStudent} />
        
      </div>
      
    </>
  )
}

export default App
