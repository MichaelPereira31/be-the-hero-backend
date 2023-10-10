import { Router } from 'express';

import { CreateEventController } from '@modules/event/useCases/create/CreateEventController';
import { DeleteEventController } from '@modules/event/useCases/delete/DeleteEventController';
import { FindByIdEventController } from '@modules/event/useCases/findById/FindByIdEventController';
import { UpdateEventController } from '@modules/event/useCases/update/UpdateEventController';

import { isActive } from '../middlewares/isActive';
import { isAuthenticate } from '../middlewares/isAuthenticate';

const eventRoutes = Router();

const findEventByIdController = new FindByIdEventController();
const createEventController = new CreateEventController();
const updateEventController = new UpdateEventController();
const deleteEventController = new DeleteEventController();

eventRoutes.get('/:id', isAuthenticate, findEventByIdController.handle);

eventRoutes.post('/', isAuthenticate, isActive, createEventController.handle);

eventRoutes.put('/:id', isAuthenticate, updateEventController.handle);

eventRoutes.delete('/:id', isAuthenticate, deleteEventController.handle);

export { eventRoutes };
