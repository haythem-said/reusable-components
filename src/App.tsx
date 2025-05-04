import React from "react";
import ReusableButton from "./reusableComponents/ReusableButton";
import "./App.css";
import { RocketIcon } from "@sanity/icons";

function App() {
  return (
    <>
      <ReusableButton
        text="Cliquez-moi"
        onClick={() => alert("Bouton cliqué")}
        icon={<RocketIcon />} //just exemple
      />
    </>
  );
}

export default App;
