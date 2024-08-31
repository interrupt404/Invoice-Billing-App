// DarkModeContext.js
import React, { createContext, useState } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkModeEnabled, setDarkModeEnabled }}>
      {children}
    </DarkModeContext.Provider>
  );
};
