import { MenuRounded, PlayCircleRounded } from '@mui/icons-material';
import FavoriteBorderRounded from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRounded from '@mui/icons-material/FavoriteRounded';
import { Box, Divider, Menu, MenuItem, styled, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrackPlaylistRequest, changeCurrentTrack, changePlayState } from '../../store/actions/playerActions';
import { openSnackbar } from '../../store/actions/snackbarActions';
import { color } from '../../utils/constants';
import { formatMs } from '../../utils/formatters';


const Container = styled(Box)({
    display: "flex",
    padding: 5,
    alignItems: "center",
    borderRadius: 5,
    ":hover": {
        backgroundColor: "white",
        boxShadow: "0 0 5px 1px rgba(0, 0, 0, .1)",
    },
    width: 700,
});

const Index = styled(Typography)({
    width: "7%",
    fontFamily: "inherit",
    fontWeight: 600,
    fontSize: 14,
    textAlign: "center",
    cursor: "pointer",
    verticalAlign: "middle",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
});


const ArtworkContainer = styled(Box)({
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
});

const Artwork = styled('img')({
    height: 40,
    width: 40,
    borderRadius: 5,
});

const TrackInfo = styled(Box)({
    width: "58%",
    padding: "0 10px"
});

const Title = styled(Typography)({
    fontFamily: "inherit",
    fontWeight: 600,
    fontSize: 16
});

const Artist = styled(Typography)({
    fontFamily: "inherit",
    fontWeight: 400,
    fontSize: 14
});

const Duration = styled(Typography)({
    fontFamily: "inherit",
    fontWeight: 400,
    fontSize: 14,
    width: "10%",
    textAlign: "center"
})

const IconContainer = styled(Box)({
    width: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    cursor: "pointer"

});

const CustomMenuItem = styled(MenuItem)({
    fontFamily: "inherit",
    fontSize: 14,
    fontWeight: 400
})

const TrackItem = ({ index, track }) => {

    const playlists = useSelector(state => state.player.playlists);
    const { title, artist, artworkUrl, durationMs, trackUrl } = track;
    const dispatch = useDispatch();

    const [isLiked, setIsLiked] = useState(false);
    const [actionsVisible, setActionsVisible] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const [childAnchorEl, setChildAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const childOpen = Boolean(childAnchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleChildClick = event => {
        setChildAnchorEl(event.currentTarget);
    }

    const handleChildClose = () => {
        setChildAnchorEl(null);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handlePlayTrack = () => {
        dispatch(changeCurrentTrack(track));
        dispatch(changePlayState(true));
    }

    const handleAddToPlaylist = playlistId => {
        const targetPlaylist = playlists.find(item => item._id === playlistId);
        handleChildClose();
        handleClose();
        if (!targetPlaylist.tracks.find(item => item.originalId === track._id)) {
            const addedTrack = { ...track, originalId: track._id }
            dispatch(addTrackPlaylistRequest(addedTrack, playlistId));
        } else {
            dispatch(openSnackbar({
                severity: "warning",
                message: "Sounds like it's been added!"
            }))
        }
    }

    const onDownload = () => {
        console.log(trackUrl);
        axios({
            url: trackUrl,
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${title} - ${artist}.mp3`); //or any other extension
            document.body.appendChild(link);
            link.click();
            handleClose();
        });
    }

    return (
        <>
            <Container
                direction="row"
                onMouseOver={() => setActionsVisible(true)}
                onMouseLeave={() => setActionsVisible(false)}
            >
                <Index onClick={handlePlayTrack}>
                    {!actionsVisible ? `${index + 1}` :
                        <PlayCircleRounded style={{ fontSize: 25 }}
                            sx={{
                                "&:hover": {
                                    transform: "scale(1.1)"
                                }
                            }}
                        />}
                </Index>
                <ArtworkContainer>
                    <Artwork src={artworkUrl} />
                </ArtworkContainer>

                <TrackInfo>
                    <Title>{title}</Title>
                    <Artist>{artist}</Artist>
                </TrackInfo>

                <IconContainer onClick={() => setIsLiked(!isLiked)}>
                    {!isLiked ?
                        <FavoriteBorderRounded
                            className="hidden-icons"
                            style={{ fontSize: 20, opacity: actionsVisible ? 1 : 0 }} />
                        : <FavoriteRounded style={{ fontSize: 20, fill: color.primaryRed }} />}
                </IconContainer>

                <Duration>{formatMs(durationMs)}</Duration>

                <IconContainer onClick={handleClick}>
                    <MenuRounded
                        className="hidden-icons"
                        style={{ fontSize: 20, opacity: actionsVisible ? 1 : 0 }} />
                </IconContainer>

            </Container>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <CustomMenuItem onClick={handleClose}>Add to queue</CustomMenuItem>
                <Divider style={{ margin: 0 }} />
                <CustomMenuItem
                    onClick={handleChildClick}
                >Add to playlist</CustomMenuItem>
                <CustomMenuItem onClick={onDownload}>Download</CustomMenuItem>
            </Menu>

            <Menu
                id="basic-menu2"
                anchorEl={childAnchorEl}
                open={childOpen}
                onClose={handleChildClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >

                {playlists.length && playlists.map(item => (
                    <CustomMenuItem onClick={() => handleAddToPlaylist(item._id)}>{item.name}</CustomMenuItem>
                ))}
            </Menu>

        </>
    )
}

export default TrackItem
