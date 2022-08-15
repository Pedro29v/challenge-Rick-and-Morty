import api from "../../api.js";

const countEpisode = async (route) => {
  const episodeNum = await api.get(route);
  const { info } = episodeNum.data;
  let quantity = [];

  for (let i = 1; i <= info.count; i++) {
    quantity.push(i);
  }

  return quantity;
};

export default countEpisode;
