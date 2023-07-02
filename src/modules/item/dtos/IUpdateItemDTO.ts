import { ItemStatus } from '@prisma/client';

export type IUpdateItemDTO = {
  id: string;
  title?: string;
  description?: string;
  reason?: string;
  necessaryAmount?: string;
  amountReceived?: string;
  status?: ItemStatus;
  donationId?: string;
};
