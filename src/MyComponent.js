import React, { Component } from "react";

class MyComponent extends Component {
  state = {
    name: 'Tanfiqur',
    profession: 'Streamer',
    age: 27,
  };
  render() {
    return (
      <div>
        <p>My name is {this.state.name}</p>
        <p>I am a {this.state.profession}</p>
        <p>I am {this.state.age} years old</p>
        <button>Increase my age</button>
      </div>
    );
  }
}

export default MyComponent;
