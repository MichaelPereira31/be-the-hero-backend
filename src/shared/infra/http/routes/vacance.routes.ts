import { Router } from 'express';

import { CreateVacanceController } from '../../../../modules/vacances/useCases/create/CreateVacanceController';
import { FindVacanceByIdController } from '../../../../modules/vacances/useCases/findById/FindVacanceByIdController';

const vacanceRoutes = Router();

const createVacanceController = new CreateVacanceController();
const findVacanceByIdController = new FindVacanceByIdController();

vacanceRoutes.post('/', createVacanceController.handle);
vacanceRoutes.get('/:id', findVacanceByIdController.handle);

export { vacanceRoutes };
