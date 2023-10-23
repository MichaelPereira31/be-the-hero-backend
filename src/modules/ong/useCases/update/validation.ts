import { object, string } from 'yup';

const updateOngSchema = object({
  params: object({
    id: string().required('O campo "id" é obrigatório.'),
  }),
  body: object({
    name: string(),
    description: string(),
    objective: string(),
    mainPhone: string().matches(
      /^\d{10}$/,
      'O campo "mainPhone" deve conter exatamente 10 dígitos numéricos.',
    ),
    secondaryPhone: string().matches(
      /^\d{10}$/,
      'O campo "secondaryPhone" deve conter exatamente 10 dígitos numéricos.',
    ),
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
