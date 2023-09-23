import { UserType } from '@prisma/client';

export type IUpdateUserDTO = {
  id: string;
  name?: string;
  lastName?: string;
  email?: string;
  addressId?: string;
  type?: UserType;
};
