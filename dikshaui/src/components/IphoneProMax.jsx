import React, { useState } from "react";
import NameAndGreeting from "./NameAndGreeting";
import UploadFile from "./UploadFile";
import TextSelection from "./TextSelection";
import NavigationBar from "./NavigationBar";
import CharacterCountAndCopy from "./CharacterCountAndCopy";
import LanguageInput from "./LanguageInput"; 
import "bootstrap/dist/css/bootstrap.min.css"; 

export const IphoneProMax = () => {
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = (result) => {
    setTranslatedText(result);
  };

  return (
    <div className="iphone-pro-max container-fluid">
      {/* ... other components ... */}
      <LanguageInput onTranslate={handleTranslate} />
      
      {translatedText && (
        <div className="translated-result container-fluid">
          <p>Translated Text:</p>
          <p>{translatedText}</p>
        </div>
      )}
      {/* ... other components ... */}
    </div>
  );
};
