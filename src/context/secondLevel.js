import React, { useContext } from "react";
import { ThemeText  } from "./Themes.js"

const SecondLevel = () => {
  const themeValue = useContext(ThemeText)
  // console.log(themeValue)
  return (
    <button style={themeValue}>change themes</button>
  )
}

export default SecondLevel;