import { DeleteForeverRounded, DeleteOutlineRounded, PlayCircleRounded } from '@mui/icons-material';
import { Box, styled, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deletePlaylistRequest } from '../../store/actions/playerActions';

const Container = styled(Box)({
    padding: 10,
    width: 170,
    height: 270,
    backgroundColor: "white",
    boxSizing: "border-box",
    borderRadius: 5,
    marginBottom: 10,
    position: 'relative',
    "&:hover": {
        boxShadow: "0 0 5px 3px rgba(0, 0,0, .1)"
    },
    ":hover > svg": {
        opacity: 1
    }
});

const Image = styled('img')({
    width: 150,
    height: 150
});

const ListName = styled(Typography)({
    fontFamily: "inherit",
    fontWeight: 600,
    fontSize: 16,
    margin: "10px 0 5px 0",
    cursor: "pointer"
});

const PlaylistCard = ({ playlist }) => {
    const dispatch = useDispatch();
    const [actionVisible, setActionVisible] = useState(false);
    const { _id, name, image , tracks} = playlist;


    const onDeleteButton = () => {
        if (window.confirm("Drop this playlist")) {
            dispatch(deletePlaylistRequest(_id));
        }
    }

    return (
        <Container onMouseOver={() => setActionVisible(true)}
            onMouseLeave={() => setActionVisible(false)}
        >
            <Image src={image} />
            <ListName>{name}</ListName>
            <Typography style={{fontFamily: "inherit"}} variant="body2">{tracks.length} {tracks.length <= 1 ? "song" : "songs"}</Typography>
            <PlayCircleRounded id="play-list"
                style={{
                    fontSize: 40,
                    position: "absolute",
                    bottom: 15,
                    right: 10,
                    opacity: actionVisible ? 1 : 0,
                    cursor: "pointer"
                }}
                sx={{
                    "&:hover": {
                        transform: "scale(1.2)"
                    }
                }}
            />

            <DeleteOutlineRounded
                style={{
                    fontSize: 20,
                    position: "absolute",
                    bottom: 15,
                    left: 10,
                    opacity: actionVisible ? 1 : 0,
                    cursor: "pointer"
                }}
                onClick={onDeleteButton}
            />

        </Container>
    )
}

export default PlaylistCard
