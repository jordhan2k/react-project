import React, { Component } from 'react'
import styled from 'styled-components';
import Card from '../components/Card';

import { color, status, } from '../utils/constants';


const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${color.primaryGray};
    overflow-y: scroll;
`;

const Wrapper = styled.div`
    width: 25vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 1px 10px rgba(0, 0 , 0, 0, .8);
`;





export default class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            todos: [
                {
                    _id: "1",
                    title: "Learn React",
                    desc: "lorem ipsum",
                    status: status.OPEN
                },

                {
                    _id: "2",
                    title: "Research MERN stack",
                    desc: "lorem ipsum",
                    status: status.OPEN
                },

                {
                    _id: "3",
                    title: "Team up",
                    desc: "lorem ipsum",
                    status: status.COMPELETED
                },

                {
                    _id: "4",
                    title: "Learn React",
                    desc: "lorem ipsum",
                    status: status.OPEN
                },

                {
                    _id: "5",
                    title: "Research MERN stack",
                    desc: "lorem ipsum",
                    status: status.OPEN
                },

                {
                    _id: "6",
                    title: "Team up",
                    desc: "lorem ipsum",
                    status: status.COMPELETED
                },
                {
                    _id: "7",
                    title: "Research MERN stack",
                    desc: "lorem ipsum",
                    status: status.OPEN
                },

                {
                    _id: "8",
                    title: "Team up",
                    desc: "lorem ipsum",
                    status: status.COMPELETED
                },
            ],

        }
    }

    render() {
        return (
            <Container>
                <Wrapper >

                    {this.state.todos.map(item => (
                        <Card key={item._id} todo={item} />
                    ))}
                </Wrapper>


            </Container>
        )
    }
}
