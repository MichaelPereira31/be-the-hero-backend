import { inject, injectable } from 'tsyringe';

import { Donation } from '@prisma/client';

import { ICreateDonationDTO } from '../../dtos/ICreateDonationDTO';
import { IDonationRepository } from '../../repositories/IDonationRepository';

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
