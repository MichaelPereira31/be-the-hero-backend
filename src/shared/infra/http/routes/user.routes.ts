import { Router } from 'express';

import { AuthenticateController } from '../../../../modules/user/useCases/authenticate/AuthenticateController';
import { CreateUserController } from '../../../../modules/user/useCases/create/CreateUserController';
import { DeleteUserController } from '../../../../modules/user/useCases/delete/DeleteUserController';
import { FindUserByIdController } from '../../../../modules/user/useCases/findUserById/FindUserByIdController';
import { FindUserByTypeController } from '../../../../modules/user/useCases/findUserByType/FindUserByTypeController';
import { UpdateUserController } from '../../../../modules/user/useCases/update/UpdateUserController';
import { isAuthenticate } from '../middlewares/isAuthenticate';

const userRoutes = Router();

const findUserByIdController = new FindUserByIdController();
const findUserByTypeController = new FindUserByTypeController();
const authenticateUserController = new AuthenticateController();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

userRoutes.get('/', isAuthenticate, findUserByIdController.handle);

userRoutes.get(
  '/type/:userType',
  isAuthenticate,
  findUserByTypeController.handle,
);

userRoutes.post('/authenticate', authenticateUserController.handle);

userRoutes.post('/', createUserController.handle);

userRoutes.put('/', isAuthenticate, updateUserController.handle);

userRoutes.delete('/', isAuthenticate, deleteUserController.handle);

export { userRoutes };
