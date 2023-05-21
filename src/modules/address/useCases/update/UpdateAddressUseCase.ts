import { inject, injectable } from 'tsyringe';

import { IUpdateAddressDTO } from '@modules/address/dtos/IUpdateAddressDTO';
import { IAddressRepository } from '@modules/address/repositories/IAddressRepository';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class UpdateAddressUseCase {
  constructor(
    @inject('AddressRepository')
    private readonly addressRepository: IAddressRepository,
  ) {}

  async execute({
    id,
    street,
    number,
    neighborhood,
    city,
    state,
    complement,
    reference,
    googleCoordinates,
  }: IUpdateAddressDTO) {
    const address = await this.addressRepository.findById(id);

    if (!address) {
      throw new AppError('Address not found', 404);
    }

    const updateAddress = await this.addressRepository.update({
      id,
      street,
      number,
      neighborhood,
      city,
      state,
      complement,
      reference,
      googleCoordinates,
    });

    return updateAddress;
  }
}
