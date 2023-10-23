import { string, object } from 'yup';

const findByIdEventSchema = object({
  params: object({
    id: string().required('O campo "id" é obrigatório.'),
  }),
});

export default findByIdEventSchema;
