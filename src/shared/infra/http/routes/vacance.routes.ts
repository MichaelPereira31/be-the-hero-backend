import { Router } from 'express';

import { CreateVacanceController } from '../../../../modules/vacances/useCases/create/CreateVacanceController';

const vacanceRoutes = Router();

const createVacanceController = new CreateVacanceController();

vacanceRoutes.post('/', createVacanceController.handle);
