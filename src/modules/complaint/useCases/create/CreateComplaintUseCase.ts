import { inject, injectable } from 'tsyringe';

import { ICreateComplaintDTO } from '@modules/complaint/dtos/ICreateComplaintDTO';
import { IComplaintRepository } from '@modules/complaint/repositories/IComplaintRepository';
import { Complaint } from '@prisma/client';

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
