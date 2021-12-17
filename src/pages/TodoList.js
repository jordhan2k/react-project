import React, { Component, useState } from 'react'
import styled from 'styled-components';
import Card from '../components/TodoList/Card';
import { color } from '../utils/constants';
import { v4 as uuidv4 } from 'uuid';
import InputPanel from '../components/TodoList/InputPanel';
import Modal from '../components/TodoList/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from '../store/actions/todoActions';

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
    const todoList = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();

    const [showEditModal, setShowEditModal] = useState(false);
    const [editedTodo, setEditedTodo] = useState({});

    const changeStatus = (todo) => {
        const updatedTodo = {
            ...todo,
            isCompleted : !todo.isCompleted
        };
        dispatch(editTodo(updatedTodo));
    }

    const onAddTodo = (todo) => {
        const newTodo = {
            ...todo,
            _id: uuidv4(),
            isCompleted: false
        };
        dispatch(addTodo(newTodo));
    }

    const onDeleteTodo = (todoId) => {
        dispatch(deleteTodo(todoId));
    }

    const onEditTodo = (updatedTodo) => {
        dispatch(editTodo(updatedTodo));
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
                    submitHandler={onAddTodo}
                    mode="add"
                />

                {todoList.length > 0 && todoList.map(item => (
                    <Card
                        key={item._id}
                        todo={item}
                        statusHandler={changeStatus}
                        deleteHandler={onDeleteTodo}
                        editHandler={openEditPanel}
                    />
                ))}
            </Wrapper>

            {showEditModal && <Modal
                show={showEditModal}
            >
                <InputPanel
                    todo={editedTodo}
                    submitHandler={onEditTodo}
                    cancelHandler={closeEditPanel}
                    mode="edit"
                />
            </Modal>}

        </Container>
    )
}


export default TodoList;






