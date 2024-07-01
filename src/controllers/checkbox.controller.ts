import { Request, Response } from "express";
import { CheckboxService } from "../services/checkbox.service";

const checkboxService = new CheckboxService();

export const getAllCheckboxes = async (
    req: Request,
    res: Response
): Promise<void> => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    try {
        const { checkboxes, total } = await checkboxService.getAllCheckboxes(page, limit);
        res.status(200).json({ checkboxes, total, page, limit });
    } catch (error) {
        //@ts-ignore
        res.status(500).json({ error: error.message });
    }
};

export const getCheckboxesByRange = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { startRow, endRow, startCol, endCol } = req.params;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    try {
        const { checkboxes, total } = await checkboxService.getCheckboxesByRange(
            parseInt(startRow),
            parseInt(endRow),
            parseInt(startCol),
            parseInt(endCol),
            page,
            limit
        );
        res.status(200).json({ checkboxes, total, page, limit });
    } catch (error) {
        //@ts-ignore
        res.status(500).json({ error: error.message });
    }
};

export const getCheckboxById = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { checkboxId } = req.params;
    try {
        const checkbox = await checkboxService.getCheckboxById(checkboxId);
        if (checkbox) {
            res.status(200).json(checkbox);
        } else {
            res.status(404).json({ error: "Checkbox not found" });
        }
    } catch (error) {
        //@ts-ignore
        res.status(500).json({ error: error.message });
    }
};

export const updateCheckboxAndCount = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { checkboxId } = req.params;
    const { checked, userId } = req.body;
    try {
        const result = await checkboxService.updateCheckboxAndCount(
            checkboxId,
            checked,
            userId
        );
        res.status(200).json({ updatedCount: result });
    } catch (error) {
        //@ts-ignore
        res.status(500).json({ error: error.message });
    }
};
