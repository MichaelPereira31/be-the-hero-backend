export type ICreateUserDTO = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  status?: 'active' | 'inactive';
  type?: 'ong' | 'voluntary';
  addressId?: string;
};
