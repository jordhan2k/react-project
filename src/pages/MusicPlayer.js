import { display, styled } from '@mui/system'
import React, { useEffect } from 'react'
import PlayerBar from '../components/MusicPlayer/PlayerBar';
import { color } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTracksRequest, fetchPlaylistsRequest } from '../store/actions/playerActions';
import TrackList from '../components/MusicPlayer/TrackList';

import { Box, Tab, Tabs, Typography } from '@mui/material';
import { SearchRounded } from '@material-ui/icons';
import PlaylistPanel from '../components/MusicPlayer/PlaylistPanel';

const Container = styled('div')(props => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: color.primaryGray,
    height: "100vh"
}));

const Wrapper = styled('div')(props => ({
    flex: 1,
    width: "100%",
    padding: 20,
    paddingBottom: 0,
    boxSizing: "border-box"
}));

const TabLabel = styled(Tab)({
    fontFamily: "inherit",
    fontSize: 17,
    fontWeight: 600,
})

export const PanelTitle = styled(Typography)({
    fontFamily: "inherit",
    fontSize: 16,
    fontWeight: 600,
    margin: "20px 0"
});

const Header = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
});

const InputContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white"
});

const Input = styled('input')({
    margin: "0 10px",
    width: 200,
    border: "none",
    "&:focus": {
        outline: "none"
    }
});

const MainContent = styled(Box)({
    flex: 1,
    display: "flex",
    alignItems: "center"

});

const SidePanel = styled(Box)({
    padding: "0 10px",
    flex: 4,
    boxSizing: "border-box"
});

const TabPanel = styled(Box)({
    flex: 6
});

function TabPanelX(props) {
    const { children, value, index, ...other } = props;

    return (
        <div style={{ display: value === index ? "block" : "none" }}>
            <div
                style={{
                    flex: 8,
                    display: "flex",

                }}
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box >
                        {children}
                    </Box>
                )}
            </div>
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const MusicPlayer = () => {


    const dispatch = useDispatch();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        dispatch(fetchAllTracksRequest());
        dispatch(fetchPlaylistsRequest());
    }, [dispatch])

    let tabPanelBody;
    if (value === 0) {
        tabPanelBody = <TrackList />
    }
    if (value === 1) {
        tabPanelBody = <PlaylistPanel />
    }

    return (
        <Container>
            <Wrapper>
                <Header>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example">
                        <TabLabel label="Tracks"  {...a11yProps(0)} />
                        <TabLabel label="Playlists"  {...a11yProps(1)} />
                        <TabLabel label="My favorites" {...a11yProps(2)} />
                    </Tabs>

                    <InputContainer>
                        <SearchRounded />
                        <Input placeholder="Search" />
                    </InputContainer>
                </Header>

                <MainContent>
                    <TabPanel>
                        {tabPanelBody}
                    </TabPanel>
                    <SidePanel>
                        <Typography>Hello sidebar</Typography>
                    </SidePanel>

                </MainContent>

            </Wrapper>
            <PlayerBar />
        </Container>
    )
}

export default MusicPlayer
