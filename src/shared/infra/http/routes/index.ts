import { Router } from 'express';

import { addressRoutes } from './address.routes';
import { eventRoutes } from './event.routes';
import { ongRoutes } from './ong.routes';
import { userRoutes } from './user.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/address', addressRoutes);
router.use('/ong', ongRoutes);
router.use('/event', eventRoutes);

export { router };
