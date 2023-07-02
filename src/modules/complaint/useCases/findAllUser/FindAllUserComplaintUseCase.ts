import { inject, injectable } from 'tsyringe';

import { IComplaintRepository } from '@modules/complaint/repositories/IComplaintRepository';
import { Complaint } from '@prisma/client';

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
