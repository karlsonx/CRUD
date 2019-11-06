const db = require('./todoModel');

const todoController = {};

todoController.addTodo = (req, res, next) => {
    const { topic, text, date, completion } = req.body;
    if(!topic) {
        return res.status(400).json({
            success: false,
            message: 'missing topic'
        })
    }

    const textQuery = `
    INSERT INTO todos (topic, text, date, completion)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `;

    const values = [ topic, text, date, completion ]

    db.query(textQuery,values, (err, result) => {
        if(err) {
            console.log('Error in todoController.addTodo', err);
            return res.status(500)
        }
        res.locals.todos = result.rows;
        return next();
    })
}

todoController.getTodos = (req,res, next) => {
    const textQuery = `
    SELECT * FROM todos
    `;
    
    db.query(textQuery)
    .then (result => {
        res.locals.todos = result.rows;
        return next();
    })
    .catch(err => {
        console.log('Error in todoController.getTodos', err)
        return res.sendStatus(500)
    })
}

module.exports = todoController;