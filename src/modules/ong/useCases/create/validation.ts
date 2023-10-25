import { object, string } from 'yup';

const createOngSchema = object({
  body: object({
    name: string().required('O campo "{{name}}" é obrigatório.'),
    description: string().required('O campo "{{description}}" é obrigatório.'),
    objective: string().required('O campo "{{objective}}" é obrigatório.'),
    mainPhone: string()
      .matches(
        /^(\(?\d{2}\)?\s?)?(\d{4,5}-\d{4}|\d{11}|\d{2}\s\d{1}\s\d{8}|\(\d{2}\)\s\d{1}\s\d{8})$/,
        'O campo "{{mainPhone}}" não é um telefone válido.',
      )
      .required('O campo "{{mainPhone}}" é obrigatório.'),
    secondaryPhone: string(),
    mainEmail: string()
      .email('O campo "{{mainEmail}}" deve ser um endereço de e-mail válido.')
      .required('O campo "{{mainEmail}}" é obrigatório.'),
    secondaryEmail: string().email(
      'O campo "{{secondaryEmail}}" deve ser um endereço de e-mail válido.',
    ),
  }),
});

export default createOngSchema;
