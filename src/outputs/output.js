import resCharCount from "../controllers/charCount/resCharCount.js";
import getData from "../controllers/epiLocation/getData.js";

const salida = async (req, res) => {
  const char = await resCharCount();
  const episode = await getData();

  const output = [char, episode];
  return res.json(output);
};

export default salida;
