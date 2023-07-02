import { ICreateAddressDTO } from '@modules/address/dtos/ICreateAddressDTO';
import { IUpdateAddressDTO } from '@modules/address/dtos/IUpdateAddressDTO';
import { Address } from '@prisma/client';
import prismaClient from '@shared/infra/database';

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
    neighborhood,
    city,
    state,
    complement,
    reference,
    googleCoordinates,
  }: ICreateAddressDTO): Promise<Address> {
    const address = await this.ctx.prisma.address.create({
      data: {
        street,
        number,
        neighborhood,
        city,
        state,
        complement,
        reference,
        googleCoordinates,
      },
    });

    return address;
  }

  async update({
    id,
    street,
    number,
    neighborhood,
    city,
    state,
    complement,
    reference,
    googleCoordinates,
  }: IUpdateAddressDTO): Promise<Address> {
    const address = await this.ctx.prisma.address.update({
      where: { id },
      data: {
        street,
        number,
        neighborhood,
        city,
        state,
        complement,
        reference,
        googleCoordinates,
      },
    });

    return address;
  }

  async delete(id: string): Promise<void> {
    await this.ctx.prisma.address.delete({ where: { id } });
  }
}
