import { object, string } from 'yup';

const createVoluntarySchema = object({
  body: object({
    eventId: string().required(
      'O campo "eventId" é obrigatório. Ele deve conter o identificador do evento em que você deseja se voluntariar.',
    ),
    status: string().required(
      'O campo "status" é obrigatório. Utilize este campo para indicar o status do voluntariado, como "ativo" ou "inativo".',
    ),
  }),
});

export default createVoluntarySchema;
