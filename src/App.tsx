import React from "react";
import ReusableButton from "./reusableComponents/ReusableButton";
import "./App.css";
function App() {
  return (
    <>
      <ReusableButton
        text="Cliquez-moi"
        onClick={() => alert("Bouton cliqué")}
      />{" "}
    </>
  );
}

export default App;
