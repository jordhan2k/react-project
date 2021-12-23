import React, {  useEffect, useState } from 'react'
import styled from 'styled-components';
import Card from '../components/TodoList/Card';
import { color } from '../utils/constants';
import InputPanel from '../components/TodoList/InputPanel';
import Modal from '../components/TodoList/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { editTodoRequest, fetchTodosRequest} from '../store/actions/todoActions';
import FilterPanel from '../components/TodoList/FilterPanel';
import {updateTodo} from '../store/reducers/todoReducer';

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

    useEffect(() => {
        dispatch(fetchTodosRequest());
    },[dispatch]);

    const onEditTodo = (updatedTodo) => {
        dispatch(editTodoRequest(updatedTodo));
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
                <Title>Still todolist but it's redux</Title>
                <InputPanel
                    mode="add"
                />

                <FilterPanel />


                {todoList.length > 0 && todoList.map(item => (
                    <Card
                        key={item._id}
                        todo={item}
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






