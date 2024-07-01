"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const checkbox_routes_1 = __importDefault(require("./routes/checkbox.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
// Routes
app.use("/api/v1/checkboxes", checkbox_routes_1.default);
app.use("/api/v1/users", user_routes_1.default);
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("server run on port 4000...");
});
