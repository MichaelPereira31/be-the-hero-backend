import { string, object } from 'yup';

const updateAddressSchema = object({
  params: object({
    id: string().required('O campo "id" é obrigatório.'),
  }),
  body: object({
    street: string(),
    number: string(),
    neighborhood: string(),
    city: string(),
    complement: string(),
    reference: string(),
  }),
});

export default updateAddressSchema;
