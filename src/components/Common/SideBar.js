import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { color } from '../../utils/constants';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import img from '../../assets/images/avatar.jpg';
import { Link, useLocation } from 'react-router-dom';
import routeData from '../../utils/routeData';
import { useDispatch, useSelector } from 'react-redux';
import { LoginRounded, LogoutRounded } from '@mui/icons-material';
import { logout, logoutRequest } from '../../store/actions/authActions';

const Container = styled.div`
    background-color: ${color.primaryGreen};
    padding: 20px 15px;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
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
    cursor: pointer;
`;

const SideBar = () => {

    const location = useLocation();
    const [activePath, setActivePath] = useState("/");
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    const handleLogout = () => {
        dispatch(logoutRequest());
    }


    return (
        <Container>
            <Top>
                {routeData.map(item => (item.path !== "/profile/:username" && item.onSidebar) && (

                    <Link key={item.id} to={isAuthenticated && item.path} title={item.name}>
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

                {isAuthenticated ? <IconContainer active={true} onClick={handleLogout}>
                    <LogoutRounded />
                </IconContainer> : <IconContainer active={true}>
                    <LoginRounded />
                </IconContainer>
                }
            </Bottom>
        </Container>
    )
}

export default SideBar
