import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Dashboard from '../pages/Dashboard';
import TodoList from '../pages/TodoList';
import Profile from '../pages/Profile';
import LibraryMusicRounded from '@mui/icons-material/LibraryMusicRounded';
import MusicPlayer from '../pages/MusicPlayer';
import MaterialUI from '../pages/MaterialUI';

const routeData = [
    {
        id: "1",
        path: "/",
        name: "Dashboard",
        icon: <DashboardRoundedIcon />,
        component: <Dashboard />
    },
    {
        id: "2",
        path: "/todo-list",
        name: "TodoList",
        icon: <FactCheckRoundedIcon />,
        component: <TodoList />
    },
    {
        id: "3",
        path: "/ui",
        name: "UI",
        icon: <ColorLensIcon />,
        component: <MaterialUI />
    },
    {
        id: "4",
        path: "/music-player",
        name: "Music Player",
        icon: <LibraryMusicRounded />,
        component: <MusicPlayer />
    },
    {
        id: "5",
        path: "/chat",
        name: "Chat",
        icon: <MarkChatUnreadIcon />
    },
    {
        id: "6",
        path: "/profile/:username",
        name: "Profile",
        icon: <PermContactCalendarRoundedIcon />,
        component: <Profile />
    },

];

export default routeData;