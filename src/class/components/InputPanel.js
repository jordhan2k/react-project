import React, { Component } from 'react'
import styled from 'styled-components'
import { color } from '../../utils/constants';
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

export default class InputPanel extends Component {
    constructor() {
        super();

        this.state = {
            todoInput: {
                title: "",
                desc: "",
                isCompleted: false
            },
            mode: ""
        }
    }

    componentDidMount() {
        this.setState({
            todoInput: { ...this.props.todo },
            mode: this.props.mode
        })

    }

    onInputChange(event) {
        this.setState({
            todoInput: {
                ...this.state.todoInput,
                [event.target.name]: event.target.value
            }
        });
    }

    onFormSubmit(event) {
        event.preventDefault();
        if (this.state.todoInput.title)
            this.props.submitHandler(this.state.todoInput)
        this.setState({
            todoInput: {
                title: "",
                desc: ""
            }
        });
    }


    render() {

        return (
            <Container
                mode={this.state.mode}
                onSubmit={event => this.onFormSubmit(event)}>

                {this.state.mode === "edit" &&
                    <IconContainer
                        title="Click to cancel"
                        onClick={() => this.props.cancelHandler()}>
                        <ClearRoundedIcon />
                    </IconContainer>
                }

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
                    placeholder="Description (optional)"
                    name="desc"
                    value={this.state.todoInput.desc}
                    onChange={(event) => this.onInputChange(event)}
                />

                <Button type="submit" >
                    {this.state.mode === "add" ? "Add" : "Edit"} todo
                </Button>

            </Container>
        )
    }
}
