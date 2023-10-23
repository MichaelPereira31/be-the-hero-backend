import { object, string } from 'yup';

const findOngSchema = object({
  query: object({
    name: string(),
    description: string(),
  }),
});

export default findOngSchema;
