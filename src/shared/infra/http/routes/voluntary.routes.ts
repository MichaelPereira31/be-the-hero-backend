import { Router } from 'express';

import { CreateVoluntaryController } from '@modules/voluntary/useCases/create/CreateVoluntaryController';
import createVoluntarySchema from '@modules/voluntary/useCases/create/validation';
import { DeleteVoluntaryController } from '@modules/voluntary/useCases/delete/DeleteVoluntaryController';
import { FindAllVoluntaryController } from '@modules/voluntary/useCases/findAll/FindAllVoluntaryController';
import findAllVoluntarySchema from '@modules/voluntary/useCases/findAll/validation';
import { FindByIdVoluntaryController } from '@modules/voluntary/useCases/findById/FindByIdVoluntaryController';
import findByIdVoluntarySchema from '@modules/voluntary/useCases/findById/validation';
import { UpdateVoluntaryController } from '@modules/voluntary/useCases/update/UpdateVoluntaryController';
import updateVoluntarySchema from '@modules/voluntary/useCases/update/validation';

import { isAuthenticate } from '../middlewares/isAuthenticate';
import { validation } from '../middlewares/validation';

const voluntaryRoutes = Router();
const findByIdVoluntaryByIdController = new FindByIdVoluntaryController();
const findAllVoluntaryByIdController = new FindAllVoluntaryController();
const createVoluntaryController = new CreateVoluntaryController();
const updateVoluntaryController = new UpdateVoluntaryController();
const deleteVoluntaryController = new DeleteVoluntaryController();

voluntaryRoutes.get(
  '/search/find-all',
  isAuthenticate,
  validation(findAllVoluntarySchema),
  findAllVoluntaryByIdController.handle,
);

voluntaryRoutes.get(
  '/:id',
  isAuthenticate,
  validation(findByIdVoluntarySchema),
  findByIdVoluntaryByIdController.handle,
);

voluntaryRoutes.post(
  '/',
  isAuthenticate,
  validation(createVoluntarySchema),
  createVoluntaryController.handle,
);

voluntaryRoutes.put(
  '/:id',
  isAuthenticate,
  validation(updateVoluntarySchema),
  updateVoluntaryController.handle,
);

voluntaryRoutes.delete(
  '/:id',
  isAuthenticate,
  deleteVoluntaryController.handle,
);

export { voluntaryRoutes };
