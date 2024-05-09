import { openaiImages } from "@/utils/openai";

export default async function handler(req, res) {
  const { foodName } = req.body;

  console.log(`Generating image for food: ${foodName}`);

  try {
    const foodImage = await openaiImages.images.generate({
      model: "dall-e-3",
      prompt: `${foodName}`,
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
