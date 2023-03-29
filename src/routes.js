const handlers = require('./handlers');

const routes = [
  {
    // CREATE NOTE
    method: 'POST',
    path: '/notes',
    handler: handlers.addNote,
  },
  {
    // READ ALL NOTES
    method: 'GET',
    path: '/notes',
    handler: handlers.getAllNotes,
  },
];

module.exports = routes;
