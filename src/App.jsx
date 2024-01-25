import { useState } from "react";
import "./App.css";

/*
COMPONENTES
*/
import Parallax from "./components/PARALLAX";
import InfoCentered from "./components/INFO";
import Proyects from "./components/PROYECTS";
import Gallery from "./components/GALLERY";
 
function App() {
  return (
    <>
      <Parallax />
      <main>
        <InfoCentered />
        <Proyects />
        <Gallery />
      </main>
    </>
  );
}

export default App;
