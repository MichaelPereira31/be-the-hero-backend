import { inject, injectable } from 'tsyringe';

import { ICreateDonationDTO } from '@modules/donation/dtos/ICreateDonationDTO';
import { DonationRepository } from '@modules/donation/repository/implementarions/DonationRepository';
import { Donation } from '@prisma/client';

@injectable()
export class CreateDonationUseCase {
  constructor(
    @inject('DonationRepository')
    readonly donationRepository: DonationRepository,
  ) {}

  async execute({
    title,
    description,
    reason,
    goal,
    status,
    ownerId,
  }: ICreateDonationDTO): Promise<Donation> {
    const donation = await this.donationRepository.create({
      title,
      description,
      reason,
      goal,
      status,
      ownerId,
    });

    return donation;
  }
}
