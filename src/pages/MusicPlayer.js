import { styled } from '@mui/system'
import React from 'react'
import PlayerBar from '../components/MusicPlayer/PlayerBar';
import { color } from '../utils/constants';

const Container = styled('div')(props => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: color.primaryGray
}));

const Wrapper = styled('div')(props => ({
    flex: 1
}))



const MusicPlayer = () => {
    return (
        <Container>
            <Wrapper>



            </Wrapper>
            <PlayerBar />
        </Container>
    )
}

export default MusicPlayer
