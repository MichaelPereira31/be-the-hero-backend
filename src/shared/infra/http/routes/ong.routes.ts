import { Router } from 'express';

import { CreateOngController } from '@modules/ong/useCases/create/CreateOngController';
import { DeleteOngController } from '@modules/ong/useCases/delete/DeleteOngController';
import { FindByIdOngController } from '@modules/ong/useCases/findById/FindByIdOngController';
import { FindOngsController } from '@modules/ong/useCases/findOngs/FindOngsController';
import { UpdateOngController } from '@modules/ong/useCases/update/UpdateOngController';

import { isActive } from '../middlewares/isActive';
import { isAuthenticate } from '../middlewares/isAuthenticate';

const ongRoutes = Router();

const findOngByIdController = new FindByIdOngController();
const findOngsController = new FindOngsController();
const createOngController = new CreateOngController();
const updateOngController = new UpdateOngController();
const deleteOngController = new DeleteOngController();

ongRoutes.get('/:id', isAuthenticate, findOngByIdController.handle);

ongRoutes.get('/', isAuthenticate, findOngsController.handle);

ongRoutes.post('/', isAuthenticate, isActive, createOngController.handle);

ongRoutes.put('/', isAuthenticate, isActive, updateOngController.handle);

ongRoutes.delete('/', isAuthenticate, isActive, deleteOngController.handle);

export { ongRoutes };
