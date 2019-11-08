import React, { Component } from 'react';
import Todos from './Todos.jsx'



class App extends Component {

    
  render() { 
      return (
      <div className="todos-container" >
          <Todos />
      </div>
          )    
    }
};

export default App;