import { Paper, Typography } from '@mui/material';
import React from 'react';
import Draggable from 'react-draggable';



const FloatingPlayer = () => {
    return (
        <Draggable
        grid={[1, 1]}
        bounds='parent'
        >
            <Paper 
            elevation={3}
            sx={{
                position: "absolute",
                p: 2,
                zIndex: 2,
                right: 20,
                bottom: 110
            }}
            >
                I can be moved around
            </Paper>
        </Draggable>
    )
}

export default FloatingPlayer
