"use client";

import { useState } from "react";
import React from "react";
import { CardDefault } from "@/components/recipe-selection-card/recipe-selection-card";
import { dummyRecipe } from "@/dummyData/dummyRecipe";

export default function pickRecipes() {
  const recipe1 = dummyRecipe.recipes[0]
  const recipe2 = dummyRecipe.recipes[1]
  const recipe3 = dummyRecipe.recipes[2]

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <p className="text-5xl font-bold text-center pb-10">
        Select a recipe
      </p>
      <div className="flex flex-wrap">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-around gap-x-60">
          <div className="py-5">
              <CardDefault 
                props={recipe1}
              />
          </div>
          <div className="py-5">
              <CardDefault 
                props={recipe2}
              />
          </div>
          <div className="py-5">
              <CardDefault 
                props={recipe3}
              />
          </div>
        </div>
      </div>
    </main>
  );
}
