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
  // UPDATE SPECIFIC NOTE
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: handlers.updateNote,
  },
];

module.exports = routes;
