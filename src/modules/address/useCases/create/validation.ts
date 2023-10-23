import { string, object } from 'yup';

const createAddressSchema = object({
  body: object({
    street: string().required('O campo "rua" é obrigatório.'),
    number: string().required('O campo "número" é obrigatório.'),
    neighborhood: string().required('O campo "bairro" é obrigatório.'),
    city: string().required('O campo "cidade" é obrigatório.'),
    complement: string().required('O campo "complemento" é obrigatório.'),
    reference: string().required(
      'O campo "ponto de referência" é obrigatório.',
    ),
  }),
});

export default createAddressSchema;