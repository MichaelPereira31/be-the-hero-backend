import { Router } from 'express';

import { CreateOngController } from '@modules/ong/useCases/create/CreateOngController';
import createOngSchema from '@modules/ong/useCases/create/validation';
import { DeleteOngController } from '@modules/ong/useCases/delete/DeleteOngController';
import { FindByIdOngController } from '@modules/ong/useCases/findById/FindByIdOngController';
import findByIdOngSchema from '@modules/ong/useCases/findById/validation';
import { FindOngsController } from '@modules/ong/useCases/findOngs/FindOngsController';
import findOngSchema from '@modules/ong/useCases/findOngs/validation';
import { UpdateOngController } from '@modules/ong/useCases/update/UpdateOngController';
import updateOngSchema from '@modules/ong/useCases/update/validation';

import { isActive } from '../middlewares/isActive';
import { isAuthenticate } from '../middlewares/isAuthenticate';
import { validation } from '../middlewares/validation';

const ongRoutes = Router();

const findOngByIdController = new FindByIdOngController();
const findOngsController = new FindOngsController();
const createOngController = new CreateOngController();
const updateOngController = new UpdateOngController();
const deleteOngController = new DeleteOngController();

ongRoutes.get(
  '/:id',
  isAuthenticate,
  isActive,
  validation(findByIdOngSchema),
  findOngByIdController.handle,
);

ongRoutes.get(
  '/',
  isAuthenticate,
  isActive,
  validation(findOngSchema),
  findOngsController.handle,
);

ongRoutes.post(
  '/',
  isAuthenticate,
  validation(createOngSchema),
  createOngController.handle,
);

ongRoutes.put(
  '/',
  isAuthenticate,
  isActive,
  validation(updateOngSchema),
  updateOngController.handle,
);

ongRoutes.delete('/', isAuthenticate, isActive, deleteOngController.handle);

export { ongRoutes };
