const express = require('express');
const app = express();
const PORT = 3000;
const todoController = require('./todoController');

app.use(express.json());


app.get('/todos', todoController.getTodos, (req, res) => {
    res.json(res.locals.todos)
})

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/todos', todoController.addTodo, (req,res) => {
    res.json(res.locals.todos)
})

app.delete('/:id', todoController.deleteTodos, (req,res) => {
    console.log("Item for deletion", req.body)
    res.json(res.locals.todos)
})


// Here are the error statements

app.use('*', (req, res) => {
    res.sendStatus(404)
});

app.use((err,req,res,next) => {
    console.log(err);
    res.sendStatus(500)
})

app.listen(PORT, () => console.log(`The Server is running on ${PORT}`))

