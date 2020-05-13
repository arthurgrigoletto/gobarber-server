export default {
  jwt: {
    secret: process.env.APP_SECRET || 'goBarber',
    expiresIn: '1d',
  },
};
