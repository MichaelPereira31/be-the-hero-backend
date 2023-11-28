import { User } from '@prisma/client';

import prismaClient from '../../../../shared/infra/database';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { ITypeUserDTO } from '../../dtos/ITypeUserDTO';
import { IUpdateUserDTO } from '../../dtos/IUpdateUserDTO';
import { IUserRepository } from '../IUserRepository';

export class UserRepository implements IUserRepository {
  constructor(private readonly cxt = { prisma: prismaClient }) {}

  async findUsersByType({ type }: ITypeUserDTO): Promise<User[]> {
    const users = await this.cxt.prisma.user.findMany({ where: { type } });
    return users;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.cxt.prisma.user.findUnique({ where: { email } });
    return user;
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.cxt.prisma.user.findUnique({ where: { id } });
    return user;
  }

  async createUser({
    name,
    lastName,
    status = 'inactive',
    type = 'voluntary',
    email,
    password,
    addressId,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.cxt.prisma.user.create({
      data: {
        name,
        lastName,
        status,
        type,
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
    email,
    addressId,
    type,
    status,
  }: IUpdateUserDTO): Promise<User> {
    const user = await this.cxt.prisma.user.update({
      where: { id },
      data: {
        name,
        lastName,
        email,
        addressId,
        type,
        status,
      },
    });

    return user;
  }

  async deleteUser(id: string): Promise<void> {
    await this.cxt.prisma.user.delete({ where: { id } });
  }
}
