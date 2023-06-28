import { inject, injectable } from 'tsyringe';

import { DonationRepository } from '@modules/donation/repository/implementarions/DonationRepository';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class DeleteDonationUseCase {
  constructor(
    @inject('DonationRepository')
    readonly donationRepository: DonationRepository,
  ) {}

  async execute(id: string) {
    const donation = await this.donationRepository.findById(id);

    if (!donation) {
      throw new AppError('Donation not found', 400);
    }

    await this.donationRepository.delete(id);
  }
}
