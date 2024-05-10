import TopRecipeCard from "@/components/recipe-card/top-recipe-card";
import InstructionsCard from "@/components/recipe-card/instructions-card";

export default function RecipeCard({ recipe, image }) {
  const recipeTitle = recipe.title;
  const recipeIngredients = recipe.ingredients;
  const recipeInstructions = recipe.instructions;
  const imageURL = image;

  return (
    <div>
      <TopRecipeCard
        image={imageURL}
        title={recipeTitle}
        ingredients={recipeIngredients}
        imageURL={imageURL}
      />
      <InstructionsCard instructions={recipeInstructions} />
    </div>
  );
}
