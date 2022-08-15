import api from "../../api.js";
import dataEpi from "./data.js";
import charOrigin from "./charOrigin.js";
import { performance } from "perf_hooks";
import countEpisode from "./countEpisode.js";

const getData = async () => {
  const start = performance.now();
  const quantity = await countEpisode("episode");
  const episodeData = await api.get(`episode/${quantity}`);
  const { data } = episodeData;

  for (let c = 0; c < data.length; c++) {
    let origin = await charOrigin(data[c].characters);

    dataEpi.results.length < quantity.length &&
      dataEpi.results.push({
        name: data[c].name,
        episode: data[c].episode,
        locations: origin,
        ["total locations"]: origin.length,
      });
  }

  const end = performance.now();
  const runTime = (end - start).toString().split(".");
  dataEpi.time = `${runTime}ms`;
  dataEpi["in-time"] = parseInt(runTime) < 3000 ? true : false;

  return dataEpi;
};

export default getData;
