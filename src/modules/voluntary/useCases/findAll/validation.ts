import { object, string } from 'yup';

const findAllVoluntarySchema = object({
  body: object({
    status: string().optional(),
  }),
});

export default findAllVoluntarySchema;
