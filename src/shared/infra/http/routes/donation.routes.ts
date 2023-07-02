import { Router } from 'express';

import { CreateDonationController } from '../../../../modules/donation/useCases/create/CreateDonationController';
import { DeleteDonationController } from '../../../../modules/donation/useCases/delete/DeleteDonationController';
import { FindAllDonationController } from '../../../../modules/donation/useCases/findAll/FindAllDonationController';
import { FindByIdDonationController } from '../../../../modules/donation/useCases/findById/FindByIdDonationController';
import { UpdateDonationController } from '../../../../modules/donation/useCases/update/UpdateDonationController';
import { isAuthenticate } from '../middlewares/isAuthenticate';

const donationRoutes = Router();

const findByIDonationController = new FindByIdDonationController();
const findAllDonationController = new FindAllDonationController();
const createDonationController = new CreateDonationController();
const updateDonationController = new UpdateDonationController();
const deleteDonationController = new DeleteDonationController();

donationRoutes.get('/', findAllDonationController.handle);

donationRoutes.get('/:id', isAuthenticate, findByIDonationController.handle);

donationRoutes.post('/', createDonationController.handle);

donationRoutes.put('/', isAuthenticate, updateDonationController.handle);

donationRoutes.delete('/', isAuthenticate, deleteDonationController.handle);

export { donationRoutes };
