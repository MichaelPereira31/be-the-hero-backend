import { User } from '@prisma/client';

import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '../dtos/IUpdateUserDTO';

export type IUserRepository = {
  findById(id: string): Promise<User | null>;
  createUser(params: ICreateUserDTO): Promise<User>;
  updateUser(params: IUpdateUserDTO): Promise<User>;
  deleteUser(id: string): Promise<void>;
};
