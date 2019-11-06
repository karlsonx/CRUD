import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoArray : [],
        }; 
    }
   
    componentDidMount() {
        console.log('Log 1: did mount')
     fetch('/todos')
        .then((response) => response.json())
        .then((responseJson) => {
        this.setState({
          todoArray: responseJson,
        });
        // console.log('This.State.TodoArray (line 20):')
        // console.log(this.state.todoArray)
      })
      .catch((error) =>{
        console.error(error);
      });
  }

    render() {  
        console.log('Log 2: Todos App.jsx Line 28', this.state.todoArray)   
      return (
      <div>
          <h1>Todos</h1>
          <ul>
          {this.state.todoArray.map(todo => (
            <li key={todo.todo_id}>
              {todo.text} {item.topic}
            </li>
          ))}
        </ul>
      </div>
          )    
    }
};

export default App;

