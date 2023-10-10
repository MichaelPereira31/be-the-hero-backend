import { statusVoluntary } from '@prisma/client';

export type IFindAllVoluntaryDTO = {
  id: string;
  status: statusVoluntary;
};
