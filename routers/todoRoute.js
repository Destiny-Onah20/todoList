const express = require("express");
const { createTodo, done, allTodo, editTodo, deleteTodo, deleteDone} = require("../controllers/todo")

const todoFunc = express.Router();

todoFunc.route("/add").post(createTodo);
todoFunc.route("/done/:id").patch(done);
todoFunc.route("/todo").get(allTodo);
todoFunc.route("/edit/:todoId").patch(editTodo);
todoFunc.route("/delete/:todoId").delete(deleteTodo);
todoFunc.route("/deletedone").delete(deleteDone);

module.exports = todoFunc;