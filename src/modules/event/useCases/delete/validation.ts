import { string, object } from 'yup';

const deleteEventSchema = object({
  params: object({
    id: string().required('O campo "id" é obrigatório.'),
  }),
});

export default deleteEventSchema;
