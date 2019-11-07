import React, {Component} from 'react'



class SingleTodo extends Component {
    constructor(props) {
        super(props)
        // props contains:
        // todo_id
        // topic
        // text
        // date
        // completion
        // deleteTask
    }
    
    render() {
        console.log('Props on SingleTodo', this.props)
        return (
            <div>
                <p>{this.props.topic}</p>
                <p>{this.props.text}</p>
                <button onClick={this.props.deleteTask}>Delete</button>
            </div>
        )

       
    }
}


// function SingleTodo2(todo_id, topic, text, date, completion, deleteTask) {
//     return (
//         <div>
//             <p>{topic}</p>
//             <button onClick={deleteTask}>Delete</button>
//         </div>
//     )
// }

{/* {fetchedTodos.map(todo => 
<div key={todo.todo_id}> {todo.text} </div>)} */}

export default SingleTodo;