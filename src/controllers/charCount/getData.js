import { response } from "express";
import api from "../../api.js";
import charCounter from "./charCounter.js";

const getData = async (route) => {
  const information = await api.get(route);
  const { info } = information.data;
  let data = [];
  let quantity = [];

  for (let i = 1; i <= info.count; i++) {
    quantity.push(i);
  }

  let resp = await api.get(`${route}/${quantity}`);

  resp.data.map((e) => {
    data.push(e.name);
  });

  return data;
};

export default getData;
