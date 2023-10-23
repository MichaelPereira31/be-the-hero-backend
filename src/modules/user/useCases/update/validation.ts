import { object, string } from 'yup';

const updateUserSchema = object({
  params: object({
    id: string().required('O campo de id é obrigatório.'),
  }),
  body: object({
    email: string().email(),
    lastName: string(),
    name: string(),
    password: string()
      .min(8, 'A senha deve ter pelo menos 8 caracteres.')
      .max(32, 'A senha não pode ter mais de 32 caracteres.'),
  }),
});

export default updateUserSchema;
