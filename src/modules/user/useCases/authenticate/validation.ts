import { object, string } from 'yup';

const authenticateSchema = object({
  body: object({
    email: string()
      .email({
        message: 'O campo de e-mail deve ser um endereço de e-mail válido.',
      })
      .required('O campo de e-mail é obrigatório.'),
    password: string()
      .min(8, 'A senha deve ter pelo menos 8 caracteres.')
      .max(32, 'A senha não pode ter mais de 32 caracteres.')
      .required('O campo de senha é obrigatório.'),
  }),
});

export default authenticateSchema;
