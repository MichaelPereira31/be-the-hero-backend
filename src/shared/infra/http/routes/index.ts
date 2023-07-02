import { Router } from 'express';

import { addressRoutes } from './address.routes';
import { complaintRoutes } from './complaint.routes';
import { employeeRoutes } from './employee.routes';
import { ongRoutes } from './ong.routes';
import { userRoutes } from './user.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/address', addressRoutes);
router.use('/ong', ongRoutes);
router.use('/complaint', complaintRoutes);
router.use('/employee', employeeRoutes);

export { router };
