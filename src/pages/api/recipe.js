import { openai } from "@/utils/openai";
import { RECIPE_JSON_FORMAT } from "@/data/recipe-format";

export default async function handler(req, res) {
  const { ingredients } = req.body;
  console.log(`Ingredients from API Backend: ${ingredients}`);

  try {
    const recipeReturn = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Create 3 eatable simple recipes I can create with these ingredients
          ${ingredients} . Assume I have basic cooking ingredients like salt, pepper, and oil. 
          The recipes should be simple and easy to follow.
          Ingredients are formatted by measurement and name.
          Instructions are seperated by instruction number and next line indicator.
          Format the response in the following JSON object: ${JSON.stringify(
            RECIPE_JSON_FORMAT,
          )}. `,
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
