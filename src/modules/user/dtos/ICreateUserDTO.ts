export type ICreateUserDTO = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  status: 'ong' | 'voluntary';
  type: 'active' | 'inactive';
  addressId: string;
};
