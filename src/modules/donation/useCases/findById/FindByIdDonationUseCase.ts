import { inject, injectable } from 'tsyringe';

import { DonationRepository } from '@modules/donation/repository/implementarions/DonationRepository';
import { Donation } from '@prisma/client';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class FindByIdDonationUseCase {
  constructor(
    @inject('DonationRepository')
    readonly donationRepository: DonationRepository,
  ) {}

  async execute(id: string): Promise<Donation> {
    const donation = await this.donationRepository.findById(id);

    if (!donation) {
      throw new AppError('Donation not found', 400);
    }

    return donation;
  }
}
