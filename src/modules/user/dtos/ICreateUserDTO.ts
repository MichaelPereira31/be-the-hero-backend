import { UserStatus, UserType } from '@prisma/client';

export type ICreateUserDTO = {
  name: string;
  lastName?: string;
  email: string;
  password: string;
  status?: UserStatus;
  type?: UserType;
  addressId?: string;
};
