/** @format */
import { Router } from "express";
import { CheckboxController } from "../controllers/checkbox.controller";

const router = Router();
const checkboxController = new CheckboxController();

router.get("/", (req, res) => checkboxController.getAllCheckboxes(req, res));
router.get("/range", (req, res) =>
    checkboxController.getCheckboxesByRange(req, res)
);
router.get("/:id", (req, res) => checkboxController.getCheckboxById(req, res));
router.put("/:id", (req, res) => checkboxController.updateCheckbox(req, res));

export default router;
