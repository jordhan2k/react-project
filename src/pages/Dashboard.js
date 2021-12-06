import React, { Component } from 'react'
import styled from 'styled-components';
import AddPanel from '../components/AddPanel';
import Card from '../components/Card';
import { color } from '../utils/constants';
import { v4 as uuidv4 } from 'uuid';


const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${color.primaryGray};
    overflow-y: scroll;
`;

const Wrapper = styled.div`
    width: 400px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 1px 10px rgba(0, 0 , 0, 0, .8);
`;




const Title = styled.h1`
    font-size: 25px;
    font-weight: 600;
    margin: 20px 0;
`;





export default class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            todos: [],
        }
    }

    changeStatus(todoId) {
        this.setState(prevState => ({
            ...prevState,
            todos: prevState.todos.map(todo => todo._id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo)
        }));
    }

    addTodo(todo) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    ...todo,
                    _id: uuidv4(),
                    isCompleted: false
                }
            ]
        })
    }

    deleteTodo(todoId) {
        this.setState({
            todos: this.state.todos.filter(todo => todo._id !== todoId)
        })

    }



    render() {
        return (
            <Container>
                <Wrapper >
                    <Title>My todo list</Title>
                    <AddPanel addTodoHandler={this.addTodo.bind(this)} />
                    {this.state.todos.length > 0 && this.state.todos.map(item => (
                        <Card
                            key={item._id}
                            todo={item}
                            statusHandler={this.changeStatus.bind(this)}
                            deleteHandler={this.deleteTodo.bind(this)}
                        />
                    ))}
                </Wrapper>
            </Container>
        )
    }
}
