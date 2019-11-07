import React, { Component } from 'react';
import Todos from './Todos.jsx'

const fetchUrl = '/todos';

class App extends Component {

    
  render() { 
      return (
      <div>
          <Todos fetchUrl={fetchUrl} />
      </div>
          )    
    }
};

export default App;



     {/* <ul>
          {this.state.todoArray.map(todo => (
            <li key={todo.todo_id}>
              {todo.text} {item.topic}
            </li>
          ))}
        </ul> */}

