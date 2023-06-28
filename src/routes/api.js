"use restrict";

import { Router } from "express";
import {
  getCharacters,
  getOneCharacter,
} from "../controllers/apiController.js";
import { verifyAuth } from "../middlewares/Auth.js";
import cors from "cors";

const route = Router();
route.use(cors());

route.get("/api/getCharacters/:page",verifyAuth ,getCharacters);
route.get("/api/getOneCharacter/:id",verifyAuth ,getOneCharacter);

export default route;
