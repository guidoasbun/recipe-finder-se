export default function RecipeSelected({ params }) {
  const recipe = params.recipeSlug;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-4xl font-bold text-center">{recipe}</p>
    </main>
  );
}
