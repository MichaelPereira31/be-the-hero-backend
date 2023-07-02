import { inject, injectable } from 'tsyringe';

import { ICreateDonationDTO } from '@modules/donation/dtos/ICreateDonationDTO';
import { IDonationRepository } from '@modules/donation/repositories/IDonationRepository';
import { Donation } from '@prisma/client';

@injectable()
export class CreateDonationUseCase {
  constructor(
    @inject('DonationRepository')
    private readonly donationRepository: IDonationRepository,
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
