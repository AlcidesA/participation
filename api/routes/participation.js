import express from 'express';

import participation from '../controllers/participation';

const router = express.Router();

router.get('/', participation.list);
router.post('/', participation.create);

export default router;
