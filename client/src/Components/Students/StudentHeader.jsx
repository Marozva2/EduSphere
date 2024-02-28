import React from 'react';

const StudentHeader = () => {
    const greetings = ["Welcome", "Greetings", "Hello", "Hey there", "Good to see you"];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

    return (
        <header style={headerStyle}>
            <h1>{randomGreeting}, Student!</h1>
            <p>Manage your academic journey with ease</p>
        </header>
    );
}

const headerStyle = {
    background: '#f4f4f4',
    color: '#333',
    textAlign: 'center',
    padding: '10px'
}

export default StudentHeader;

