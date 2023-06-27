import { Router } from 'express';

import { CreateVolunteerController } from '@modules/volunteer/useCases/create/CreateVolunteerController';
import { DeleteVolunteerController } from '@modules/volunteer/useCases/delete/DeleteVolunteerController';
import { FindVolunteerByIdController } from '@modules/volunteer/useCases/findById/FindByIdVolunteerController';
import { UpdateVolunteerController } from '@modules/volunteer/useCases/update/UpdateVolunteerController';

import { FindAllVolunteerController } from '../../../../modules/volunteer/useCases/findAll/FindAllVolunteerController';

const volunteerRoutes = Router();

const createVolunteerController = new CreateVolunteerController();
const findVolunteerByIdController = new FindVolunteerByIdController();
const returnAllVolunteers = new FindAllVolunteerController();
const updateVolunteerController = new UpdateVolunteerController();
const deleteVolunteerController = new DeleteVolunteerController();

volunteerRoutes.post('/', createVolunteerController.handle);
volunteerRoutes.get('/:id', findVolunteerByIdController.handle);
volunteerRoutes.get('/', returnAllVolunteers.handle);
volunteerRoutes.put('/:id', updateVolunteerController.handle);
volunteerRoutes.delete('/:id', deleteVolunteerController.handle);

export { volunteerRoutes };
