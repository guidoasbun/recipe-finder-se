"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "@/context";
import RecipeSelector from "@/components/recipe-selection-card/recipe-selector";
import { Spinner } from "@material-tailwind/react";

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
      <main className="flex flex-col justify-center items-center p-24 space-y-4">
        <div className="pb-10">
          <p>Loading recipes...</p>
        </div>

        <div>
          <Spinner className="h-16 w-16 text-gray-900/50" />
        </div>
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
