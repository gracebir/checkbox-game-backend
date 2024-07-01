/** @format */

import "dotenv/config";
import express from "express";
import cors from "cors";
import checkboxRoutes from "./routes/checkbox.routes";
import userRoutes from "./routes/user.routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/api/v1/checkboxes", checkboxRoutes);
app.use("/api/v1/users", userRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("server run on port 4000...");
});
