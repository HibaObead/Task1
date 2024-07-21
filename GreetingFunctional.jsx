import React, { useState } from 'react';
import './GreetingFunctional.css';

const GreetingFunctional = ({ name, message }) => {
    const [currentMessage, setCurrentMessage] = useState(message);

    const changeMessage = () => {
        const messages = ["Hello!", "Hi there!", "Greetings!", "Howdy!", "Hey!"];
        const newMessage = messages[Math.floor(Math.random() * messages.length)];
        setCurrentMessage(newMessage);
    };

    return (
        <div className="greeting-functional">
            <h1>{currentMessage}, {name}!</h1>
            <button onClick={changeMessage}>Change Message</button>
        </div>
    );
};

export default GreetingFunctional;
