import ColorLens from '@mui/icons-material/ColorLens';
import FactCheckRounded from '@mui/icons-material/FactCheckRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { color } from '../utils/constants';


const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const Wrapper = styled.div`
    padding: 20px 0;
    min-width: 400px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;



const Title = styled.h1`
    padding: 10px 0;
    font-size: 25px;
    font-weight: 600;
`;

const LinkContainer = styled.div`
    box-shadow: 0 0 10px 1px rgba(0,0,0,.09);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    
    & >svg {
        fill: rgb(200, 200, 200);
        /* transition: all .4s ease; */
    }

    &:hover {
        box-shadow: 0 0 10px 1px rgba(0,0,0,.2);
    }

    &:hover >svg {
        fill: ${color.secondaryDarkBlue};
        transform: scale(1.2);
    }
`;

const LinkTitle = styled.h2`
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
`;



const Dashboard = () => {
    return (
        <Container>
            <Title>Welcome to Jordan site!</Title>
            <Wrapper>
                <Link to="/todo-list" style={{ textDecoration: "none" }}>
                    <LinkContainer>
                        <FactCheckRounded />
                        <LinkTitle >Todo List</LinkTitle>
                    </LinkContainer>
                </Link>

                <Link to="/ui" style={{ textDecoration: "none" }}>
                    <LinkContainer>
                        <ColorLens />
                        <LinkTitle >Material UI</LinkTitle>
                    </LinkContainer>
                </Link>

                <Link to="/music-player" style={{ textDecoration: "none" }}>
                    <LinkContainer>
                        <LibraryMusicRoundedIcon/>
                        <LinkTitle >Mup La</LinkTitle>
                    </LinkContainer>
                </Link>

            </Wrapper>
        </Container>
    )
}

export default Dashboard
