import React, { Component } from 'react'
import styled from 'styled-components'
import { color, status } from '../utils/constants';

const Container = styled.div`
    background-color: white;
    width: 90%;
    border-radius: 10px;  
    padding: 10px;
    box-sizing: border-box;
    margin: 10px 0;
    /* box-shadow: 0 0 5px 2px rgba(0, 0, 0, .1); */

`;

const Title = styled.h1`
    font-weight: 600;
    font-size: 16px;

`;

const Desc = styled.p`
    font-size: 14px;

`;


const Status = styled.span`
    font-weight: 600;
    font-size: 12px;
    padding: 5px;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${props => props.st === status.OPEN ? color.primaryBeige : color.primaryGreen};
`;


export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: this.props.todo._id,
            title: this.props.todo.title,
            status: this.props.todo.status,
            desc: this.props.todo.desc

        }
    }

    render() {


        return (
            <Container>
                <Title>{this.state.title}</Title>
                <Desc>{this.state.desc}</Desc>
                <Status st={this.state.status}>{this.state.status}</Status>
            </Container>
        )
    }
}
