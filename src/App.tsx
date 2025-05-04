import React from "react";
import ReusableButton from "./reusableComponents/ReusableButton";
import "./App.css";
import { RocketIcon } from "@sanity/icons";
import ReusableCard from "./reusableComponents/ReusableCard";

function App() {
  return (
    <>
      <ReusableButton
        text="Cliquez-moi"
        onClick={() => alert("Bouton cliqué")}
        icon={<RocketIcon />} //just exemple
      />
      <ReusableCard
        imageSrc="https://imgs.search.brave.com/mCWOCnjve2sq-3B3ODwJt-U6vpwXE27rxOpEQRjQaYg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mbG93/Yml0ZS5jb20vZG9j/cy9pbWFnZXMvcGVv/cGxlL3Byb2ZpbGUt/cGljdHVyZS0zLmpw/Zw"
        width="40%"
        maxWidth="900px"
        cardTitle="Full-Width Card"
        content="lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
    </>
  );
}

export default App;
