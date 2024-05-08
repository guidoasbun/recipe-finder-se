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
      <div>
        <main className="flex flex-col items-center justify-center p-4 md:p-24">
          <p className="text-4xl font-bold text-center pb-10">
            Select a recipe
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl">
            <div className="md:col-span-1 lg:col-span-1">
              <CardDefault props={recipe1} />
            </div>
            <div className="md:col-span-1 lg:col-span-1">
              <CardDefault props={recipe2} />
            </div>
            <div className="md:col-span-1 lg:col-span-1">
              <CardDefault props={recipe3} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
