import { Box, Slider, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { styled } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'
import { color } from '../../utils/constants'
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import RepeatOneRoundedIcon from '@mui/icons-material/RepeatOneRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeMuteRoundedIcon from '@mui/icons-material/VolumeMuteRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';

const useStyles = makeStyles({
    left: {
        flex: 1,
        padding: 10,
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box"
    },
    center: {
        flex: 2,
        maxWidth: 500,
        minWidth: 350,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"

    },
    right: {
        padding: 10,
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    }
});




const Container = styled(Box)(props => ({
    height: 80,
    width: "100%",
    boxShadow: "0 0 5px 2px rgba(0,0,0,.2)",
    backgroundColor: color.primaryGray,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: "center"
}));

const Artwork = styled('img')(() => ({
    height: 60,
    width: 60,
}));

const InfoContainer = styled('div')(props => ({
    display: "flex",
    padding: 10,
    flexDirection: "column"
}));

const TrackTitle = styled(Typography)(props => ({
    fontWeight: 700,
    fontFamily: "inherit"
}));

const Artist = styled(Typography)(props => ({
    fontWeight: 400,
    fontFamily: "inherit",
    fontSize: 14
}))

const IconContainer = styled('div')(props => ({
    cursor: 'pointer',
    display: "flex",
    margin: "0 10px",

}));

const ControlBar = styled('div')(props => ({
    display: "flex",
    alignItems: "center",
}));

const ProgressBar = styled('div')(props => ({
    display: "flex",
    alignItems: "center",
    width: "100%"
}));

const PlayerBar = (props) => {
    // for testing purpose only >>>>>>>>
    const classes = useStyles(props);


    const [isLiked, setIsLiked] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [repeatMode, setRepeatMode] = useState(0);

    const [duration, setDuration] = useState();
    const [position, setPosition] = useState(0);

    const audioPlayer = useRef();

    const handleChange = (event, newPosition) => {
        setPosition(newPosition);
    };

    const handleMetadata = (event) => {
        const seconds = Math.floor(event.target.duration);
        setDuration(seconds);
    }






    const togglePlay = () => {
        if (isPlaying) {
            setIsPlaying(false);
            audioPlayer.current.pause();
        } else {
            setIsPlaying(true);
            audioPlayer.current.play();
        }
    }

    const changeRepeatMode = () => {
        setRepeatMode((repeatMode + 1) % 3);
        console.log(audioPlayer.current.duration);
    }

    let repeatIcon;
    if (repeatMode === 0) {
        repeatIcon = <RepeatRoundedIcon style={{ fontSize: 20, fill: "gray" }} />;
    } else if (repeatMode === 1) {
        repeatIcon = <RepeatRoundedIcon style={{ fontSize: 20 }} />;
    } else if (repeatMode === 2) {
        repeatIcon = <RepeatOneRoundedIcon style={{ fontSize: 20 }} />;
    }

    const formatDuration = value => {
        value = Math.floor(value);
        const minute = Math.floor(value / 60);
        const second = value % 60;
        return `${minute}:${second < 10 ? `0${second}` : `${second}`}`;
    }

    // <<<<<<<<<< for testing purpose only 





    return (
        <Container>
            <audio
                // controls
                id="audio-player"
                ref={audioPlayer}
                src="https://firebasestorage.googleapis.com/v0/b/file-storage-38b52.appspot.com/o/music-player-storage%2FHIP%20-%20Mamamoo.mp3?alt=media&token=4801c650-aefe-41b5-98f6-fabc432cd8c9"
                preload='metadata'
                onLoadedMetadata={handleMetadata}

            />

            <Box className={classes.left}>
                <Artwork src="https://i.ibb.co/pd93Rsk/629c969064668b93f83d95022608da72.jpg" />
                <InfoContainer>
                    <TrackTitle>
                        HIP
                    </TrackTitle>
                    <Artist>
                        Mamamoo
                    </Artist>
                </InfoContainer>
                <IconContainer onClick={() => setIsLiked(!isLiked)}>
                    {!isLiked
                        ? <FavoriteBorderRoundedIcon style={{ fontSize: 20 }} />
                        : <FavoriteRoundedIcon style={{ fill: "#E56F53", fontSize: 20 }} />}
                </IconContainer>
            </Box>

            <Box className={classes.center}>


                <ControlBar>
                    <IconContainer onClick={() => setShuffle(!shuffle)}  >
                        <ShuffleRoundedIcon
                            style={{
                                fontSize: 20,
                                fill: !shuffle && "gray"
                            }}
                        />
                    </IconContainer>

                    <IconContainer >
                        <SkipPreviousRoundedIcon />
                    </IconContainer>


                    <IconContainer onClick={togglePlay}   >
                        {isPlaying
                            ? <PauseCircleFilledRoundedIcon style={{ fontSize: 40 }} />
                            : <PlayCircleFilledRoundedIcon style={{ fontSize: 40 }} />
                        }
                    </IconContainer>
                    <IconContainer >
                        <SkipNextRoundedIcon />
                    </IconContainer>

                    <IconContainer
                        onClick={() => changeRepeatMode()}
                    >
                        {repeatIcon}
                    </IconContainer>

                </ControlBar>

                <ProgressBar>
                    <Typography
                        variant="body2"
                        fontFamily="inherit"
                    >
                        0:00
                    </Typography>
                    <Slider
                        aria-label="Play progress"
                        value={position}
                        onChange={handleChange}
                        size="small"
                        sx={{
                            margin: "0 15px"
                        }}
                    />
                    <Typography
                        variant="body2"
                        fontFamily="inherit"
                    >
                        {!duration ? "0:00" : formatDuration(duration)}
                    </Typography>

                </ProgressBar>
            </Box>

            <Box className={classes.right}>
                <VolumeDownRoundedIcon style={{ fontSize: 20 }} />

                <Slider
                    size='small'
                    style={{ width: 100, margin: "0 10px" }}
                    sx={{
                        '& .MuiSlider-thumb': {
                            height: 5,
                            width: 5
                        }
                    }}
                />
                {/* <VolumeOffRoundedIcon style={{fontSize: 20}}/> */}
                <VolumeUpRoundedIcon style={{ fontSize: 20 }} />


            </Box>


        </Container>
    )
}

export default PlayerBar
