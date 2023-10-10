import { statusVoluntary } from '@prisma/client';

export type IUpdateVoluntaryDTO = {
  id: string;
  status: statusVoluntary;
};
