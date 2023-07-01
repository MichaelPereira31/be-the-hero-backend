import { Address } from '@prisma/client';

import { ICreateAddressDTO } from '../dtos/ICreateAddressDTO';
import { IUpdateAddressDTO } from '../dtos/IUpdateAddressDTO';

export interface IAddressRepository {
  findById(id: string): Promise<Address | null>;
  create(params: ICreateAddressDTO): Promise<Address>;
  update(params: IUpdateAddressDTO): Promise<Address>;
  delete(id: string): Promise<void>;
}
