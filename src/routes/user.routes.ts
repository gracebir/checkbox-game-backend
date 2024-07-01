/** @format */

import express from "express";
import * as userController from "../controllers/user.controller";

const router = express.Router();


router.post("/register", userController.registerUser);
router.post("/authenticate", userController.authenticateUser);
router.get("/:userId/check-count", userController.getUserCheckCount);

export default router;
