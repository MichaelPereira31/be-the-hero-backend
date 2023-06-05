import 'reflect-metadata';
import 'express-async-errors';
import cors from 'cors';
import express from 'express';

import '../../containers';
import { logger } from '@shared/providers/logger/implementations/LoggerProvider';

import { getErrors } from '../errors/getErrors';
import responseFormatter from './middlewares/responseFormatter';
import { router } from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(responseFormatter);
app.use(router);
app.use(getErrors);

app.listen(8080, () => {
  logger.info('Server is running on port 8080');
});
