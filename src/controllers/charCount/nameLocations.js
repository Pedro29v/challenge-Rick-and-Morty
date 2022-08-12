import api from "../../api.js";
import axios from "axios";

const namesLocations = async () => {
  const informmation = await api.get("location");
  let data = [];

  const { info } = informmation.data;

  for (let i = 1; i <= info.pages; i++) {
    let resp = await api.get(`location?page=${i}`);

    let { results } = resp.data;

    results.map((e) => {
      data.push(e.name);
    });
  }

  return data;
};

export default namesLocations;
