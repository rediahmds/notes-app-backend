// eslint-disable-next-line import/no-extraneous-dependencies
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

// Start the server
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  // eslint-disable-next-line no-console
  console.log(`Server is running! ${server.info.uri}`);
};

init();
