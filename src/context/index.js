"use client";

import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  let [ingredientsContext, setIngredientsContext] = useState("");

  return (
    <AppContext.Provider
      value={{
        ingredientsContext,
        setIngredientsContext,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
