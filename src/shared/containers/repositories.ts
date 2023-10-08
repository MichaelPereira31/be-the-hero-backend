import { container } from 'tsyringe';

import { IAddressRepository } from '@modules/address/repositories/IAddressRepository';
import { AddressRepository } from '@modules/address/repositories/implementations/AddressRepository';
import { IEventRepository } from '@modules/event/repositories/IEventRepository';
import { EventRepository } from '@modules/event/repositories/implementations/EventRepository';
import { OngRepository } from '@modules/ong/repository/implementations/OngRepository';
import { IOngRepository } from '@modules/ong/repository/IOngRepository';
import { UserRepository } from '@modules/user/repositories/implementations/UserRepository';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository,
);
container.registerSingleton<IOngRepository>('OngRepository', OngRepository);
container.registerSingleton<IEventRepository>(
  'EventRepository',
  EventRepository,
);
