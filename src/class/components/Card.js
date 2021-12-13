import React, { Component } from 'react'
import styled from 'styled-components'
import { color } from '../../utils/constants';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlined from '@mui/icons-material/EditOutlined';

const Container = styled.div`
    background-color: white;
    width: 350px;
    border-radius: 10px;  
    padding: 10px;
    box-sizing: border-box;
    margin: 10px 0;
    &:hover {
        /* transform: scale(1.01); */
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, .09);
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;

const Title = styled.h1`
    font-weight: 600;
    font-size: 16px;
    flex: 1;
`;

const IconContainer = styled.div`
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


const Desc = styled.p`
    font-size: 14px;
    margin: 5px 0;
    font-style: italic;

`;


const Status = styled.span`
    margin: 5px 0;
    font-weight: 600;
    font-size: 12px;
    padding: 5px;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${props => props.status ? color.primaryGreen : color.primaryBeige};
`;


export default class Card extends Component {


    render() {
        const { todo, statusHandler, deleteHandler, editHandler } = this.props;

        return (
            <Container status={todo.isCompleted}>
                <Header>
                    <Title>{todo.title}</Title>
                    <IconContainer >
                        <DeleteOutlineOutlinedIcon style={{ fontSize: "16px" }}
                            onClick={() => deleteHandler(todo._id)}
                        />
                    </IconContainer>
                    <IconContainer>
                        <EditOutlined style={{ fontSize: "16px" }}
                            onClick={() => editHandler(todo)}
                        />
                    </IconContainer>
                </Header>

                <Desc>{todo.desc}</Desc>
                <Status
                    onClick={() => statusHandler(todo._id)}
                    title="Click me to change status"
                    status={todo.isCompleted}>{
                        todo.isCompleted
                            ? "Completed"
                            : "Open"
                    }</Status>
            </Container>
        )
    }
}
