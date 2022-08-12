import namesLocations from "./nameLocations.js";

const sendCharCount = async (req, res) => {
  const result = await namesLocations();

  res.status(200).json(result);
};

export default sendCharCount;
