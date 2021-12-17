import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Dashboard from '../pages/Dashboard';
import TodoList from '../pages/TodoList';
import Settings from '../pages/Settings';
import Profile from '../pages/Profile';
import LibraryMusicRounded from '@mui/icons-material/LibraryMusicRounded';
import MusicPlayer from '../pages/MusicPlayer';

export default [
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
        icon: <ColorLensIcon />
    },

    {
        id: "4",
        path: "/settings",
        name: "Settings",
        icon: <SettingsApplicationsRoundedIcon />,
        component: <Settings />
    },
    {
        id: "5",
        path: "/music-player",
        name: "Music Player",
        icon: <LibraryMusicRounded />,
        component: <MusicPlayer />
    },
    {
        id: "6",
        path: "/chat",
        name: "Chat",
        icon: <MarkChatUnreadIcon />
    },
    {
        id: "8",
        path: "/profile/:username",
        name: "Profile",
        icon: <PermContactCalendarRoundedIcon />,
        component: <Profile />
    },

];