const express = require('express')
const router = express.Router()
const Todo = require('../../models/Todo')

router.get('/', async (req, res) => {
  const todos = await Todo.find({})
  res.status(200).json(todos)
})

router.post('/', async (req, res) => { 
  const newTodo = {
    title: req.body.title,
    complete: req.body.complete,
  }
  const todo = new Todo(newTodo)
  await todo.save()  
  res.status(201).json(todo)
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  await Todo.deleteOne({ _id: id })   
  res.status(200).json(id)
})

router.put('/:id', async (req, res) => {  
  const id = req.params.id
  await Todo.findOneAndUpdate({ _id: id }, {completed: true}, {returnOriginal: false})  
  res.status(200).json(id)
})

router.put('/', async (req, res) => { 
  await Todo.findOneAndUpdate({ title: req.body.oldTitle }, {title: req.body.newTitle}, {returnOriginal: false})
  const todos = await Todo.find({})
  res.status(200).json(todos)
})

module.exports = router
