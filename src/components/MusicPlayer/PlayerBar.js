import { styled } from '@mui/system'
import React from 'react'
import { color } from '../../utils/constants'

const Container = styled('div')(props => ({
    height: 100,
    width: "100%",
    boxShadow: "0 0 5px 2px rgba(0,0,0,.2)",
    backgroundColor: color.primaryGray
}))

const PlayerBar = () => {
    return (
       <Container> </Container>
    )
}

export default PlayerBar
