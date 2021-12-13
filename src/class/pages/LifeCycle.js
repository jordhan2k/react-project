import React, { Component } from 'react'
import { color } from '../utils/constants'

export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: color.primaryGreen
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ backgroundColor: color.primaryPurple });
        }, 10000);

    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidUpdate() {
        console.log("New color", this.state.backgroundColor);
    }

    componentWillUnmount() {
        clearTimeout();
    }

    render() {
        return (
            <div style={{
                backgroundColor: this.state.backgroundColor,
                height: "100vh",
                width: "100vw",
                fontWeight: 500,
            }}>
                The background color is {this.state.backgroundColor === color.primaryGreen ? "Green" : "Purple"}
            </div>
        )
    }
}
