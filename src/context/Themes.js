import React from "react";

export const themes = {
  light: {
    color: "green",
    backgroundColor: "red",
  },
  dark: {
    color: "#000",
    backgroundColor: "#fff",
  }
}

export const ThemeText = React.createContext(themes)