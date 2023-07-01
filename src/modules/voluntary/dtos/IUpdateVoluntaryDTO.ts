export type IUpdateVoluntaryDTO = {
  id: string;
  code?: string;
  avaliation?: string;
  note?: number;
  status?: 'accepted' | 'waiting' | 'canceled' | 'expired' | 'concluded';
  userId?: string;
  vacancyId?: string;
  initialAvailability?: string;
  finalAvailability?: string;
};
