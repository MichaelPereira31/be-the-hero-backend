import { Router } from 'express';

import { addressRoutes } from './address.routes';
import { complaintRoutes } from './complaint.routes';
import { donationRoutes } from './donation.routes';
import { employeeRoutes } from './employee.routes';
import { ongRoutes } from './ong.routes';
import { userRoutes } from './user.routes';
import { voluntaryRoutes } from './voluntary.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/address', addressRoutes);
router.use('/ong', ongRoutes);
router.use('/complaint', complaintRoutes);
router.use('/employee', employeeRoutes);
router.use('/voluntary', voluntaryRoutes);
router.use('/donation', donationRoutes);

export { router };
