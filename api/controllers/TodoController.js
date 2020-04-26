
'use strict';
const db = require('../helpers/db')
const todoModel = require('../models/Todo')
module.exports = {
  getAllTodos: function (req, res) {
    const toDos = todoModel.find().exec((err, response) => {
      res.header("Content-Type", 'application/json');
      res.end(JSON.stringify(response))
    });
  },
  addTodo: function (req, res) {
    console.log("req", req.body)
    const toDo = todoModel.create(
      {
        todo: req.body.todo,
        author: req.body.author,
        dueDate: req.body.dueDate,
        completed: req.body.completed
      },
      (err, response) => {
        res.header("Content-Type", 'application/json');
        if (err) {
          res.statusCode = 409;
          res.end(JSON.stringify(err))
        } else {
          res.statusCode = 200;

          res.end(JSON.stringify(response))
        }
      }
    )
  },
  findTodoById: function (req, res) {
    const toDos = todoModel.findById(req.swagger.params.id.value).exec((err, response) => {
      console.log("response", response)
      res.header("Content-Type", 'application/json');
      res.end(JSON.stringify(response))
    });
  },
  
}