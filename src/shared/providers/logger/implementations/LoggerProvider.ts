// eslint-disable-next-line import/no-extraneous-dependencies
import pino, { Logger } from 'pino';

import { ILoggerDataDTO } from '../dtos/ILoggerDataDTO';
import { ILoggerProvider } from '../ILoggerProvider';

type IParseLoggerInputToPinoFormatParams<Payload, Type> = {
  message: string;
  loggerData?: ILoggerDataDTO<Payload, Type>;
};

class LoggerProvider implements ILoggerProvider {
  readonly instance: Logger;

  constructor() {
    this.instance = pino({
      level: process.env.LOGGER_LEVEL || 'debug',
    });
  }

  private parseLoggerInputToPinoFormat<Payload, Type>({
    message,
    loggerData,
  }: IParseLoggerInputToPinoFormatParams<Payload, Type>) {
    return {
      msg: message,
      ...loggerData,
    };
  }

  info<Payload>(
    message: string,
    loggerData?: ILoggerDataDTO<Payload, 'info'>,
  ): void {
    this.instance.info(
      this.parseLoggerInputToPinoFormat<Payload, 'info'>({
        loggerData,
        message,
      }),
    );
  }

  warn<Payload>(
    message: string,
    loggerData?: ILoggerDataDTO<Payload, 'warn'>,
  ): void {
    this.instance.warn(
      this.parseLoggerInputToPinoFormat<Payload, 'warn'>({
        loggerData,
        message,
      }),
    );
  }

  error<Payload>(
    message: string,
    loggerData?: ILoggerDataDTO<Payload, 'error'>,
  ): void {
    this.instance.error(
      this.parseLoggerInputToPinoFormat<Payload, 'error'>({
        loggerData,
        message,
      }),
      message,
    );
  }

  debug<Payload>(
    message: string,
    loggerData?: ILoggerDataDTO<Payload, 'debug'>,
  ): void {
    this.instance.debug(
      this.parseLoggerInputToPinoFormat<Payload, 'debug'>({
        loggerData,
        message,
      }),
    );
  }
}

export const logger: ILoggerProvider = new LoggerProvider();
