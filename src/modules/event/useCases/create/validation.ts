import { string, object } from 'yup';

const createEventSchema = object({
  body: object({
    name: string().required('O campo "name" é obrigatório.'),
    description: string().required('O campo "description" é obrigatório.'),
    category: string().required('O campo "category" é obrigatório.'),
  }),
});

export default createEventSchema;
