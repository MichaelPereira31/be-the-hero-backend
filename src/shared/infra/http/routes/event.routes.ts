import { Router } from 'express';

import { CreateEventController } from '../../../../modules/event/useCases/create/CreateEventController';
import createEventSchema from '../../../../modules/event/useCases/create/validation';
import { DeleteEventController } from '../../../../modules/event/useCases/delete/DeleteEventController';
import deleteEventSchema from '../../../../modules/event/useCases/delete/validation';
import { FindAllEventController } from '../../../../modules/event/useCases/findAll/FindByIdEventController';
import { FindByIdEventController } from '../../../../modules/event/useCases/findById/FindByIdEventController';
import findByIdEventSchema from '../../../../modules/event/useCases/findById/validation';
import { UpdateEventController } from '../../../../modules/event/useCases/update/UpdateEventController';
import updateEventSchema from '../../../../modules/event/useCases/update/validation';
import { isActive } from '../middlewares/isActive';
import { isAuthenticate } from '../middlewares/isAuthenticate';
import { validation } from '../middlewares/validation';

const eventRoutes = Router();

const findEventByIdController = new FindByIdEventController();
const findEventAllController = new FindAllEventController();
const createEventController = new CreateEventController();
const updateEventController = new UpdateEventController();
const deleteEventController = new DeleteEventController();

eventRoutes.get('/', findEventAllController.handle);

eventRoutes.get(
  '/:id',
  isAuthenticate,
  validation(findByIdEventSchema),
  findEventByIdController.handle,
);

eventRoutes.post(
  '/',
  isAuthenticate,
  isActive,
  validation(createEventSchema),
  createEventController.handle,
);

eventRoutes.put(
  '/:id',
  isAuthenticate,
  validation(updateEventSchema),
  updateEventController.handle,
);

eventRoutes.delete(
  '/:id',
  isAuthenticate,
  validation(deleteEventSchema),
  deleteEventController.handle,
);

export { eventRoutes };
