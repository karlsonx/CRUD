import React, {Component} from 'react';
import SingleTodo from './SingleTodo.jsx';
import Form from './Form.jsx'


class Todos extends Component {
    constructor(props) {
        super(props)
        this.state = ({
          todosArray : [],
        })
      
       this.deleteTask = this.deleteTask.bind(this);
       this.addTodo = this.addTodo.bind(this)
    } // end constructor

    componentDidMount() {
        fetch('/todos')
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


    deleteTask(id) {
        fetch('/todos', {
            method: 'delete',
            body: JSON.stringify({"todo_id": id}),
            headers: {
                "Content-Type": "application/json"
              },
        })
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
          todosArray: responseJson,
          });
        })
        .catch((error) =>{
            console.error('Possible fetch error',error);
          });
        console.log(id)
    }



    addTodo(topic, text) {
      //format 


      fetch('/todos', {
          method: 'post',
          body: JSON.stringify({
              "topic": topic,
              "text" : text,
              "date": new Date(),
              "completion" : false,
          }),
          headers: {
              "Content-Type": "application/json"
            },
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
        todosArray: responseJson,
        });
      })
      .catch((error) =>{
          console.error('Possible fetch error',error);
        });
      console.log(this.state.todosArray)
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
            fetchedTodos.push(<SingleTodo key={currentTodoItem.todo_id} id={currentTodoItem.todo_id} text={currentTodoItem.text} topic={currentTodoItem.topic} completion={currentTodoItem.completion} date={currentTodoItem.date} deleteTask={this.deleteTask} />)
        }

        return (
            <div className="todos-wrapper">
                <div className='titles'>
                  <h1>Personal Goals</h1>
                  <h2>What I need to do to become a rockstar dev?</h2>
                </div>
                <Form addTodo={this.addTodo} />
                {fetchedTodos}
            </div>
        )
    } //closing the render
} //closing the Todos

export default Todos;