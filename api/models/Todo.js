const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date
  },
  author: {
    type: String,
  },
  dueDate: {
    type: Date
  },
  completed: {
    type: Boolean
  },
});

todoSchema.set('timestamps', true);

if (process.env.IS_OFFLINE) {
  delete mongoose.connection.models.Todo;
}

module.exports = mongoose.model('Todo', todoSchema);