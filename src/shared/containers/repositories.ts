import { container } from 'tsyringe';

import { IAddressRepository } from '@modules/address/repositories/IAddressRepository';
import { AddressRepository } from '@modules/address/repositories/implementations/AddressRepository';
import { OngRepository } from '@modules/ong/repository/implementations/OngRepository';
import { IOngRepository } from '@modules/ong/repository/IOngRepository';
import { UserRepository } from '@modules/user/repositories/implementations/UserRepository';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { VacanceRepository } from '@modules/vacances/repositories/implementations/VacanceRepository';
import { IVacanceRepository } from '@modules/vacances/repositories/IVacanceRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository,
);
container.registerSingleton<IOngRepository>('OngRepository', OngRepository);
container.registerSingleton<IVacanceRepository>(
  'VacanceRepository',
  VacanceRepository,
);
