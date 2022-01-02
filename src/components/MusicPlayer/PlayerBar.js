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
import { useSelector } from 'react-redux'

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
    justifyContent: "center",
    width: "100%",
    position: "relative"
}));

const PlayerBar = (props) => {
    // for testing purpose only >>>>>>>>
    const { title, artist, trackUrl, artworkUrl } = useSelector(state => state.player.currentTrack);

    // const isPlaying = useSelector(state => state.player.isPlaying);

    const classes = useStyles(props);


    const [isLiked, setIsLiked] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [repeatMode, setRepeatMode] = useState(0);

    const [duration, setDuration] = useState();
    const [currentTime, setCurrentTime] = useState(0);


    const [position, setPosition] = useState(0);
    const [volume, setVolume] = useState(100);

    const audioPlayer = useRef();


    useEffect(() => {
        audioPlayer.current.volume = volume / 100;
    }, [volume]);



    const handleTimeUpdate = () => {
        const currentSeconds = Math.floor(audioPlayer.current.currentTime);
        setPosition(Math.floor((currentSeconds / duration) * 100));
        setCurrentTime(currentSeconds);
    }




    const handleChange = (event, newPosition) => {
        setCurrentTime(Math.floor((duration / 100) * newPosition));
        setPosition(newPosition);
        audioPlayer.current.currentTime = Math.floor((duration / 100) * newPosition);
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
                src={trackUrl && trackUrl}
                preload='metadata'
                onLoadedMetadata={handleMetadata}
                onTimeUpdate={handleTimeUpdate}
            />

            <Box className={classes.left}>
                <Artwork src={artworkUrl || "https://i.ibb.co/vdWPnhw/com-hidea-cat.png"} />
                <InfoContainer>
                    <TrackTitle>
                        {title || "Title"}
                    </TrackTitle>
                    <Artist>
                        {artist || "Artist"}
                    </Artist>
                </InfoContainer>
                <IconContainer onClick={() => setIsLiked(!isLiked)}>
                    {!isLiked
                        ? <FavoriteBorderRoundedIcon style={{ fontSize: 20 }} />
                        : <FavoriteRoundedIcon style={{ fill: color.primaryRed, fontSize: 20 }} />}
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
                        sx={{ position: "absolute", left: -10 }}
                    >
                        {!currentTime ? "0:00" : formatDuration(currentTime)}
                    </Typography>
                    <Slider
                        aria-label="Play progress"
                        value={position}
                        onChange={handleChange}
                        size="small"
                        sx={{
                            margin: "0 15px",
                            width: 410
                        }}
                    />
                    <Typography
                        variant="body2"
                        fontFamily="inherit"
                        sx={{ position: "absolute", right: -10 }}
                    >
                        {!duration ? "0:00" : formatDuration(duration)}
                    </Typography>

                </ProgressBar>
            </Box>

            <Box className={classes.right}>
                {volume === 0
                    ? <VolumeOffRoundedIcon style={{ fontSize: 20 }} />
                    : <VolumeDownRoundedIcon
                        onClick={() => setVolume(0)}
                        style={{ fontSize: 20, cursor: "pointer" }} />
                }


                <Slider
                    size='small'
                    value={volume}
                    onChange={(event, newValue) => setVolume(newValue)}
                    style={{ width: 100, margin: "0 10px" }}
                    sx={{
                        '& .MuiSlider-thumb': {
                            height: 5,
                            width: 5
                        }
                    }}
                />

                <VolumeUpRoundedIcon style={{ fontSize: 20 }} />
            </Box>


        </Container>
    )
}

export default PlayerBar
