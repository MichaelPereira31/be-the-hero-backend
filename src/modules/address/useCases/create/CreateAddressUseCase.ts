import { inject, injectable } from 'tsyringe';

import { Address } from '@prisma/client';

import { IUserRepository } from '../../../user/repositories/IUserRepository';
import { ICreateAddressDTO } from '../../dtos/ICreateAddressDTO';
import { IAddressRepository } from '../../repositories/IAddressRepository';

@injectable()
export class CreateAddressUseCase {
  constructor(
    @inject('AddressRepository')
    private readonly addressRepository: IAddressRepository,
    @inject('UserRepository') private readonly userRepository: IUserRepository,
  ) {}

  async execute({
    userId,
    street,
    number,
    neighborhood,
    city,
    state,
    complement,
    reference,
    googleCoordinates,
  }: ICreateAddressDTO): Promise<Address> {
    const address = await this.addressRepository.create({
      street,
      number,
      neighborhood,
      city,
      state,
      complement,
      reference,
      googleCoordinates,
    });

    await this.userRepository.updateUser({
      id: userId as string,
      addressId: address.id,
    });

    return address;
  }
}
