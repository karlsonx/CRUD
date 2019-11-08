import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topic : '',
            text: '',
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
       
    }
//ORIGINAL
    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name
        this.setState({ 
            [name] : value,
        })                      
    }


    handleSubmit(e) {
        this.props.addTodo(this.state.topic, this.state.text);
        console.log(this.state.text)
        this.setState({
            'topic':'',
            'text':'',
        })
        
        e.preventDefault();  
      
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit} className="form-elements">
                <input id="input-topic" value={this.state.topic} name="topic" type="text" topic={this.state.topic} onChange={this.handleChange} placeholder="topic"/>
                <input id="input-text" value={this.state.text} name="text" type="text" text={this.state.text} onChange={this.handleChange} placeholder="text"/> 
                <input id="submit-button" type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}



export default Form;