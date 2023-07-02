import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IUpdateDonationDTO } from '../../dtos/IUpdateDonationDTO';
import { IDonationRepository } from '../../repositories/IDonationRepository';

@injectable()
export class UpdateDonationUseCase {
  constructor(
    @inject('DonationRepository')
    private readonly donationRepository: IDonationRepository,
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
