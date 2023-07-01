import { Router } from 'express';

import { addressRoutes } from './address.routes';
import { ongRoutes } from './ong.routes';
import { userRoutes } from './user.routes';
import { vacanceRoutes } from './vacance.routes';
import { VoluntaryRoutes } from './voluntary.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/address', addressRoutes);
router.use('/ong', ongRoutes);
router.use('/vacance', vacanceRoutes);
router.use('/Voluntary', VoluntaryRoutes);

export { router };
