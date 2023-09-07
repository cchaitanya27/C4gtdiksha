// LanguageInput.jsx
import React, { useState } from "react";
import "../App.css"
import logo from "../logo.png"
const LanguageInput = ({ onTranslate }) => {
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [sourceText, setSourceText] = useState(""); // Add state for source text

  const handleTranslate = () => {
    const requestData = {
      sourceLanguage: sourceLanguage,
      targetLanguage: targetLanguage,
      source: sourceText, // Use the user-provided source text
    };

    fetch("http://localhost:3000/textComputeNMT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          onTranslate(data.data[0].target);
        })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="whole">
      <b>Diksha</b><br />
      <img src={logo} alt="Logo" className="logo"/>
      <center>
      <input
        type="text"
        placeholder="Enter source language"
        value={sourceLanguage}
        onChange={(e) => setSourceLanguage(e.target.value)}
        className="textbox-1"
      />
      <input
        type="text"
        placeholder="Enter target language"
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
        className="textbox-1"
      /><br></br><br></br>
      <input
        type="text"
        placeholder="Enter source text"
        value={sourceText}
        onChange={(e) => setSourceText(e.target.value)}
        className="textbox"
      /><br></br><br></br>
      <button onClick={handleTranslate}>Translate</button>
      </center>
    </div>
  );
};

export default LanguageInput;
