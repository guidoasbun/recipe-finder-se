import { useAppContext } from "@/context";
import { CardDefault } from "@/components/recipe-selection-card/recipe-selection-card";
import React from "react";

export default function RecipeSelector() {
  const { recipesContext } = useAppContext();
  const recipe1 = recipesContext.recipes[0];
  const recipe2 = recipesContext.recipes[1];
  const recipe3 = recipesContext.recipes[2];

  return (
    <div>
      <main className="flex flex-col items-center justify-between p-4 md:p-24">
        <p className="text-4xl font-bold text-center pb-10">Select a recipe</p>
        <div className="flex flex-wrap justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 w-full max-w-7xl">
            <div className="py-5">
              <CardDefault props={recipe1} />
            </div>
            <div className="py-5">
              <CardDefault props={recipe2} />
            </div>
            <div className="py-5">
              <CardDefault props={recipe3} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
