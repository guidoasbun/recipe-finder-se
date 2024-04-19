'use client';

import { useState } from "react";
import React from "react";
import { Input, Button } from "@material-tailwind/react";

export default function EnterIngredients() {
  const [ingredient, setEmail] = React.useState("");
  const onChange = ({ target }) => setIngredient(target.value);
 
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <p className="text-4xl font-bold text-center pb-10">Enter your ingredients here:</p>
      <div className="relative flex w-full max-w-[24rem] pb-10">
        <Input
          type="ingredient"
          label="Ingredient"
          value={ingredient}
          onChange={onChange}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color={ingredient ? "gray" : "blue-gray"}
          disabled={!ingredient}
          className="!absolute right-1 top-1 rounded"
        >
          Enter
        </Button>
      </div>
      <div className="relative flex w-full max-w-[24rem] pb-10">
        <Input
          type="ingredient"
          label="Ingredient"
          value={ingredient}
          onChange={onChange}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color={ingredient ? "gray" : "blue-gray"}
          disabled={!ingredient}
          className="!absolute right-1 top-1 rounded"
        >
          Enter
        </Button>
      </div>
      <div className="relative flex w-full max-w-[24rem] pb-10">
        <Input
          type="ingredient"
          label="Ingredient"
          value={ingredient}
          onChange={onChange}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color={ingredient ? "gray" : "blue-gray"}
          disabled={!ingredient}
          className="!absolute right-1 top-1 rounded"
        >
          Enter
        </Button>
      </div>
    </main>
  );
}
