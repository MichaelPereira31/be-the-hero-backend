import { ComplaintReason } from '@prisma/client';

export type IUpdateComplaintDTO = {
  id: string;
  file?: string;
  title?: string;
  reason?: ComplaintReason;
  description?: string;
  userId: string;
};
