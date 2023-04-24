import { ICreateUserDTO } from '@modules/user/dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '@modules/user/dtos/IUpdateUserDTO';
import { User, UserStatus, UserType } from '@prisma/client';
import prismaClient from '@shared/infra/database';

import { IUserRepository } from '../IUserRepository';

export class UserRepository implements IUserRepository {
  constructor(private readonly cxt = { prisma: prismaClient }) {}

  async findById(id: string): Promise<User | null> {
    const user = await this.cxt.prisma.user.findUnique({ where: { id } });
    return user;
  }

  async createUser({
    name,
    lastName,
    status = 'ong',
    type = 'active',
    email,
    password,
    addressId,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.cxt.prisma.user.create({
      data: {
        name,
        lastName,
        status: UserStatus[status],
        type: UserType[type],
        email,
        password,
        addressId,
      },
    });

    return user;
  }

  async updateUser({
    id,
    name,
    lastName,
    status,
    type,
    email,
    password,
    addressId,
  }: IUpdateUserDTO): Promise<User> {
    const user = await this.cxt.prisma.user.update({
      where: { id },
      data: {
        name,
        lastName,
        email,
        status: UserStatus[status],
        type: UserType[type],
        password,
        addressId,
      },
    });

    return user;
  }

  async deleteUser(id: string): Promise<void> {
    await this.cxt.prisma.user.delete({ where: { id } });
  }
}
