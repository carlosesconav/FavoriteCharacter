"use restrict";

import { Router } from "express";
import { 
    getCharacters,
    getOneCharacter,
} 
from "../controllers/apiController.js";
import cors from "cors";

const route = Router();
route.use(cors());

route.get('/api/getCharacters/:page', getCharacters);
route.get('/api/getOneCharacter/:id', getOneCharacter);

export default route;