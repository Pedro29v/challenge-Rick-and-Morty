import getData from "./getData.js";
import charCounter from "./charCounter.js";
import { performance } from "perf_hooks";
import data from "./data.js";

const sendCharCount = async (req, res) => {
  const start = performance.now();
  const location = await getData("location");
  const episode = await getData("episode");
  const character = await getData("character");

  let result = charCounter("i", location, "Location");
  result = charCounter("e", episode, "Episode");
  result = charCounter("c", character, "Character");
  const end = performance.now();

  const runTime = (end - start).toString().split(".");

  data.time = `${runTime}ms`;

  data["in-time"] = parseInt(runTime) < 3000 ? true : false;

  return res.json(result);
};

export default sendCharCount;
