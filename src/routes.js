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
  // READ SPECIFIC NOTE (NOTE DETAIL)
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: handlers.getNote,
  },
];

module.exports = routes;
