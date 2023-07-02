import { inject, injectable } from 'tsyringe';

import { IComplaintRepository } from '@modules/complaint/repositories/IComplaintRepository';
import { Complaint } from '@prisma/client';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class FindByIdComplaintUseCase {
  constructor(
    @inject('ComplaintRepository')
    private readonly complaintRepository: IComplaintRepository,
  ) {}

  async execute(id: string): Promise<Complaint> {
    const complaint = await this.complaintRepository.findById(id);

    if (!complaint) {
      throw new AppError('Complaint not found');
    }
    return complaint;
  }
}
