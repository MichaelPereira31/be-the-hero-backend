import { inject, injectable } from 'tsyringe';

import { IUpdateDonationDTO } from '@modules/donation/dtos/IUpdateDonationDTO';
import { IDonationRepository } from '@modules/donation/repositories/IDonationRepository';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class UpdateDonationUseCase {
  constructor(
    @inject('DonationRepository')
    readonly donationRepository: IDonationRepository,
  ) {}

  async execute({
    id,
    title,
    description,
    reason,
    goal,
    status,
    ownerId,
  }: IUpdateDonationDTO) {
    const donation = await this.donationRepository.findById(id);

    if (!donation) {
      throw new AppError('Donation not found', 400);
    }

    const updateDonation = await this.donationRepository.update({
      id,
      title,
      description,
      reason,
      goal,
      status,
      ownerId,
    });

    return updateDonation;
  }
}
