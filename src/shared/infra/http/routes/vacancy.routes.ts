import { Router } from 'express';

import { CreateVacancyController } from '../../../../modules/vacancy/useCases/create/CreateVacancyController';
import { DeleteVacancyController } from '../../../../modules/vacancy/useCases/delete/DeleteVacancyController';
import { FindAllVacanciesController } from '../../../../modules/vacancy/useCases/findAll/FindAllVacanciesController';
import { FindByIdVacancyController } from '../../../../modules/vacancy/useCases/findById/FindVacancyByIdController';
import { UpdateVacancyController } from '../../../../modules/vacancy/useCases/update/UpdateVacancyController';
import { isAuthenticate } from '../middlewares/isAuthenticate';

const vacancyRoutes = Router();

const findByIdVacancyController = new FindByIdVacancyController();
const findAllVacanciesController = new FindAllVacanciesController();
const createVacancyController = new CreateVacancyController();
const updateVacancyController = new UpdateVacancyController();
const deleteVacancyController = new DeleteVacancyController();

vacancyRoutes.get('/', findAllVacanciesController.handle);

vacancyRoutes.get('/:id', isAuthenticate, findByIdVacancyController.handle);

vacancyRoutes.post('/', createVacancyController.handle);

vacancyRoutes.put('/', isAuthenticate, updateVacancyController.handle);

vacancyRoutes.delete('/', isAuthenticate, deleteVacancyController.handle);

export { vacancyRoutes };
