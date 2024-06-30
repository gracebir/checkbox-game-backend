/** @format */

import { Checkbox } from "../db/models/CheckboxGame.model";

export class CheckboxService {
    async getAllCheckboxes(): Promise<Checkbox[]> {
        return await Checkbox.findAll();
    }

    async getCheckboxesByRange(
        startRow: number,
        endRow: number,
        startCol: number,
        endCol: number
    ): Promise<Checkbox[]> {
        return await Checkbox.findAll({
            where: {
                row: { $between: [startRow, endRow] },
                col: { $between: [startCol, endCol] },
            },
        });
    }

    async getCheckboxById(checkboxId: string): Promise<Checkbox | null> {
        return await Checkbox.findByPk(checkboxId);
    }

    async updateCheckboxAndCount(
        checkboxId: string,
        checked: boolean
    ): Promise<number> {
        return await Checkbox.updateCheckboxAndCount(checkboxId, checked);
    }
}
