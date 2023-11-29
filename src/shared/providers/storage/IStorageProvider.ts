import { ISaveFileDTO } from './dtos/ISaveFileDTO';

export interface IStorageProvider {
  saveFile(params: ISaveFileDTO): Promise<string>;
  delete(filename: string): Promise<void>;
}
