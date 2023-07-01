import { Logger } from 'pino';

import { ILoggerDataDTO } from './dtos/ILoggerDataDTO';

export interface ILoggerProvider {
  instance: Logger;
  info: <Payload>(
    message: string,
    loggerData?: ILoggerDataDTO<Payload, 'info'>,
  ) => void;
  warn: <Payload>(
    message: string,
    loggerData?: ILoggerDataDTO<Payload, 'warn'>,
  ) => void;
  error: <Payload>(
    message: string,
    loggerData?: ILoggerDataDTO<Payload, 'error'>,
  ) => void;
  debug: <Payload>(
    message: string,
    loggerData?: ILoggerDataDTO<Payload, 'debug'>,
  ) => void;
}
