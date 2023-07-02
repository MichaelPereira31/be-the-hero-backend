import { inject, injectable } from 'tsyringe';

import { IComplaintRepository } from '@modules/complaint/repositories/IComplaintRepository';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class DeleteComplaintUseCase {
  constructor(
    @inject('ComplaintRepository')
    private readonly complaintRepository: IComplaintRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const complaint = await this.complaintRepository.findById(id);

    if (!complaint) {
      throw new AppError('Complaint not found');
    }

    await this.complaintRepository.delete(id);
  }
}
