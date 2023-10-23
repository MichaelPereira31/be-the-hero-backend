import { string, object } from 'yup';

const updateEventSchema = object({
  params: object({
    id: string().required('O campo "id" é obrigatório.'),
  }),
  body: object({
    name: string(),
    description: string(),
    category: string(),
  }),
});

export default updateEventSchema;
