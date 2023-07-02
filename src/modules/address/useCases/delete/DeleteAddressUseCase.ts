import { inject, injectable } from 'tsyringe';

import { IAddressRepository } from '@modules/address/repositories/IAddressRepository';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class DeleteAddressUseCase {
  constructor(
    @inject('AddressRepository')
    private readonly addressRepository: IAddressRepository,
  ) {}

  async execute(id: string) {
    const address = await this.addressRepository.findById(id);

    if (!address) {
      throw new AppError('Address not found', 404);
    }

    await this.addressRepository.delete(id);
  }
}
