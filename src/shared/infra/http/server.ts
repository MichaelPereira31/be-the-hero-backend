import * as dotenv from 'dotenv';
import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';

import '../../containers';
import { logger } from '@shared/providers/logger/implementations/LoggerProvider';

import { getErrors } from '../errors/getErrors';
import responseFormatter from './middlewares/responseFormatter';
import { router } from './routes';

dotenv.config();

const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(responseFormatter);
app.use(router);
app.use(getErrors);

app.listen(3333, () => logger.info('Server is running on port 3333'));
