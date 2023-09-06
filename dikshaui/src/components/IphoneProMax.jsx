import React, { useState } from "react";
import NameAndGreeting from "./NameAndGreeting";
import UploadFile from "./UploadFile";
import TextSelection from "./TextSelection";
import NavigationBar from "./NavigationBar";
import CharacterCountAndCopy from "./CharacterCountAndCopy";
import LanguageInput from "./LanguageInput"; // Import the LanguageInput component

export const IphoneProMax = () => {
  const [translatedText, setTranslatedText] = useState(""); // State to store the translated text

  // Callback to update the translated text
  const handleTranslate = (result) => {
    setTranslatedText(result);
  };

  return (
    <div className="iphone-pro-max">
      <NameAndGreeting />
      <div className="group">
        {/* ... other components ... */}
      </div>
      <LanguageInput onTranslate={handleTranslate} /> {/* Use the LanguageInput component */}
      {translatedText && (
        <div className="translated-result">
          <p>Translated Text:</p>
          <p>{translatedText}</p>
        </div>
      )}
      {/* ... other components ... */}
    </div>
  );
};
