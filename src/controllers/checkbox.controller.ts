/** @format */

import { Request, Response } from "express";
import { CheckboxService } from "../service/checkbox.service";
import { successResponse, errorResponse } from "../utils/response.util";

const checkboxService = new CheckboxService();

export class CheckboxController {
    async getAllCheckboxes(req: Request, res: Response): Promise<void> {
        try {
            const checkboxes = await checkboxService.getAllCheckboxes();
            successResponse(res, checkboxes);
        } catch (error) {
            //@ts-ignore
            errorResponse(res, error.message);
        }
    }

    async getCheckboxesByRange(req: Request, res: Response): Promise<void> {
        try {
            const { startRow, endRow, startCol, endCol } = req.query;
            const checkboxes = await checkboxService.getCheckboxesByRange(
                parseInt(startRow as string, 10),
                parseInt(endRow as string, 10),
                parseInt(startCol as string, 10),
                parseInt(endCol as string, 10)
            );
            successResponse(res, checkboxes);
        } catch (error) {
            //@ts-ignore
            errorResponse(res, error.message);
        }
    }

    async getCheckboxById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const checkbox = await checkboxService.getCheckboxById(id);
            if (checkbox) {
                successResponse(res, checkbox);
            } else {
                errorResponse(res, "Checkbox not found", 404);
            }
        } catch (error) {
            //@ts-ignore
            errorResponse(res, error.message);
        }
    }

    async updateCheckbox(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { checked } = req.body;
            const changeInCount = await checkboxService.updateCheckboxAndCount(
                id,
                checked
            );
            successResponse(res, { changeInCount });
        } catch (error) {
            //@ts-ignore
            errorResponse(res, error.message);
        }
    }
}
