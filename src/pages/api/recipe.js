import { openai } from "@/utils/openai";

export default async function handler(req, res) {
  const { ingredients } = req.body;

  const testIngredients = "beef,tortilla,onion";

  try {
    const recipeReturn = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Create 3 recipes I can create with ${testIngredients} 
          Can you format the response as JSON with the title, ingredients, 
          and instructions`,
        },
      ],
    });

    const responseText = recipeReturn.choices[0].message.content;
    const responseObj = JSON.parse(responseText);

    res.status(200).json(responseObj);
  } catch (e) {
    console.log(`Failed to create recipe: ${e.message}`);
    res.status(500).json({ error: e.message });
  }
}
