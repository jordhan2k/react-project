import React, { Component } from 'react'
import styled from 'styled-components'
import { color } from '../utils/constants';

const Container = styled.div`
    background-color: ${color.primaryGreen};
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 90%;
    border-radius: 10px;  
    padding: 5px;
    box-sizing: border-box;
    margin-bottom: 10px;
`;

const Input = styled.input`
    width: 90%;
    border: none;
    padding: 10px;
    border-radius: 5px;
    margin: 5px 0;
    :focus{
        outline-style: none;
    }
    ::placeholder {
        font-style: italic;
    }
`;

const Button = styled.button`
    margin: 5px 0;
    border: none;
    padding: 5px;
    font-size: 18px;
    font-weight: 500;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    :focus{
        border: none;
    }
    

`;

export default class AddPanel extends Component {
    constructor() {
        super();

        this.state = {
            todoInput: {
                title: "",
                desc: ""
            }
        }
    }

    onInputChange(event) {
        this.setState({
            todoInput: {
                ...this.state.todoInput,
                [event.target.name]: event.target.value
            }
        });
    }

    onAddBtn() {
        if (this.state.todoInput.title)
            this.props.addTodoHandler(this.state.todoInput)
            this.setState({
                todoInput: {
                    title: "",
                    desc: ""
                }
            });
    }


    render() {
        return (
            <Container>
                <Input
                    type="text"
                    placeholder="Title"
                    value={this.state.todoInput.title}
                    name="title"
                    onChange={(event) => this.onInputChange(event)}
                    required
                />
                <Input
                    type="text"
                    placeholder="Description"
                    name="desc"
                    value={this.state.todoInput.desc}
                    onChange={(event) => this.onInputChange(event)}
                />
                <Button
                    type="submit"
                    onClick={this.onAddBtn.bind(this)}>
                    Add todo
                </Button>
            </Container>
        )
    }
}
