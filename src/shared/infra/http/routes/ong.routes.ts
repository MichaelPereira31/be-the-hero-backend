import { Router } from 'express';

import { CreateOngController } from '../../../../modules/ong/useCases/create/CreateOngController';
import { DeleteOngController } from '../../../../modules/ong/useCases/delete/DeleteOngController';
import { FindByIdOngController } from '../../../../modules/ong/useCases/findById/FindByIdOngController';
import { FindByNameOngController } from '../../../../modules/ong/useCases/findByName/FindByNameOngController';
import { UpdateOngController } from '../../../../modules/ong/useCases/update/UpdateOngController';
import { isAuthenticate } from '../middlewares/isAuthenticate';

const ongRoutes = Router();

const findOngByIdController = new FindByIdOngController();
const findByNameOngController = new FindByNameOngController();
const createOngController = new CreateOngController();
const updateOngController = new UpdateOngController();
const deleteOngController = new DeleteOngController();

ongRoutes.get('/:id', isAuthenticate, findOngByIdController.handle);

ongRoutes.get('/name/:name', isAuthenticate, findByNameOngController.handle);

ongRoutes.post('/', isAuthenticate, createOngController.handle);

ongRoutes.put('/:id', isAuthenticate, updateOngController.handle);

ongRoutes.delete('/:id', isAuthenticate, deleteOngController.handle);

export { ongRoutes };
