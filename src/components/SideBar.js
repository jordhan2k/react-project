import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { color } from '../utils/constants';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import img from '../assets/images/avatar.jpg';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const Container = styled.div`
    background-color: ${color.primaryGreen};
    padding: 20px 15px;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    border-radius: 50%;
    width: 35px;
    height: 35px;

`;

const Top = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
 
`;

const Bottom = styled.div`
 display: flex;
    flex-direction: column;
    align-items: center;
`;

const IconContainer = styled.div`
    margin: 10px 0;
    font-size: 25px;

    & > svg {
        fill: ${props => props.active ? "white" : "#C3DFC2"};
    }
`;

const sideBarData = [

    {
        id: "1",
        path: "/",
        name: "Dashboard",
        icon: <DashboardRoundedIcon />
    },
    {
        id: "2",
        path: "/todo-list",
        name: "TodoList",
        icon: <FactCheckRoundedIcon />
    },
    {
        id: "3",
        path: "/contacts",
        name: "Contacts",
        icon: <PermContactCalendarRoundedIcon />
    },
    {
        id: "4",
        path: "/settings",
        name: "Settings",
        icon: <SettingsApplicationsRoundedIcon />
    },


]


const SideBar = () => {

    const location = useLocation();
    const [activePath, setActivePath] = useState("/");

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname])


    return (
        <Container>
            <Top>

                {sideBarData.map(item => (
                    <Link key={item.id} to={item.path} title={item.name}>
                        <IconContainer active={activePath === item.path}>
                            {item.icon}
                        </IconContainer>
                    </Link>

                ))}
            </Top>

            <Bottom>
                <Link to="/profile">
                    <IconContainer>
                        <Image src={img} />
                    </IconContainer>
                </Link>
                <Link to="/">
                    <IconContainer active={true}>
                        <PersonAddAltRoundedIcon />
                    </IconContainer>
                </Link>
            </Bottom>

            <Outlet />

        </Container>
    )
}

export default SideBar
