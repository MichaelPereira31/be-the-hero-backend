import { Donation } from '@prisma/client';

import { ICreateDonationDTO } from '../dtos/ICreateDonationDTO';
import { IUpdateDonationDTO } from '../dtos/IUpdateDonationDTO';

export interface IDonationRepository {
  findById(id: string): Promise<Donation | null>;
  create(params: ICreateDonationDTO): Promise<Donation>;
  update(params: IUpdateDonationDTO): Promise<Donation>;
  delete(id: string): Promise<void>;
}
