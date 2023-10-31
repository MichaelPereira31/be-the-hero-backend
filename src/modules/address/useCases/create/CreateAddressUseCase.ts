import { inject, injectable } from 'tsyringe';

import { Address } from '@prisma/client';

import { IUserRepository } from '../../../user/repositories/IUserRepository';
import { ICreateAddressDTO } from '../../dtos/ICreateAddressDTO';
import { IAddressRepository } from '../../repositories/IAddressRepository';

@injectable()
export class CreateAddressUseCase {
  constructor(
    @inject('AddressRepository') readonly addressRepository: IAddressRepository,
    @inject('UserRepository') readonly userRepository: IUserRepository,
  ) {}

  async execute({
    userId,
    street,
    state,
    number,
    neighborhood,
    city,
    complement,
    reference,
  }: ICreateAddressDTO): Promise<Address> {
    const address = await this.addressRepository.create({
      street,
      state,
      number,
      neighborhood,
      city,
      complement,
      reference,
    });

    await this.userRepository.updateUser({
      id: userId as string,
      addressId: address.id,
    });

    return address;
  }
}
