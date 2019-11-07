import React, {Component} from 'react';
import SingleTodo from './SingleTodo.jsx';


class Todos extends Component {
    constructor(props) {
        super(props)
        this.state = ({
          todosArray : [],
          isLoaded: false,
        })
      
        this.deleteTask = this.deleteTask.bind(this);
    } // end constructor

    componentDidMount() {
        fetch(this.props.fetchUrl)
            .then((response) => response.json())
            .then((responseJson) => {
              this.setState({
              todosArray: responseJson,
              });
            })
            .catch((error) =>{
                console.error('Possible fetch error',error);
              });
    }

    deleteTask() {
        // delete task functionality
        console.log('this should delete something');
    }

    render() {
        //We create new array where we will pass every property we need for a single element (and pass it to the childern component)
        const fetchedTodos = []
        // We create a for loop inside the render to prevent infinte loop
        // if the condition at first is wrong it simply won't run. But once is populated it will display the results.
        for (let i = 0; i< this.state.todosArray.length; i++) {
//We create a var representing the item in every iteration for easier usage
//we pass all the properties for a single element we need down the chain
            const currentTodoItem = this.state.todosArray[i];
            fetchedTodos.push(<SingleTodo key={currentTodoItem.todo_id} text={currentTodoItem.text} topic={currentTodoItem.topic} completion={currentTodoItem.completion} date={currentTodoItem.date} deleteTask={this.deleteTask} />)
        }

        return (
            <div>
                <h1>I am the Todos.jsx</h1>
                {fetchedTodos}
            </div>
        )
    } //closing the render
} //closing the Todos

export default Todos;