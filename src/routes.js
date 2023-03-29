const handlers = require('./handlers');

const routes = [
  {
    // CREATE NOTE
    method: 'POST',
    path: '/notes',
    handler: handlers.addNote,
  },
];

module.exports = routes;
