import React, { useState } from 'react'
import styled from 'styled-components'
import { color } from '../utils/constants';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

const Container = styled.form`
    background-color: ${props => props.mode === "add" ? color.primaryGreen : color.primaryPurple};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    padding-top: 20px;
    width: 350px;
    border-radius: 10px;  
    position: relative;
    margin-bottom: 10px;
    
`;

const IconContainer = styled.div`
    position: absolute;
    right: -15px;
    top: -15px;
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, .09);
    }
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

const InputPanel = ({ todo, mode, submitHandler, cancelHandler }) => {

    const [todoInput, setTodoInput] = useState({
        _id: todo ? todo._id : "",
        title: todo ? todo.title : "",
        desc: todo ? todo.desc : "",
        isCompleted: todo ? todo.isCompleted : false
    });

    const onInputChange = (event) => {
        setTodoInput(prevInputs => ({
            ...prevInputs,
            [event.target.name]: event.target.value
        }));
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (todoInput.title)
            submitHandler(todoInput)
        setTodoInput({
            title: "",
            desc: ""
        }
        );
    }




    return (
        <Container
            mode={mode}
            onSubmit={event => onFormSubmit(event)}>

            {mode === "edit" &&
                <IconContainer
                    title="Click to cancel"
                    onClick={() => cancelHandler()}>
                    <ClearRoundedIcon />
                </IconContainer>
            }

            <Input
                type="text"
                placeholder="Title"
                value={todoInput.title}
                name="title"
                onChange={(event) => onInputChange(event)}
                required
            />

            <Input
                type="text"
                placeholder="Description (optional)"
                name="desc"
                value={todoInput.desc}
                onChange={(event) => onInputChange(event)}
            />

            <Button type="submit" >
                {mode === "add" ? "Add" : "Edit"} todo
            </Button>

        </Container>
    )
}



export default InputPanel;