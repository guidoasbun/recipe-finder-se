"use client";

import { useAppContext } from "@/context";
import { useEffect, useState } from "react";
import RecipeCard from "@/components/recipe-card/recipe-card";

const GetFoodImage = (foodName) => {
  return fetch("/api/foodimage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ foodName: foodName }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching food image:", error);
      return [];
    });
};

export default function RecipeSelected({ params }) {
  const { recipesContext } = useAppContext();
  const [foodImage, setFoodImage] = useState("");
  const [loading, setLoading] = useState(false);

  const recipeNumber = params.recipeSlug;
  const recipe = recipesContext.recipes[recipeNumber];
  const foodName = recipesContext.recipes[recipeNumber].title;

  useEffect(() => {
    setLoading(true);
    GetFoodImage(foodName).then((data) => {
      setFoodImage(data.url);
      console.log(data.url);
      setLoading(false);
    });
  }, [foodName]);

  if (loading || foodImage === "") {
    return (
      <main className="flex flex-col justify-center items-center p-24 space-y-4">
        <p>Loading food image...</p>
      </main>
    );
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center pt-5">
        <RecipeCard recipe={recipe} image={foodImage} />
      </main>
    );
  }
}
