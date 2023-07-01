import { Router } from 'express';

import { CreateVoluntaryController } from '@modules/voluntary/useCases/create/CreateVoluntaryController';
import { DeleteVoluntaryController } from '@modules/voluntary/useCases/delete/DeleteVoluntaryController';
import { FindVoluntaryByIdController } from '@modules/voluntary/useCases/findById/FindByIdVoluntaryController';
import { UpdateVoluntaryController } from '@modules/voluntary/useCases/update/UpdateVoluntaryController';

import { FindAllVoluntaryController } from '../../../../modules/voluntary/useCases/findAll/FindAllVoluntaryController';

const VoluntaryRoutes = Router();

const createVoluntaryController = new CreateVoluntaryController();
const findVoluntaryByIdController = new FindVoluntaryByIdController();
const returnAllVoluntarys = new FindAllVoluntaryController();
const updateVoluntaryController = new UpdateVoluntaryController();
const deleteVoluntaryController = new DeleteVoluntaryController();

VoluntaryRoutes.post('/', createVoluntaryController.handle);
VoluntaryRoutes.get('/:id', findVoluntaryByIdController.handle);
VoluntaryRoutes.get('/', returnAllVoluntarys.handle);
VoluntaryRoutes.put('/:id', updateVoluntaryController.handle);
VoluntaryRoutes.delete('/:id', deleteVoluntaryController.handle);

export { VoluntaryRoutes };
