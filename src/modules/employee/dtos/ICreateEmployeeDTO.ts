import { EmployeeOffice } from '@prisma/client';

export type ICreateEmployeeDTO = {
  office: EmployeeOffice;
  ongId: string;
  voluntaryId: string;
};
