import { ComplaintReason } from '@prisma/client';

export type ICreateComplaintDTO = {
  file?: string;
  title: string;
  reason: ComplaintReason;
  description: string;
  userId: string;
};
