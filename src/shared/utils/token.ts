import crypto, { randomBytes } from 'crypto';

export function createToken() {
  const token = crypto.createHash('md5').update(randomBytes(10)).digest('hex');

  return token;
}
