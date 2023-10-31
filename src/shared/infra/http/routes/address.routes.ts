import { Router } from 'express';

import { CreateAddressController } from '../../../../modules/address/useCases/create/CreateAddressController';
import createAddressSchema from '../../../../modules/address/useCases/create/validation';
import { DeleteAddressController } from '../../../../modules/address/useCases/delete/DeleteAddressController';
import deleteAddressSchema from '../../../../modules/address/useCases/delete/validation';
import { FindByIdAddressController } from '../../../../modules/address/useCases/findById/FindByIdAddressController';
import findByIdAddressSchema from '../../../../modules/address/useCases/findById/validation';
import { UpdateAddressController } from '../../../../modules/address/useCases/update/UpdateAddressController';
import updateAddressSchema from '../../../../modules/address/useCases/update/validation';
import { isAuthenticate } from '../middlewares/isAuthenticate';
import { validation } from '../middlewares/validation';

const addressRoutes = Router();

const findAddressByIdController = new FindByIdAddressController();
const createAddressController = new CreateAddressController();
const updateAddressController = new UpdateAddressController();
const deleteAddressController = new DeleteAddressController();

addressRoutes.get(
  '/:id',
  isAuthenticate,
  validation(findByIdAddressSchema),
  findAddressByIdController.handle,
);

addressRoutes.post(
  '/',
  isAuthenticate,
  validation(createAddressSchema),
  createAddressController.handle,
);

addressRoutes.put(
  '/:id',
  isAuthenticate,
  validation(updateAddressSchema),
  updateAddressController.handle,
);

addressRoutes.delete(
  '/:id',
  isAuthenticate,
  validation(deleteAddressSchema),
  deleteAddressController.handle,
);

export { addressRoutes };
