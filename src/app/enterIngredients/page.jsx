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

  // const [ingredient1, setIngredient1] = useState("");
  // const [ingredient2, setIngredient2] = useState("");
  // const [ingredient3, setIngredient3] = useState("");

  // const onChange1 = ({ target }) => setIngredient1(target.value);
  // const onChange2 = ({ target }) => setIngredient2(target.value);
  // const onChange3 = ({ target }) => setIngredient3(target.value);
  const onChange =
    (index) =>
    ({ target }) => {
      const newIngredients = [...ingredients];
      newIngredients[index] = target.value.trim(); // Trim whitespace
      setIngredients(newIngredients);
    };

  const getIngredients = () => {
    //   const string = ingredient1 + "+" + ingredient2 + "+" + ingredient3;
    //   console.log(string.toLowerCase());
    //   /* Go to next page */

    const combinedIngredients = ingredients.join("+").toLowerCase();
    setIngredientsContext(combinedIngredients);
    setReadyToNavigate(true);
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <p className="text-4xl font-bold text-center pb-10">
        Enter your ingredients here:
      </p>
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
      {/*<div className="relative flex w-full max-w-[24rem] pb-10">*/}
      {/*  <Input*/}
      {/*    type="ingredient"*/}
      {/*    label="Ingredient"*/}
      {/*    value={ingredient1}*/}
      {/*    onChange={onChange1}*/}
      {/*    className="pr-20"*/}
      {/*    containerProps={{*/}
      {/*      className: "min-w-0",*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div className="relative flex w-full max-w-[24rem] pb-10">*/}
      {/*  <Input*/}
      {/*    type="ingredient"*/}
      {/*    label="Ingredient"*/}
      {/*    value={ingredient2}*/}
      {/*    onChange={onChange2}*/}
      {/*    className="pr-20"*/}
      {/*    containerProps={{*/}
      {/*      className: "min-w-0",*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div className="relative flex w-full max-w-[24rem] pb-10">*/}
      {/*  <Input*/}
      {/*    type="ingredient"*/}
      {/*    label="Ingredient"*/}
      {/*    value={ingredient3}*/}
      {/*    onChange={onChange3}*/}
      {/*    className="pr-20"*/}
      {/*    containerProps={{*/}
      {/*      className: "min-w-0",*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</div>*/}
      <div>
        {readyToNavigate ? (
          <Link href="/recipeSelection">
            <Button onClick={getIngredients} ripple={true}>
              Enter
            </Button>
          </Link>
        ) : (
          <Button onClick={getIngredients} ripple={true}>
            Enter
          </Button>
        )}
      </div>
    </main>
  );
}
