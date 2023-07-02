import { Router } from 'express';

import { CreateComplaintController } from '../../../../modules/complaint/useCases/create/CreateComplaintController';
import { DeleteComplaintController } from '../../../../modules/complaint/useCases/delete/DeleteComplaintController';
import { FindAllUserComplaintController } from '../../../../modules/complaint/useCases/findAllUser/FindAllUserComplaintController';
import { FindByIdComplaintController } from '../../../../modules/complaint/useCases/findById/FindByIdComplaintController';
import { UpdateComplaintController } from '../../../../modules/complaint/useCases/update/UpdateComplaintController';

const complaintRoutes = Router();

const findByIdComplaintController = new FindByIdComplaintController();
const findAllUserComplaintController = new FindAllUserComplaintController();
const createComplaintController = new CreateComplaintController();
const updateComplaintController = new UpdateComplaintController();
const deleteComplaintController = new DeleteComplaintController();

complaintRoutes.get('/:id', findByIdComplaintController.handle);
complaintRoutes.get('/user/:userId', findAllUserComplaintController.handle);
complaintRoutes.post('/', createComplaintController.handle);
complaintRoutes.put('/:id', updateComplaintController.handle);
complaintRoutes.delete('/:id', deleteComplaintController.handle);

export { complaintRoutes };
