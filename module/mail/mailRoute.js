import { Router } from 'express';
const router = Router();

import { index } from './mailController.js';

router.get('/', index); 

export default router