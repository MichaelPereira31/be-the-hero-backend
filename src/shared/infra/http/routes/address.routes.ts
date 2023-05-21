import { Router } from 'express';

import { CreateAddressController } from '@modules/address/useCases/create/CreateAddressController';
import { DeleteAddressController } from '@modules/address/useCases/delete/DeleteAddressController';
import { FindByIdAddressController } from '@modules/address/useCases/findById/FindByIdAddressController';
import { UpdateAddressController } from '@modules/address/useCases/update/UpdateAddressController';

import { isAuthenticate } from '../middlewares/isAuthenticate';

const addressRoutes = Router();

const findAddressByIdController = new FindByIdAddressController();
const createAddressController = new CreateAddressController();
const updateAddressController = new UpdateAddressController();
const deleteAddressController = new DeleteAddressController();

addressRoutes.get('/:id', isAuthenticate, findAddressByIdController.handle);

addressRoutes.post('/', isAuthenticate, createAddressController.handle);

addressRoutes.put('/:id', isAuthenticate, updateAddressController.handle);

addressRoutes.delete('/:id', isAuthenticate, deleteAddressController.handle);

export { addressRoutes };
