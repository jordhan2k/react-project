import { Grid, Box, Button, styled, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PanelTitle } from '../../pages/MusicPlayer';
import { addPlaylistRequest } from '../../store/actions/playerActions';
import { defaultImages } from '../../utils/constants';
import PlaylistCard from './PlaylistCard';

const AddButton = styled(Button)({
    padding: "5px 10px",
    color: "inherit",
    fontFamily: "inherit",
    fontSize: 16,
    fontWeight: 600,
    backgroundColor: "white",
    "&:hover": {
        backgroundColor: "white",
        boxShadow: "0 0 5px 1px rgba(0, 0, 0, .1)"
    }
});


const PlaylistPanel = () => {
    const playlists = useSelector(state => state.player.playlists);
    const [open, setOpen] = React.useState(false);
    const [plName, setPlName] = useState();
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onAddBtn = () => {
        if (plName) {
            dispatch(addPlaylistRequest({ name: plName, image: defaultImages.PLAYLIST_IMAGE }));
            setPlName("");
            handleClose();
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <PanelTitle>Playlists ({playlists.length})</PanelTitle>
                <AddButton
                    onClick={handleClickOpen}
                >+ Add a playlist</AddButton>

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Give your playlist a name</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Playlist name"
                            variant="standard"
                            value={plName}
                            onChange={event => setPlName(event.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={onAddBtn}>Add</Button>
                    </DialogActions>
                </Dialog>
            </Box>


            <Grid
                container
                style={{
                    margin: 0,
                    height: 440,
                    overflowY: "scroll",
                    padding: "10px 0",
                }}
                sx={{
                    boxSizing: "border-box"
                }}
            >
                {playlists.length > 0 && playlists.map(item => (
                    <Grid
                        key={item._id}
                        xs={3} >
                        <PlaylistCard playlist={item} />
                    </Grid>
                ))}

            </Grid>
        </Box>
    )
}

export default PlaylistPanel
