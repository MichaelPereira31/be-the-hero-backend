import { inject, injectable } from 'tsyringe';

import { IDonationRepository } from '@modules/donation/repositories/IDonationRepository';
import { Donation } from '@prisma/client';

@injectable()
export class FindAllDonationUseCase {
  constructor(
    @inject('DonationRepository')
    private readonly donationRepository: IDonationRepository,
  ) {}

  async execute(): Promise<Donation[]> {
    const donation = await this.donationRepository.findAll();

    return donation;
  }
}
