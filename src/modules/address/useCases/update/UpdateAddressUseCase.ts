import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IUpdateAddressDTO } from '../../dtos/IUpdateAddressDTO';
import { IAddressRepository } from '../../repositories/IAddressRepository';

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
    state,
    neighborhood,
    city,
    complement,
    reference,
  }: IUpdateAddressDTO) {
    const address = await this.addressRepository.findById(id);

    if (!address) {
      throw new AppError('Address not found', 404);
    }

    const updateAddress = await this.addressRepository.update({
      id,
      street,
      state,
      number,
      neighborhood,
      city,
      complement,
      reference,
    });

    return updateAddress;
  }
}
