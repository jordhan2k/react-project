import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Dashboard from '../pages/Dashboard';
import TodoList from '../pages/TodoList';
import Contacts from '../pages/Contacts';
import Settings from '../pages/Settings';

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
        path: "/notes",
        name: "Note",
        icon: <NoteAltIcon />
    },
    {
        id: "6",
        path: "/chat",
        name: "Chat",
        icon: <MarkChatUnreadIcon />
    },
    {
        id: "7",
        path: "/contacts",
        name: "Contacts",
        icon: <PermContactCalendarRoundedIcon />,
        component: <Contacts />
    },

];