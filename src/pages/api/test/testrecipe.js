const { dummyRecipe } = require("@/dummyData/dummyRecipe");
export default function handler(req, res) {
  res.status(200).json({ dummyRecipe });
}
