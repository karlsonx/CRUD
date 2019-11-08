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

        //Here we are converting the date into a normal lookimg date with proper length
        const d = new Date()
        const date = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()
   
        return (
            <div className="single-todo">
            {/* <!-- Table header --> */}
                        <div className="singles" id="id" >{this.props.id}</div>
                        <div className="singles" id="topic" >{this.props.topic}</div>
                        <div className="singles" id="text" >{this.props.text}</div>
                        <div className="singles" id="date" >{date}</div>
                {/* On click we will pass the current id up the chain */}
                <button id="deleteBtn" onClick={ () => {this.props.deleteTask(this.props.id)}}>X</button> 
            </div>
        )

       
    }
}

export default SingleTodo;