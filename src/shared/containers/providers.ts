import { LocalStorageProvider } from 'shared/providers/storage/implementations/LocalStorageProvider';
import { RemoteStorageProvider } from 'shared/providers/storage/implementations/RemoteStorageProvider';
import { IStorageProvider } from 'shared/providers/storage/IStorageProvider';
import { container } from 'tsyringe';

export const storage = {
  local: LocalStorageProvider,
  remote: RemoteStorageProvider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  storage[process.env.STORAGE_TYPE as keyof typeof storage],
);
