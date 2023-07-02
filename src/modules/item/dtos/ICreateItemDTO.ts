import { ItemStatus } from '@prisma/client';

export type ICreateItemDTO = {
  title: string;
  description: string;
  reason: string;
  necessaryAmount: string;
  amountReceived: string;
  status: ItemStatus;
  donationId: string;
};
