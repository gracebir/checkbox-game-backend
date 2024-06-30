import { CheckboxService } from '../services/checkbox.service';
const checkboxService = new CheckboxService();
export const toggle = async (req, res) => {
    const { checkboxId } = req.params;
    const { checked, userId } = req.body;
    try {
        const countChange = await checkboxService.updateCheckboxAndCount(checkboxId, checked, userId);
        res.status(200).json({ countChange });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ error: error.message });
    }
};
export const list = async (req, res) => {
    const { startRow, endRow, startCol, endCol } = req.query;
    try {
        const checkboxes = await checkboxService.getCheckboxesByRange(Number(startRow), Number(endRow), Number(startCol), Number(endCol));
        res.status(200).json(checkboxes);
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ error: error.message });
    }
};
//# sourceMappingURL=checkbox.controller.js.map