import { string, object } from 'yup';

const findByIdAddressSchema = object({
  params: object({
    id: string().required('O campo "id" é obrigatório.'),
  }),
});

export default findByIdAddressSchema;
