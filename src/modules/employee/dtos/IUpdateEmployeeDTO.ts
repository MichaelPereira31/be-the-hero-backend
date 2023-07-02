import { EmployeeOffice } from '@prisma/client';

export type IUpdateEmployeeDTO = {
  id: string;
  office?: EmployeeOffice;
  ongId?: string;
  voluntaryId?: string;
};
