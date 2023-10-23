import { object, string } from 'yup';

const findByIdOngSchema = object({
  params: object({
    id: string().required('O campo "id" é obrigatório.'),
  }),
});

export default findByIdOngSchema;
