/** @format */
import { Sequelize } from "sequelize-typescript";
import { Checkbox } from "./models/CheckboxGame.model";
const connection = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "hustle",
    password: "firewall",
    database: "game_checkbox",
    logging: false,
    models: [Checkbox],
});
export default connection;
//# sourceMappingURL=index.js.map