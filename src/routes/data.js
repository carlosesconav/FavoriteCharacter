"use restrict";

import { Router } from "express";
import { 
    saveData,
    getData 
} from "../controllers/dataController";
import cors from "cors";


const route = Router();
route.use(cors());

//Rutas data.

route.post('/api/saveData',saveData);
route.get('/api/getData', getData);

export default route;