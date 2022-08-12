import { Router } from "express";
import resCharCount from "../controllers/charCount/resCharCount.js";

const route = Router();

route.get("/", resCharCount);

export default route;
