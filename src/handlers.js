/* eslint-disable arrow-parens */
// eslint-disable-next-line import/no-extraneous-dependencies
const { v4: uuidv4 } = require('uuid');
const notes = require('./notes');

const handlers = {
  addNote: (req, h) => {
    // Get data that sent by the client
    const { title, tags, body } = req.payload;

    // generate id
    const id = uuidv4();

    // Set the date
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    // add the new note
    const newNote = {
      id,
      title,
      createdAt,
      updatedAt,
      tags,
      body,
    };

    notes.push(newNote);

    /* Check if the new note is succesfully created.
     * if the length > 0, then it's a success
     */
    const isSuccess = notes.filter(note => note.id === id).length > 0;

    // If success, send this response
    if (isSuccess) {
      return h
        .response({
          status: 'success',
          message: 'New note created successfully! Yeay 🥳',
          data: {
            noteID: id,
          },
        })
        .code(201);
    }

    // If error, send this response
    return h
      .response({
        status: 'error',
        message: 'Failed to create new note 😥',
      })
      .code(500);
  },
  getAllNotes: (req, h) => '<h3>All Notes is here</h3>',
};

module.exports = handlers;
