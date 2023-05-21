import { container } from 'tsyringe';

import { IAddressRepository } from '@modules/address/repositories/IAddressRepository';
import { AddressRepository } from '@modules/address/repositories/implementations/AddressRepository';
import { UserRepository } from '@modules/user/repositories/implementations/UserRepository';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository,
);
