import aws, { S3 } from 'aws-sdk';

import { logger } from '../../logger/implementations/LoggerProvider';
import { ISaveFileDTO } from '../dtos/ISaveFileDTO';
import { IStorageProvider } from '../IStorageProvider';

export class RemoteStorageProvider implements IStorageProvider {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      endpoint: new aws.Endpoint(
        `${process.env.AWS_REGION}.${process.env.AWS_ENDPOINT}`,
      ),
    });
  }

  async saveFile({
    buffer,
    fileName,
    contentType,
    contentLength,
  }: ISaveFileDTO): Promise<string> {
    const path = `uploads/${fileName}`;

    await this.client
      .putObject({
        Bucket: process.env.AWS_BUCKET as string,
        Key: path,
        ACL: 'public-read',
        Body: buffer,
        ContentLength: contentLength,
        ContentType: contentType,
      })
      .promise();

    return `https://${process.env.AWS_BUCKET}.${process.env.AWS_REGION}.${process.env.AWS_ENDPOINT}/${path}`;
  }

  async delete(fileName: string): Promise<void> {
    const path = `/uploads/${fileName}`;

    await this.client
      .deleteObject({
        Bucket: process.env.AWS_BUCKET as string,
        Key: path,
      })
      .promise()
      .catch(e => {
        logger.error(
          `Error deleting remote file: ${path}\n${JSON.stringify(e)}`,
        );
      });
  }
}
