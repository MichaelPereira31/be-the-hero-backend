import { Router } from 'express';

import { CreateVoluntaryController } from '../../../../modules/voluntary/useCases/create/CreateVoluntaryController';
import { DeleteVoluntaryController } from '../../../../modules/voluntary/useCases/delete/DeleteVoluntaryController';
import { FindAllVoluntaryController } from '../../../../modules/voluntary/useCases/findAll/FindAllVoluntaryController';
import { FindByIdVoluntaryController } from '../../../../modules/voluntary/useCases/findById/FindByIdVoluntaryController';
import { UpdateVoluntaryController } from '../../../../modules/voluntary/useCases/update/UpdateVoluntaryController';
import { isAuthenticate } from '../middlewares/isAuthenticate';

const voluntaryRoutes = Router();

const findByIdVoluntaryController = new FindByIdVoluntaryController();
const findAllVoluntaryController = new FindAllVoluntaryController();
const createVoluntaryController = new CreateVoluntaryController();
const updateVoluntaryController = new UpdateVoluntaryController();
const deleteVoluntaryController = new DeleteVoluntaryController();

voluntaryRoutes.get('/', findAllVoluntaryController.handle);

voluntaryRoutes.get('/:id', isAuthenticate, findByIdVoluntaryController.handle);

voluntaryRoutes.post('/', createVoluntaryController.handle);

voluntaryRoutes.put('/', isAuthenticate, updateVoluntaryController.handle);

voluntaryRoutes.delete('/', isAuthenticate, deleteVoluntaryController.handle);

export { voluntaryRoutes };
