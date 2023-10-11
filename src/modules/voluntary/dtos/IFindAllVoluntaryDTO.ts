import { statusVoluntary } from '@prisma/client';

export type IFindAllVoluntaryDTO = {
  userId: string;
  status?: statusVoluntary;
};
