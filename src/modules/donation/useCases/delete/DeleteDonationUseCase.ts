import { inject, injectable } from 'tsyringe';

import { IDonationRepository } from '@modules/donation/repositories/IDonationRepository';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class DeleteDonationUseCase {
  constructor(
    @inject('DonationRepository')
    private readonly donationRepository: IDonationRepository,
  ) {}

  async execute(id: string) {
    const donation = await this.donationRepository.findById(id);

    if (!donation) {
      throw new AppError('Donation not found', 400);
    }

    await this.donationRepository.delete(id);
  }
}
