import openai from "@/utils/openai";

export default async function handler(req, res) {
  const { foodName } = req.body;

  const testName = "tacos";

  try {
    const foodImage = await openai.images.generate({
      model: "dall-e-3",
      prompt: `${testName}`,
      n: 1,
      size: "1024x1024",
    });

    const responseText = foodImage.data[0].url;
    res.status(200).json({ url: responseText });
  } catch (e) {
    console.log(`Failed to create recipe: ${e.message}`);
    res.status(500).json({ error: e.message });
  }
}