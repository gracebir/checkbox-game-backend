import { Router } from 'express';
import { register, authenticate } from '../controllers/user.controller';
const router = Router();
router.post('/register', register);
router.post('/signin', authenticate);
export default router;
//# sourceMappingURL=user.routes.js.map