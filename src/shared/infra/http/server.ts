/* eslint-disable import-helpers/order-imports */
/* eslint-disable import/first */
import * as dotenv from 'dotenv';

dotenv.config();

import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';

import { logger } from '@shared/providers/logger/implementations/LoggerProvider';

import { getErrors } from '../errors/getErrors';
import responseFormatter from './middlewares/responseFormatter';
import { router } from './routes';

import '../../containers';
import '../database';

const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(responseFormatter);
app.use(router);
app.use(getErrors);

app.listen(3322, () => logger.info('Server is running on port 3333'));
