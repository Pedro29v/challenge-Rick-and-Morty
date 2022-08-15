import character from "./characters.js";

const charOrigin = async (route) => {
  const originName = [];
  let originNameFilter = [];
  const origin = await character();

  for (let i = 0; i < route.length; i++) {
    const idChar = route[i].split("/")[5];

    origin.map((e) => {
      if (e.id === parseInt(idChar)) {
        originName.push(e.origin);
      }
    });
  }
  originNameFilter = [...new Set(originName)];

  return originNameFilter;
};

export default charOrigin;
