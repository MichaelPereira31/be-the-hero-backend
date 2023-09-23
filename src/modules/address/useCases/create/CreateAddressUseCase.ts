import { inject, injectable } from 'tsyringe';

import { ICreateAddressDTO } from '@modules/address/dtos/ICreateAddressDTO';
import { IAddressRepository } from '@modules/address/repositories/IAddressRepository';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { Address } from '@prisma/client';

@injectable()
export class CreateAddressUseCase {
  constructor(
    @inject('AddressRepository') readonly addressRepository: IAddressRepository,
    @inject('UserRepository') readonly userRepository: IUserRepository,
  ) {}

  async execute({
    userId,
    street,
    number,
    neighborhood,
    city,
    complement,
    reference,
  }: ICreateAddressDTO): Promise<Address> {
    const address = await this.addressRepository.create({
      street,
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
