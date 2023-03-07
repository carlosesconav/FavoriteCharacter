import express from "express";
import user from "./routes/user.js";

const app = express();

app.use(express.json());
app.use(user);

app.get('/api', (req, res) => {

    res.json({
        status: 200,
        message: "Conexion exitosa"
    });
});




export default app;