import { Router } from 'express';

import { CreateVoluntaryController } from '@modules/voluntary/useCases/create/CreateVoluntaryController';
import { DeleteVoluntaryController } from '@modules/voluntary/useCases/delete/DeleteVoluntaryController';
import { FindAllVoluntaryController } from '@modules/voluntary/useCases/findAll/FindAllVoluntaryController';
import { FindByIdVoluntaryController } from '@modules/voluntary/useCases/findById/FindByIdVoluntaryController';
import { UpdateVoluntaryController } from '@modules/voluntary/useCases/update/UpdateVoluntaryController';

import { isAuthenticate } from '../middlewares/isAuthenticate';

const voluntaryRoutes = Router();
const findByIdVoluntaryByIdController = new FindByIdVoluntaryController();
const findAllVoluntaryByIdController = new FindAllVoluntaryController();
const createVoluntaryController = new CreateVoluntaryController();
const updateVoluntaryController = new UpdateVoluntaryController();
const deleteVoluntaryController = new DeleteVoluntaryController();

voluntaryRoutes.get(
  '/search/find-all',
  isAuthenticate,
  findAllVoluntaryByIdController.handle,
);

voluntaryRoutes.get(
  '/:id',
  isAuthenticate,
  findByIdVoluntaryByIdController.handle,
);

voluntaryRoutes.post('/', isAuthenticate, createVoluntaryController.handle);

voluntaryRoutes.put('/:id', isAuthenticate, updateVoluntaryController.handle);

voluntaryRoutes.delete(
  '/:id',
  isAuthenticate,
  deleteVoluntaryController.handle,
);

export { voluntaryRoutes };
