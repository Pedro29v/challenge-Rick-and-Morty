import axios from "axios";

const charOrigin = async (route) => {
  const originName = [];
  let origin = "";

  for (let i = 0; i < route.length; i++) {
    const res = await axios.get(route[i]);

    originName.push(res.data.origin.name);
  }

  return origin;
};

export default charOrigin;
