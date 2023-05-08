import { User } from '@prisma/client';

import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { ITypeUserDTO } from '../dtos/ITypeUserDTO';
import { IUpdateUserDTO } from '../dtos/IUpdateUserDTO';

export type IUserRepository = {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findUsersByType(params: ITypeUserDTO): Promise<User[]>;
  createUser(params: ICreateUserDTO): Promise<User>;
  updateUser(params: IUpdateUserDTO): Promise<User>;
  deleteUser(id: string): Promise<void>;
};
