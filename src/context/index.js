"use client";

import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  let [ingredientsContext, setIngredientsContext] = useState("");
  let [recipesContext, setRecipesContext] = useState([]);

  return (
    <AppContext.Provider
      value={{
        ingredientsContext,
        setIngredientsContext,
        recipesContext,
        setRecipesContext,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export function useRecipesContext() {
  return useContext(AppContext);
}
