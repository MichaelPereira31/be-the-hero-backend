import { Router } from 'express';

import { CreateVacanceController } from '../../../../modules/vacances/useCases/create/CreateController';
import { FindVacanceByIdController } from '../../../../modules/vacances/useCases/findById/FindByIdController';

const vacanceRoutes = Router();

const createVacanceController = new CreateVacanceController();
const findVacanceByIdController = new FindVacanceByIdController();
const returnAllVacances = new ReturnAllController();

vacanceRoutes.post('/', createVacanceController.handle);
vacanceRoutes.get('/:id', findVacanceByIdController.handle);
vacanceRoutes.get('/', returnAllVacances.handle);

export { vacanceRoutes };
