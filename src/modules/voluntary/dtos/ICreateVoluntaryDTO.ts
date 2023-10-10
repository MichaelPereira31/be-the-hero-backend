import { statusVoluntary } from '@prisma/client';

export type ICreateVoluntaryDTO = {
  status: statusVoluntary;
  userId: string;
  eventId: string;
};
