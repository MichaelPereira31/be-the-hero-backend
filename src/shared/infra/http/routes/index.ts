import { Router } from 'express';

import { addressRoutes } from './address.routes';
import { eventRoutes } from './event.routes';
import { ongRoutes } from './ong.routes';
import { userRoutes } from './user.routes';
import { voluntaryRoutes } from './voluntary.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/address', addressRoutes);
router.use('/ong', ongRoutes);
router.use('/event', eventRoutes);
router.use('/voluntary', voluntaryRoutes);

export { router };
