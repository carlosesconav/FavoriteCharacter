import express from "express";
import user from "./routes/user.js";
import data from "./routes/data.js";
import api from "./routes/api.js";

const app = express();

app.use(express.json());
app.use(user);
app.use(data);
app.use(api);

app.get('/api', (req, res) => {

    res.json({
        status: 200,
        message: "Conexion exitosa"
    });
});




export default app;