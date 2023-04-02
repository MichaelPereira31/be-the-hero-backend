export type ILoggerDataDTO<Payload, Type> = Type extends 'error'
  ? {
      payload?: Payload;
      err?: Error;
    } & (
      | {
          payload: Payload;
        }
      | {
          err: Error;
        }
    )
  : {
      payload?: Payload;
    };
