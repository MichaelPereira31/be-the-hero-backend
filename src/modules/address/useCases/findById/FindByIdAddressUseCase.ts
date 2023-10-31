import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IAddressRepository } from '../../repositories/IAddressRepository';

@injectable()
export class FindByIdAddressUseCase {
  constructor(
    @inject('AddressRepository') readonly addressRepository: IAddressRepository,
  ) {}

  async execute(id: string) {
    const address = await this.addressRepository.findById(id);

    if (!address) {
      throw new AppError('Address not found', 404);
    }

    return address;
  }
}
