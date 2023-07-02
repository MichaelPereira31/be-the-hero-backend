import { inject, injectable } from 'tsyringe';

import { Donation } from '@prisma/client';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IDonationRepository } from '../../repositories/IDonationRepository';

@injectable()
export class FindByIdDonationUseCase {
  constructor(
    @inject('DonationRepository')
    private readonly donationRepository: IDonationRepository,
  ) {}

  async execute(id: string): Promise<Donation> {
    const donation = await this.donationRepository.findById(id);

    if (!donation) {
      throw new AppError('Donation not found', 400);
    }

    return donation;
  }
}
