import React, { useState } from "react";

const LanguageInput = ({ onTranslate }) => {
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");

  const handleTranslate = () => {
    // Create a JSON object with the source text.
    fetch("../../../server/controllers/welcome/welcome")
    .then((response) => response.json())
    .then((data) => {
      // Handle the API response data here.
      // For example, you can display the welcome message.
      onTranslate(data.message);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter source language"
        value={sourceLanguage}
        onChange={(e) => setSourceLanguage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter target language"
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      />
      <button onClick={handleTranslate}>Translate</button>
    </div>
  );
};

export default LanguageInput;
