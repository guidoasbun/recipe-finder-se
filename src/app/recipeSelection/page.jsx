"use client";

import { useAppContext } from "@/context";

export default function RecipeSelection() {
  const { ingredientsContext, setIngredientsContext } = useAppContext();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-4xl font-bold text-center">{ingredientsContext}</p>
    </main>
  );
}
