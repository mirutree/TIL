const React = require('react');
const { Component } = React;

class WordRelay extends React.Component {
    state = {
        text: 'Hello, I am Mirutree!'
    };
    render() {
        return <h1>{this.state.text}</h1>
    }
}

module.exports = WordRelay; 