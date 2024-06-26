import { openai } from "@/utils/openai";
import { RECIPE_JSON_FORMAT } from "@/data/recipe-format";

export default async function handler(req, res) {
  const { ingredients } = req.body;

  try {
    const recipeReturn = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Create 3 eatable simple recipes I can create with these ingredients
          ${ingredients} . Assume I have basic cooking ingredients like salt, pepper, flour and oil.
          Give me a brief description of the recipe. 
          The recipes should be simple and easy to follow.
          Ingredients are formatted by measurement and name.
          Instructions are formatted by instructionNumber and instruction.
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
