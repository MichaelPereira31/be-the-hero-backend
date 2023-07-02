import { container } from 'tsyringe';

import { IAddressRepository } from '../../modules/address/repositories/IAddressRepository';
import { AddressRepository } from '../../modules/address/repositories/implementations/AddressRepository';
import { IComplaintRepository } from '../../modules/complaint/repositories/IComplaintRepository';
import { ComplaintRepository } from '../../modules/complaint/repositories/implementations/ComplaintRepository';
import { IDonationRepository } from '../../modules/donation/repositories/IDonationRepository';
import { DonationRepository } from '../../modules/donation/repositories/implementations/DonationRepository';
import { IEmployeeRepository } from '../../modules/employee/repositories/IEmployeeRepository';
import { EmployeeRepository } from '../../modules/employee/repositories/implementations/EmployeeRepository';
import { IItemRepository } from '../../modules/item/repositories/IItemRepository';
import { ItemRepository } from '../../modules/item/repositories/implementations/ItemRepository';
import { OngRepository } from '../../modules/ong/repositories/implementations/OngRepository';
import { IOngRepository } from '../../modules/ong/repositories/IOngRepository';
import { UserRepository } from '../../modules/user/repositories/implementations/UserRepository';
import { IUserRepository } from '../../modules/user/repositories/IUserRepository';
import { VacancyRepository } from '../../modules/vacancy/repositories/implementations/VacancyRepository';
import { IVacancyRepository } from '../../modules/vacancy/repositories/IVacancyRepository';
import { VoluntaryRepository } from '../../modules/voluntary/repositories/implementations/VoluntaryRepository';
import { IVoluntaryRepository } from '../../modules/voluntary/repositories/IVoluntaryRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository,
);
container.registerSingleton<IOngRepository>('OngRepository', OngRepository);
container.registerSingleton<IComplaintRepository>(
  'ComplaintRepository',
  ComplaintRepository,
);
container.registerSingleton<IEmployeeRepository>(
  'EmployeeRepository',
  EmployeeRepository,
);
container.registerSingleton<IItemRepository>('ItemRepository', ItemRepository);
container.registerSingleton<IVoluntaryRepository>(
  'VoluntaryRepository',
  VoluntaryRepository,
);
container.registerSingleton<IDonationRepository>(
  'DonationRepository',
  DonationRepository,
);
container.registerSingleton<IVacancyRepository>(
  'VacancyRepository',
  VacancyRepository,
);
