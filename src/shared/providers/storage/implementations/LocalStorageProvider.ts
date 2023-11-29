import { writeFile, unlink } from 'fs/promises';
import * as path from 'path';

import { tmpDir } from '../../../../config/upload';
import { logger } from '../../logger/implementations/LoggerProvider';
import { ISaveFileDTO } from '../dtos/ISaveFileDTO';
import { IStorageProvider } from '../IStorageProvider';

export class LocalStorageProvider implements IStorageProvider {
  async saveFile({ buffer, fileName }: ISaveFileDTO): Promise<string> {
    const filePath = path.join(tmpDir, 'uploads', fileName);

    await writeFile(filePath, buffer);

    return `${process.env.HOST}/uploads/${fileName}`;
  }

  async delete(fileName: string): Promise<void> {
    const filePath = path.join(tmpDir, 'uploads', fileName);

    await unlink(path.join(filePath, fileName)).catch(error => {
      logger.error(
        `Error deleting local file: ${fileName}\n${JSON.stringify(error)}`,
      );
    });
  }
}
