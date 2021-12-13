import styled from 'styled-components'
import React, { Component } from 'react'

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0 , 0, .5);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default class Modal extends Component {
    render() {
        return (
            <Container>
                {this.props.children}
            </Container>) 
    }
}
