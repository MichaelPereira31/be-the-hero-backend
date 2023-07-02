import { Router } from 'express';

import { FindAllVacancesController } from '@modules/vacances/useCases/findAll/FindAllController';

import { CreateVacanceController } from '../../../../modules/vacances/useCases/create/CreateController';
import { DeleteVacanceController } from '../../../../modules/vacances/useCases/delete/DeleteController';
import { FindVacanceByIdController } from '../../../../modules/vacances/useCases/findById/FindByIdController';
import { UpdateVacanceController } from '../../../../modules/vacances/useCases/update/UpdateController';

const vacanceRoutes = Router();

const createVacanceController = new CreateVacanceController();
const findVacanceByIdController = new FindVacanceByIdController();
const findAllVacances = new FindAllVacancesController();
const updateVacanceController = new UpdateVacanceController();
const deleteVacanceController = new DeleteVacanceController();

vacanceRoutes.post('/', createVacanceController.handle);
vacanceRoutes.get('/:id', findVacanceByIdController.handle);
vacanceRoutes.get('/', findAllVacances.handle);
vacanceRoutes.put('/:id', updateVacanceController.handle);
vacanceRoutes.delete('/:id', deleteVacanceController.handle);

export { vacanceRoutes };
