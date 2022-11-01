import React from "react";
import { themes, ThemeText } from "./Themes.js";
import SecondLevel from "./secondLevel";

const FirstLevel = () => {
  return (
    <ThemeText.Provider value={ themes.light }>
      <SecondLevel />
    </ThemeText.Provider>
  );
};

export default FirstLevel;
