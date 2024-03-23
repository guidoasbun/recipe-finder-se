const { dummyImageURL } = require("@/dummyData/dummyImageURL");
export default function handler(req, res) {
  res.status(200).json({ dummyImageURL });
}
