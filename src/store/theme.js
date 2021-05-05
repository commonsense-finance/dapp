import React, { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={useState({ mode: "dark" })}>
      {children}
    </ThemeContext.Provider>
  );
}
