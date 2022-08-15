import api from "../../api.js";
import countEpisode from "./countEpisode.js";

const character = async () => {
  const quantity = await countEpisode("character");

  const charData = await api.get(`character/${quantity}`);
  const { data } = charData;

  let charInfo = data.map((e) => {
    return { id: e.id, name: e.name, origin: e.origin.name };
  });

  return charInfo;
};

export default character;
