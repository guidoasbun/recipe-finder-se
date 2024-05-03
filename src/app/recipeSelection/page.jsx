"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "@/context";

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
      return data; // Return the data so it can be used by the caller
    })
    .catch((error) => {
      console.error("Error fetching recipes:", error);
      return []; // Return an empty array in case of error
    });
};

export default function RecipeSelection() {
  const { ingredientsContext } = useAppContext();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (ingredientsContext) {
      GetRecipes(ingredientsContext).then(setRecipes);
    }
  }, [ingredientsContext]);

  console.log("Recipes from setRecipes:", recipes);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-4xl font-bold text-center">{ingredientsContext}</p>
    </main>
  );
}
