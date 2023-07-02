import { inject, injectable } from 'tsyringe';

import { Donation } from '@prisma/client';

import { IDonationRepository } from '../../repositories/IDonationRepository';

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
