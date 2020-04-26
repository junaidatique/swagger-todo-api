'use strict';
module.exports = {
  getAllTodos: getAllTodos
}
function getAllTodos(req, res, next) {
  res.json([
    {
      todo: 0,
      todo: "Get Milk",
      author: "Junaid",
      dateCreated: "2020-04-22T23:15:00.000Z",
      dueDate: "2020-04-23T23:15:00.000Z",
      completed: true
    },
    {
      todo: 1,
      todo: "Create Api",
      author: "Junaid",
      dateCreated: "2020-04-21T23:15:00.000Z",
      dueDate: "2020-04-22T23:15:00.000Z",
      completed: false
    }
  ])
}