import api from "../../api.js";
import dataEpi from "./data.js";
import charOrigin from "./charOrigin.js";

const getData = async () => {
  const episodeNum = await api.get("episode");
  const { info } = episodeNum.data;
  let quantity = [];

  for (let i = 1; i <= info.count; i++) {
    quantity.push(i);
  }

  const episodeData = await api.get(`episode/${quantity}`);
  const { data } = episodeData;

  for (let c = 0; c < data.length; c++) {
    dataEpi.results.push({
      id: data[c].id,
      name: data[c].name,
      episode: data[c].episode,
      origin: data[c].characters,
    });
  }
  console.log(dataEpi.results);
};

getData();
export default getData;
