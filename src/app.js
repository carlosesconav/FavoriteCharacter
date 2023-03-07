import express from "express";
import user from "./routes/user.js";

const app = express();

app.use(express.json());
app.use(user);


export default app;
