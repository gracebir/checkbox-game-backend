/** @format */
import express from "express";
import connection from "./db";
import cors from "cors";
import CheckBoxRoute from "./routes/checkbox.routes";
import UserRoute from './routes/user.routes';
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 4000;
const start = async () => {
    try {
        await connection.sync();
        app.use("/api/v1/checkbox", CheckBoxRoute);
        app.use("/api/v1/user", UserRoute);
        app.listen(port, () => {
            console.log(`http://localhost:${port}`);
        });
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};
void start();
//# sourceMappingURL=main.js.map