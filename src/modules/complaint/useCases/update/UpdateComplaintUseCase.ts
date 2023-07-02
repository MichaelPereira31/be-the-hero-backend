import { inject, injectable } from 'tsyringe';

import { Complaint } from '@prisma/client';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IUpdateComplaintDTO } from '../../dtos/IUpdateComplaintDTO';
import { IComplaintRepository } from '../../repositories/IComplaintRepository';

@injectable()
export class UpdateComplaintUseCase {
  constructor(
    @inject('ComplaintRepository')
    private readonly complaintRepository: IComplaintRepository,
  ) {}

  async execute({
    id,
    description,
    reason,
    title,
    userId,
    file,
  }: IUpdateComplaintDTO): Promise<Complaint> {
    const complaint = await this.complaintRepository.findById(id);

    if (!complaint) {
      throw new AppError('Complaint not found');
    }

    const updateComplaint = await this.complaintRepository.update({
      id,
      description,
      reason,
      title,
      userId,
      file,
    });

    return updateComplaint;
  }
}
