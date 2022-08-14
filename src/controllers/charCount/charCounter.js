import data from "./data.js";

const charCounter = (char, names, source) => {
  let count = 0;

  names.map((e) => {
    for (let i = 0; i < e.length; i++) {
      if (e[i] === char.toLowerCase() || e[i] === char.toUpperCase()) {
        count += 1;
      }
    }
  });

  data.results.push({
    char: char,
    count: count,
    resource: source,
  });

  return data;
};

export default charCounter;
