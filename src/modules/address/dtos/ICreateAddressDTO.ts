import { DonationStatus } from '@prisma/client';

export type ICreateAddressDTO = {
  userId?: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: DonationStatus;
  complement: string;
  reference: string;
  googleCoordinates: string;
};
