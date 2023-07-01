import { createDecipheriv } from 'crypto';

export function decrypt(secretKeyEncrypted: string) {
  const [iv, acessToken] = secretKeyEncrypted.split('-');

  const encrypted = Buffer.from(acessToken, 'hex');

  const decipher = createDecipheriv(
    'aes-256-cbc',
    Buffer.from(process.env.ENCRYPT_KEY as string),
    Buffer.from(iv, 'hex'),
  );

  const decrypting = decipher.update(encrypted);

  const decrypted = Buffer.concat([decrypting, decipher.final()]);

  return decrypted.toString();
}
