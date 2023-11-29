/* eslint-disable consistent-return */
import { randomUUID } from 'crypto';
import { NextFunction, Request, Response } from 'express';
import formidable, { File } from 'formidable';
import { Writable } from 'stream';

import { storage } from '../../../containers/providers';
import { logger } from '../../../providers/logger/implementations/LoggerProvider';
import { AppError } from '../../errors/AppError';

export function uploadFileMiddleware(
  request: Request,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  response: Response,
  next: NextFunction,
) {
  const chunks: Uint8Array[] = [];
  const form = formidable({
    allowEmptyFiles: true,
    fileWriteStreamHandler: () => {
      const writable = new Writable({
        write(chunk: Uint8Array, encoding: string, nextFn) {
          chunks.push(chunk);
          nextFn();
        },
        final(cb) {
          cb();
        },
      });

      return writable;
    },
  });

  form.parse(request, async (err, fields, files) => {
    if (err) {
      throw new AppError('ERROR_PARSE_FORM_DATA');
    }

    if (!files.file) {
      const body = Object.entries(fields).reduce((acc, [key, value]) => {
        // eslint-disable-next-line prefer-destructuring
        acc[key] = value[0];
        return acc;
      }, {} as Record<string, any>);

      Object.assign(request.body, {
        ...body,
        attachment: {},
      });

      next();
    } else {
      const arrayFiles = files.file as File[];

      await Promise.all(
        arrayFiles.map(async file => {
          const type = file.mimetype.split('/')[0];
          const buffer = Buffer.concat(chunks);

          try {
            const storageProvider = new storage[
              process.env.STORAGE_TYPE as keyof typeof storage
            ]();

            const contentUrl = await storageProvider.saveFile({
              buffer,
              contentType: file.mimetype,
              fileName: `${randomUUID()}-${file.originalFilename}`,
            });

            const body = Object.entries(fields).reduce((acc, [key, value]) => {
              // eslint-disable-next-line prefer-destructuring
              acc[key] = value[0];
              return acc;
            }, {} as Record<string, any>);

            const attachment = {
              type,
              url: contentUrl,
            };

            Object.assign(request.body, {
              ...body,
              attachment,
            });

            return next();
          } catch (error) {
            logger.error(
              `Error trying to save file ${
                file.originalFilename
              } to storage\n: ${JSON.stringify(error)}`,
            );
          }
        }),
      );
    }
  });
}
