export type ICreateAddressDTO = {
  userId?: string;
  state: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  complement?: string;
  reference: string;
};
