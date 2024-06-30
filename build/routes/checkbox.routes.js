/** @format */
import { Router } from 'express';
import { toggle, list } from '../controllers/checkbox.controller';
const router = Router();
router.put('/:checkboxId', toggle);
router.get('/', list);
export default router;
//# sourceMappingURL=checkbox.routes.js.map