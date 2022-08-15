import { Router } from "express";
/* import resCharCount from "../controllers/charCount/resCharCount.js"; */
/* import getData from "../controllers/epiLocation/getData.js"; */
import salida from "../outputs/output.js";

const route = Router();

route.get("/", salida);

export default route;
