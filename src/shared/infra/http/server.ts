import * as dotenv from 'dotenv';
import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';

import '../../containers';
import { logger } from '@shared/providers/logger/implementations/LoggerProvider';

// eslint-disable-next-line import-helpers/order-imports
import cors from 'cors';

import { getErrors } from '../errors/getErrors';
import responseFormatter from './middlewares/responseFormatter';
import { router } from './routes';

dotenv.config();

const app = express();
app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://be-the-hero-frontend-six.vercel.app',
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(responseFormatter);
app.use(router);
app.use(getErrors);

app.listen(3333, () => logger.info('Server is running on port 3333'));
