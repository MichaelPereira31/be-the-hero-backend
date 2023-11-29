import { Router } from 'express';
import { UploadFileController } from 'modules/user/useCases/uploadFile/UploadFileController';

import { ActiveUserController } from '../../../../modules/user/useCases/activeUser/ActiveUserController';
import { AuthenticateController } from '../../../../modules/user/useCases/authenticate/AuthenticateController';
import authenticateSchema from '../../../../modules/user/useCases/authenticate/validation';
import { CreateUserController } from '../../../../modules/user/useCases/create/CreateUserController';
import createUserSchema from '../../../../modules/user/useCases/create/validation';
import { DeleteUserController } from '../../../../modules/user/useCases/delete/DeleteUserController';
import { FindUserByIdController } from '../../../../modules/user/useCases/findUserById/FindUserByIdController';
import { RequestActiveUserController } from '../../../../modules/user/useCases/requestActiveUser/RequestActiveUserController';
import { UpdateUserController } from '../../../../modules/user/useCases/update/UpdateUserController';
import updateUserSchema from '../../../../modules/user/useCases/update/validation';
import { isAuthenticate } from '../middlewares/isAuthenticate';
import { uploadFileMiddleware } from '../middlewares/uploadFile';
import { validation } from '../middlewares/validation';

const userRoutes = Router();

const findUserByIdController = new FindUserByIdController();
const authenticateUserController = new AuthenticateController();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const requestActiveUserController = new RequestActiveUserController();
const activeUserController = new ActiveUserController();
const uploadFileController = new UploadFileController();

userRoutes.get('/', isAuthenticate, findUserByIdController.handle);
userRoutes.get(
  '/request-active',
  isAuthenticate,
  requestActiveUserController.handle,
);
userRoutes.get('/activate/:id', activeUserController.handle);

userRoutes.post(
  '/authenticate',
  validation(authenticateSchema),
  authenticateUserController.handle,
);

userRoutes.post('/', validation(createUserSchema), createUserController.handle);
userRoutes.post('/upload', uploadFileMiddleware, uploadFileController.handle);
userRoutes.put(
  '/',
  isAuthenticate,
  validation(updateUserSchema),
  updateUserController.handle,
);

userRoutes.delete('/', isAuthenticate, deleteUserController.handle);

export { userRoutes };
