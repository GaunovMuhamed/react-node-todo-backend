const router = require('express').Router();
let todoModel = require('../models/todoModel');

router.route('/').get((req, res) => {
  todoModel.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/').post((req, res) => {
  const id = req.body.id;
  const content = req.body.content;
  const status = req.body.status;

  const newTodo = new todoModel({
    id,
    content,
    status
  });

  newTodo.save()
    .then(() => res.json("Added!"))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
  todoModel.findByIdAndDelete(req.params.id)
    .then(todo => res.json('Todo deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').put((req, res) => {

  todoModel.findById(req.params.id)
    .then(todo => {
      todo.status = !todo.status
      todo.save()
        .then(todo => res.json('Todo updated.'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => console.log(err))

})





module.exports = router;