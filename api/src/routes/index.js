import { Router } from 'express';

import participation from './participation';

const router = Router();

router.use('/participation', participation);

export default router;
