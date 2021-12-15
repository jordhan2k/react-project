import React, { Component } from 'react'
import styled from 'styled-components';
import Card from '../components/Card';
import { color } from '../../utils/constants';
import { v4 as uuidv4 } from 'uuid';
import EditModal from '../components/Modal';
import InputPanel from '../components/InputPanel';

import Modal from '../components/Modal';







const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${color.primaryGray};
    overflow-y: scroll;
    position: relative;
    
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








export default class DashboardClass extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            showEditModal: false,
            editedTodo: {}
        }

        this.changeStatus = this.changeStatus.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.closeEditPanel = this.closeEditPanel.bind(this);
        this.openEditPanel = this.openEditPanel.bind(this);
    }

    changeStatus(todoId) {
        this.setState(prevState => ({
            ...prevState,
            todos: prevState.todos.map(todo => todo._id === todoId
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo)
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

    editTodo(updatedTodo) {
        this.setState({
            todos: this.state.todos.map(todo => todo._id === updatedTodo._id ? updatedTodo : todo)
        })
        this.closeEditPanel();
    }

    openEditPanel(editedTodo) {
        this.setState({ showEditModal: true });
        this.setState({ editedTodo })
    }

    closeEditPanel() {
        this.setState({ showEditModal: false });
        this.setState({ editedTodo: {} })
    }

    render() {
        return (
            <Container>
                <Wrapper >
                    <Title>My todo list</Title>
                    <InputPanel
                        submitHandler={this.addTodo}
                        mode="add"
                    />

                    {this.state.todos.length > 0 && this.state.todos.map(item => (
                        <Card
                            key={item._id}
                            todo={item}
                            statusHandler={this.changeStatus}
                            deleteHandler={this.deleteTodo}
                            editHandler={this.openEditPanel}
                        />
                    ))}
                </Wrapper>

                {this.state.showEditModal && <Modal
                    show={this.state.showEditModal}
                >
                    <InputPanel
                        todo={this.state.editedTodo}
                        submitHandler={this.editTodo}
                        cancelHandler={this.closeEditPanel}
                        mode="edit"

                    />
                </Modal>}

            </Container>
        )
    }
}
