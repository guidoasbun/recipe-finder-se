"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "@/context";
import RecipeSelector from "@/components/recipe-card/recipe-selector";

const GetRecipes = (ingredients) => {
  return fetch("/api/recipe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients: ingredients }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching recipes:", error);
      return [];
    });
};

export default function RecipeSelection() {
  const { ingredientsContext, setRecipesContext, recipesContext } =
    useAppContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (ingredientsContext) {
      setLoading(true);
      GetRecipes(ingredientsContext).then((data) => {
        setRecipesContext(data);
        setLoading(false);
      });
    }
  }, [ingredientsContext, setRecipesContext]);

  if (loading || recipesContext.length === 0) {
    return (
      <main className="flex justify-center items-center p-24">
        <p>Loading recipes...</p>
      </main>
    );
  } else {
    return (
      <>
        <RecipeSelector />
      </>
    );
  }
}
