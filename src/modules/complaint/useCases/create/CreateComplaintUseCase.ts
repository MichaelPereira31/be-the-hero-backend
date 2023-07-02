import { inject, injectable } from 'tsyringe';

import { Complaint } from '@prisma/client';

import { ICreateComplaintDTO } from '../../dtos/ICreateComplaintDTO';
import { IComplaintRepository } from '../../repositories/IComplaintRepository';

@injectable()
export class CreateComplaintUseCase {
  constructor(
    @inject('ComplaintRepository')
    private readonly complaintRepository: IComplaintRepository,
  ) {}

  async execute({
    description,
    reason,
    title,
    userId,
    file,
  }: ICreateComplaintDTO): Promise<Complaint> {
    const complaint = await this.complaintRepository.create({
      description,
      reason,
      title,
      userId,
      file,
    });

    return complaint;
  }
}
