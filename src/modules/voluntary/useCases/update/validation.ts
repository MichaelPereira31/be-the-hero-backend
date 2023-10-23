import { object, string } from 'yup';

const updateVoluntarySchema = object({
  params: object({
    id: string().required('O campo "id" é obrigatório.'),
  }),
  body: object({
    status: string().required('O campo "status" é obrigatório.'),
  }),
});

export default updateVoluntarySchema;
