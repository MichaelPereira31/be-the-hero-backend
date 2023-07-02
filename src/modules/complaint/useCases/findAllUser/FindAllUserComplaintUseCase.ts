import { inject, injectable } from 'tsyringe';

import { Complaint } from '@prisma/client';

import { IComplaintRepository } from '../../repositories/IComplaintRepository';

@injectable()
export class FindAllUserComplaintUseCase {
  constructor(
    @inject('ComplaintRepository')
    private readonly complaintRepository: IComplaintRepository,
  ) {}

  async execute(userId: string): Promise<Complaint[]> {
    const complaints = await this.complaintRepository.findAllUser(userId);

    return complaints;
  }
}
