export default {
  jwt: { secret: process.env.SECRET_KEY_TOKEN || '123456789', expiresIn: '1d' },
};
