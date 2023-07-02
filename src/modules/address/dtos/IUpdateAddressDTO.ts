import { DonationStatus } from '@prisma/client';

export type IUpdateAddressDTO = {
  id: string;
  street?: string;
  number?: string;
  neighborhood?: string;
  city?: string;
  state?: DonationStatus;
  complement?: string;
  reference?: string;
  googleCoordinates?: string;
};
