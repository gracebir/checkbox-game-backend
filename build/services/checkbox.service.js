import { Checkbox } from "../db/models/CheckboxGame.model";
export class CheckboxService {
    async getAllCheckboxes() {
        return await Checkbox.findAll();
    }
    async getCheckboxesByRange(startRow, endRow, startCol, endCol) {
        return await Checkbox.findAll({
            where: {
                row: { $between: [startRow, endRow] },
                col: { $between: [startCol, endCol] },
            },
        });
    }
    async getCheckboxById(checkboxId) {
        return await Checkbox.findByPk(checkboxId);
    }
    async updateCheckboxAndCount(checkboxId, checked, userId) {
        return await Checkbox.updateCheckboxAndCount(checkboxId, checked, userId);
    }
}
//# sourceMappingURL=checkbox.service.js.map