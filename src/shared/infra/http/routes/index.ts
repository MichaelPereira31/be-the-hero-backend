import { Router } from 'express';

import { addressRoutes } from './address.routes';
import { userRoutes } from './user.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/address', addressRoutes);

export { router };
