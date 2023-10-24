import { object, string } from 'yup';

const updateOngSchema = object({
  params: object({
    id: string().required('O campo "id" é obrigatório.'),
  }),
  body: object({
    name: string(),
    description: string(),
    objective: string(),
    mainPhone: string(),
    secondaryPhone: string(),
    mainEmail: string().email(
      'O campo "mainEmail" deve ser um endereço de e-mail válido.',
    ),
    secondaryEmail: string().email(
      'O campo "secondaryEmail" deve ser um endereço de e-mail válido.',
    ),
    userId: string(),
  }),
});

export default updateOngSchema;
