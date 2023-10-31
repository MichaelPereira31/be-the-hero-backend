import { Address } from '@prisma/client';

import prismaClient from '../../../../shared/infra/database';
import { ICreateAddressDTO } from '../../dtos/ICreateAddressDTO';
import { IUpdateAddressDTO } from '../../dtos/IUpdateAddressDTO';
import { IAddressRepository } from '../IAddressRepository';

export class AddressRepository implements IAddressRepository {
  constructor(private readonly ctx = { prisma: prismaClient }) {}

  async findById(id: string): Promise<Address | null> {
    const address = await this.ctx.prisma.address.findUnique({ where: { id } });

    return address;
  }

  async create({
    street,
    number,
    state,
    neighborhood,
    city,
    complement,
    reference,
  }: ICreateAddressDTO): Promise<Address> {
    const address = await this.ctx.prisma.address.create({
      data: {
        street,
        number,
        state,
        neighborhood,
        city,
        complement,
        reference,
      },
    });

    return address;
  }

  async update({
    id,
    street,
    state,
    number,
    neighborhood,
    city,
    complement,
    reference,
  }: IUpdateAddressDTO): Promise<Address> {
    const address = await this.ctx.prisma.address.update({
      where: { id },
      data: {
        street,
        number,
        state,
        neighborhood,
        city,
        complement,
        reference,
      },
    });

    return address;
  }

  async delete(id: string): Promise<void> {
    await this.ctx.prisma.address.delete({ where: { id } });
  }
}
