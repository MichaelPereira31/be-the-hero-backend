export interface ISaveFileDTO {
  buffer: Buffer;
  fileName: string;
  contentType?: string;
  contentLength?: number;
}
