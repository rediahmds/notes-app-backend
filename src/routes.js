const handlers = require('./handlers');

const routes = [
  {
    // CREATE NOTE
    method: 'POST',
    path: '/notes',
    handler: handlers.addNote,
  },
  {
    method: 'GET',
    path: '/',
    handler: handlers.getAllNotes,
  },
];

module.exports = routes;
