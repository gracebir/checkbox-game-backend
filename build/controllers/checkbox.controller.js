"use strict";
/** @format */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCheckboxAndCount = exports.getCheckboxById = exports.getCheckboxesByRange = exports.getAllCheckboxes = void 0;
const checkbox_service_1 = require("../services/checkbox.service");
const checkboxService = new checkbox_service_1.CheckboxService();
const getAllCheckboxes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const checkboxes = yield checkboxService.getAllCheckboxes();
        res.status(200).json(checkboxes);
    }
    catch (error) {
        //@ts-ignore
        res.status(500).json({ error: error.message });
    }
});
exports.getAllCheckboxes = getAllCheckboxes;
const getCheckboxesByRange = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { startRow, endRow, startCol, endCol } = req.params;
    try {
        const checkboxes = yield checkboxService.getCheckboxesByRange(parseInt(startRow), parseInt(endRow), parseInt(startCol), parseInt(endCol));
        res.status(200).json(checkboxes);
    }
    catch (error) {
        //@ts-ignore
        res.status(500).json({ error: error.message });
    }
});
exports.getCheckboxesByRange = getCheckboxesByRange;
const getCheckboxById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { checkboxId } = req.params;
    try {
        const checkbox = yield checkboxService.getCheckboxById(checkboxId);
        if (checkbox) {
            res.status(200).json(checkbox);
        }
        else {
            res.status(404).json({ error: "Checkbox not found" });
        }
    }
    catch (error) {
        //@ts-ignore
        res.status(500).json({ error: error.message });
    }
});
exports.getCheckboxById = getCheckboxById;
const updateCheckboxAndCount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { checkboxId } = req.params;
    const { checked, userId } = req.body;
    try {
        const result = yield checkboxService.updateCheckboxAndCount(checkboxId, checked, userId);
        res.status(200).json({ updatedCount: result });
    }
    catch (error) {
        //@ts-ignore
        res.status(500).json({ error: error.message });
    }
});
exports.updateCheckboxAndCount = updateCheckboxAndCount;
