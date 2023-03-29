// eslint-disable-next-line import/no-extraneous-dependencies
const Hapi = require('@hapi/hapi');

// Start the server
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.start();
  // eslint-disable-next-line no-console
  console.log(`Server is running! ${server.info.uri}`);
};

init();
