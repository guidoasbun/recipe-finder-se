"use client";

import { useState } from "react";
import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { useAppContext } from "@/context";
import Link from "next/link";

export default function EnterIngredients() {
  const [ingredients, setIngredients] = useState(["", "", ""]);
  const [readyToNavigate, setReadyToNavigate] = useState(false);
  const { setIngredientsContext } = useAppContext();

  const onChange =
    (index) =>
    ({ target }) => {
      const newIngredients = [...ingredients];
      newIngredients[index] = target.value.trim(); // Trim whitespace
      setIngredients(newIngredients);
    };

  const getIngredients = () => {
    const combinedIngredients = ingredients.join("+").toLowerCase();
    setIngredientsContext(combinedIngredients);
    setReadyToNavigate(true);
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="mb-10">
        <p className="text-5xl">Enter your ingredients here:</p>
      </div>

      {ingredients.map((ingredient, index) => (
        <div key={index} className="relative flex w-full max-w-[24rem] pb-10">
          <Input
            type="ingredient"
            label="Ingredient"
            value={ingredient}
            onChange={onChange(index)}
            className="pr-20"
            containerProps={{ className: "min-w-0" }}
          />
        </div>
      ))}

      <div>
        {readyToNavigate ? (
          <Link href="/recipeSelection">
            <Button
              onClick={getIngredients}
              className="w-64 mx-10 text-xl px-20"
            >
              Enter
            </Button>
          </Link>
        ) : (
          <Button onClick={getIngredients} className="w-64 mx-10 text-xl px-20">
            Enter
          </Button>
        )}
      </div>
    </main>
  );
}
