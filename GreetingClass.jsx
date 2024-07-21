import React, { Component } from 'react';
import './GreetingClass.css';

class GreetingClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: this.props.message
        };
    }

    changeMessage = () => {
        const messages = ["Hello!", "Hi there!", "Greetings!", "Howdy!", "Hey!"];
        const newMessage = messages[Math.floor(Math.random() * messages.length)];
        this.setState({ message: newMessage });
    };

    render() {
        const { name } = this.props;
        const { message } = this.state;

        return (
            <div className="greeting-class">
                <h1>{message}, {name}!</h1>
                <button onClick={this.changeMessage}>Change Message</button>
            </div>
        );
    }
}

export default GreetingClass;
