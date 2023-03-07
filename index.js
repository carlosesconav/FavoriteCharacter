import app from "./src/app.js";
import { sequelize } from "./src/db/db.js";
import * as dotenv from "dotenv";
dotenv.config();
import chalk from "chalk";

//models
import { user } from "./src/models/User.js";
import { data } from "./src/models/Data.js";

const port = process.env.PORT;

const main = async () => {

    try {

        await sequelize.sync({ force: false });
        await sequelize.authenticate();
        app.listen(port, () => {
            console.log(chalk.bgGreen(`Server is running on port: ${port}`));
        });

    } catch (error) {

        console.log(`Algo anda mal ${error}`);

    }

}

main();