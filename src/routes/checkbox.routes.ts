/** @format */

import express from "express";
import * as checkboxController from "../controllers/checkbox.controller";

const router = express.Router();

router.get("/", checkboxController.getAllCheckboxes);
router.get(
    "/:startRow/:endRow/:startCol/:endCol",
    checkboxController.getCheckboxesByRange
);
router.get("/:checkboxId", checkboxController.getCheckboxById);
router.put("/:checkboxId", checkboxController.updateCheckboxAndCount);

export default router;
