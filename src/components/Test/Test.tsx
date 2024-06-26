import React from "react";
import FireworksButton from "../FireworkButton/FireworkButton";
import "./Test.css";
const Test: React.FC = () => {
  return (
    <div className="main-container">
      <div className="images-container">
        <img
          src="https://img.freepik.com/psd-gratuit/personne-celebrant-son-orientation-sexuelle_23-2150115662.jpg"
          alt="Image 1"
          className="rounded-image"
        />
        <img
          src="https://img.freepik.com/psd-gratuit/personne-celebrant-son-orientation-sexuelle_23-2150115662.jpg"
          alt="Image 2"
          className="rounded-image"
        />
      </div>
      <div className="text-container">
        <p>This is some placeholder text below the images.</p>
      </div>
      <div className="buttons-container">
        <FireworksButton />
        <FireworksButton />
        <FireworksButton />
        {/* Ajoutez autant de boutons que nécessaire */}
      </div>
    </div>
  );
};

export default Test;
