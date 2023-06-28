"use restrict";

import { Router } from "express";
import {
  registerUser,
  loginUser,
  editUser,
  updateUser,
} from "../controllers/userController.js";
import { verifyAuth } from "../middlewares/Auth.js";
import cors from "cors";

const route = Router();
route.use(cors());

//Rutas user.

route.post("/api/register", registerUser);
route.post("/api/login", loginUser);
route.get("/api/edit/:id", verifyAuth, editUser);
route.put("/api/update/:id",verifyAuth, updateUser);

export default route;
