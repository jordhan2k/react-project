import React, { useState } from 'react';
import { Stack } from '@mui/material';
import TrackItem from './TrackItem';
import { useSelector } from 'react-redux';
import { PanelTitle } from '../../pages/MusicPlayer';
import { FixedSizeList as List } from "react-window";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box } from '@mui/system';



const TrackList = () => {
    const tracks = useSelector(state => state.player.tracks);

    return (

        <>
            <PanelTitle>All tracks ({tracks.length})</PanelTitle>
            <Box style={{ height: 440, overflowY: "scroll" }}>
                <Stack  >
                    {tracks.length > 0 && tracks.map((track, index) => (
                        <TrackItem
                            key={track._id}
                            index={index}
                            track={track} />
                    )
                    )}
                </Stack>
            </Box>
        </>
    )
}

export default TrackList
