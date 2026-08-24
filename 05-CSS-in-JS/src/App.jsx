import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import CategoryB from "./components/CategoryB/CategoryB";
import CategoryA from "./components/CategoryA/CategoryA";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
{/* 
      <CatSecs count={5} /> */}


      <CategoryA />
      <CategoryA />
      <main style={{ flex: 1 }}>{<CategoryB />}</main>
            <main style={{ flex: 1 }}>{<CategoryB />}</main>
      <Footer />
    </div>
  );
}

export default App;
