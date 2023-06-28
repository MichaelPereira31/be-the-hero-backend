import { Router } from 'express';

import { CreateDonationController } from '@modules/donation/useCases/create/CreateDonationController';
import { DeleteDonationController } from '@modules/donation/useCases/delete/DeleteDonationController';
import { FindByIdDonationController } from '@modules/donation/useCases/findById/FindByIdDonationController';
import { UpdateDonationController } from '@modules/donation/useCases/update/UpdateDonationController';

const donationRoutes = Router();

const createDonationController = new CreateDonationController();
const findDonationByIdController = new FindByIdDonationController();
const updateDonationController = new UpdateDonationController();
const deleteDonationController = new DeleteDonationController();

donationRoutes.post('/', createDonationController.handle);
donationRoutes.get('/:id', findDonationByIdController.handle);
donationRoutes.put('/:id', updateDonationController.handle);
donationRoutes.delete('/:id', deleteDonationController.handle);

export { donationRoutes };
