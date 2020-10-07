import React, { Component } from "react";

import { Link } from "react-router-dom";

class Home extends Component {
    state = {
        counter: 0
    };
    changeCounter = num => {
        this.setState(({ counter }) => ({
            counter: counter + num
        }));
    };
    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>Counter: {this.state.counter}</p>
                <button onClick={() => this.changeCounter(1)}>+</button>
                <button onClick={() => this.changeCounter(-1)}>-</button>
                <br />
                <br />
                <Link to="/about">About</Link>
            </div>
        );
    }
}

export default Home;
