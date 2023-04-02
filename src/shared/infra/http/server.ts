import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';

import { logger } from '@shared/providers/logger/implementations/LoggerProvider';

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () =>
  logger.info('Server is running on port 3333'),
);
