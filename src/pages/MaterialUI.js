import { Box, Button, Snackbar, styled, TextField, Typography } from '@mui/material';

import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveTrackRequest } from '../store/actions/playerActions';
import { color } from '../utils/constants';


const Container = styled('div')(() => ({
    display: 'flex',
    flex: 1,
    backgroundColor: color.primaryGray,
    padding: 20,
    alignItems: "flex-start",
    flexWrap: "wrap"
}));

const Image = styled('img')({
    height: 200,
    width: 200,
    boxShadow: "0 0 5px 2px rgba(0, 0, 0, .1)"
});

const textFldSx = {
    "& > label": {
        fontFamily: "inherit",
        fontWeight: 500
    },
    "& > input": {
        fontFamily: "inherit",
    },
    width: 400,
    margin: "10px 0"
}


const MaterialUI = () => {
    const dispatch = useDispatch();
    const initialTrackInfo = {
        title: "",
        artist: "",
        trackUrl: "",
        artworkUrl: "",
        durationMs: 0,
    };

    const audio = useRef();

    const [trackInfo, setTrackInfo] = useState(initialTrackInfo);

    const { title, artist, trackUrl, artworkUrl, durationMs } = trackInfo;


    const onInputChange = event => {
        setTrackInfo(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = event => {
        event.preventDefault();

        dispatch(saveTrackRequest(trackInfo));
        setTrackInfo(initialTrackInfo);
    }

    const onAudioChange = () => {
        const ms = audio.current.duration * 1000;
        if (ms !== durationMs) {
            setTrackInfo(prevState => ({
                ...prevState,
                durationMs: ms
            }));
        }
    }

    return (
        <Container>

            <Box
                onSubmit={handleSubmit}
                component="form"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    p: 2,
                    flex: 2
                }}>
                <Typography
                    variant="h5"
                    sx={{ fontFamily: "inherit", fontWeight: 600 }}>
                    Add a track
                </Typography>

                <TextField
                    label="Title"
                    name="title"
                    size="small"
                    variant="filled"
                    required
                    value={title}
                    onChange={onInputChange}
                    sx={textFldSx}
                />

                <TextField
                    label="Artist"
                    name="artist"
                    size="small"
                    variant="filled"
                    required
                    value={artist}
                    onChange={onInputChange}
                    sx={textFldSx}
                />

                <TextField
                    label="Track URL"
                    name="trackUrl"
                    size="small"
                    variant="filled"
                    required
                    value={trackUrl}
                    onChange={onInputChange}
                    sx={textFldSx}
                />

                <TextField
                    label="Artwork URL"
                    name="artworkUrl"
                    size="small"
                    variant="filled"
                    required
                    value={artworkUrl}
                    onChange={onInputChange}
                    sx={textFldSx}
                />
                <TextField
                    label="Duration in ms"
                    name="durationMs"
                    size="small"
                    variant="filled"
                    required
                    type="number"
                    min={0}
                    disabled
                    value={durationMs}
                    onChange={onInputChange}
                    sx={textFldSx}
                />

                <Button
                    type="submit"
                    variant="contained">ADD</Button>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    flex: 3
                }}>
                <Image src={trackInfo.artworkUrl ? trackInfo.artworkUrl : "https://i.ibb.co/vdWPnhw/com-hidea-cat.png"} />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column",
                        p: 3
                    }}>
                    <Typography
                        variant="h5"
                        sx={{ fontFamily: "inherit", fontWeight: 800 }}>
                        {trackInfo.title || "Title"}</Typography>
                    <Typography
                        variant="h6"
                        sx={{ fontFamily: "inherit", fontWeight: 500, margin: "10px 0" }} >
                        {trackInfo.artist || "Artist"}</Typography>
                    <audio
                        ref={audio}
                        controls
                        src={trackInfo.trackUrl}
                        preload='metadata'
                        onLoadedMetadata={onAudioChange}
                    />
                </Box>
            </Box>



        </Container>
    )
}

export default MaterialUI
