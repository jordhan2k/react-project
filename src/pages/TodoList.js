import React, { Component, useState } from 'react'
import styled from 'styled-components';
import Card from '../components/Card';
import { color } from '../utils/constants';
import { v4 as uuidv4 } from 'uuid';
import InputPanel from '../components/InputPanel';
import Modal from '../components/Modal';







const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    background-color: ${color.primaryGray};
    overflow-y: scroll;
    position: relative;
    color: #3A3B59;
    
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

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editedTodo, setEditedTodo] = useState({});

    

    const changeStatus = (todoId) => {
        setTodos(prevTodos => ({
            ...prevTodos,
            todos: prevTodos.map(todo => todo._id === todoId
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo)
        }));
    }

    const addTodo = (todo) => {
        setTodos(prevTodos => [
            ...prevTodos,
            {
                ...todo,
                _id: uuidv4(),
                isCompleted: false
            }
        ])
    }

    const deleteTodo = (todoId) => {
        setTodos(
            todos.filter(todo => todo._id !== todoId)
        );
    }

    const editTodo = (updatedTodo) => {
        setTodos(todos.map(todo => todo._id === updatedTodo._id ? updatedTodo : todo))
        closeEditPanel();
    }

    const openEditPanel = (editedTodo) => {
        setShowEditModal(true);
        setEditedTodo(editedTodo);
    }

    const closeEditPanel = () => {
        setShowEditModal(false);
        setEditedTodo({});
    }

    return (
        <Container>
            <Wrapper >
                <Title>Still todo list but it's hook</Title>
                <InputPanel
                    submitHandler={addTodo}
                    mode="add"
                />

                {todos.length > 0 && todos.map(item => (
                    <Card
                        key={item._id}
                        todo={item}
                        statusHandler={changeStatus}
                        deleteHandler={deleteTodo}
                        editHandler={openEditPanel}
                    />
                ))}
            </Wrapper>

            {showEditModal && <Modal
                show={showEditModal}
            >
                <InputPanel
                    todo={editedTodo}
                    submitHandler={editTodo}
                    cancelHandler={closeEditPanel}
                    mode="edit"
                />
            </Modal>}

        </Container>
    )
}


export default TodoList;






