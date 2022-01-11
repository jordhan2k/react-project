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
import Auth from '../pages/Auth';

const routeData = [
    {
        id: "1",
        path: "/dashboard",
        name: "Dashboard",
        icon: <DashboardRoundedIcon />,
        component: <Dashboard />,
        onSidebar: true,
        isProtected: true
    },
    {
        id: "2",
        path: "/todo-list",
        name: "TodoList",
        icon: <FactCheckRoundedIcon />,
        component: <TodoList />,
        onSidebar: true,
        isProtected: true
        
    },
    {
        id: "3",
        path: "/ui",
        name: "UI",
        icon: <ColorLensIcon />,
        component: <MaterialUI />,
        onSidebar: true,
        isProtected: true
    },
    {
        id: "4",
        path: "/music-player",
        name: "Music Player",
        icon: <LibraryMusicRounded />,
        component: <MusicPlayer />,
        onSidebar: true,
        isProtected: true
    },
    {
        id: "5",
        path: "/chat",
        name: "Chat",
        icon: <MarkChatUnreadIcon />,
        onSidebar: true,
        isProtected: true
    },
    {
        id: "6",
        path: "/profile",
        name: "Profile",
        icon: <PermContactCalendarRoundedIcon />,
        component: <Profile />,
        onSidebar: true,
        isProtected: true
    },
    {
        id: "7",
        path: "/auth/login",
        name: "Login",
        component: <Auth authRoute="login" />,
        onSidebar: false,
        isAuth: true,
        isProtected: false
    },
    {
        id: "8",
        path: "/auth/register",
        name: "Register",
        component: <Auth authRoute="register" />,
        onSidebar: false,
        isAuth: true,
        isProtected: false
    },


];

export default routeData;