import { VoluntaryStatus } from '@prisma/client';

export type ICreateVoluntaryDTO = {
  code: string;
  avaliation: string;
  note: number;
  status: VoluntaryStatus;
  userId: string;
  vacancyId: string;
  initialAvailability: string;
  finalAvailability: string;
};
