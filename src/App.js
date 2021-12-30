import "./styles.css";
import React, { useState } from "react";
import Form from "./components/Form";
import Square from "./components/Square";

export default function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  const colorProps = {
    backgroundColor: colorValue,
    color: isDarkText ? "#000" : "#FFF"
  };

  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        colorProps={colorProps}
        hexValue={hexValue}
        isDarkText={isDarkText}
        // testing to see how the update to github feels like
      />

      <Form
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}
