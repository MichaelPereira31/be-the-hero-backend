import { string, object } from 'yup';

const deleteAddressSchema = object({
  params: object({
    id: string().required('O campo "id" é obrigatório.'),
  }),
});

export default deleteAddressSchema;
