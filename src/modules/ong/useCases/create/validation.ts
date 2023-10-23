import { object, string } from 'yup';

const createOngSchema = object({
  body: object({
    name: string().required('O campo "name" é obrigatório.'),
    description: string().required('O campo "description" é obrigatório.'),
    objective: string().required('O campo "objective" é obrigatório.'),
    mainPhone: string()
      .matches(
        /^\d{10}$/,
        'O campo "mainPhone" deve conter exatamente 10 dígitos numéricos.',
      )
      .required('O campo "mainPhone" é obrigatório.'),
    secondaryPhone: string()
      .matches(
        /^\d{10}$/,
        'O campo "secondaryPhone" deve conter exatamente 10 dígitos numéricos.',
      )
      .required('O campo "secondaryPhone" é obrigatório.'),
    mainEmail: string()
      .email('O campo "mainEmail" deve ser um endereço de e-mail válido.')
      .required('O campo "mainEmail" é obrigatório.'),
    secondaryEmail: string()
      .email('O campo "secondaryEmail" deve ser um endereço de e-mail válido.')
      .required('O campo "secondaryEmail" é obrigatório.'),
    userId: string()
      .matches(/^[a-fA-F0-9]{24}$/, 'O campo "userId" deve ser um ID válido.')
      .required('O campo "userId" é obrigatório.'),
  }),
});

export default createOngSchema;
