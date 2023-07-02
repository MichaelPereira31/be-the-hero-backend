import { inject, injectable } from 'tsyringe';

import { Complaint } from '@prisma/client';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IComplaintRepository } from '../../repositories/IComplaintRepository';

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
